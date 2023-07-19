import {
  ButtonGroup,
  Center,
  IconButton,
  Icon,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiDiscogs } from 'react-icons/si';

export const Footer = () => (
  <Center
    as="footer"
    role="contentinfo"
    py={{ base: '12', md: '16' }}
    color="white"
    width="100%"
  >
    <Stack spacing={{ base: '4', md: '5' }} width="80%">
      <Stack justify="space-between" direction="row" align="center">
        <Icon as={SiDiscogs} boxSize={10} />

        <ButtonGroup variant="tertiary">
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            fontSize="2rem"
          />
          <IconButton
            as="a"
            href="#"
            aria-label="GitHub"
            icon={<FaGithub />}
            fontSize="2rem"
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter />}
            fontSize="2rem"
          />
        </ButtonGroup>
      </Stack>
      <Text fontSize="md" color="fg.subtle">
        &copy; {new Date().getFullYear()} Beat Forge Inc. All rights reserved.
      </Text>
    </Stack>
  </Center>
);
