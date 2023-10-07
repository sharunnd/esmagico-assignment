import liveSessionWork from "../images/live-sessions/liveSessionWorkingImg.png";
import { Box, Flex, Image, useMediaQuery } from "@chakra-ui/react";
import liveSessionWork2 from "../images/sessions_work.png";

const LiveLearningSessionWork = () => {
  const [isSmallerThan458] = useMediaQuery("(max-width: 458px)");
  return (
    <>
      {" "}
      {!isSmallerThan458 ? (
        <Box mt="6%">
          <Flex justifyContent={"center"}>
            <Box height="32%" width="60%">
              <Image
                src={liveSessionWork}
                height="100%"
                width="100%"
                alt="img"
              />
            </Box>
          </Flex>
        </Box>
      ) : (
        <Box mt="6%">
          <Flex justifyContent={"center"}>
            <Box height="32%" width="60%">
              <Image
                src={liveSessionWork2}
                height="100%"
                width="100%"
                alt="img"
              />
            </Box>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default LiveLearningSessionWork;
