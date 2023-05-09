import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Coins from './Coins'

const Header = () => {
    return <HStack p={"4"} spacing={"10"} shadow={"base"}
        borderColor={"white"} bgColor={"blackAlpha.900"}
        fontFamily={"Konkhmer Sleokchher"} >

        <Button
            variant={"unstyled"} color={"white"}
            border={"1"}
            css={{
                "&:hover":
                    { color: "Yellow" }
            }}
        >
            <Link to="/" >HOME</Link>
        </Button>

        <Button variant={"unstyled"} color={"white"} css={{
            "&:hover":
                { color: "Yellow" }
        }}>
            <Link to="/exchanges" >EXCHANGES</Link>
        </Button>

        <Button variant={"unstyled"} color={"white"} css={{
            "&:hover":
                { color: "Yellow" }
        }} >
            <Link to="/coins" >COINS</Link>
        </Button>

    </HStack>
}

export default Header
