import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import Me from '../img/chara.svg';

const Box = styled(motion.div)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);

width:65vw;
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

@media only screen and (max-width: 1024px) {
    width: 75vw;  
}

@media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between; 
    width: 65vw;   
}

span {
    font-size: 5px;
}
`

const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;
justify-content: center;
align-items: center;

@media only screen and (max-width: 768px) {
    width: 100%;
}
`

const SubBoxx = styled.div`
width: 50%;
position: relative;
display: flex;
justify-content: center;
align-items: end;

@media only screen and (max-width: 768px) {
    width: 100%;
}
`

const Text = styled.div`
color: white;
padding: 1rem;

display: flex;
flex-direction: column;
align-items: center;

h1 {
    font-size: 100px;
}

span {
    font-size: 20px;
    font-weight: 600;
}

@media only screen and (max-width: 1280px) {
    h1 {
        font-size: 75px;
    }
    
    span {
        font-size: 18px;
        font-weight: 600;
    }
}

@media only screen and (max-width: 768px) {
    h1 {
        font-size: 70px;
    }
    
    span {
        font-size: 12px;
        font-weight: 600;
    }

    padding: 0 15px;
}
`

const Chara = styled.img`
height: 65vh;
margin-bottom: -3px;

@media only screen and (max-width: 768px) {
    height: 25vh;
    margin-bottom: -2px;
}
`

const EmailSpan = styled(motion.span)`
padding-bottom: 50.25px;

@media only screen and (max-width: 768px) {
    padding-bottom: 0px;
}
`

const Intro = () => {

    return (
        <Box
        initial={{height:0}}
        animate={window.matchMedia("(min-width: 768px)").matches ? {height: '55vh'} : {height: '75vh'}}
        transition={{ type: 'spring', duration:2, delay:1 }}
        >
            <SubBox>
                <Text>
                    
                    <motion.h1
                    initial={{opacity:0}}
                    animate={{opacity: 1}}
                    transition={{ duration:1, delay:1 }}
                    >WELCOME TRAINEE!</motion.h1>
                    <EmailSpan
                    initial={{opacity:0}}
                    animate={{opacity: 1}}
                    transition={{ duration:1, delay:1 }}
                    >Don't forget to check your email daily</EmailSpan>
                    
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
