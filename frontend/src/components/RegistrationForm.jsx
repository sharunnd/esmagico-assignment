import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import speakin_reg from "../images/speakin_register.png";
import topic from "../images/image_above_reg_btn.png";


const RegistrationForm = () => {
  return (
    <Box
      position="absolute"
      top="688px"
      left="136px"
      bg="rgba(255, 255, 255, 1)"
      borderRadius="20px"
      border="1px dotted rgba(174, 183, 195, 1)"
      boxShadow="0px 23px 64px 0px rgba(83, 141, 215, 0.46)"
    >
        {/* Flex container with vertical alignment and dotted border */}
      
      <Flex
        flexDirection={"column"}
        alignItems={"center"}
        border="1px dotted rgba(174, 183, 195, 1)"
        m="32px"
        height="100%"
      >
        <Box width="198px" height="112px" mt={10}>
          <Image src={speakin_reg} width="100%" alt="spking_reg_img" />
        </Box>

         {/* Form Inputs */}

        <Box p="61px" pb={5}>
          <Box width="410px">
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Enter name" />
              <FormLabel mt={5}>Email</FormLabel>
              <Input placeholder="Enter email" />

              <FormLabel mt={5}>Mobile Number</FormLabel>
              <Flex>
                <Select width="100px">
                  <option value="+91">+91</option>
                </Select>
                <Input type="tel" placeholder="+91" />
              </Flex>
              <FormLabel mt={5}>Organization</FormLabel>
              <Input placeholder="Enter name" />
              <FormLabel mt={5}>Select Date</FormLabel>
              <Input type="date" placeContent={"dsd"} />
            </FormControl>
            <Box width="" height="131px" mt={5}>
              <Image src={topic} width="100%" alt="spking_reg_img" />
            </Box>

            {/* Register Button */}

            <Button
              width="100%"
              rounded="48px"
              mt={37}
              bg="rgba(83, 141, 215, 1)"
            >
              <Text
                color="rgba(255, 255, 255, 1)"
                fontFamily={700}
                fontSize="14px"
              >
                REGISTER
              </Text>
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default RegistrationForm;
