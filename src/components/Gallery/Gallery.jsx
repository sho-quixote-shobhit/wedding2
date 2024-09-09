import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import v1 from '../../assests/o2.mp4';
import v2 from '../../assests/o1.mp4';
import v3 from '../../assests/o4.mp4';
import v4 from '../../assests/o5.mp4';
import VideoBox from './VideoBox';  

const Gallery = () => {
    const [refText, inViewText] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const textSpring = useSpring({
        opacity: inViewText ? 1 : 0,
        transform: inViewText ? 'translateY(0)' : 'translateY(70px)',
        config: { duration: 1000, easing: (t) => t * (2 - t) },
    });

    const videos = [
        { src: v1, title: 'Wedding 1', name: 'Couple A' },
        { src: v2, title: 'Wedding 2', name: 'Couple B' },
        { src: v3, title: 'Wedding 3', name: 'Couple C' },
        { src: v4, title: 'Wedding 4', name: 'Couple D' },
    ];

    return (
        <Box w="100%" display="flex" flexDir="column">
            <Box w={{ base: '90%', lg: '90%' }} m="auto" ref={refText} gap="30px">
                <animated.div style={textSpring}>
                    <Text fontSize={{ base: '40px', lg: '80px' }} fontFamily="'Inter', serif" color="#E5977D">
                        Your Stories
                    </Text>
                </animated.div>
            </Box>

            <Box w={{ base: '100%', lg: '100%' }} m="auto">
                {videos.map((video, index) => (
                    <VideoBox key={index} src={video.src} title={video.title} name={video.name} />
                ))}
            </Box>
        </Box>
    );
};

export default Gallery;
