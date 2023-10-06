import { Box, Flex, Image, Text } from "@chakra-ui/react";
import speakin_img from "../images/speakin_img.png";
import union from "../images/Union.png";
import zoom_logo from "../images/zoom-logo.png";
import schedule_btn from "../images/schedule_btn.png";

const ScheduleSection = () => {
  return (
    <Box position="absolute" top="10%" left="50%" width="51%">
      <Box height="12%" textAlign={"left"} lineHeight="60px">
        <Text fontSize={46} color="rgba(255, 255, 255, 1)">
          Curate Your own Training
        </Text>
        <Text fontSize={46} color="rgba(255, 255, 255, 1)">
          Sessions with top Keynote
        </Text>
        <Text fontSize={46} color="rgba(255, 255, 255, 1)">
          Speakers
        </Text>
      </Box>
      <Box
        bgColor="rgba(0,0,0,0.3)"
        mt={35}
        width="571px"
        height="224px"
        borderRadius="20px"
        pl={30}
      >
        <Flex alignItems={"center"}>
          <Box mt={30}>
            <Image
              src={speakin_img}
              alt="speakin"
              width="157px"
              height="45px"
            />
          </Box>
          <Box mt={30} ml={3}>
            <Image src={union} alt="union" width="20px" height="20px" />
          </Box>
          <Box mt={30} ml={3}>
            <Image src={zoom_logo} width="61px" height="29px" alt="zoom-logo" />
          </Box>
        </Flex>
        <Box>
          <Box textAlign={"left"} mt={5}>
            <Text
              color="rgba(255, 255, 255, 1)"
              fontSize="22px"
              height={31}
              fontWeight={400}
            >
              {"= Your Own Live Session in <30 minutes"}
            </Text>
          </Box>
        </Box>
        <Box>
          <Image
            width="322px"
            height="50px"
            src={schedule_btn}
            mt={5}
            alt="schedule_btn"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ScheduleSection;
