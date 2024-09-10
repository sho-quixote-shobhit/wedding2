import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Faq = () => {
    return (
        <Box
            w="100%"
            p={{ base: '0', lg: '50px 0px' }}
        >
            <Box
                w="90%"
                m='auto auto'
                gap="20px"
            >
                {['Come organizzare un matrimonio in Campania',
                  'Idee e consigli per scrivere promesse di matrimonio d\'effetto',
                  'Tutto quello da sapere per sposarsi in Costiera Amalfitana'
                ].map((text, index) => (
                    <Box
                        key={index}
                        my={{ base: 0, lg: 5 }}
                        py={4}
                        cursor='pointer'
                        position="relative"
                        overflow="hidden"
                        _before={{
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: '#ddcdba',
                            transform: 'translateX(-100%)',
                            transition: 'transform 0.3s ease-in-out',
                            zIndex: -1,
                        }}
                        _hover={{
                            _before: {
                                transform: 'translateX(0)',
                            },
                            '& > p': {
                                color: 'white',
                            }
                        }}
                    >
                        <Text
                            fontSize={{ base: '40px', lg: '50px' }}
                            py={2}
                            position="relative"
                            zIndex={1}
                            px={2}
                            color='#E5977D'
                            fontWeight='600'
                            // fontFamily="'Inter', serif"
                            transition="color 0.3s ease-in-out"
                        >
                            {text}
                        </Text>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default Faq