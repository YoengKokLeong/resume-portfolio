import {
    Divider,
    Stack,
    Text,
    Container,
    Box,
    HStack,
    Link
  } from "@chakra-ui/react";

  export default function Credit({ color }) {
    return (
      <>
        <Container maxW={"3xl"} id="contact">
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            pb={{ base: 20, md: 36 }}
          >
            <Stack align="center" direction="row" p={4}>
              <HStack mx={4}>
                <Text color={`${color}.400`} fontWeight={800}>
                  05
                </Text>
                <Text fontWeight={800}>Credit</Text>
              </HStack>
              <Divider orientation="horizontal" />
            </Stack>
            <Stack spacing={1} as={Container} maxW={"3xl"} textAlign={"center"}>
              <Text color={"gray.400"} fontSize={"xs"} px={4}>Web design template by</Text>
                <Link href="https://github.com/eldoraboo/portable-portfolio" isExternal color="gray.400" fontSize="xs" px={4}>
                    Eldora Boo
                </Link>
            </Stack>
          </Stack>
        </Container>
      </>
    );
  }