import React from 'react'
import { Avatar, Box, Stack, VStack, Text, Image } from "@chakra-ui/react"
import founder from '../assets/muh.png'
// import btctest from "../assets/btc.png"

function Footer() {
    return <Box
        bgColor={"blackAlpha.900"} color={"whiteAlpha.700"}
        minH={"48"} px={"16"} py={["16", "8"]}
    >

        <Stack direction={["column", "row"]}
            h={"full"} alignItems={"center"}
        >

            <VStack w={"full"} alignItems={["center", "flex-start"]}>
                <Text fontWeight={"bold"}> About Us </Text>
                <Text fontSize={"sm"} letterSpacing={"widest"}
                    textAlign={["center", "left"]}>
                    We are the Best Crypto App in FSD Punjab Pakistan.
                    We provide our guidance and mentorship at a competitve price.
                </Text>
            </VStack>

            <VStack>
                <Avatar src={founder} boxSize={"24"} mt={["4", "0"]} />
                <Text> Our Founder</Text>
            </VStack>

        </Stack>

    </Box>
}
export default Footer
