import logohorizon from '../img/logo/horizonwhite.png';
import oweek from '../img/logo/oweekwhite.svg';
import uc from '../img/logo/ucwhite.png';
import bg from '../img/bg/Aboutbg.svg';
import bgmobile from '../img/bg/Aboutbgmobile.svg';
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
background: #E22B2B;
padding: 6px 18px;
border: 2px solid #FDFBF7;
border-radius: 8px;
text-decoration: none;
color: #FDFBF7;
font-weight: 500;

&:hover{
  background: #00B984;
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
                    <img src={oweek} alt="" className='rightlogo' /> 
                    <img src={uc} alt="" className='rightlogo' />                    
                </Rightlogo>

                <Content>
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    >                    
                        <h1>ABOUT O-WEEK</h1>
                        <IsiAbout>Orientation Week 2022 merupakan serangkaian acara dan kegiatan yang wajib diikuti oleh seluruh calon mahasiswa baru Universitas Ciputra 2022/2023. Orientation Week 2022 memiliki tujuan untuk memperkenalkan Universitas Ciputra kepada mahasiswa baru, sekaligus memberikan gambaran mengenai aktivitas apa saja yang akan dilakukan/dirasakan oleh mahasiswa selama berkuliah di Universitas Ciputra, serta membentuk mental dan ilmu dasar Entrepreneurship berdasarkan 7 Competencies of Entrepreneurship yang diciptakan oleh Bapak Ir. Ciputra.</IsiAbout>
                        <Button target="_blank" href="https://uc.ac.id/bma/">Website BMA</Button>
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <h1>ABOUT HORIZON</h1>
                        <IsiAbout>Tema HORIZON diambil dari perpaduan kata HOPE, RISE dan EMBLAZON. HOPE diartikan sebagai harapan baru dan cita-cita mahasiswa yang bersama-sama dipupuk dari awal melalui pembelajaran dan kegiatan selama O-Week berlangsung. RISE menggambarkan aksi dan tindakan nyata yang akan diadakan mampu membuat mahasiswa bertumbuh dan lebih mengerti jalur yang mereka tempuh. EMBLAZON merepresentasikan seluruh kegiatan yg berlangsung diharapkan memberi keleluasaan bagi mahasiswa untuk menghiasi masa depan yang akan mereka jalani setelah O-Week selesai. Trainee yang memulai perjalanannya di Universitas Ciputra yang harus melewati berbagai rintangan seperti O-Week, pra ldk, leadership, perkuliahan, kepanitiaan, organisasi hingga kompetisi untuk mencapai horizon yang telah mereka impikan. “Tidak ada jalan yang mudah untuk mencapai horizon namun ketika kita sudah sampai pada sebuah horizon kita semua setara.” Siapapun bisa berharap, bangkit, dan bertumbuh hingga menghiasi dalam bersama-sama mencari horizon.</IsiAbout>
                    </motion.div>
                </Content>
            </Container>
            <Topeng src={topeng} 
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            />
        </MainContainer>
     );
}
 
export default About;