import { Box, Button, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import img from '../../assests/man.jpg';
import logo from '../../assests/logo2-removebg.png'

const About = () => {
    const [refImage, inViewImage] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const imageSpring = useSpring({
        opacity: inViewImage ? 1 : 0,
        transform: inViewImage ? 'translateY(0)' : 'translateY(50px)',
        config: { duration: 1000, easing: (t) => t * (2 - t) }, 
    });

    const [refText, inViewText] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const textSpring = useSpring({
        opacity: inViewText ? 1 : 0,
        transform: inViewText ? 'translateY(0)' : 'translateY(70px)',
        config: { duration: 1000, easing: (t) => t * (2 - t) }, 
    });

    return (
        <Box p="100px 0px" m='auto auto'>
            <Box
                w={{ base: '90%', lg: '90%' }}
                display='flex'
                flexDir={{ base: 'column', lg: 'row' }}
                m='auto auto'
                // fontfamily = "'Protest Guerrilla' ,  sans-serif"
            >
                <Box
                    w={{ base: '100%', lg: '50%' }}
                    m='auto auto'
                    ref={refImage}
                >
                    <animated.div style={imageSpring}>
                        <Image src={img} />
                    </animated.div>
                </Box>

                <Box
                    w={{ base: '100%', lg: '50%' }}
                    p="30px 0 px"
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    gap = "30px"
                >
                    <Box
                        w={{ base: '100%', lg: '85%' }}
                        display='flex'
                        flexDir='column'
                        m='auto auto'
                        gap='30px'
                        ref={refText}
                    >
                        <animated.div style={textSpring}>
                            <Text
                                fontSize={{ base: '20px', lg: '25px' }}
                                my={{base : 4 , lg : 4}}
                            >
                                WE ARE
                            </Text>
                            <Text
                                fontSize={{ base: '50px', lg: '70px' }}
                                lineHeight={{ base: '100%', lg: '110%' }}
                                color = '#E5977D'
                            >
                                INDIAN WEDDING VIDEOGRAPHER
                            </Text>
                        </animated.div>

                        <Box display='flex' gap='20px' fontSize={{ base: '20px', lg: '23px' }} color='grey'>
                            <Text>Engagement</Text>
                            <Text>Trailer</Text>
                            <Text>Wedding Film</Text>
                        </Box>

                        <Text
                            fontSize={{ base: '17px', lg: '20px' }}
                        >
                            We are Francesca and Gennaro, two brothers so different but united by the same passion: the wedding films.
                            A passion born from the love of our parents and the union of our family. Francesca, emotional and impulsive. Gennaro, rational and precise. Our very different personalities have allowed us to travel in the same direction, writing and immortalizing the scenography of a love story that wants to be remembered.
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
                            Read More
                        </Button>

                        <Image w = "30%" h = "30%" src = {logo} />
                    </Box>

                </Box>
            </Box>
        </Box>
    );
};

export default About;
