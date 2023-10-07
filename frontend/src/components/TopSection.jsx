import { Box, Image, Text, useMediaQuery } from "@chakra-ui/react";
import wallpaper from "../images/Wallpaper.jpg";
import ScheduleSection from "./ScheduleSection";
import rect1 from "../images/Rectangle_11.png";
import rect2 from "../images/Rectangle_2.png";
import rect3 from "../images/Rectangle_3.png";
import RegistrationForm from "./RegistrationForm";
import shakehand_bg from "../images/shakehand_bg.png";
import shakehand from "../images/handshakeimg.png";

const TopSection = () => {
  const [isSmallerThan768] = useMediaQuery("(max-width: 768px)");
  return (
    <Box position="relative">
      <Image src={wallpaper} alt="wallpaper" />
      <ScheduleSection />
      <Box position="absolute" top={{ base: "190px", sm: "300px", md: "400px" ,lg:"600px"}}>
        <Box>
          <Image src={rect1} alt="rect1" />
        </Box>
      </Box>
      <Box position="absolute" top={{ base: "190px", sm: "280px", md: "360px" ,lg:"643px"}}>
        <Box>
          <Image src={rect3} alt="rect3" />
        </Box>
      </Box>
      <Box position="absolute" top={{ base: "190px", sm: "300px", md: "400px" ,lg:"615px"}}>
        <Box>
          <Image src={rect2} alt="rect2" />
        </Box>
      </Box>
      {!isSmallerThan768 && <RegistrationForm /> }
      {/* <Box position="absolute" top="1029px" left="950px">
        <Image src={shakehand_bg}  width="814px" height="804px"/>
      </Box>
      <Box position="absolute" top="1295px" left="1054px">
        <Image src={shakehand}  width="319px" height="370px"/>
      </Box>
      <Box position={"absolute"} top="1143px" left="783px" textAlign={"left"} lineHeight="68px">
        <Text fontSize={46} fontWeight={600} color="rgba(0, 0, 0, 1)">
        {"Grow with India’s "}</Text>
        <Text fontSize={46} fontWeight={600} color="rgba(0, 0, 0, 1)">
        Largest Network of
        </Text>
        <Text fontSize={46} fontWeight={600} color="rgba(0, 0, 0, 1)">
        Experts
        </Text>
      </Box> */}
    </Box>
  );
};

export default TopSection;
