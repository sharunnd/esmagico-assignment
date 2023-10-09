import { Box, Flex, Image, Text } from "@chakra-ui/react";
import speakin_img from "../images/speakin_img.png";
import union from "../images/Union.png";
import zoom_logo from "../images/zoom-logo.png";
import schedule_btn from "../images/schedule_btn.png";

const ScheduleSection = () => {
  return (
    <Box
      position="absolute"
      top={{ base: "40px", sm: "7%", md: "8%", lg: "10%" }}
      left={{ base: "200px", sm: "200px", md: "50%", lg: "50%" }}
      width={{ base: "50%", sm: "177px", md: "", lg: "51%" }}
      border="2px solid red"
    >
      <Box
        height={{ base: "69px", sm: "69px", md: "10%", lg: "12%" }}
        textAlign={"left"}
        lineHeight={{ base: "21px", sm: "25px", md: "40px", lg: "60px" }}
        border="2px solid blue"
        width={{ base: "100%", lg: "100%" }}
      >
        <Text
          fontSize={{ base: "16px", sm: "20px", md: "30px", lg: "46px" }}
          color="rgba(255, 255, 255, 1)"
        >
          Curate Your own Training
        </Text>
        <Text
          fontSize={{ base: "16px", sm: "20px", md: "30px", lg: "46px" }}
          color="rgba(255, 255, 255, 1)"
        >
          Sessions with top Keynote
        </Text>
        <Text
          fontSize={{ base: "16px", sm: "20px", md: "30px", lg: "46px" }}
          color="rgba(255, 255, 255, 1)"
        >
          Speakers
        </Text>
      </Box>
      <Box
        bgColor="rgba(0,0,0,0.3)"
        mt={{ base: "20px", sm: "25px", md: "5%", lg: "5%" }}
        width={{ base: "177px", sm: "200px", md: "67%", lg: "67%" }}
        height={{ base: "69px", sm: "70px", md: "200px", lg: "224px" }}
        borderRadius={{ base: "6px", sm: "10px", md: "20px", lg: "20px" }}
        pl={{ base: "5px", sm: "10px", md: "20px", lg: "4%" }}
        zIndex={10}
        border="2px solid yellow"
      >
        <Flex alignItems={"center"} border="2px solid green">
          <Box mt={{ base: "5px", sm: "10px", md: "30px", lg: "6%" }} border="2px solid yellow">
            <Image
              src={speakin_img}
              alt="speakin"
              width={{ base: "48px", sm: "", md: "", lg: "157px" }}
              height={{ base: "14px", sm: "", md: "", lg: "45px" }}
            />
          </Box>
          <Box mt={{ base: "5px", sm: "10px", md: "20px", lg: "6%" }} ml={3} border="2px solid red">
            <Image
              src={union}
              alt="union"
              width={{ base: "10px", sm: "10px", md: "20px", lg: "20px" }}
              height={{ base: "10px", sm: "10px", md: "20px", lg: "20px" }}
            />
          </Box>
          <Box mt={{ base: "5px", sm: "10px", md: "20px", lg: "6%" }} ml={3}>
            <Image
              src={zoom_logo}
              width={{ base: "24px", sm: "24px", md: "50px", lg: "61px" }}
              height={{ base: "11px", sm: "11px", md: "29px", lg: "29px" }}
              alt="zoom-logo"
            />
          </Box>
        </Flex>
        <Box>
          <Box
            textAlign={"left"}
            mt={{ base: "5px", sm: "5px", md: "5px", lg: "5px" }}
          >
            <Text
              color="rgba(255, 255, 255, 1)"
              fontSize={{ base: "8px", sm: "8px", md: "22px", lg: "22px" }}
              height={{ base: "10px", sm: "10px", md: "31px", lg: "31px" }}
              fontWeight={400}
            >
              {"= Your Own Live Session in <30 minutes"}
            </Text>
          </Box>
        </Box>
        <Box>
          <Image
            width={{ base: "100px", sm: "100px", md: "300px", lg: "322px" }}
            height={{ base: "15px", sm: "15px", md: "40px", lg: "50px" }}
            src={schedule_btn}
            mt={{ base: "5px", sm: "5px", md: "15px", lg: "25px" }}
            alt="schedule_btn"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ScheduleSection;
