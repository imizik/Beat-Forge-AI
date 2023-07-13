import { Box, Heading, Text, VStack, Image } from '@chakra-ui/react';

interface SectionData {
  imageSrc: string;
  heading: string;
  description: string;
}

interface MainSectionBoxProps {
  section: SectionData;
  isImageOnLeft: boolean;
}

const MainSectionBox: React.FC<MainSectionBoxProps> = ({ section, isImageOnLeft }) => {
  const { imageSrc, heading, description } = section;

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      flexDirection={isImageOnLeft ? "row" : "row-reverse"}
    >
      <Image src={imageSrc} alt="Box Image" height="100%" />
      <Box textAlign="left" p={4} width="50%">
        <Heading>{heading}</Heading>
        <Text mt={4}>{description}</Text>
      </Box>
    </Box>
  );
};

const MainSection: React.FC = () => {
  const sections: SectionData[] = [
    {
      imageSrc: "placeholder-image1.jpg",
      heading: "Automate Beat Creation",
      description: "Save valuable time by automating the beat composition process with Beat Forge. Our advanced AI algorithms work seamlessly in the background, generating personalized beat templates tailored to your preferences. Free yourself from repetitive tasks and dive into the endless realm of music creation.",
    },
    {
      imageSrc: "placeholder-image3.jpg",
      heading: "Effortless Music Arrangement",
      description: "Refine your compositions with ease using Beat Forge's intuitive music arrangement tools. Our platform offers smart suggestions to enhance your beats, ensuring every element of your music harmonizes flawlessly. With a simple click, you can effortlessly incorporate professional-grade arrangements into your tracks.",
    },
    {
      imageSrc: "placeholder-image4.jpg",
      heading: "Collaborate with AI",
      description: "Take advantage of Beat Forge's collaborative features, where humans and AI work in perfect harmony. Our platform provides intelligent recommendations and guidance, assisting you in perfecting your beats and exploring new musical territories. Collaborate with our AI-powered virtual band and witness the magic unfold.",
    },
    {
      imageSrc: "placeholder-image5.jpg",
      heading: "Unleash Your Unique Sound",
      description: "With Beat Forge, you have complete control over your sound. Customize every aspect of your beats, from tempo and key to instrumentation and effects. Shape your music according to your artistic vision and create a signature sound that resonates with your audience.",
    },

  ];
  

  return (
    <VStack align="center" spacing={16} py={16} bg="white" width="100%">
      <Box textAlign="center" maxWidth="900px">
        <Heading fontSize="6xl">Elevate Your Creativity</Heading>
        <Text mt={4}>
          Say goodbye to creative blocks and unleash your musical genius with Beat Forge. Our web-based music generation platform empowers you to effortlessly compose unique beats, allowing you to focus on what matters most - your artistic vision.
        </Text>
      </Box>

      <VStack align="center" spacing={8} width="100%" maxWidth="1000px">
        {sections.map((section, index) => (
          <MainSectionBox
            key={index}
            section={section}
            isImageOnLeft={index % 2 === 0}
          />
        ))}
      </VStack>
    </VStack>
  );
};

export default MainSection;
