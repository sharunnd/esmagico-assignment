import { Box, Image } from "@chakra-ui/react"
import clientsimg from "../images/clients.png"


const Clients = ()=>{
    return(
        <Box mt="92px">
           <Box >
           <Image src={clientsimg} width="100%" alt="miclientsddlesection"/>
           </Box>
        </Box>
    )
}

export default Clients