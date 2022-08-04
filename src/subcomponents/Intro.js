import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import Me from '../img/chara.svg';

const Box = styled(motion.div)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);

width: 65vw;
height:55vh;
display: flex;

background: linear-gradient(
    to right,
    white 50%,
    white 50%) bottom,
    linear-gradient(
    to right,
    white 50%,
    white 50%) top;
    background-repeat: no-repeat;
    background-size: 100% 2px;
    border-left: 2px solid white;
    border-right: 2px solid white;

    z-index:1;
`
const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;
justify-content: center;

.pic{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0%);
    width: 100%;
    height: auto;
}
`

const SubBoxx = styled.div`
width: 50%;
position: relative;
display: flex;
justify-content: center;
align-items: end;
`

const Text = styled.div`
color: white;
padding: 2rem;

display: flex;
flex-direction: column;

h1 {
    font-size: 100px;
}

span {
    font-size: 20px;
    font-weight: 600;
}
`

const Chara = styled.img`
height: 65vh;
margin-bottom: -3px;
`

const Intro = () => {
    return (
        <Box
        initial={{height:0}}
        animate={{height: '55vh'}}
        transition={{ type: 'spring', duration:2, delay:1 }}
        >
            <SubBox>
                <Text>
                    <motion.h1
                    initial={{opacity:0}}
                    animate={{opacity: 1}}
                    transition={{ duration:1, delay:1 }}
                    >WELCOME TRAINEE!</motion.h1>
                    <motion.span
                    initial={{opacity:0}}
                    animate={{opacity: 1}}
                    transition={{ duration:1, delay:1 }}
                    >Don't forget to check your email daily</motion.span>
                </Text>
            </SubBox>
            <SubBoxx>
                <motion.div
                initial={{opacity:0}}
                animate={{opacity: 1}}
                transition={{ duration:1, delay:2 }}
                >
                    <Chara src={Me} />
                </motion.div>
            </SubBoxx>
        </Box>
    )
}

export default Intro
