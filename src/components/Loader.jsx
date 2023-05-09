import { Spinner, VStack, Box } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
    return <VStack
        h="90vh"
        justifyContent={"center"} >

        <Box transform={"scale(2)"} >
            <Spinner size={"xl"} />
        </Box>



    </VStack>
}

export default Loader