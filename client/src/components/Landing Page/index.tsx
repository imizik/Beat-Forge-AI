import { VStack } from '@chakra-ui/react';
import { Navbar } from '../Navbar';
import LandingDesc from './LandingDesc';
import MainSection from './MainSection';
import { Footer } from '../Footer';
// import CTASection from './CTASection';

export const LandingPage = () => {
  return (
    <VStack align="start" bg="primary.main" spacing={0} width="100%">
      <Navbar bgProp="primary.main"/>
      <LandingDesc />
      <MainSection />
      {/* <CTASection /> */}
      <Footer />
    </VStack>
  );
};
