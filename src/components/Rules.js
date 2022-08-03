import logohorizon from '../img/logo/horizonwhite.svg';
import oweek from '../img/logo/oweekwhite.svg';
import uc from '../img/logo/ucwhite.png';
import bg from '../img/bg/Rulesbg.svg';
import topeng from '../img/topeng/topeng1.svg';
import dot from '../img/dot1.svg';
import dot2 from '../img/dot3.svg';
import title from '../img/title/Rules.svg';
import title2 from '../img/title/PoinPCD.svg';

import styledComponents from "styled-components";
import {motion} from 'framer-motion';
import SocialIcons from "../subcomponents/SocialIcons";
import PowerButton from '../subcomponents/PowerButton2';
import { Link } from 'react-router-dom';
import MapsModal from './MapsModal2';
import SpotifyModal from './SpotifyModal2';
import { useState } from 'react';

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
padding: 3vw 15vw;
display: flex;
justify-content: center;
gap: 30px;
`

const Topeng = styledComponents(motion.img)`
width: 15vw;
position: fixed;
right: -5vw;
top: 50%;
`

const Aturan = styledComponents.div`
width: 100%;
`

const PoinPCD = styledComponents.div`
width: 100%;
`

const Isi = styledComponents(motion.div)`
border: 1px solid white;
`

const Point = styledComponents.div`
text-align: left;
padding: 0px 15px;
`

const RulesList = styledComponents.div`
text-align: left;
padding: 15px;
`

const Flex = styledComponents.div`
display: flex;
align-items: center;
gap: 10px;
margin-bottom: 5px;
`

const Flex2 = styledComponents.div`
display: flex;
align-items: center;
gap: 10px;
margin-top: 6px;
margin-bottom: 6px;
`

const Dot = styledComponents.img`
height: 15px;
`

const Title = styledComponents.div`
display: flex;
align-items: center;
justify-content: center;
margin: 30px 0px;
`

const Rules = () => {

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
                <PowerButton />

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
                    <Aturan>
                    <Title>
                        <img src={title} alt="" height="100" />
                    </Title>

                        <Isi
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        >
                            <RulesList>
                                <Flex2>
                                    <Dot src={dot2} />
                                    <span>Peraturan</span>
                                </Flex2>
                                <Flex2>
                                    <Dot src={dot2} />
                                    <span>Peraturan</span>
                                </Flex2>
                            </RulesList>                           
                        </Isi>
                    </Aturan>
                    <PoinPCD>
                    <Title>
                        <img src={title2} alt="" height="100" />
                    </Title>
                        <Isi
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        >
                            <Point>
                                <h2>4 Poin:</h2>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Kelompok pemenang Best Team</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Kelompok pemenang Best Tenant</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Kelompok pemenang Best Profit</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Kelompok pemenang 7 Competences of Entrepreneurship</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Pemenang Best Trainee</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Mahasiswa baru terpilih menjadi Best All Star</span>
                                </Flex>
                            </Point>
                            <Point>
                                <h2>3 Poin:</h2>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Mahasiswa baru terpilih menjadi All Star</span>
                                </Flex>
                            </Point>
                            <Point>
                                <h2>2 Poin:</h2>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Pemenang Tugas Twibbon (Prodi Day) </span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Mahasiswa baru terpilih menjadi Mr./Mrs. O-Week </span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Pemenang Best Networking +2 </span>
                                </Flex>
                            </Point>
                            <Point>
                                <h2>1 Poin:</h2>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Mahasiswa baru memimpin doa </span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Mahasiswa baru memimpin pembacaan 7 Competences of Entrepreneurship </span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Mahasiswa baru aktif bertanya/terlibat dalam acara</span>
                                </Flex>
                            </Point>
                            <Point>
                                <h2>Total Poin: 36 Poin</h2>
                            </Point>
                        </Isi>
                    </PoinPCD>
                </Content>
            </Container>
            <Topeng src={topeng} 
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            />
        </MainContainer>
     );
}
 
export default Rules;