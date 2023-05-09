import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index'
import { Container, HStack, Button, RadioGroup, Radio } from '@chakra-ui/react'
import Loader from './Loader'
import ErrorComp from './ErrorComp'
import CoinCard from './CoinCard'


const Coins = () => {
    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)  //pagination
    const [error, setError] = useState(false)
    const [currency, setCurrency] = useState("pkr")

    const currencySymbol = currency === "inr" ? "₹" :
        currency === "eur" ? "€" :
            currency === "pkr" ? "₨" : "$"

    const changePage = (page) => {
        setPage(page);
        setLoading(true)
        console.log(`page ${page} is loading`)
    }

    const btns = new Array(132).fill()

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const { data } = await axios.get(
                    `${server}/coins/markets?vs_currency=${currency}&page=${page}`)
                // console.log(data)
                setCoins(data)
                setLoading(false)

            } catch (error) {
                setError(true)
                setLoading(false)
            }
        };
        fetchCoins();
    }, [currency, page]);

    if (error) return <ErrorComp message={"Error While Fetching Coins"} />

    return (
        <Container maxW={"container.xl"}>
            {loading ? (
                <Loader />) : (
                <>
                    <RadioGroup value={currency} onChange={setCurrency} p={"10"} >
                        <HStack spacing={"4"} border={"black"} >
                            <Radio value={"pkr"}>PKR ₨ </Radio>
                            <Radio value={"usd"}>USD $</Radio>
                            <Radio value={"eur"}>EUR €</Radio>
                            <Radio value={"inr"}>INR ₹</Radio>
                        </HStack>

                    </RadioGroup>

                    <HStack
                        wrap={"wrap"}
                        justifyContent={"space-evenly"} >
                        {
                            coins.map((i) => (
                                <CoinCard
                                    id={i.id}
                                    key={i.id}
                                    name={i.name}
                                    price={i.current_price}
                                    img={i.image}
                                    symbol={i.symbol}
                                    currencySymbol={currencySymbol}
                                />
                            ))
                        }
                    </HStack>

                    <HStack w={"full"} overflowX={"auto"} p={"8"} >

                        {
                            btns.map((item, index) => (
                                < Button
                                    key={index}
                                    bgColor={"blackAlpha.900"}
                                    color={"white"}
                                    onClick={() => changePage(index + 1)}
                                >
                                    {index + 1}
                                </Button>
                            ))
                        }


                    </HStack>
                </>)
            }
        </Container >
    )
}


export default Coins
