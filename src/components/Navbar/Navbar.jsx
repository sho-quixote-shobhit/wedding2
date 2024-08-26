import { Box, HStack, Text, Modal, ModalOverlay, ModalContent, ModalCloseButton, useDisclosure } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'

const MotionModalContent = motion(ModalContent);

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [bgColor, setBgColor] = useState('transparent');

    const handleScroll = () => {
        if (window.scrollY > 400) {
            setBgColor('wheat');
        } else {
            setBgColor('transparent');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box
            w={{ base: '100%', lg: '100%' }}
            backgroundColor={bgColor}
            transition="background-color 0.3s ease-in-out"
            p='0.5rem 0rem'
            position='fixed'
            m='auto auto'
            zIndex='999'
        >
            <Box
                display='flex'
                justifyContent='space-between'
                w={{ base: '90%', lg: '90%' }}
                m='auto auto'
            >
                <Box w='30%'>
                    <Text
                        fontSize={{ base: '35px', lg: '48px' }}
                        fontFamily="'Inter', serif"
                    >
                        LOGO
                    </Text>
                </Box>

                <Box
                    w="70%"
                    display='flex'
                    alignItems='center'
                    justifyContent='flex-end'
                >
                    <HStack gap='35px' color = 'white'>
                        <Text
                            textDecoration='underline'
                            fontSize={{ base: '18px', lg: '25px' }}
                            fontFamily="'Inter', serif"
                        >
                            Contact Us
                        </Text>
                        <Text
                            fontSize={{ base: '18px', lg: '25px' }}
                            fontFamily="'Inter', serif"
                            cursor="pointer"
                            onClick={onOpen}
                        >
                            Menu
                        </Text>
                    </HStack>
                </Box>
            </Box>

            <Modal onClose={onClose} size='full' isOpen={isOpen}>
                <ModalOverlay />
                <MotionModalContent
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    bg='#ffd8b7'
                >
                    <ModalCloseButton />
                    <Box m='auto auto' w="100%">
                        <Box
                            w={{ base: '90%', lg: '80%' }}
                            display='flex'
                            flexDir='column'
                            m='auto auto'
                            gap='10px'
                            color='white'
                        >
                            <Box>
                                <Text
                                    fontSize={{ base: '30px', lg: '50px' }}
                                    fontWeight='550'
                                    fontFamily="'Inter', serif"
                                    cursor="pointer"
                                    onClick={onOpen}
                                >
                                    Home
                                </Text>
                            </Box>
                            <Box>
                                <Text
                                    fontSize={{ base: '30px', lg: '50px' }}
                                    fontWeight='550'
                                    fontFamily="'Inter', serif"
                                    cursor="pointer"
                                    onClick={onOpen}
                                >
                                    About Us
                                </Text>
                            </Box>
                            <Box>
                                <Text
                                    fontSize={{ base: '30px', lg: '50px' }}
                                    fontWeight='550'
                                    fontFamily="'Inter', serif"
                                    cursor="pointer"
                                    onClick={onOpen}
                                >
                                    Gallery
                                </Text>
                            </Box>
                            <Box>
                                <Text
                                    fontSize={{ base: '30px', lg: '50px' }}
                                    fontWeight='550'
                                    fontFamily="'Inter', serif"
                                    cursor="pointer"
                                    onClick={onOpen}
                                >
                                    Blog
                                </Text>
                            </Box>
                            <Box>
                                <Text
                                    fontSize={{ base: '30px', lg: '50px' }}
                                    fontWeight='550'
                                    fontFamily="'Inter', serif"
                                    cursor="pointer"
                                    onClick={onOpen}
                                >
                                    Contact Us
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                </MotionModalContent>
            </Modal>
        </Box>
    )
}

export default Navbar;
