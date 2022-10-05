import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [pic, setPic] = useState();
  const [show, setShow] = useState(false);
  const [showP, setShowP] = useState(false);

  const postDetails = (pics) => {};

  const submitHandler = () => {};
  return (
    <VStack spacing="5px">
      <FormControl isRequired id="first-name">
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          placeholder="Enter Your name "
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl isRequired id="email">
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          placeholder="Enter Your email "
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl isRequired id="password">
        <FormLabel>Password</FormLabel>

        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter your password "
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size={"sm"}
              onClick={() => {
                setShow(!show);
              }}
            >
              {show ? "Hide" : "Show "}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl isRequired id="confirm-password">
        <FormLabel>Confirm Password</FormLabel>

        <InputGroup>
          <Input
            type={showP ? "text" : "password"}
            placeholder="Confirm the password "
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size={"sm"}
              onClick={() => {
                setShowP(!showP);
              }}
            >
              {showP ? "Hide" : "Show "}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl isRequired id="pic">
        <FormLabel>Upload your Picture </FormLabel>
        <Input
          type="file"
          p={1}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>
      <Button
        onClick={submitHandler}
        colorScheme="blue"
        width={"100%"}
        style={{ marginTop: 15 }}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
