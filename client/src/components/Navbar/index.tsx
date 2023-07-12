import { Flex, Box, Spacer, Icon, HStack, Text, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { TbSquareRotated } from 'react-icons/tb';
import { SiDiscogs } from 'react-icons/si';
import { useState, useEffect } from 'react';

export const Navbar = () => {
  const breakpoint = useBreakpointValue({ base: '56px', md: '64px' });
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const bgColor = useColorModeValue('white', 'primary.main');
  const textColor = useColorModeValue('black', 'text.primary');

  return (
    <Flex
      as="nav"
      bg={scrollPosition > 50 ? bgColor : 'primary.main'}
      color={scrollPosition > 50 ? textColor : 'text.primary'}
      position="sticky"
      top={0}
      w="100%"
      h={breakpoint}  // Set a fixed height
      zIndex={1000}
      align="center"   // Ensure vertical alignment
      justify="space-between"   // This ensures equal spacing around items
      px={8}  // Set the padding around items
      transition='0.8s'
    >
      <Box>
        <Link to="/" className="logo">
          <Icon as={SiDiscogs} boxSize={6} />
          <Text as="span" fontSize="xl" fontWeight="bold" ml={2}>
            Beat Forge.AI
          </Text>
        </Link>
      </Box>
      <Box as={Link} to="/user">
        <HStack>
          <Text fontSize="lg">Menu</Text>
          <Icon as={TbSquareRotated} boxSize={6} />
        </HStack>
      </Box>
    </Flex>
  );
};
