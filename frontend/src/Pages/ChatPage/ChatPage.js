import React, { useEffect, useState } from "react";
import axios from "axios";

import { ChatState } from "../../context/ChatProvider";
import SideDrawer from "../../components/SideDrawer";
import { Box } from "@chakra-ui/react";
const ChatPage = () => {
  console.log(ChatState());
  const { user } = ChatState();
  console.log(user);
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box d="flex" justifyContent={"center"} w="100%" h="91vh" p="10px">
        {user && <MyChats />}
        {user && <ChatBox />}
      </Box>
      <Box></Box>
    </div>
  );
};

export default ChatPage;
