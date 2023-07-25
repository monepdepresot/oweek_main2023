import React, { useState } from 'react';
import styledComponents from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Intro from '../subcomponents/Intro';
import MapsModal from './MapsModal';
import SpotifyModal from './SpotifyModal';
import SocialIcons from '../subcomponents/SocialIcons';
import SocialIcons3 from '../subcomponents/SocialIcons3';
import ScheduleLogo from '../img/logo/icon-02.png';
import TaskLogo from '../img/logo/icon-01.png';
import RulesLogo from '../img/logo/icon-04.png';
import AboutLogo from '../img/logo/icon-03.png';
import logohorizon from '../img/logo/type.png';
import H from '../img/logo/erudite.png';
import oweek from '../img/logo/oweekwhite.png';
import uc from '../img/logo/ucwhite.png';
import bg from '../img/bg/main.png';


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


const Tasklogo = styledComponents(NavLink)`
  // ... (other styles)

  @media only screen (min-height:0px) and (max-height: 800px) {
 
  }

  

  
  @media only screen and (max-width: 1700px) {
    position: absolute;
    top: -15%;
    left: -20%;
    transform: scale(0.18);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
  @media only screen and (max-width: 1450px) {
    position: absolute;
    top: -15%;
    left: -30%;
    transform: scale(0.2);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
  @media only screen and (max-width: 1200px) {
    position: absolute;
    top: -15%;
    left: -40%;
    transform: scale(0.15);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
  @media only screen and (min-width: 1700px) {
    position: absolute;
    top: -15%;
    left: -20%;
    transform: scale(0.2);
    z-index: 1;
    cursor: pointer;
    height:100%;
  }
  @media only screen and (max-width: 993px) {
    position: absolute;
    top: -10%;
    left: -50%;
    transform: scale(0.15);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
  @media only screen and (max-width: 920px) {
    position: absolute;
    top: -10%;
    left: -55%;
    transform: scale(0.15);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
  @media only screen and (max-width: 830px) {
    position: absolute;
    top: -10%;
    left: -60%;
    transform: scale(0.15);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
  @media only screen and (max-width: 720px) {
    position: absolute;
    top: -10%;
    left: -60%;
    transform: scale(0.12);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
  @media only screen and (max-width: 630px) {
    position: absolute;
    top: -10%;
    left: -80%;
    transform: scale(0.12);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
  @media only screen and (max-width: 520px) {
    position: absolute;
    top: -10%;
    left: -90%;
    transform: scale(0.1);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
  @media only screen and (max-width: 500px) {
    position: absolute;
    top: -10%;
    left: -105%;
    transform: scale(0.1);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
  @media only screen and (max-width: 430px) {
    position: absolute;
    top: -50px;
    left: -520px;
    transform: scale(0.1);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
`;

const Ruleslogo = styledComponents(NavLink)`
  // ... (other styles)

  @media only screen and (min-width: 600px) {
   
  }

 

  @media only screen and (max-width: 1700px) {
    position: absolute;
    top: -15%;
    right: -20%;
    transform: scale(0.18);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
  @media only screen and (max-width: 1450px) {
    position: absolute;
    top: -15%;
    right: -30%;
    transform: scale(0.2);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
  @media only screen and (max-width: 1200px) {
    position: absolute;
    top: -15%;
    right: -40%;
    transform: scale(0.15);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
  @media only screen and (min-width: 1700px) {
    position: absolute;
    top: -15%;
    right: -20%;
    transform: scale(0.2);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
  
  @media only screen and (max-width: 993px) {
    position: absolute;
    top: -10%;
    right: -50%;
    transform: scale(0.15);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
  @media only screen and (max-width: 920px) {
    position: absolute;
    top: -10%;
    right: -55%;
    transform: scale(0.15);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
  @media only screen and (max-width: 830px) {
    position: absolute;
    top: -10%;
    right: -60%;
    transform: scale(0.15);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
  @media only screen and (max-width: 720px) {
    position: absolute;
    top: -10%;
    right: -60%;
    transform: scale(0.12);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
  @media only screen and (max-width: 630px) {
    position: absolute;
    top: -10%;
    right: -80%;
    transform: scale(0.12);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
  @media only screen and (max-width: 520px) {
    position: absolute;
    top: -10%;
    right: -90%;
    transform: scale(0.1);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
  @media only screen and (max-width: 500px) {
    position: absolute;
    top: -10%;
    right: -105%;
    transform: scale(0.1);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
  @media only screen and (max-width: 430px) {
    position: absolute;
    top: -50px;
    right: -520px;
    transform: scale(0.1);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
`;

const Aboutlogo = styledComponents(NavLink)`
  // ... (other styles)

  @media only screen and (max-width: 600px) {
   
  }

 

  
  @media only screen and (max-width: 1700px) {
    position: absolute;
    top: 15%;
    left: -10%;
    transform: scale(0.18);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
  @media only screen and (max-width: 1450px) {
    position: absolute;
    top: 15%;
    left: -15%;
    transform: scale(0.2);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
  @media only screen and (max-width: 1200px) {
    position: absolute;
    top: 15%;
    left: -25%;
    transform: scale(0.15);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
  @media only screen and (min-width: 1700px) {
    position: absolute;
    top: 15%;
    left: -10%;
    transform: scale(0.2);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
  @media only screen and (max-width: 993px) {
    position: absolute;
    top: 10%;
    left: -40%;
    transform: scale(0.15);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
  @media only screen and (max-width: 835px) {
    position: absolute;
    top: 10%;
    left: -50%;
    transform: scale(0.15);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
   @media only screen and (max-width: 720px) {
    position: absolute;
    top: 20%;
    left: -60%;
    transform: scale(0.12);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
  @media only screen and (max-width: 630px) {
    position: absolute;
    top: 20%;
    left: -80%;
    transform: scale(0.12);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
  @media only screen and (max-width: 520px) {
    position: absolute;
    top: 25%;
    left: -90%;
    transform: scale(0.1);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
  @media only screen and (max-width: 500px) {
    position: absolute;
    top: 20%;
    left: -105%;
    transform: scale(0.1);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
  @media only screen and (max-width: 430px) {
    position: absolute;
    top: 100px;
    left: -520px;
    transform: scale(0.1);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
`;

const Schedulelogo = styledComponents(NavLink)`
  // ... (other styles)

  @media only screen and (max-width: 600px) {
   
  }

  @media only screen and (min-width: 601px) {
   
  }


  @media only screen and (max-width: 1700px) {
    position: absolute;
    top: 15%;
    right: -10%;
    transform: scale(0.18);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
  @media only screen and (max-width: 1450px) {
    position: absolute;
    top: 15%;
    right: -15%;
    transform: scale(0.2);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
  @media only screen and (max-width: 1200px) {
    position: absolute;
    top: 15%;
    right: -25%;
    transform: scale(0.15);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
  @media only screen and (min-width: 1700px) {
    position: absolute;
    top: 15%;
    right: -10%;
    transform: scale(0.2);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
  @media only screen and (max-width: 993px) {
    position: absolute;
    top: 10%;
    right: -40%;
    transform: scale(0.15);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
  @media only screen and (max-width: 835px) {
    position: absolute;
    top: 10%;
    right: -50%;
    transform: scale(0.15);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
  @media only screen and (max-width: 720px) {
    position: absolute;
    top: 20%;
    right: -60%;
    transform: scale(0.12);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
  @media only screen and (max-width: 630px) {
    position: absolute;
    top: 20%;
    right: -80%;
    transform: scale(0.12);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
  @media only screen and (max-width: 520px) {
    position: absolute;
    top: 25%;
    right: -90%;
    transform: scale(0.1);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
  @media only screen and (max-width: 500px) {
    position: absolute;
    top: 20%;
    right: -105%;
    transform: scale(0.1);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }
  @media only screen and (max-width: 430px) {
    position: absolute;
    top: 100px;
    right: -520px;
    transform: scale(0.1);
    z-index: 1;
    cursor: pointer;
     height:100%;
  }

`;
const Schedule = styledComponents(NavLink)`
color: #FDFBF7;
position: absolute;
top: 85%;
right:27%;

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
@media only screen and (max-width: 768px) {
  bottom: 3rem;
}
`

const Center = styledComponents.button`
position: absolute;
top: ${props => props.click ? '105%' :'80%'  };
left: ${props => props.click ? '92%' :'50%'  };
transform: translate(-50%,-100%) scale(1.5);
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
height:100%;

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
  @media only screen and (max-width: 900px) {
    position: absolute;

    top: 70%;
    left: ${props => props.click ? '92%' :'50%'  };
    transform: translate(-50%,-100%) scale(1.5);
   
  }
  @media only screen and (min-width: 1700px) {
    position: absolute;
  

    left: ${props => props.click ? '92%' :'50%'  };
    transform: translate(-50%,-100%) scale(2);
   
  }
  @media only screen and (max-width: 1700px) {
    position: absolute;
  

    left: ${props => props.click ? '92%' :'50%'  };
    transform: translate(-50%,-100%) scale(1.7);
   
  }
  @media only screen and (max-width: 720px) {
    position: absolute;
    top: 70%;

    left: ${props => props.click ? '92%' :'50%'  };
    transform: translate(-50%,-100%) scale(1.2);
   
  }
  @media only screen and (max-width: 630px) {
    left: ${props => props.click ? '92%' :'50%'  };
    transform: translate(-50%,-100%) scale(1.2);
    position: absolute;
    top: 70%;
  
  }
  @media only screen and (max-width: 520px) {
    position: absolute;
    top: 70%;
    left: ${props => props.click ? '92%' :'50%'  };
    transform: translate(-50%,-100%) scale(1.2);

   
    
  }
  @media only screen and (max-width: 500px) {
    position: absolute;
    top: 70%;
    left: ${props => props.click ? '92%' :'50%'  };
    transform: translate(-50%,-100%) scale(1.2);
   
  }
  @media only screen and (max-width: 430px) {
    position: absolute;
    top: 70%;
    left: ${props => props.click ? '92%' :'50%'  };
    transform: translate(-50%,-100%) scale(1);
    
  }
  

`

const Rightlogo = styledComponents.div`
position: absolute;
right: calc(7rem);
z-index: 1;
display: flex;
gap: 10px;

@media only screen and (max-width: 768px) {
    gap: 5px;
    right: 1rem;
    top: 2rem;
}
`

const Leftlogo = styledComponents.div`
position: absolute;

left: calc(7rem);
z-index: 1;
cursor: pointer;
transform:scale(0.85);

@media only screen and (max-width: 768px) {
    gap: 5px;
    left: 1rem;
    top: 2rem;
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
  
        <SocialIcons></SocialIcons>
    
        

            <Container>    

                
                <Center >
                    <img src={H} alt=""  />
                  
                </Center>

                <Leftlogo >
                    <img src={logohorizon} alt="" className='horizonlogo' />                                    
                </Leftlogo>

                <Rightlogo>
                    <img src={uc} alt="" className='rightlogo' /> 
                    <img src={oweek} alt="" className='rightlogo' />                    
                </Rightlogo>
                
                <Tasklogo to="/task">
  <motion.h2
    initial={{
      y: -1200,
      transition: { type: 'spring', duration: 1, delay: 1 }
    }}
    animate={{
      y: 0,
      transition: { type: 'spring', duration: 1, delay: 1 }
    }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  
  >
    <img src={TaskLogo} alt="Task"  />
  </motion.h2>
</Tasklogo>


                
                <Ruleslogo to="/rules">
                <motion.h2
    initial={{
      y: -1200,
      transition: { type: 'spring', duration: 1, delay: 1 }
    }}
    animate={{
      y: 0,
      transition: { type: 'spring', duration: 1, delay: 1 }
    }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  
  >
  <img src={RulesLogo} alt="rules"  />
  </motion.h2>
  
   
 
</Ruleslogo>
               
                <Aboutlogo to="/about"> {/* Use the Aboutlogo component as a NavLink */}
                <motion.h2
    initial={{
      y: -1200,
      transition: { type: 'spring', duration: 1, delay: 1 }
    }}
    animate={{
      y: 0,
      transition: { type: 'spring', duration: 1, delay: 1 }
    }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  
  >
      <img src={AboutLogo} alt="About" />
  </motion.h2>
          {/* Place the image inside the Aboutlogo NavLink */}
          </Aboutlogo>
          <Schedulelogo to="/schedule"> {/* Use the Aboutlogo component as a NavLink */}
          <motion.h2
    initial={{
      y: -1200,
      transition: { type: 'spring', duration: 1, delay: 1 }
    }}
    animate={{
      y: 0,
      transition: { type: 'spring', duration: 1, delay: 1 }
    }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  
  >
    <img src={ScheduleLogo} alt="About" />
  </motion.h2>
            {/* Place the image inside the Aboutlogo NavLink */}
          </Schedulelogo>
               
              
                
            </Container>

            {click ? <Intro click={click}/> : null}
        </MainContainer>
     );
}

 
export default Home;
