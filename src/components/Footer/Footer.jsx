import { Box, VStack, Text } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
    return (
        <Box w="100%" bg="#ddcdba">
            {/* Large screens layout */}
            <Box
                display={{ base: 'none', lg: 'flex' }}
                flexDir="column"
            >
                {/* First row: Contact information */}
                <Box display='flex'>
                    <Box w="50%" border='1px solid white' h="100%" p="20px 0px">
                        <Text
                            align='center'
                            fontSize="60px"
                            
                        >
                            CONTACT US
                        </Text>
                    </Box>
                    <Box w="25%" display='flex' alignItems='center' justifyContent='center' border='1px solid white'>
                        <Text >
                            +39 334 223 0734
                        </Text>
                    </Box>
                    <Box w="25%" display='flex' alignItems='center' justifyContent='center' border='1px solid white'>
                        <Text >
                            example@mail.com
                        </Text>
                    </Box>
                </Box>

                {/* Second row: Social media links */}
                <Box display='flex'>
                    <Box
                        w="33%"
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        p="20px 0px"
                        border='1px solid white'
                        position="relative"
                        overflow="hidden"
                        _before={{
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'white',
                            transform: 'translateX(-100%)',
                            transition: 'transform 0.3s ease-in-out',
                            zIndex: 1,
                        }}
                        _hover={{
                            _before: {
                                transform: 'translateX(0)',
                            },
                            '& > p': {
                                color: 'black',
                                position: 'relative',
                                zIndex: 2,
                            }
                        }}
                        cursor = 'pointer'
                    >
                        <Text>Facebook</Text>
                    </Box>

                    <Box
                        w="33%"
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        border='1px solid white'
                        position="relative"
                        overflow="hidden"
                        _before={{
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'white',
                            transform: 'translateX(-100%)',
                            transition: 'transform 0.3s ease-in-out',
                            zIndex: 1,
                        }}
                        _hover={{
                            _before: {
                                transform: 'translateX(0)',
                            },
                            '& > p': {
                                color: 'black',
                                position: 'relative',
                                zIndex: 2,
                            }
                        }}
                        cursor = 'pointer'
                    >
                        <Text>Instagram</Text>
                    </Box>

                    <Box
                        w="34%"
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        border='1px solid white'
                        position="relative"
                        overflow="hidden"
                        _before={{
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'white',
                            transform: 'translateX(-100%)',
                            transition: 'transform 0.3s ease-in-out',
                            zIndex: 1,
                        }}
                        _hover={{
                            _before: {
                                transform: 'translateX(0)',
                            },
                            '& > p': {
                                color: 'black',
                                position: 'relative',
                                zIndex: 2,
                            }
                        }}
                        cursor = 'pointer'
                    >
                        <Text>Vimeo</Text>
                    </Box>
                </Box>

                {/* Third row: Legal and additional information */}
                <Box display='flex'>
                    <Box w="75%" display='flex' gap='10px' p="20px 0px" border='1px solid white'>
                        <Text mx={4}>
                            2023 © SCR – Italian wedding Videographer | Aversa, Italy
                        </Text>
                        <Box display='flex' gap='10px'>
                            <Text cursor = 'pointer' _hover={{color : 'white'}}>Cookie Policy</Text>
                            <Text cursor = 'pointer' _hover={{color : 'white'}}>Privacy Policy</Text>
                        </Box>
                    </Box>

                    <Box w="25%" display='flex' alignItems='center' border='1px solid white'  >
                        <Text cursor = 'pointer' mx={4} _hover={{color : 'white'}}>Art.com</Text>
                    </Box>
                </Box>
            </Box>

            {/* Small screens layout */}
            <Box display={{ base: '', lg: 'none' }} >
                <VStack m = {0} p = {0} gap={0}>
                    <Box w="100%" border='1px solid white' p="20px 0px" textAlign='center'>
                        <Text fontSize="30px" >
                            CONTACT US
                        </Text>
                    </Box>
                    <Box w="100%" border='1px solid white' p="20px 0px" textAlign='center'>
                        <Text>+39 334 223 0734</Text>
                    </Box>
                    <Box w="100%" border='1px solid white' p="20px 0px" textAlign='center'>
                        <Text>example@mail.com</Text>
                    </Box>
                    <Box w="100%" border='1px solid white' p="20px 0px" textAlign='center'>
                        <Text>Facebook</Text>
                    </Box>
                    <Box w="100%" border='1px solid white' p="20px 0px" textAlign='center'>
                        <Text>Instagram</Text>
                    </Box>
                    <Box w="100%" border='1px solid white' p="20px 0px" textAlign='center'>
                        <Text>Vimeo</Text>
                    </Box>
                    <Box w="100%" border='1px solid white' p="20px 0px">
                        <Text textAlign='center'>
                            2023 © SCR – Italian wedding Videographer | Aversa, Italy
                        </Text>
                        <Box display='flex' justifyContent='center' gap='10px' mt={2}>
                            <Text >Cookie Policy</Text>
                            <Text >Privacy Policy</Text>
                        </Box>
                    </Box>
                    <Box w="100%" border='1px solid white' p="20px 0px" textAlign='center'>
                        <Text>Art.com</Text>
                    </Box>
                </VStack>
            </Box>
        </Box>
    );
}

export default Footer;
