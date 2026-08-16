import { useEffect, useState } from "react";

const parseEducation = (mdContent) => {
  const education = [];
  const lines = mdContent.split("\n");

  for (let i = 0; i < lines.length; i++) {
    if (!lines[i].startsWith("## ")) continue;

    const school = lines[i].slice(3).trim();
    const details = [];
    let image = "";
    let duration = "";

    while (lines[i + 1]?.startsWith("- ")) {
      const detail = lines[++i].slice(2).trim();
      const imageMatch = detail.match(/^!\[.*\]\((.*)\)$/);

      if (imageMatch) {
        image = imageMatch[1];
      } else if (detail.startsWith("Duration:")) {
        duration = detail.slice("Duration:".length).trim();
      } else {
        details.push(detail);
      }
    }

    education.push({ school, image, duration, details });
  }

  return education;
};

export default function EducationArray() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    fetch("/content/Education.md")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch education content");
        return response.text();
      })
      .then((mdContent) => setEducation(parseEducation(mdContent)))
      .catch((error) => console.error("Error fetching education content:", error));
  }, []);

  return education;
}
