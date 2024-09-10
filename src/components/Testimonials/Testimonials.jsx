import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import data from './data'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    return (
        <Box
            w={{ base: '100%', lg: '100%' }}
            display='flex'
            flexDir={{ base: 'column', lg: 'row' }}
            h = {{base : '830px' , lg : '630px'}}
            m='auto auto'
        >
            <Box
                w={{ base: '100%', lg: '50%' }}
                p="50px 0 px"
                m="auto auto"
                display='flex'
                py={{base : 10, lg : 0}}
            >
                <Box
                    w='90%'
                    m="auto auto"
                >
                    <Slider {...settings}>
                        {data.map((item) => (
                            <Box
                                display='flex'
                                flexDir='column'
                                cursor='grab'
                            >
                                <Text
                                    fontSize={{ base: '19px', lg: '22px' }}
        
                                    mb={3}
                                >
                                    {item.text}
                                </Text>

                                <Box display='flex' alignItems='center'>
                                    <Box
                                        border='1px solid black'
                                        w="20px"
                                        h="1px"
                                        me={1}
                                    ></Box>

                                    <Text
                                        fontWeight='700'
                                        fontSize='20px'
                                    >

                                        {item.name}
                                    </Text>
                                </Box>
                            </Box>
                        ))}
                    </Slider>
                </Box>
            </Box>

            <Box
                w={{ base: '100%', lg: '50%' }}
                display='flex'
                py={{base : 10, lg : 0}}
                bg='#E5977D'
            >
                <Box

                    w={{ base: '90%', lg: '80%' }}
                    m='auto auto'
                    display='flex'
                    flexDir='column'
                    gap='20px'
                >
                    <Box>
                        <Text
                            fontSize={{ base: '40px', lg: '50px' }}

                        >
                            Gallery
                        </Text>

                        <Text
                            fontSize={{ base: '40px', lg: '50px' }}

                        >
                            Wedding Films
                        </Text>

                    </Box>

                    <Text>
                        Esplora la magia dei momenti più preziosi. Lasciati trasportare da storie d’amore che prendono vita. Diventa il vero protagonista del tuo wedding film. Guarda la gallery dei nostri lavori
                    </Text>

                    <Button
                        w={{ base: '30%', lg: '30%' }}
                        border="1px solid transparent"
                        color="white"
                        bg='grey'
                        transition="all 0.3s ease"
                        _hover={{
                            transform: 'translateY(-5px)',
                            background: 'transparent',
                            borderColor: 'black',
                            color: 'black'
                        }}
                        _focus={{ boxShadow: 'none' }}
                    >
                        See more
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Testimonials