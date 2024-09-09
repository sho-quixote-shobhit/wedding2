import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const VideoBox = ({ src, title, name }) => {
    const [refVideo, inViewVideo] = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });

    const videoSpring = useSpring({
        transform: inViewVideo ? 'translateY(0)' : 'translateY(100px)',
        config: { duration: 1000, easing: (t) => t * (2 - t) },
    });

    return (
        <Box
            position="relative"
            overflow="hidden"
            display="flex"
            alignItems="center"
            justifyContent="center"
            h={{ base: '300px', lg: '550px' }}
            m="auto auto"
            ref={refVideo}
            cursor='pointer'
        >
            <animated.div style={{ ...videoSpring, width: '100%', height: '100%' }}>
                <video
                    muted
                    loop = "true"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: -1,
                        
                    }}
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => e.currentTarget.pause()}
                >
                    <source src={src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </animated.div>

            <Box
                position="absolute"
                top="25%"
                w="50%"
                h="50%"
                display="flex"
                flexDir="column"
                alignItems="center"
                justifyContent="center"
                color="white"
                m="auto auto"
                pointerEvents="none"
            >
                <Text fontSize={{ base: '35px', lg: '45px' }} fontWeight="bold">
                    {title}
                </Text>
                <Text fontSize={{ base: '20px', lg: '30px' }}>
                    {name}
                </Text>
            </Box>
        </Box>
    );
};

export default VideoBox;
