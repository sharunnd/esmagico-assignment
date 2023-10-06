import { Box, Image, Text } from "@chakra-ui/react"
import middleSection from "../images/middlesection.png"


const MiddleSection = ()=>{
    return(
        <Box mt="70%">
           {/* <Box width="43%" textAlign={"left"} ml="21%">
           <Text fontWeight={600} fontSize={46}>Why Curate Your Own Sessions?</Text>
           </Box> */}
           <Box width="60%" height="40%" ml="17%">
           <Image src={middleSection} width="100%" alt="middlesection"/>
           </Box>
        </Box>
    )
}

export default MiddleSection