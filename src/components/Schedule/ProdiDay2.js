import logohorizon from '../../img/logo/horizonwhite.svg';
import oweek from '../../img/logo/oweekwhite.svg';
import uc from '../../img/logo/ucwhite.png';
import bg from '../../img/bg/Schedulebg.svg';
import topeng from '../../img/topeng/topeng4.svg';
import arrow from '../../img/arrow.svg';

import styledComponents from "styled-components";
import {motion} from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MapsModal from '../MapsModal';
import SpotifyModal from '../SpotifyModal';
import SocialIcons from '../../subcomponents/SocialIcons';
import PowerButton3 from '../../subcomponents/PowerButton3';

const MainContainer = styledComponents(motion.div)`
background-image: url(${bg});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
min-height: 100vh;
overflow:hidden;
position: relative;

h1 {
    font-size: 3em;
}

h2 {
    font-size: 1.3em;
}
`

const Container = styledComponents.div`
padding: 2rem;
`

const Rightlogo = styledComponents.div`
position: fixed;
right: calc(2rem);
z-index: 1;
display: flex;
gap: 10px;
`

const Leftlogo = styledComponents.div`
position: fixed;
left: calc(2rem);
z-index: 1;
`

const Content = styledComponents.div`
padding: 3vw 15vw;
display: flex;
flex-direction: column;
justify-content: center;
`

const Topeng = styledComponents(motion.img)`
width: 15vw;
position: fixed;
right: -5vw;
top: 50%;
`

const Flex = styledComponents.div`
display: flex;
align-items: center;
gap: 10px;
margin-bottom: 7px;
cursor: pointer;
`

const ProdiDay2 = () => {

    const [showMapsModal, setShowMapsModal] = useState(false);
    const [showSpotifyModal, setShowSpotifyModal] = useState(false);

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

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
                <PowerButton3 />
                
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
                    <h1>KETENTUAN PRODI DAY 2</h1>

                    <div>
                        <Flex onClick={toggleState === 1 ? () => toggleTab(0) : () => toggleTab(1)}>                            
                            <h3>IMT</h3>
                            <img src={arrow} className={toggleState === 1 ? "active-arrow" : ""} />
                        </Flex>                       
                        <div className={toggleState === 1 ? "maps active-maps" : "maps"}>
                            <p>Bolpen</p>
                            <p>Pensil</p>
                        </div>
                    </div>
                    <div>
                        <Flex onClick={toggleState === 2 ? () => toggleTab(0) : () => toggleTab(2)}>                            
                            <h3>VCD</h3>
                            <img src={arrow} className={toggleState === 2 ? "active-arrow" : ""} />
                        </Flex>                       
                        <div className={toggleState === 2 ? "maps active-maps" : "maps"}>
                            <p>Bolpen</p>
                            <p>Buku</p>
                        </div>
                    </div>
                </Content>

            </Container>
            <Topeng src={topeng} 
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            />
        </MainContainer>
     );
}
 
export default ProdiDay2;