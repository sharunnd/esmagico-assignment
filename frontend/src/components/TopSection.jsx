import { Box, Image } from "@chakra-ui/react"
import wallpaper from "../images/Wallpaper.jpg"
import ScheduleSection from "./ScheduleSection"


const TopSection = ()=>{
    return(
        <Box position="relative">
            <Image src={wallpaper} alt="wallpaper"/>
            <ScheduleSection />
        </Box>
    )
}

export default TopSection