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
      top={{ base: "100px", sm: "100px", md: "80%", lg: "82%" }}
      left={{ base: "5px", sm: "10px", md: "8%", lg: "9%" }}
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
        m={{ base: "5px", sm: "", md: "", lg: "32px" }}
        height={{ base: "756px", sm: "", md: "", lg: "100%" }}
      >
        <Box
          width={{ base: "200px", sm: "", md: "", lg: "35%" }}
          height={{ base: "50px", sm: "", md: "", lg: "35%" }}
          mt={{ base: "5px", sm: "5px", md: "4%", lg: "4%" }}
          mb={{ base: "55px", sm: "", md: "", lg: "4%" }}
         
        >
          <Image src={speakin_reg} width="100%" alt="spking_reg_img" />
        </Box>

        {/* Form Inputs */}

        <Box
          p={{ base: "5px", sm: "10px", md: "50px", lg: "61px" }}
          pb={{ base: "5px", sm: "", md: "", lg: "20px" }}
          
        >
          <Box width={{ base: "100%", sm: "100%", lg: "100%" }} >
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Enter name" />
              <FormLabel mt={{ base: "2px", sm: "", md: "", lg: "15px" }}>
                Email
              </FormLabel>
              <Input placeholder="Enter email" />

              <FormLabel mt={{ base: "2px", sm: "", md: "", lg: "15px" }}>
                Mobile Number
              </FormLabel>
              <Flex>
                <Select width="100px">
                  <option value="+91">+91</option>
                </Select>
                <Input type="tel" placeholder="+91" />
              </Flex>
              <FormLabel mt={{ base: "2px", sm: "", md: "", lg: "15px" }}>
                Organization
              </FormLabel>
              <Input placeholder="Enter name" />
              <FormLabel mt={{ base: "2px", sm: "", md: "", lg: "15px" }}>
                Select Date
              </FormLabel>
              <Input type="date" placeContent={"dsd"} />
            </FormControl>
            <Box
              width=""
              height={{ base: "50px", sm: "", md: "", lg: "131px" }}
              mt={{ base: "22px", sm: "", md: "", lg: "15px" }}
            >
              <Image src={topic} width="100%" alt="spking_reg_img" />
            </Box>

            {/* Register Button */}

            <Button
              width="100%"
              rounded="48px"
              mt={{ base: "139px", lg: "37px" }}
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
