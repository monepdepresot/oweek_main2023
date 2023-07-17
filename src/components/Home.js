import React, { useState } from 'react';
import styledComponents from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Intro from '../subcomponents/Intro';
import MapsModal from './MapsModal';
import SpotifyModal from './SpotifyModal';
import SocialIcons from '../subcomponents/SocialIcons';
import ScheduleLogo from '../img/logo/icon-02.png';
import TaskLogo from '../img/logo/icon-01.png';
import RulesLogo from '../img/logo/icon-04.png';
import AboutLogo from '../img/logo/icon-03.png';
import logohorizon from '../img/logo/type.png';
import H from '../img/logo/erudite.png';
import oweek from '../img/logo/oweekwhite.svg';
import uc from '../img/logo/ucwhite.png';
import bg from '../img/bg/testbg.png';

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
top: 55%;
right: calc(1rem + 9vw);
transform:translate(-50%, -50%);
text-decoration: none;
z-index: 1;
cursor: pointer;

@media only screen and (max-width: 768px) {
    font-size: 12px;
}
`
const Tasklogo = styledComponents(NavLink)`
  position: absolute;
  top: 40%;
  right: calc(1rem + 9vw);
  transform: translate(-50%, -50%) scale(0.15);
  z-index: 1;
  cursor: pointer;
  width:7%;
  height:auto;
  

  @media only screen and (max-width: 768px) {
    transform: translate(-50%, -50%) scale(0.1);
  }
  
  
 
`
const Ruleslogo = styledComponents(NavLink)`
  position: absolute;
  top: 40%;
  left: calc(1rem + 9vw);
  transform: translate(-50%, -50%) scale(0.15);
  z-index: 1;
  cursor: pointer;
  width:-7%;
  height:auto;
  

  @media only screen and (max-width: 768px) {

  }
  
 
`


const Rules = styledComponents(NavLink)`
color: #FDFBF7;
position: absolute;
top: 55%;
left: calc(1rem + 9vw);
transform: translate(-50%, -50%);
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
const Aboutlogo = styledComponents(NavLink)`
  position:absolute;
  top: 10%; /* Adjust the top value based on your desired position */
  left: 1.5%; /* Adjust the left value based on your desired position */
  transform: scale(0.15);
  z-index: 1;

  @media only screen and (max-width: 768px) {
  
  }
`
const Schedulelogo = styledComponents(NavLink)`
  position:absolute;
  top: 10%; /* Adjust the top value based on your desired position */
  right: 2%; /* Adjust the left value based on your desired position */
  transform: scale(0.15);
  z-index: 1;

  @media only screen and (max-width: 768px) {
  
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
bottom: 2rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;
`

const Center = styledComponents.button`
position: absolute;
top: ${props => props.click ? '105%' :'60%'  };
left: ${props => props.click ? '92%' :'50%'  };
transform: translate(-50%,-100%);
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
& span {
    transform: translateY(${props => props.click ? '10%' : '-200%'});
  }

& > img {
    width: 300px; /* Adjust the width value to your desired size */
    height: 332px; /* Adjust the height value to your desired size */
    /* Add any other desired CSS properties here */
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
background-color: blue;
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
background-color: red;
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
    const location = useLocation();

  const isHomePage = location.pathname === '/'; // Check if current page is the home page


    return ( 
        <MainContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <MapsModal showMapsModal={showMapsModal} setShowMapsModal={setShowMapsModal} />
        <SpotifyModal showSpotifyModal={showSpotifyModal} setShowSpotifyModal={setShowSpotifyModal} />
  
        {isHomePage && <SocialIcons setShowMapsModal={setShowMapsModal} setShowSpotifyModal={setShowSpotifyModal} />}
        

            <Container>    

                <RedDiv click={click} /> 
                <YellowDiv click={click} /> 

                <Center click={click}>
                    <img src={H} alt=""  />
                  
                </Center>

                <Leftlogo onClick={()=> handleClick()}>
                    <img src={logohorizon} alt="" className='horizonlogo' />                                    
                </Leftlogo>

                <Rightlogo>
                    <img src={uc} alt="" className='rightlogo' /> 
                    <img src={oweek} alt="" className='rightlogo' />                    
                </Rightlogo>
                
                <Tasklogo to="/">
  <motion.h2
    initial={{
      y: -1200,
      transition: { type: 'spring', duration: 1, delay: 1 }
    }}
    animate={{
      y: 0,
      transition: { type: 'spring', duration: 1, delay: 1 }
    }}
  
  >
    <img src={TaskLogo} alt="Task"  />
  </motion.h2>
</Tasklogo>


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
                <Ruleslogo to="/">
                <motion.h2
    initial={{
      y: -1200,
      transition: { type: 'spring', duration: 1, delay: 1 }
    }}
    animate={{
      y: 0,
      transition: { type: 'spring', duration: 1, delay: 1 }
    }}
  
  >
  <img src={RulesLogo} alt="Task"  />
  </motion.h2>
  
   
 
</Ruleslogo>
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
                <Aboutlogo to="/"> {/* Use the Aboutlogo component as a NavLink */}
                <motion.h2
    initial={{
      y: -1200,
      transition: { type: 'spring', duration: 1, delay: 1 }
    }}
    animate={{
      y: 0,
      transition: { type: 'spring', duration: 1, delay: 1 }
    }}
  
  >
      <img src={AboutLogo} alt="About" />
  </motion.h2>
          {/* Place the image inside the Aboutlogo NavLink */}
          </Aboutlogo>
          <Schedulelogo to="/"> {/* Use the Aboutlogo component as a NavLink */}
          <motion.h2
    initial={{
      y: -1200,
      transition: { type: 'spring', duration: 1, delay: 1 }
    }}
    animate={{
      y: 0,
      transition: { type: 'spring', duration: 1, delay: 1 }
    }}
  
  >
    <img src={ScheduleLogo} alt="About" />
  </motion.h2>
            {/* Place the image inside the Aboutlogo NavLink */}
          </Schedulelogo>
                <BottomBar>
              
                <About to="/about">
         
          <motion.h2
            initial={{
              y: -200,
              transition: { type: 'spring', duration: 1, delay: 1 }
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1, delay: 1 }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            About
          </motion.h2>
        </About>
                    <Schedule to="/schedule">
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
                        >Schedule</motion.h2>
                    </Schedule>
                </BottomBar>
            </Container>

            {click ? <Intro click={click}/> : null}
        </MainContainer>
     );
}
 
export default Home;