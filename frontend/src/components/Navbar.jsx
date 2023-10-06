import { Box, Image } from "@chakra-ui/react"
import speakin_img from "../images/speakin_img.png"


const Navbar = ()=>{
    return(
        <Box position="absolute" top={0} width="100%" height="5%">
            <Box position="absolute" top={19}  left={130}>
               <Image width={99} height={"2%"} src={speakin_img} alt="speakin"/>
            </Box>
        </Box>
    )
}

export default Navbar