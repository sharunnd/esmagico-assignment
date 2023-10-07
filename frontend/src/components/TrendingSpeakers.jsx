import { Box, Flex, Image, Text } from "@chakra-ui/react";
import nameCard1 from "../images/namecard/NameCard1.png";
import nameCard2 from "../images/namecard/NameCard2.png";
import nameCard3 from "../images/namecard/NameCard3.png";
import nameCard4 from "../images/namecard/NameCard4.png";
import nameCard5 from "../images/namecard/NameCard5.png";

const TrendingSpeakers = () => {
  const nameCards = [nameCard1, nameCard2, nameCard3, nameCard4, nameCard5];
  return (
    <Box mt={{ base: "10px", sm: "20px", md: "25px", lg: "29px" }} textAlign="center" height={{ base: "222px", sm: "230px", md: "300px", lg: "345px" }}>
      <Box
        width={{ base: "250pxpx", sm: "250px", md: "305px", lg: "305px" }}
        height="47px"
        lineHeight={{ base: "23px", sm: "30px", md: "47px", lg: "47px" }}
        justifyContent="center"
        margin="0 auto"
      >
        <Text fontWeight={600} fontSize={{ base: "16px", sm: "20px", md: "32px", lg: "32px" }}>
          Trending Speakers
        </Text>
        <Flex justifyContent="center" mt={{ base: "10px", sm: "30px", md: "40px", lg: "42px" }}>
          {nameCards &&
            nameCards.map((card, index) => (
              <Image key={index} src={card} width={{ base: "222px", sm: "250px", md: "80%", lg: "100%" }} alt={`namecard-${index}`} />
            ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default TrendingSpeakers;
