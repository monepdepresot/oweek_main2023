import logohorizon from '../img/logo/type.png';
import oweek from '../img/logo/oweekwhite.png';
import uc from '../img/logo/ucwhite.png';
import bg from '../img/bg/bgabout.png';
import bgmobile from '../img/bg/bgabout.png';
import topeng from '../img/topeng/topeng2.svg';

import styledComponents from "styled-components";
import {motion} from 'framer-motion';
import SocialIcons from "../subcomponents/SocialIcons";
import PowerButton from '../subcomponents/PowerButton';
import { Link } from 'react-router-dom';
import MapsModal from './MapsModal';
import SpotifyModal from './SpotifyModal';
import { useState } from 'react';

const MainContainer = styledComponents(motion.div)`
background-image: url(${bg});
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
min-height: 100vh;
overflow:hidden;
position: relative;
text-align: left;

h1 {
    font-size: 3em;
}

p {
    text-align: justify;
}

@media only screen and (max-width: 768px) {
    background-image: url(${bgmobile});

    p {
        text-align: left;
        font-size: 14px;
    }
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
gap: 15px;

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

@media only screen and (max-width: 768px) {
    gap: 5px;
    left: 1rem;
    top: 1rem;
}
`

const Content = styledComponents.div`
padding: 3vw 15vw;
display: flex;
flex-direction: column;
gap: 5vh;


@media only screen and (max-width: 768px) {
    padding: 5vh 8vw;
}
`

const Button = styledComponents.a`
background: #6d2611;
padding: 6px 18px;
border: 2px solid #FDFBF7;
border-radius: 8px;
text-decoration: none;
color: #FDFBF7;
font-weight: 500;

&:hover{
  background: #e3c059;
}
`

const Topeng = styledComponents(motion.img)`
width: 15vw;
position: fixed;
right: -5vw;
top: 50%;
`

const IsiAbout = styledComponents.p`
line-height: 160%;
margin-bottom: 30px;
`

const About = () => {

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
                        <img src={logohorizon} alt="" className='horizonlogo' /> 
                    </Link>                                    
                </Leftlogo>

                <Rightlogo>
                <img src={uc} alt="" className='rightlogo' />              
                    <img src={oweek} alt="" className='rightlogo' /> 
                    
                          
                </Rightlogo>

                <Content>
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    >                    
                        <h1>ABOUT O-WEEK</h1>
                        <IsiAbout>
                        Orientation Week 2023 mengangkat tema “Erudite” yang diperkuat dengan slogan “Learn Together, Radiate Brighter.” “Erudite” sendiri berarti terpelajar atau menunjukkan pengetahuan yang tinggi, sehingga dapat berguna bagi orang di sekitar. Tema Erudite diusung untuk mendukung capaian Orientation Week dari universitas yakni mahasiswa mampu beradaptasi dengan lingkungan yang baru. Oleh karenanya kami menambahkan dua value yaitu “Kinship” yang bermakna menumbuhkan rasa kekeluargaan dan kebersamaan serta rasa saling membutuhkan, baik antar trainee, terhadap mentor, panitia, atau civitas academica Universitas Ciputra, serta “Radiate” yang berarti membantu dan mengajak trainee untuk memancarkan cahaya diri mereka masing-masing dan menerangkan jalan trainee lain melalui pancaran mereka. 
Selain itu pada Orientation Week 2023, “Erudite” juga tidak meninggalkan nilai-nilai IPE di Universitas Ciputra Surabaya yang terdiri dari Integrity, Professionalism, dan Entrepreneurship. Diharapkan mahasiswa yang mengikuti Orientation Week 2023 dapat menjadi seorang Entrepreneur yang dapat menginspirasi dan memberikan dampak positif bagi masyarakat.


                        </IsiAbout>
                        <Button target="_blank" href="https://uc.ac.id/bma/">Website BMA</Button>
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    >
                       
                    </motion.div>
                </Content>
            </Container>
            {/* <Topeng src={topeng} 
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            /> */}
        </MainContainer>
     );
}
 
export default About;