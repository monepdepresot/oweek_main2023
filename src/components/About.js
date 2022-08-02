import logohorizon from '../img/logo/horizonwhite.svg';
import oweek from '../img/logo/oweekwhite.svg';
import uc from '../img/logo/ucwhite.png';
import bg from '../img/bg/Aboutbg.svg';
import topeng from '../img/topeng/topeng2.svg';

import styledComponents from "styled-components";
import {motion} from 'framer-motion';
import SocialIcons from "../subcomponents/SocialIcons";
import PowerButton from '../subcomponents/PowerButton';
import { Link } from 'react-router-dom';

const MainContainer = styledComponents(motion.div)`
background-image: url(${bg});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
height: 100vh;
width: 100vw;
overflow:hidden;
position: relative;
text-align: left;

h1 {
    font-size: 3em;
}

p {
    text-align: justify;
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
flex-direction: column;
gap: 5vh;
`

const Button = styledComponents.a`
background: #E22B2B;
padding: 6px 18px;
border: 2px solid #FDFBF7;
border-radius: 8px;
text-decoration: none;
color: #FDFBF7;
font-weight: 500;
margin-top: 10px;

&:hover{
  background: #00B984;
}
`

const Topeng = styledComponents(motion.img)`
width: 15vw;
position: absolute;
right: -5vw;
top: 50%;
`

const About = () => {
    return ( 
        <MainContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        >
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
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    >                    
                        <h1>ABOUT O-WEEK</h1>
                        <p>Orientation Week 2022 merupakan serangkaian acara dan kegiatan yang wajib diikuti oleh seluruh calon mahasiswa baru Universitas Ciputra 2022/2023. Orientation Week 2022 memiliki tujuan untuk memperkenalkan Universitas Ciputra kepada mahasiswa baru, sekaligus memberikan gambaran mengenai aktivitas apa saja yang akan dilakukan/dirasakan oleh mahasiswa selama berkuliah di Universitas Ciputra, serta membentuk mental dan ilmu dasar Entrepreneurship berdasarkan 7 Competencies of Entrepreneurship yang diciptakan oleh Bapak Ir. Ciputra.</p>
                        <Button target="_blank" href="https://uc.ac.id/bma/">Website BMA</Button>
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h1>ABOUT HORIZON</h1>
                        <p>Orientation Week 2021 mengangkat tema ELEVATE dimana kegiatan Oweek adalah sebagai ajang untuk meningkatkan kualitas diri trainee. Dalam Orientation Week 2021 Universitas Ciputra, mahasiswa baru diajak untuk menerapkan ELEVATE yang didasarkan pada nilai-nilai IPE (Integritas, Profesionalisme, dan Entrepreneurship) yang dijunjung tinggi oleh Universitas Ciputra. Visi dari Orientation Week 2021 adalah agar trainee dapat menyusun anak tangga mereka sendiri dan naik ke tempat yang lebih tinggi lagi, serta dapat menentukan tujuan hidup atau cita-cita mereka. Visi ini diimplikasikan kedalam slogan Orientation Week 2021 yaitu "levitate yourself higher".</p>
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