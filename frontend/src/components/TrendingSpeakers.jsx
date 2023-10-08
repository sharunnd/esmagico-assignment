import React, { useState, useEffect } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import nameCard1 from "../images/namecard/NameCard1.png";
import nameCard2 from "../images/namecard/NameCard2.png";
import nameCard3 from "../images/namecard/NameCard3.png";
import nameCard4 from "../images/namecard/NameCard4.png";
import nameCard5 from "../images/namecard/NameCard5.png";

const TrendingSpeakers = () => {
  const nameCards = [nameCard1, nameCard2, nameCard3, nameCard4, nameCard5];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % nameCards.length);
    }, 1000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [nameCards.length]);

  const isSmallScreen = window.innerWidth < 768;

  return (
    <Box mt={{ base: "10px", sm: "20px", md: "25px", lg: "29px" }} textAlign="center">
      <Text fontWeight={600} fontSize={{ base: "16px", sm: "20px", md: "32px", lg: "32px" }} mb="4">
        Trending Speakers
      </Text>
      {isSmallScreen ? (
        <Flex justifyContent="center" overflow="hidden">
          {nameCards.map((card, index) => (
            <Image
              key={index}
              src={card}
              width={{ base: "222px", sm: "250px", md: "33.33%", lg: "33.33%" }}
              alt={`namecard-${index}`}
              style={{ transform: `translateX(${-currentIndex * 33.33}%)`, transition: "transform 0.5s ease-in-out" }}
            />
          ))}
        </Flex>
      ) : (
        <Flex justifyContent="center">
          {nameCards.map((card, index) => (
            <Image
              key={index}
              src={card}
              width={{ base: "142px", sm: "150px", md: "33.33%", lg: "33.33%" }}
              alt={`namecard-${index}`}
            />
          ))}
        </Flex>
      )}
    </Box>
  );
};

export default TrendingSpeakers;
