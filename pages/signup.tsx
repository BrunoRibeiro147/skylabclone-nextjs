import React, { useState, ChangeEvent } from 'react';

import { useRouter } from 'next/router';
import { Grid, Flex, Heading, Text, Link, Icon, Stack, Button } from '@chakra-ui/core';

import { FaLock, FaEnvelope, FaUser } from 'react-icons/fa';

import { motion } from 'framer-motion';
import Input from '../components/Input';

const SignUp: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSignIn = (e: React.FormEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    router.back();
  };

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  const easing = [0.6, 0.01, -0.05, 1];

  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
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
        templateColumns="1fr 480px 530px 1fr"
        templateRows="1fr 550px 1fr"
        templateAreas="
        '. . . .'
        '. form logo .'
        '. . . . '
        "
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          gridArea="form"
          height="100%"
          backgroundColor="gray.700"
          borderRadius="md"
          flexDir="column"
          alignItems="stretch"
          padding={16}
        >
          <Heading size="lg" marginBottom={10}>
            Crie sua conta
          </Heading>

          <form action="submit">
            <Stack spacing={2}>
              <Input
                name="email"
                onChange={handleInputChange}
                placeholder="E-mail"
                icon={FaEnvelope}
              />

              <Input
                name="name"
                onChange={handleInputChange}
                placeholder="Seu Nome"
                icon={FaUser}
              />

              <Input
                name="password"
                onChange={handleInputChange}
                placeholder="Sua senha"
                isPassword
                icon={FaLock}
              />

              <Input
                name="confirmPassword"
                onChange={handleInputChange}
                placeholder="Confirme sua senha"
                isPassword
                icon={FaLock}
              />
            </Stack>
          </form>

          <Text
            marginTop={6}
            textAlign="center"
            fontSize="sm"
            lineHeight="shorter"
          >
            Ao se registrar, você aceita nossos{' '}
            <Link
              color="purple.600"
              fontWeight="bold"
              _hover={{ color: 'purple.500' }}
            >
              termos de uso
            </Link>{' '}
            e a nossa{' '}
            <Link
              color="purple.600"
              fontWeight="bold"
              _hover={{ color: 'purple.500' }}
            >
              política de privacidade
            </Link>
            .
          </Text>

          <Button
            backgroundColor="purple.500"
            height="50px"
            borderRadius="sm"
            marginTop={4}
            _hover={{ backgroundColor: 'purple.600' }}
          >
            CADASTRAR
          </Button>
        </Flex>

        <Flex
          gridArea="logo"
          flexDir="column"
          alignItems="flex-start"
          padding={24}
        >
          <img src="/rocketseat.svg" alt="Rocketseat" />

          <Heading size="xl" lineHeight="shorter" marginTop={16}>
            Junte-se a milhares de devs e acelere na direção dos seus objetivos
          </Heading>

          <Text marginTop={10} color="gray.400">
            Mais de 200 mil boosters já estão conectados.
          </Text>

          <Link
            onClick={handleSignIn}
            alignSelf="flex-start"
            justifyContent="center"
            marginTop={10}
            fontSize="sm"
            color="purple.600"
            fontWeight="bold"
            _hover={{ color: 'purple.500' }}
          >
            <Icon name="arrow-back" size="21px" marginRight={4} />
            Voltar para Login
          </Link>
        </Flex>
      </Grid>
    </motion.div>
  );
};

export default SignUp;
