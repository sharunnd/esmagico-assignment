import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import liveImg1 from "../images/live-sessions/leadership.png";
import liveImg2 from "../images/live-sessions/liveImage2.png";
import liveImg3 from "../images/live-sessions/liveImage3.png";
import liveImg4 from "../images/live-sessions/liveImage4.png";
import liveImg5 from "../images/live-sessions/liveImage5.png";
import liveTxt1 from "../images/live-sessions/livetext1.png";
import liveTxt2 from "../images/live-sessions/livetext2.png";
import liveTxt3 from "../images/live-sessions/livetext3.png";
import liveTxt4 from "../images/live-sessions/livetext4.png";
import liveTxt5 from "../images/live-sessions/livetext5.png";
import rec from "../images/live-sessions/rec_img.png";

const LiveLearningSessions = () => {

  const liveSessionImages = [
    [liveImg1, liveTxt1],
    [liveImg2, liveTxt2],
    [liveImg3, liveTxt3],
    [liveImg4, liveTxt4],
    [liveImg5, liveTxt5],
  ];

  return (
    <Box height="473px" mt="114px" border={"1px solid white"} bgColor="#e1ebf9">
      <Box ml="10%" textAlign={"left"} mt="63px">
        <Box>
          <Button
            bgColor="rgba(255, 142, 79, 1)"
            color="white"
            rounded={10}
            width="103px"
            height="36px"
          >
            <Text>Trending</Text>
          </Button>
          <Box>
            <Text fontWeight={600} fontSize="32px">
              Live Learning Sessions
            </Text>
          </Box>
          <Flex mt="49px">
            {liveSessionImages &&
              liveSessionImages.map((el) => (
                <Box rounded="14px" mr="36px" width="205px" height="130px" position={"relative"}>
                    <Box position={"absolute"} top="10px" left="10px">
                        <Image src={rec}/>
                    </Box>
                  <Image src={el[0]} rounded="14px" width="100%" alt="img" />
                  <Box
                    p={5}
                    bgColor={"white"}
                    borderBottomRadius="14px"
                    height="80px"
                  >
                    <Image src={el[1]} />
                  </Box>
                </Box>
              ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default LiveLearningSessions;
