import { Box, HStack, Text, Modal, ModalOverlay, ModalContent, ModalCloseButton, useDisclosure, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import logo from '../../assests/logo2-removebg.png'

const MotionModalContent = motion(ModalContent);

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [bgColor, setBgColor] = useState('transparent');

    const handleScroll = () => {
        if (window.scrollY > 200) {
            setBgColor('white');
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

                    <Image src={logo} w={{ base: '70px', md: '80px', lg: '100px' }} />

                </Box>

                <Box
                    w="70%"
                    display='flex'
                    alignItems='center'
                    justifyContent='flex-end'
                >
                    <HStack gap='35px' color='wheat'>
                        <Text
                            textDecoration='underline'
                            fontSize={{ base: '18px', lg: '25px' }}
                        >
                            Contact Us
                        </Text>
                        <Text
                            fontSize={{ base: '18px', lg: '25px' }}
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
