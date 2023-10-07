import { Box, Image, useMediaQuery } from "@chakra-ui/react";
import middleSection from "../images/middlesection.png";
import middleSection2 from "../images/work.png";

const MiddleSection = () => {
  const [isSmallerThan458] = useMediaQuery("(max-width: 458px)");
  return (
    <>
      {!isSmallerThan458 ? (
        <Box mt="70%">
          <Box width="60%" height="40%" ml="17%">
            <Image src={middleSection} width="100%" alt="middlesection" />
          </Box>
        </Box>
      ): (<Box mt="70%">
      <Box width="60%" height="40%" ml="17%">
        <Image src={middleSection2} width="100%" alt="middlesection" />
      </Box>
    </Box>)}
    </>
  );
};

export default MiddleSection;
