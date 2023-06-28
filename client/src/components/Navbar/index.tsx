import { Flex, Box, Spacer, IconButton } from '@chakra-ui/react';
import { useState, useEffect,  } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

type NavbarProps = {
  topCtnRef: React.RefObject<HTMLDivElement>;
};

export const Navbar = ({ topCtnRef }: NavbarProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let colorChangePoint = 0;
  // if (topCtnRef.current) {
  //   const topCtnHeight = topCtnRef.current.offsetHeight;
  //   const topCtnOffsetTop = topCtnRef.current.offsetTop;
  //   colorChangePoint = topCtnOffsetTop + topCtnHeight;
  // }

  return (
    <Flex
      as="nav"
      className="navbar"
      bg={scrollPosition > colorChangePoint ? 'white' : 'primary.main'} 
      color={scrollPosition > colorChangePoint ? 'black' : 'text.primary'} 
      transition="background-color 0.5s, color 0.5s"
      position="fixed"
      w="100%"
      zIndex="1000"
    >
      <Box p="2">
        <Link to="/">
          <Box as="span" fontSize="xl" fontWeight="bold">
            Beat Forge.AI
          </Box>
        </Link>
      </Box>
      <Spacer />
      <Box>
        <IconButton
          as={Link}
          to="/user"
          aria-label="User settings"
          icon={<FaUserCircle />}
          size="lg"
        />
      </Box>
    </Flex>
  );
};
