import logohorizon from '../img/logo/horizonblack.svg';
import oweek from '../img/logo/oweekblack.svg';
import uc from '../img/logo/ucblack.png';
import bg from '../img/bg/Taskbg.svg';
import topeng from '../img/topeng/topeng3.svg';
import title from '../img/title/Task.svg';

import styledComponents from "styled-components";
import {motion} from 'framer-motion';
import PowerButton4 from '../subcomponents/PowerButton4';
import { Link } from 'react-router-dom';
import SocialIcons2 from '../subcomponents/SocialIcons2';
import MapsModal from './MapsModal';
import SpotifyModal from './SpotifyModal';
import { useState } from 'react';

const MainContainer = styledComponents(motion.div)`
background-image: url(${bg});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
height: 100vh;
width: 100vw;
overflow:hidden;
position: relative;

h1 {
    font-size: 3em;
}


h1, h2, p {
    color: black;
}
`

const Container = styledComponents.div`
padding: 2rem;
`

const Rightlogo = styledComponents.div`
position: absolute;
right: calc(2rem);
z-index: 1;
display: flex;
gap: 10px;
`

const Leftlogo = styledComponents.div`
position: absolute;
left: calc(2rem);
z-index: 1;
`

const Content = styledComponents.div`
padding: 3vw;
`

const Topeng = styledComponents(motion.img)`
width: 10vw;
position: absolute;
right: 5px;
bottom: 5px;
`

const Title = styledComponents.div`
display: flex;
align-items: center;
justify-content: center;
margin: 30px 0px;
padding-right: 10px;
`

const Task = () => {

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
            <SocialIcons2 setShowMapsModal={setShowMapsModal} setShowSpotifyModal={setShowSpotifyModal} />

            <Container>         
                <PowerButton4 />

                <Leftlogo>
                    <Link to="/">
                        <img src={logohorizon} alt="" width="120" /> 
                    </Link>                                    
                </Leftlogo>

                <Rightlogo>
                    <img src={oweek} alt="" width="55" /> 
                    <img src={uc} alt="" width="55" />                    
                </Rightlogo>

                <Content>
                    <Title>
                        <img src={title} alt="" width="175" />
                    </Title>
                </Content>
            </Container>
            <Topeng src={topeng} 
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            />
        </MainContainer>
     );
}
 
export default Task;