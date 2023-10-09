import { Box, Image, useMediaQuery } from "@chakra-ui/react";
import aboutbg from "../images/about/aboutbg.png";
import about from "../images/about/about.png";
import about2 from "../images/about/about2.png";

const About = () => {
  const [isSmallerThan458] = useMediaQuery("(max-width: 458px)");

  return (
    <>
      {!isSmallerThan458 ? (
        <Box mt="66px" height="494px" width="100%">
          <Box position={"relative"}>
            <Box position="absolute" top={0} width="100%">
              <Image src={aboutbg} width="100%" alt="img" />
            </Box>
            <Box position="absolute" top="35px" width="100%">
              <Image src={about} width="100%" alt="yellowbg" />
            </Box>
          </Box>
        </Box>
      ) : (
        <Box mt="66px" height="494px">
          <Box position={"relative"}>
            <Box position="absolute" top="35px"  width="100%" >
              <Image src={about2} width="100%" alt="yellowbg" />
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default About;
