import { Box, Image, useMediaQuery } from "@chakra-ui/react";
import clientsimg from "../images/clients.png";

const Clients = () => {

  return (
    <Box mt={{ base: "24px", sm: "30px", md: "85px", lg: "92px" }} width="100%">
      <Box width="100%">
        <Image src={clientsimg} width="100%" alt="miclientsddlesection" />
      </Box>
    </Box>
  );
};

export default Clients;
