import { Box, Image, Text } from "@chakra-ui/react";
import wallpaper from "../images/Wallpaper.jpg";
import ScheduleSection from "./ScheduleSection";
import rect1 from "../images/Rectangle_11.png";
import rect2 from "../images/Rectangle_2.png";
import rect3 from "../images/Rectangle_3.png";
import RegistrationForm from "./RegistrationForm";
import shakehand_bg from "../images/shakehand_bg.png";
import shakehand from "../images/handshakeimg.png";

const TopSection = () => {
  return (
    <Box position="relative">
      <Image src={wallpaper} alt="wallpaper" />
      <ScheduleSection />
      <Box position="absolute" top="600px">
        <Box>
          <Image src={rect1} alt="rect1" />
        </Box>
      </Box>
      <Box position="absolute" top="643px">
        <Box>
          <Image src={rect3} alt="rect3" />
        </Box>
      </Box>
      <Box position="absolute" top="615px">
        <Box>
          <Image src={rect2} alt="rect2" />
        </Box>
      </Box>
      <RegistrationForm />
      <Box position="absolute" top="1029px" left="950px">
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
      </Box>
    </Box>
  );
};

export default TopSection;
