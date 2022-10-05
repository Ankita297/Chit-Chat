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

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [show, setShow] = useState(false);

  const submitHandler = () => {};
  return (
    <VStack spacing="5px">
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
      <Button
        onClick={submitHandler}
        colorScheme="blue"
        width={"100%"}
        style={{ marginTop: 15 }}
      >
        Login
      </Button>
      <Button
        onClick={submitHandler}
        colorScheme="red"
        width={"100%"}
        style={{ marginTop: 15 }}
      >
        Get Guest User credentials
      </Button>
    </VStack>
  );
};

export default Login;
