import React, { useState } from 'react';
import { Box, Heading, Input, Button, Text, useToast } from '@chakra-ui/react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const toast = useToast();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (email && phone && password) {
      // Perform form submission logic here
      console.log('Form submitted!');
      // Reset form fields
      setEmail('');
      setPhone('');
      setPassword('');
      setIsFormSubmitted(false);
      // Show success toast
      toast({
        title: 'Form Submitted',
        description: 'You have successfully logged in.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } else {
      setIsFormSubmitted(true);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f6f7f8', height: '100%', width: '100%' }}>
      <Box p={4} >
        <Heading>Login</Heading>
        <form onSubmit={handleFormSubmit}>
          <Box mt={4}>
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              isRequired
            />
          </Box>
          <Box mt={4}>
            <Input
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/, ''))}
              type="tel"
              isRequired
            />
          </Box>
          <Box mt={4}>
            <Input
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              isRequired
            />
          </Box>
          {isFormSubmitted && !(email && phone && password) && <Text color="red.500">All fields are required.</Text>}
          <Box mt={4}>
            <Button colorScheme="blue" type="submit">Login</Button>
          </Box>
        </form>
      </Box>
    </div>
  );
}

export default LoginForm;
