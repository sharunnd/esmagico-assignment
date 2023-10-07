import { Box, Flex, Image, Text } from "@chakra-ui/react";
import carousel1 from "../images/carousel/videocarousel1.png";
import carousel2 from "../images/carousel/videocarousel2.png";
import vector from "../images/carousel/Vector.png"
import dots from "../images/carousel/dots.png"
const VideoCarousel = () => {
  return (
    <Box
      mt="85px"
      height="429px"
      
      bg="linear-gradient(180deg, #6CA4EB 0%, #5E97E1 46.35%, #4D89D6 100%);
    "
    >
      <Flex position="relative">
        <Box ml="277px" mt="129px" color="rgba(255, 255, 255, 1)">
          <Box
            width="318px"
            height="93px"
            
            textAlign={"left"}
            lineHeight={"40px"}
          >
            <Text fontWeight={600} fontSize="42px">
              Real People Real Learnning
            </Text>
          </Box>
          <Box
            width="442px"
            height="56px"
           
            textAlign={"left"}
            lineHeight={"28px"}
          >
            <Text fontWeight={400} fontSize="18px">
              SpeakIn is Asia's largest on-demand network providing access to
              top regional speakers.
            </Text>
          </Box>
        </Box>
        <Box >
          <Box position="absolute" top="55px" left="798px">
            <Box>
              <Image src={carousel1} alt="carousel1" />
            </Box>
          </Box>
          <Box position="absolute" top="44px" left="787px">
            <Box>
              <Image src={carousel1} alt="carousel1" />
            </Box>
          </Box>
          <Box position="absolute" top="34px" left="777px">
            <Box>
              <Image src={carousel2} alt="carousel1" />
            </Box>
          </Box>
          <Box position="absolute" top="130px" left="1014px">
            <Box>
              <Image src={vector} alt="vector" width="68px" height="84px" />
            </Box>
          </Box>
          <Box position="absolute" top="380px" left="989px">
            <Box>
              <Image src={dots} alt="dots" width="64px" height="10px" />
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default VideoCarousel;
