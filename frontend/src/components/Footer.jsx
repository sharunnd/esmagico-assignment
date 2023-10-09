import {
    Box,
    Button,
    Flex,
    FormControl,
    Image,
    Input,
    Text,
    useMediaQuery,
  } from "@chakra-ui/react";
  import footerImg1 from "../images/footer/footerImg1.png";
  
  const Footer = () => {
    
  
    return (
      <Box
        height={{ base: "187px", lg: "189px" }}
        mt="130px"
        bg="rgba(0, 0, 0, 1)"
        color="rgba(255, 255, 255, 1)"
        
      >
        <Flex
          flexDirection={{ base: "column-reverse", lg: "row" }}
          justify="space-between"
          align="center"
          px={{ base: "20px", lg: "0px" }}
        >
          <Box textAlign="left" mt={{ base: "20px", lg: "50px" }}>
            <Image src={footerImg1} alt="speakin" ml={{ base: "20px", lg: "106px" }} width={{ base: "344px", lg: "100%" }} height={{ base: "54px", lg: "100%" }}/>
            <Box
              lineHeight="0.06em"
              textAlign="left"
              ml={{ base: "40px", lg: "136px" }}
              mt={{ base: "10px", lg: "10px" }}
              color="rgba(255, 255, 255, 1)"
            >
              <Text fontWeight={500} fontSize={{ base: "10px", lg: "14px" }} letterSpacing={1}>
                &copy; 2020 SPEAKIN ALL RIGHTS RESERVED
              </Text>
            </Box>
          </Box>
          <Box mt={{ base: "20px", lg: "80px" }} mr={{ base: "20px", lg: "150px" }}>
            <Flex>
              <FormControl>
                <Input
                  width={{ base: "242px", lg: "333px" }}
                  height={{ base: "24px", lg: "34px" }}
                  placeholder="Enter your mail ID"
                />
              </FormControl>
              <Button
                width={{ base: "70px", lg: "95px" }}
                height={{ base: "24px", lg: "34px" }}
                bg="rgba(83, 141, 215, 1)"
                rounded="5px"
                color="rgba(255, 255, 255, 1)"
                fontSize={{ base: "10px", lg: "14px" }}
                ml={3}
              >
                Subscribe
              </Button>
            </Flex>
            <Box lineHeight="16px" textAlign={{ base: "left", lg: "right" }} mt={{ base: "5px", lg: "15px" }} color="rgba(160, 160, 160, 1)">
              <Text fontWeight={400} fontSize={{ base: "10px", lg: "12px" }}>
                Subscribe to our newsletter
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    );
  };
  
  export default Footer;
  