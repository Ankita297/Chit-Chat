import { Skeleton, Stack } from "@chakra-ui/react";
import React from "react";

const ChatLoader = () => {
  return (
    <Stack>
      <Skeleton height={"45px"}></Skeleton>
      <Skeleton height={"45px"}></Skeleton>
      <Skeleton height={"45px"}></Skeleton>
      <Skeleton height={"45px"}></Skeleton>
      <Skeleton height={"45px"}></Skeleton>
      <Skeleton height={"45px"}></Skeleton>
      <Skeleton height={"45px"}></Skeleton>
      <Skeleton height={"45px"}></Skeleton>
      <Skeleton height={"45px"}></Skeleton>{" "}
      <Skeleton height={"45px"}></Skeleton>{" "}
      <Skeleton height={"45px"}></Skeleton>
    </Stack>
  );
};

export default ChatLoader;
