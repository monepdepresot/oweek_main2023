import logohorizon from '../img/logo/horizonwhite.png';
import H from '../img/logo/H.svg';
import oweek from '../img/logo/oweekwhite.svg';
import uc from '../img/logo/ucwhite.png';
import bg from '../img/bg/Homebg.svg';

import styledComponents from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import {motion} from 'framer-motion';
import SocialIcons from "../subcomponents/SocialIcons";
import Intro from "../subcomponents/Intro";
import MapsModal from './MapsModal';
import SpotifyModal from './SpotifyModal';

const MainContainer = styledComponents(motion.div)`
background-image: url(${bg});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
height: 100vh;
width: 100vw;
overflow:hidden;
position: relative;
`

const Container = styledComponents.div`
padding: 2rem;
`

const Task = styledComponents(NavLink)`
color: #FDFBF7;
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index: 1;
cursor: pointer;

@media only screen and (max-width: 768px) {
    font-size: 12px;
}
`

const Rules = styledComponents(NavLink)`
color: #FDFBF7;
position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg);
text-decoration: none;
z-index: 1;

@media only screen and (max-width: 768px) {
    font-size: 12px;
}
`

const About = styledComponents(NavLink)`
color: #FDFBF7;
text-decoration: none;
z-index: 1;


@media only screen and (max-width: 768px) {
    font-size: 12px;
}
`

const Schedule = styledComponents(NavLink)`
color: #FDFBF7;
text-decoration: none;
z-index: 1;

@media only screen and (max-width: 768px) {
    font-size: 12px;
}
`

const BottomBar = styledComponents.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;
`

const Center = styledComponents.button`
position: absolute;
top: ${props => props.click ? '85%' :'50%'  };
left: ${props => props.click ? '92%' :'50%'  };
transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

z-index: 1;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

&>:last-child{
    display: ${props => props.click ? 'none' :'inline-block'  };
    padding-top: 1rem;
}
`

const Rightlogo = styledComponents.div`
position: absolute;
right: calc(2rem);
z-index: 1;
display: flex;
gap: 10px;

@media only screen and (max-width: 768px) {
    gap: 5px;
    right: 1rem;
    top: 1rem;
}
`

const Leftlogo = styledComponents.div`
position: absolute;
left: calc(2rem);
z-index: 1;
cursor: pointer;

@media only screen and (max-width: 768px) {
    gap: 5px;
    left: 1rem;
    top: 1rem;
}
`

const RedDiv = styledComponents.div`
position: absolute;
top: 0;
background-color: #E22B2B;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;
`

const YellowDiv = styledComponents.div`
position: absolute;
top: 0;
background-color: #FFC600;
bottom: 0;
left: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;
`

const Home = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [showMapsModal, setShowMapsModal] = useState(false);
    const [showSpotifyModal, setShowSpotifyModal] = useState(false);

    return ( 
        <MainContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        >
            <MapsModal showMapsModal={showMapsModal} setShowMapsModal={setShowMapsModal} />
            <SpotifyModal showSpotifyModal={showSpotifyModal} setShowSpotifyModal={setShowSpotifyModal} />
            <SocialIcons setShowMapsModal={setShowMapsModal} setShowSpotifyModal={setShowSpotifyModal} />

            <Container>    

                <RedDiv click={click} /> 
                <YellowDiv click={click} /> 

                <Center click={click}>
                    <img src={H} alt="" onClick={()=> handleClick()} className={click ? 'HwidthClick' : 'Hwidth'} height={click ? 'HwidthClick' : 'Hwidth'} />
                    <span>click here</span>
                </Center>

                <Leftlogo onClick={()=> handleClick()}>
                    <img src={logohorizon} alt="" className='horizonlogo' />                                    
                </Leftlogo>

                <Rightlogo>
                    <img src={oweek} alt="" className='rightlogo' /> 
                    <img src={uc} alt="" className='rightlogo' />                    
                </Rightlogo>

                <Task to="/task">
                    <motion.h2
                    initial={{
                        y:-200,
                        transition: { type:'spring', duration: 1, delay:1}
                    }}
                    animate={{
                        y:0,
                        transition: { type:'spring', duration: 1, delay:1}
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    >Task</motion.h2>
                </Task>
                <Rules to="/rules">
                    <motion.h2
                    initial={{
                        y:-200,
                        transition: { type:'spring', duration: 1, delay:1}
                    }}
                    animate={{
                        y:0,
                        transition: { type:'spring', duration: 1, delay:1}
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    >Rules</motion.h2>
                </Rules>
                <BottomBar>
                    <About to="/about">
                        <motion.h2
                        initial={{
                            y:200,
                            transition: { type:'spring', duration: 1, delay:1}
                        }}
                        animate={{
                            y:0,
                            transition: { type:'spring', duration: 1, delay:1}
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        >About</motion.h2>
                    </About>
                    <Schedule to="/schedule">
                        <motion.h2
                        initial={{
                            y:200,
                            transition: { type:'spring', duration: 1, delay:1}
                        }}
                        animate={{
                            y:0,
                            transition: { type:'spring', duration: 1, delay:1}
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        >Schedule</motion.h2>
                    </Schedule>
                </BottomBar>
            </Container>

            {click ? <Intro click={click}/> : null}
        </MainContainer>
     );
}
 
export default Home;