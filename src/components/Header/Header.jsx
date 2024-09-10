import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import video from '../../assests/o3.mp4';

const Header = () => {
    return (
        <ParallaxProvider>
            <Parallax y={[0, 50]}>
                <Box
                    position="relative"
                    h="100vh"
                    w="100%"
                >
                    <video autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <Box
                        display="flex"
                        alignItems='center'
                        justifyContent="center"
                        h="100%"
                        w="90%"
                        position="relative"
                        zIndex="1"
                        m='auto auto'
                    >
                        <Text
                            fontSize={{ base: '100px', lg: '200px' }}
                            fontWeight="bold"
                            color="white"
                            textAlign='left'
                            lineHeight={{ base: '80%', lg: '100%' }}
                        >
                            We Will Realize Your Dream
                        </Text>
                    </Box>
                </Box>
            </Parallax>

        </ParallaxProvider>
    );
};

export default Header;
