import React, { useState, ChangeEvent } from 'react';

import { useRouter } from 'next/router';

import {
  Grid,
  Flex,
  Heading,
  Text,
  Stack,
  Link,
  Button,
} from '@chakra-ui/core';
import { FaGithub, FaEnvelope, FaLock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Divider from '../components/Divider';
import Input from '../components/Input';

const Home: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }
  const handleSignUp = (e: React.FormEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    router.push('/signup');
  };

  const easing = [0.6, 0.01, -0.05, 1];

  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        transition: { duration: 0.4, ease: easing },
      }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <Grid
        as="main"
        height="100vh"
        templateColumns="1fr 480px 480px 1fr"
        templateRows="1fr 480px 1fr"
        templateAreas="
        '. . . .'
        '. logo form .'
        '. . . .'
        "
        justifyContent="center"
        alignItems="center"
      >
        <Flex gridArea="logo" flexDir="column" alignItems="flex-start">
          <img src="/rocketseat.svg" alt="Rocketseat" />

          <Heading size="2xl" lineHeight="shorter" marginTop={16}>
            Faça seu login na plataforma.
          </Heading>
        </Flex>

        <Flex
          gridArea="form"
          height="100%"
          backgroundColor="gray.700"
          borderRadius="md"
          flexDir="column"
          alignItems="stretch"
          padding={16}
        >
          <form action="submit">
            <Stack spacing={2}>
              <Input
                placeholder="E-mail"
                name="email"
                icon={FaEnvelope}
                onChange={handleInputChange}
              />

              <Input
                placeholder="Senha"
                name="password"
                isPassword
                icon={FaLock}
                onChange={handleInputChange}
              />
            </Stack>
          </form>

          <Link
            alignSelf="flex-start"
            marginTop={2}
            fontSize="sm"
            color="purple.600"
            fontWeight="bold"
            _hover={{ color: 'purple.500' }}
          >
            Esqueci minha senha
          </Link>

          <Button
            backgroundColor="purple.500"
            height="50px"
            borderRadius="sm"
            marginTop={6}
            isDisabled={formData.email === '' || formData.password === ''}
            _hover={
              formData.email !== '' && formData.password !== ''
                ? { backgroundColor: 'purple.600' }
                : {}
            }
          >
            ENTRAR
          </Button>

          <Text textAlign="center" fontSize="sm" color="gray.300" marginTop={6}>
            Não tem uma Conta?{' '}
            <Link
              onClick={handleSignUp}
              color="purple.600"
              fontWeight="bold"
              _hover={{ color: 'purple.500' }}
            >
              Registre-se
            </Link>
          </Text>

          <Divider />

          <Flex alignItems="center">
            <Text fontSize="sm">Ou entre com</Text>
            <Button
              leftIcon={FaGithub}
              height="50px"
              flex="1"
              iconSpacing={4}
              backgroundColor="gray.600"
              marginLeft={6}
              borderRadius="sm"
              _hover={{ backgroundColor: 'purple.500' }}
            >
              GITHUB
            </Button>
          </Flex>
        </Flex>
      </Grid>
    </motion.div>
  );
};

export default Home;
