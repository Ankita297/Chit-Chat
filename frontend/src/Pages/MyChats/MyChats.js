import { Box, Button, Stack, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChatState } from "../../context/ChatProvider";
import { AddIcon } from "@chakra-ui/icons";
import ChatLoader from "../../components/ChatLoader";
import { getSender } from "../../config/ChatLogic";

const MyChats = () => {
  const [loggedUser, setLoggedInUser] = useState();

  const { user, setSelectedChat, chats, selectChat, setChats } = ChatState();

  const toast = useToast();

  const fetchChats = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get(
        `/api/chat`,

        config
      );
        console.log(data);
      setChats(data);
    } catch (error) {
      toast({
        title: "Error Occured !",
        status: "error",
        description: "Failed to Load the Chats",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });

      return;
    }
  };

  useEffect(() => {
    setLoggedInUser(JSON.parse(localStorage.getItem("userInfo")));
    fetchChats();
  }, []);

  return (
    <Box
      display={{ base: selectChat ? "none" : "flex", md: "flex" }}
      flexDir={"column"}
      p={3}
      bg="white"
      width={{ base: "100%", md: "31%" }}
      borderRadius="md"
      borderWidth="1px"
      alignItems="center"
    >
      <Box
        pb={3}
        px={3}
        fontSize={{ base: "28px", md: "30px" }}
        fontFamily="Work sans"
        display="flex"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        My Chats
        <Button
          d="flex"
          fontSize={{ base: "17px", md: "10px", lg: "17px" }}
          rightIcon={<AddIcon />}
        >
          New Group Chat
        </Button>
      </Box>
      <Box
        display="flex"
        padding={"3"}
        bg="#f8f8f8"
        width={"100%"}
        height="100%"
        borderRadius={"md"}
        overflow="hidden"
        flexDirection={"column"}
      >
        {chats ? (
          <Stack overflowY="scroll">
            {chats.map((chat) => {
              return (
                <Box
                  onClick={() => {
                    setSelectedChat(chat);
                  }}
                  cursor="pointer"
                  backgroundColor={selectChat == chat ? "#38B2AC" : "#E8E8E8"}
                  color={selectChat == chat ? "white" : "black"}
                  px={3}
                  py={2}
                  borderRadius="lg"
                  key={chat._id}
                >
                  <Text>
                    {!chat.isGroupChat
                      ? getSender(loggedUser, chat.users)
                      : chat.chatName}
                  </Text>
                </Box>
              );
            })}
          </Stack>
        ) : (
          <ChatLoader />
        )}
      </Box>
    </Box>
  );
};

export default MyChats;
