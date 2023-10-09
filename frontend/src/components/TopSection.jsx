import {
  Box,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import wallpaper from "../images/Wallpaper.jpg";
import ScheduleSection from "./ScheduleSection";
import rect1 from "../images/Rectangle_11.png";
import rect2 from "../images/Rectangle_2.png";
import rect3 from "../images/Rectangle_3.png";
import RegistrationForm from "./RegistrationForm";
import shakehand_bg from "../images/shakehand_bg.png";
import shakehand from "../images/handshakeimg.png";
import { useState } from "react";

const TopSection = () => {
  const [isSmallerThan768] = useMediaQuery("(max-width: 768px)");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Box position="relative">
      <Image src={wallpaper} width="100%" alt="wallpaper" />
      <ScheduleSection />
      <Box
        position="absolute"
        top={{ base: "190px", sm: "300px", md: "66%", lg: "72%" }}
        width="100%"
      >
        <Box width="100%">
          <Image src={rect1} width="100%" alt="rect1" />
        </Box>
      </Box>
      <Box
        position="absolute"
        top={{ base: "190px", sm: "280px", md: "70%", lg: "76%" }}
        width="100%"
      >
        <Box width="100%">
          <Image src={rect3} width="100%" alt="rect3" />
        </Box>
      </Box>
      <Box
        position="absolute"
        top={{ base: "190px", sm: "300px", md: "400px", lg: "73%" }}
        width="100%"
      >
        <Box width="100%">
          <Image src={rect2} width="100%" alt="rect2" />
        </Box>
      </Box>
      {!isSmallerThan768 && <RegistrationForm />}
      <Box
        position="absolute"
        top={{ base: "355px", sm: "450px", md: "900px", lg: "120%" }}
        left={{ base: "201px", sm: "300px", md: "700px", lg: "68%" }}
      >
        <Image
          src={shakehand_bg}
          width={{ base: "106px", sm: "200px", md: "600px", lg: "120%" }}
          height={{ base: "101px", sm: "150px", md: "600px", lg: "68%" }}
        />
      </Box>
      <Box
        position="absolute"
        top={{ base: "355px", sm: "450px", md: "100px", lg: "155%" }}
        left={{ base: "201px", sm: "250px", md: "900px", lg: "72%" }}
      >
        <Image
          src={shakehand}
          width={{ base: "106px", sm: "150px", md: "250px", lg: "78%" }}
          height={{ base: "101px", sm: "200px", md: "300px", lg: "100%" }}

        />
      </Box>
      <Box
        position={"absolute"}
        top={{ base: "355px", sm: "450px", md: "900px", lg: "135%" }}
        left={{ base: "45px", sm: "150px", md: "400px", lg: "53%" }}
        textAlign={"left"}
        lineHeight={{ base: "23px", sm: "40px", md: "60px", lg: "68px" }}

      >
        <Text
          fontSize={{ base: "16px", sm: "20px", md: "30px", lg: "46px" }}
          fontWeight={600}
          color="rgba(0, 0, 0, 1)"
        >
          {"Grow with India’s "}
        </Text>
        <Text
          fontSize={{ base: "16px", sm: "20px", md: "30px", lg: "46px" }}
          fontWeight={600}
          color="rgba(0, 0, 0, 1)"
        >
          Largest Network of
        </Text>
        <Text
          fontSize={{ base: "16px", sm: "20px", md: "30px", lg: "46px" }}
          fontWeight={600}
          color="rgba(0, 0, 0, 1)"
        >
          Experts
        </Text>
        {isSmallerThan768 && (
          <Button
            width="100px"
            height="22px"
            bg="rgba(83, 141, 215, 1)"
            color="rgba(255, 255, 255, 1)"
            rounded="32px"
            py="15px"
            mt={5}
            onClick={openModal}
          >
            <Text fontWeight={700}>REGISTER</Text>
          </Button>
        )}
        {isModalOpen && (
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <ModalOverlay />
            <ModalContent>
              <ModalBody>
                <RegistrationForm />
              </ModalBody>
            </ModalContent>
          </Modal>
        )}
      </Box>
    </Box>
  );
};

export default TopSection;
