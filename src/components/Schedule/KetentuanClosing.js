import logohorizon from '../../img/logo/horizonwhite.svg';
import oweek from '../../img/logo/oweekwhite.svg';
import uc from '../../img/logo/ucwhite.png';
import bg from '../../img/bg/Schedulebg.svg';
import dot from '../../img/dot2.svg';

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

const Content = styledComponents.div`
padding: 3vw 15vw;
display: flex;
flex-direction: column;
justify-content: center;

@media only screen and (max-width: 768px) {
    padding: 5vh 8vw;
}
`

const Faq = styledComponents.div`
text-align: left;
`

const Flex = styledComponents.div`
display: flex;
align-items: center;
gap: 10px;
margin-bottom: 7px;
`

const Dot = styledComponents.img`
height: 15px;
`

const KetentuanClosing = () => {

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
                <PowerButton3 />
                
                <Leftlogo>
                    <Link to="/schedule">
                        <img src={logohorizon} alt="" className='horizonlogo' /> 
                    </Link>                                    
                </Leftlogo>

                <Rightlogo>
                    <img src={oweek} alt="" className='rightlogo' /> 
                    <img src={uc} alt="" className='rightlogo' />                    
                </Rightlogo>

                <Content>
                    <h1>KETENTUAN CLOSING</h1>

                    <Faq>
                        <Flex>
                            <Dot src={dot} />
                            <span>Untuk laki: Kemeja Putih, Celana panjang hitam, sepatu hitam formal.</span>
                        </Flex>
                        <Flex>
                            <Dot src={dot} />
                            <span>Untuk perempuan: Kemeja putih, baju tidak boleh menerawang,  rok dibawah lutut, flat shoes, dilarang menggunakan high heels.</span>
                        </Flex>
                        <Flex>
                            <Dot src={dot} />
                            <span>Trainee wajib melakukan absen pada jam 14:00- 15:00 (KLOTER 1)  dan 15:00- 16:00 (KLOTER 2) dengan ketentuan mobilisasi sesuai yang dijelaskan .Absen akan ditutup sesuai pembagian kloter absen masing-masing dan trainee yang belum melakukan absensi akan dianggap telat.</span>
                        </Flex>
                        <Flex>
                            <Dot src={dot} />
                            <span>Trainee wajib mematuhi protokol kesehatan dan menjaga kebersihan area selama acara Closing Oweek 2022 berlangsung.</span>
                        </Flex>
                        <Flex>
                            <Dot src={dot} />
                            <span>Trainee wajib menggunakan masker KF 94 berwarna putih dan membawa satu masker dengan tipe dan warna yang sama sebagai cadangan.</span>
                        </Flex>
                        <Flex>
                            <Dot src={dot} />
                            <span>Trainee diwajibkan membawa hand sanitizer/tissue basah.</span>
                        </Flex>
                        <Flex>
                            <Dot src={dot} />
                            <span>Trainee disarankan membawa tissue kering.</span>
                        </Flex>
                        <Flex>
                            <Dot src={dot} />
                            <span>Barcode akan mengarahkan ke google form, dimana trainee harus mengupload data diri dan foto selfie dengan layar led panggung yang menunjukkan jam.</span>
                        </Flex>
                        <Flex>
                            <Dot src={dot} />
                            <span>Trainee wajib mengikuti seluruh rangkaian acara closing dan Absen ulang akan dilakukan pada akhir acara closing.</span>
                        </Flex>
                        <Flex>
                            <Dot src={dot} />
                            <span>Trainee dapat menggunakan photobooth sesuai dengan jadwal yang diberikan.</span>
                        </Flex>
                    </Faq>
                </Content>

            </Container>
        </MainContainer>
     );
}
 
export default KetentuanClosing;