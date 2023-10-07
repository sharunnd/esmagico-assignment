import { Box, Flex, Image, Text } from "@chakra-ui/react";
import nameCard1 from "../images/namecard/NameCard1.png";
import nameCard2 from "../images/namecard/NameCard2.png";
import nameCard3 from "../images/namecard/NameCard3.png";
import nameCard4 from "../images/namecard/NameCard4.png";
import nameCard5 from "../images/namecard/NameCard5.png";

const TrendingSpeakers = () => {
  const nameCards = [nameCard1, nameCard2, nameCard3, nameCard4, nameCard5];
  return (
    <Box mt="29px" textAlign="center" height="345px">
      <Box
        width="305px"
        height="47px"
        lineHeight="47px"
        justifyContent="center"
        margin="0 auto"
      >
        <Text fontWeight={600} fontSize="32px">
          Trending Speakers
        </Text>
        <Flex justifyContent="center" mt="42px">
          {nameCards &&
            nameCards.map((card, index) => (
              <Image key={index} src={card} alt={`namecard-${index}`} />
            ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default TrendingSpeakers;
