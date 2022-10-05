import React from "react";

import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import logo from "../../images/Chit-Chat (1).png";
import './style.scss'
import Signup from "../../components/Signup/Signup";
import Login from "../../components/Login/Login";
const HomePage = () => {
  return (
    <Container centerContent maxW="xl">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderWidth="1px"
        borderRadius="lg"
        bg="#fff"
        w="100%"
        p={3}
        m={6}
        color="#111e54"
      >
        <Text fontSize="4xl" className="heading">
          {" "}
          Chit-Chat{" "}
        </Text>
      </Box>
      <Box borderWidth="1px" w="100%" p={3} borderRadius="lg" bg="#fff">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>
              Sign Up
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
            
                <Login />
              
            </TabPanel>
            <TabPanel>
              <Signup/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
