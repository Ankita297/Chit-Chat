import React from "react";

const MyChats = () => {
  const [loggedUser, setLoggedInUser] = useState();
  const { user, setSelectedChat, chats, selectedChat, setChats } = ChatState();

  const toast = useToast();

  return <div>MyChats</div>;
};

export default MyChats;
