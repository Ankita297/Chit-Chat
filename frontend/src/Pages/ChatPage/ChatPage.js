import React, { useEffect, useState } from "react";
import axios from "axios";

import { ChatState } from "../../context/ChatProvider";
import SideDrawer from "../../components/SideDrawer";
import { Box } from "@chakra-ui/react";
import MyChats from "../MyChats/MyChats";
import ChatBox from "../ChatBox/ChatBox";
const ChatPage = () => {
  console.log(ChatState());
  const { user } = ChatState();
  console.log(user);
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        width="100%"
        height="91.5vh"
        padding="10px"
      >
        {user && <MyChats />}

        {user && <ChatBox />}
      </Box>
    </div>
  );
};

export default ChatPage;
