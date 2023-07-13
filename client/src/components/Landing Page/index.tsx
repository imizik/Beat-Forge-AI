import { VStack } from '@chakra-ui/react';
import { Navbar } from '../Navbar';
import LandingDesc from './LandingDesc';
import MainSection from './MainSection';
// import CTASection from './CTASection';
// import Footer from './Footer';

export const LandingPage = () => {
  return (
    <VStack align="start" bg="primary.main" spacing={0} width="100%">
      <Navbar bgProp="primary.main"/>
      <LandingDesc />
      <MainSection />
      {/* <CTASection />
      <Footer /> */}
    </VStack>
  );
};
