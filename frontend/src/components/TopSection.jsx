import { Box, Image } from "@chakra-ui/react"
import wallpaper from "../images/Wallpaper.jpg"
import ScheduleSection from "./ScheduleSection"
import rect1 from "../images/Rectangle_11.png"
import rect2 from "../images/Rectangle_2.png"
import rect3 from "../images/Rectangle_3.png"
import RegistrationForm from "./RegistrationForm"

const TopSection = ()=>{
    return(
        <Box position="relative">
            <Image src={wallpaper} alt="wallpaper"/>
            <ScheduleSection />
            <Box position="absolute" top="600px">
                <Box>
                    <Image src={rect1} alt="rect1"/>
                </Box>
            </Box>
            <Box position="absolute" top="643px">
                <Box>
                    <Image src={rect3} alt="rect3"/>
                </Box>
            </Box>
            <Box position="absolute" top="615px">
                <Box>
                    <Image src={rect2} alt="rect2"/>
                </Box>
            </Box>
            <RegistrationForm />
        </Box>
    )
}

export default TopSection