import { Box, Grid, Text, Image } from '@chakra-ui/react';
import React from 'react';
import data from './data';
import { BiPlayCircle } from 'react-icons/bi';

const Follow = () => {
    const handleClick = () => {
        window.open('https://www.instagram.com/narang_production');
    };

    const handleSubLink = (link) => {
        window.open(link);
    };

    return (
        <Box
            w="100%"
            p={{ base: '50px 0px', lg: '80px 0px' }}
            display='flex'
            justifyContent='center'
            alignItems='center'
            m='auto auto'
            flexDir="column"
            gap="30px"
        >
            <Box
                display='flex'
                flexDir='column'
                alignItems='center'
            >
                <Text
                    fontSize={{ base: '45px', lg: '60px' }}
                    color="#E5977D"
                >
                    Narang Productions
                </Text>

                <Text
                    fontSize={{ base: '18px', lg: '20px' }}
                    onClick={handleClick}
                    cursor='pointer'
                >
                    @instagram
                </Text>
            </Box>

            <Grid
                templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(5, 1fr)' }}
                gap={4}
                mt={8}
                w="100%"
                maxW="1200px"
            >
                {data.map((item) => (
                    <Box
                        key={item.link}
                        cursor="pointer"
                        onClick={() => handleSubLink(item.link)}
                        position="relative"
                        overflow="hidden"
                        width="100%"
                        height="0"
                        paddingTop="100%"
                        borderRadius="10px"
                        _hover={{
                            opacity : 0.8
                        }}
                    >
                        <Image
                            src={item.img}
                            alt={`Image ${item.link}`}
                            objectFit="cover"
                            position="absolute"
                            top="0"
                            left="0"
                            width="100%"
                            height="100%"
                        />

                        <Box position="absolute" top = "40%" left = "40%">
                            <BiPlayCircle size="50" color='white' />
                        </Box>
                    </Box>
                ))}
            </Grid>
        </Box>
    );
};

export default Follow;
