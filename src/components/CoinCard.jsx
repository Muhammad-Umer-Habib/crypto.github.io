import React from 'react'
import { Link } from 'react-router-dom'
import { VStack, Heading, Image, Text } from '@chakra-ui/react'

const CoinCard = ({ id, name, img, symbol, price, currencySymbol = "₹" }) => (
    <Link to={`/coins/${id}`} target={"blank"}>
        <VStack
            w={"52"}
            // h={"60"}
            shadow={"lg"}
            p={"8"}
            borderRadius={"lg"}
            transition={"all 0.3s"}
            m={"4"}
            css={{
                "&:hover":
                    { transform: "scale(1.2)", }
            }} >
            <Image
                src={img}
                w={"10"}
                h={"10"}
                objectfit={"contain"}
                alt={"Exchange"}
            />

            <Heading
                size={"md"} nooflines={1} >
                {symbol}
            </Heading>

            <Text nooflines={1} > {name} </Text>
            <Text nooflines={1} >{price ? `${currencySymbol}${price}` : "N/A"} </Text>


        </VStack>
    </Link>

)

export default CoinCard
