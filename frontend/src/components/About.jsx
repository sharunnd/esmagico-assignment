import { Box, Flex, Image, Text } from "@chakra-ui/react";
import aboutbg from "../images/about/aboutbg.png";
import yellow from "../images/about/yellow.png";
import mikebg from "../images/about/mikbg.png";
import mike from "../images/about/mike.png";

const About = () => {
  return (
    <Flex position={"relative"} mt="66px">
      <Box >
        <Box position="absolute" top={0}>
          <Image src={aboutbg} width="100%" alt="img" />
        </Box>
        <Box position="absolute" top="35px">
          <Image src={yellow} width="100%" alt="yellowbg" />
        </Box>
        <Box position="absolute" top="60px" bg="rgba(255, 222, 0, 1)">
          <Image src={mikebg} width="100%" alt="mikebg" />
        </Box>
        <Box position="absolute" top="85px" left="137px">
          <Image src={mike} width="100%" height="100%" alt="mike" />
        </Box>
        <Box position="absolute" textAlign={"left"} top="100px" left="623px">
          <Box lineHeight="47px" width="238px" height="47px">
          <Text fontWeight={600} fontSize="32px">About SpeakIn</Text>
          </Box>
          <Box lineHeight="28px" width="635px" height="135px" mt={5}>
          <Text ontWeight={400} fontSize="18px">SpeakIn is Asia's largest on-demand network providing access to top regional speakers, thought leaders and their content. Enabling organizations to build performance agility and win over disruption, at SpeakIn only the best come together to inform, inspire and motivate.</Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default About;
