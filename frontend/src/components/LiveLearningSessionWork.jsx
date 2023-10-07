import liveSessionWork from "../images/live-sessions/liveSessionWorkingImg.png"
import { Box, Flex, Image } from "@chakra-ui/react"



const LiveLearningSessionWork = ()=>{
    return(
        <Box mt="6%">
           <Flex justifyContent={"center"}>
              <Box height="32%" width="60%">
                 <Image src={liveSessionWork} height="100%" width="100%" alt="img"/>
              </Box>
           </Flex>
        </Box>
    )
}

export default LiveLearningSessionWork