import {
  Box,
  Button,
  Flex,
  FormControl,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import footerImg1 from "../images/footer/footerImg1.png";

const Footer = () => {
  return (
    <Box
      height="187px"
      mt="130px"
      bg="rgba(0, 0, 0, 1)"
      color="rgba(255, 255, 255, 1)"
    >
      <Flex>
        <Box textAlign="left" mt="50px">
          <Image src={footerImg1} alt="speakin" ml="106px" />
          <Box lineHeight="0.06em" textAlign="left" ml="136px">
            <Text fontWeight={500} fontSize="14px" letterSpacing={1}>
              &copy; 2020 SPEAKIN ALL RIGHTS RESERVED
            </Text>
          </Box>
        </Box>
        <Box mt="80px" ml="250px">
          <Flex>
            <FormControl>
              <Input
                width="333px"
                height="34px"
                placeholder="Enter your mail ID"
              />
            </FormControl>
            <Button
              width="95px"
              height="34px"
              bg="rgba(83, 141, 215, 1)"
              rounded="5px"
              color="rgba(255, 255, 255, 1)"
              ml={3}
            >
              Subscribe
            </Button>
          </Flex>
          <Box lineHeight="16px" textAlign={"right"} mt={5}>
            <Text fontWeight={400} fontSize="12px">
              Subscribe to our news letter
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
