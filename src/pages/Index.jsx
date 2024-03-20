import React, { useState } from "react";
import { Box, Heading, Text, Input, Button, Flex, IconButton, HStack, Avatar, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight, FaChevronDown } from "react-icons/fa";

const Index = () => {
  const [selectedProject, setSelectedProject] = useState("");
  const projectTypes = ["Web App", "Mobile App", "Desktop App", "API", "Library"];

  return (
    <Box bg="navy.900" minH="100vh" color="gray.200" py={8}>
      <Flex justify="flex-end" px={8} mb={8}>
        <Menu>
          <MenuList bg="navy.800">
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Box textAlign="center">
        <Heading size="2xl" mb={8}>
          Create a New Project
        </Heading>
        <Flex align="center" justify="center" mb={8}>
          <IconButton icon={<FaChevronLeft />} bg="transparent" _hover={{ bg: "red.500" }} mr={4} />
          <Input value={selectedProject} onChange={(e) => setSelectedProject(e.target.value)} placeholder="Select project type" w="sm" bg="navy.800" borderColor="navy.700" />
          <IconButton icon={<FaChevronRight />} bg="transparent" _hover={{ bg: "red.500" }} ml={4} />
        </Flex>
        <HStack spacing={8} justify="center" mb={12}>
          {projectTypes.map((type) => (
            <Text key={type} cursor="pointer" _hover={{ color: "red.500" }} onClick={() => setSelectedProject(type)}>
              {type}
            </Text>
          ))}
        </HStack>
        <Button size="lg" colorScheme="red" rightIcon={<FaChevronRight />} isDisabled={!selectedProject}>
          Create Project
        </Button>
      </Box>
    </Box>
  );
};

export default Index;
