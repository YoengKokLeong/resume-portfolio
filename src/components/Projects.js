import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Card,
  CardBody,
  Image,
  Heading,
  Badge,
  Link,
  List,
  ListItem,
  Flex,
} from "@chakra-ui/react";
import { Fade } from "react-reveal";
import ProjectsArray from "./ProjectsArray";
import EducationArray from "./EducationArray";

export default function Projects({ color }) {
    const projects = ProjectsArray();
    const education = EducationArray();
    
  return (
    <>
      <Container maxW={"3xl"} id="education">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" p={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                03
              </Text>
              <Text fontWeight={800}>Education</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack px={4} spacing={4}>
            {education.map((item) => (
              <Fade bottom>
                <Card key={item.school}>
                  <CardBody align="left">
                    <Flex justifyContent="space-between" gap={4}>
                      <HStack align="start" spacing={5}>
                        <Image
                          src={item.image}
                          alt={`${item.school} logo`}
                          boxSize={{ base: "56px", md: "72px" }}
                          objectFit="contain"
                          flexShrink={0}
                        />
                        <Box>
                          <Heading size="md">{item.school}</Heading>
                          <List mt={3} spacing={2}>
                            {item.details.map((detail) => (
                              <ListItem key={detail}>{detail}</ListItem>
                            ))}
                          </List>
                        </Box>
                      </HStack>
                      <Text fontWeight={300} whiteSpace="nowrap">
                        {item.duration}
                      </Text>
                    </Flex>
                  </CardBody>
                </Card>
              </Fade>
            ))}
          </Stack>
          <Stack align="center" direction="row" p={4} id="projects" w="100%">
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                04
              </Text>
              <Text fontWeight={800}>Projects</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack px={4} spacing={4}>
            {projects.map((project) => (
              <Fade bottom key={project.name}>
                <Card
                  direction={{ base: "column", md: "row" }}
                  overflow="hidden"
                >
                  <Box
                    w={{ base: "100%", md: "240px" }}
                    minH={{ base: "200px", md: "220px" }}
                    p={3}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                  >
                    <Image
                      src={project.image}
                      alt={`${project.name} project`}
                      objectFit="contain"
                      maxW="100%"
                      maxH="220px"
                    />
                  </Box>
                  <CardBody align="left">
                    <Heading size="sm">{project.name}</Heading>

                    <Text fontSize="sm" py={2}>
                      {project.description}
                    </Text>

                    <HStack spacing={2}>
                      {project.buttons.map((button) => (
                        <Link
                          key={button.text}
                          href={button.href}
                          color={`${color}.400`}
                        >
                          {button.text}
                        </Link>
                      ))}
                    </HStack>
                    <HStack flexWrap="wrap" pt={4} spacing={2}>
                      {project.badges.map((badge) => (
                        <Badge
                          my={2}
                          key={badge.text}
                          colorScheme={badge.colorScheme}
                        >
                          {badge.text}
                        </Badge>
                      ))}
                    </HStack>
                  </CardBody>
                </Card>
              </Fade>
            ))}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
