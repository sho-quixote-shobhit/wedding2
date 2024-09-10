import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Follow = () => {
    const handleClick = () => {
        // window.open('https://www.instagram.com/scrfilms_/')
    }

    return (
        <Box
            w={{ base: '', lg: '' }}
            h="450px"
            display='flex'
            justifyContent='center'
            alignItems='center'
            m = 'auto auto'
        >
            <Box
                display='flex'
                flexDir='column'
                alignItems='center'
            >
                <Text
                    fontSize={{ base: '50px', lg: '60px' }}
                    color="#E5977D"
                >

                    Narang Productions
                </Text>

                <Text
                    fontSize={{base : '18px' , lg : '20px'}}
                    onClick={handleClick}
                    cursor='pointer'
                >
                    @instagram
                </Text>
            </Box>
        </Box>
    )
}

export default Follow