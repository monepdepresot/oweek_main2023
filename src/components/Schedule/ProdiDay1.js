import logohorizon from '../../img/logo/horizonwhite.png';
import oweek from '../../img/logo/oweekwhite.svg';
import uc from '../../img/logo/ucwhite.png';
import bg from '../../img/bg/Schedulebg.svg';
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

@media only screen and (max-width: 768px) {
    h1 {
        font-size: 2.5em;
    }
    
    h2 {
        font-size: 1em;
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

const Flex = styledComponents.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 10px;
cursor: pointer;
`

const HiddenBox = styledComponents.div`
border-bottom: 2px solid white;
`

const Two = styledComponents.div`
display: flex;
justify-content: space-between;
`

const Isi = styledComponents.div`
text-align: left;
`

const Twoo = styledComponents.div`
width: 48%;
`

const Jurusan = styledComponents.div`

`

const ProdiDay1 = () => {

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
                    <Link to="/schedule">
                        <img src={logohorizon} alt="" className='horizonlogo' /> 
                    </Link>                                    
                </Leftlogo>

                <Rightlogo>
                    <img src={oweek} alt="" className='rightlogo' /> 
                    <img src={uc} alt="" className='rightlogo' />                    
                </Rightlogo>

                <Content>
                    <h1>PERLENGKAPAN PRODI DAY 1</h1>

                    <Two>
                        <Twoo>
                            <Jurusan>
                                <Flex onClick={toggleState === 1 ? () => toggleTab(0) : () => toggleTab(1)}>                            
                                    <h2>VCD</h2>
                                    <img src={arrow} className={toggleState === 1 ? "active-arrow" : ""} width="15" />
                                </Flex>        
                                <HiddenBox>
                                    <Isi className={toggleState === 1 ? "maps active-maps" : "maps"}>
                                        <p>Dresscode : kemeja hitam</p>
                                        <p>Alat tulis secukupnya</p>
                                        <p>Clipboard / Papan Klip</p>
                                        <p>Kertas / Buku Tulis</p>
                                    </Isi>
                                </HiddenBox>               
                            </Jurusan>
                            <Jurusan>
                                <Flex onClick={toggleState === 3 ? () => toggleTab(0) : () => toggleTab(3)}>                            
                                    <h2>ISB</h2>
                                    <img src={arrow} className={toggleState === 3 ? "active-arrow" : ""} width="15" />
                                </Flex>        
                                <HiddenBox>
                                    <Isi className={toggleState === 3 ? "maps active-maps" : "maps"}>
                                        <p>Dresscode:Kemeja putih/polo(dominan putih), celana panjang jeans(kecuali ripped jeans) / kain warna bebas</p>
                                        <p>Buku & Alat Tulis</p>
                                    </Isi>
                                </HiddenBox>               
                            </Jurusan>
                            <Jurusan>
                                <Flex onClick={toggleState === 5 ? () => toggleTab(0) : () => toggleTab(5)}>                            
                                    <h2>IMT</h2>
                                    <img src={arrow} className={toggleState === 5 ? "active-arrow" : ""} width="15" />
                                </Flex>        
                                <HiddenBox>
                                    <Isi className={toggleState === 5 ? "maps active-maps" : "maps"}>
                                        <p>Dresscode: Kemeja putih, celana panjang bebas namun rapi dan sopan ( tidak boleh ripped jeans atau semacamnya)</p>
                                        <p>Alat tulis (Bolpoin)</p>
                                    </Isi>
                                </HiddenBox>               
                            </Jurusan>
                            <Jurusan>
                                <Flex onClick={toggleState === 7 ? () => toggleTab(0) : () => toggleTab(7)}>                            
                                    <h2>IBM-IC</h2>
                                    <img src={arrow} className={toggleState === 7 ? "active-arrow" : ""} width="15" />
                                </Flex>        
                                <HiddenBox>
                                    <Isi className={toggleState === 7 ? "maps active-maps" : "maps"}>
                                        <p>Dresscode: Baju berkerah putih atau Kemeja berkerah putih, celana panjang hitam</p>
                                        <p>Buku Tulis</p>
                                        <p>Alat Tulis</p>
                                    </Isi>
                                </HiddenBox>               
                            </Jurusan>
                            <Jurusan>
                                <Flex onClick={toggleState === 9 ? () => toggleTab(0) : () => toggleTab(9)}>                            
                                    <h2>CBz</h2>
                                    <img src={arrow} className={toggleState === 9 ? "active-arrow" : ""} width="15" />
                                </Flex>        
                                <HiddenBox>
                                    <Isi className={toggleState === 9 ? "maps active-maps" : "maps"}>
                                        <p>Dresscode: Kemeja warna gelap & celana panjang bebas rapi, sepatu bebas rapi/ tertutup</p>
                                    </Isi>
                                </HiddenBox>               
                            </Jurusan>
                            <Jurusan>
                                <Flex onClick={toggleState === 11 ? () => toggleTab(0) : () => toggleTab(11)}>                            
                                    <h2>FPD</h2>
                                    <img src={arrow} className={toggleState === 11 ? "active-arrow" : ""} width="15" />
                                </Flex>        
                                <HiddenBox>
                                    <Isi className={toggleState === 11 ? "maps active-maps" : "maps"}>
                                        <p>Dresscode: earth toned semi formal (cewek bumi)</p>
                                        <p>Alat Tulis (Pensil, Penghapus, Bolpoint, Penggaris dan Buku Catatan)</p>
                                        <p>Alat Gambar/Mewarnai ( Pensil, Pensil warna, Drawing Pen, Crayon, dsb.)</p>
                                    </Isi>
                                </HiddenBox>               
                            </Jurusan>
                            <Jurusan>
                                <Flex onClick={toggleState === 13 ? () => toggleTab(0) : () => toggleTab(13)}>                            
                                    <h2>ACC</h2>
                                    <img src={arrow} className={toggleState === 13 ? "active-arrow" : ""} width="15" />
                                </Flex>        
                                <HiddenBox>
                                    <Isi className={toggleState === 13 ? "maps active-maps" : "maps"}>
                                        <p>Dresscode: Kemeja putih, celana panjang hitam kain/jeans warna gelap</p>
                                    </Isi>
                                </HiddenBox>               
                            </Jurusan>
                        </Twoo>
                        <Twoo>
                            <Jurusan>
                                <Flex onClick={toggleState === 2 ? () => toggleTab(0) : () => toggleTab(2)}>                            
                                    <h2>PSY</h2>
                                    <img src={arrow} className={toggleState === 2 ? "active-arrow" : ""} width="15" />
                                </Flex>        
                                <HiddenBox>
                                    <Isi className={toggleState === 2 ? "maps active-maps" : "maps"}>
                                        <p>Dresscode: Kemeja putih, celana panjang hitam</p>
                                        <p>Buku Tulis</p>
                                        <p>Alat Tulis</p>
                                    </Isi>
                                </HiddenBox>               
                            </Jurusan>                            
                            <Jurusan>
                                <Flex onClick={toggleState === 4 ? () => toggleTab(0) : () => toggleTab(4)}>                            
                                    <h2>INA</h2>
                                    <img src={arrow} className={toggleState === 4 ? "active-arrow" : ""} width="15" />
                                </Flex>        
                                <HiddenBox>
                                    <Isi className={toggleState === 4 ? "maps active-maps" : "maps"}>
                                        <p>Dresscode: Kemeja berkerah warna terang, Celana panjang warna hitam sopan (tidak boleh sobek-sobek), Sepatu warna bebas.</p>
                                        <p>Kertas gambar A3 (2 lembar / Trainee)</p>
                                        <p>Alat gambar (penggaris, pulpen, pensil, penghapus, alat warna) min 1 / trainee</p>
                                        <p>Laptop</p>
                                        <p>Tumblr</p>
                                        <p>Kaos berkerah</p>
                                        <p>Notes</p>
                                        <p>Obat - obatan pribadi</p>
                                        <p>Health protocol ( masker cadangan, hand sanitizer, dll )</p>
                                    </Isi>
                                </HiddenBox>               
                            </Jurusan>
                            <Jurusan>
                                <Flex onClick={toggleState === 6 ? () => toggleTab(0) : () => toggleTab(6)}>                            
                                    <h2>IBM-RC</h2>
                                    <img src={arrow} className={toggleState === 6 ? "active-arrow" : ""} width="15" />
                                </Flex>        
                                <HiddenBox>
                                    <Isi className={toggleState === 6 ? "maps active-maps" : "maps"}>
                                        <p>Dresscode: Baju Kerah atau Kemeja Hitam, Celana panjang hitam kain/jeans</p>
                                        <p>Kertas 1 - 2 lembar</p>
                                        <p>Bolpen</p>
                                    </Isi>
                                </HiddenBox>               
                            </Jurusan>
                            <Jurusan>
                                <Flex onClick={toggleState === 8 ? () => toggleTab(0) : () => toggleTab(8)}>                            
                                    <h2>HTB</h2>
                                    <img src={arrow} className={toggleState === 8 ? "active-arrow" : ""} width="15" />
                                </Flex>        
                                <HiddenBox>
                                    <Isi className={toggleState === 8 ? "maps active-maps" : "maps"}>
                                        <p>Dresscode: Kemeja putih, celana panjang kain warna hitam, sepatu bebas sopan</p>
                                        <p>Alat Tulis (Bolpen, notes, tip-ex)</p>
                                    </Isi>
                                </HiddenBox>               
                            </Jurusan>
                            <Jurusan>
                                <Flex onClick={toggleState === 10 ? () => toggleTab(0) : () => toggleTab(10)}>                            
                                    <h2>FTP</h2>
                                    <img src={arrow} className={toggleState === 10 ? "active-arrow" : ""} width="15" />
                                </Flex>        
                                <HiddenBox>
                                    <Isi className={toggleState === 10 ? "maps active-maps" : "maps"}>
                                        <p>Dresscode : Kaos putih berkerah + jeans gelap</p>
                                        <p>Buku Tulis + Alat Tulis</p>
                                    </Isi>
                                </HiddenBox>               
                            </Jurusan>
                            <Jurusan>
                                <Flex onClick={toggleState === 12 ? () => toggleTab(0) : () => toggleTab(12)}>                            
                                    <h2>COM</h2>
                                    <img src={arrow} className={toggleState === 12 ? "active-arrow" : ""} width="15" />
                                </Flex>        
                                <HiddenBox>
                                    <Isi className={toggleState === 12 ? "maps active-maps" : "maps"}>
                                        <p>Dresscode: kaos berkerah/kemeja warna hitam, celana panjang hitam</p>
                                        <p>Botol Minum</p>
                                        <p>Slayer</p>
                                    </Isi>
                                </HiddenBox>               
                            </Jurusan>
                            <Jurusan>
                                <Flex onClick={toggleState === 14 ? () => toggleTab(0) : () => toggleTab(14)}>                            
                                    <h2>MED</h2>
                                    <img src={arrow} className={toggleState === 14 ? "active-arrow" : ""} width="15" />
                                </Flex>        
                                <HiddenBox>
                                    <Isi className={toggleState === 14 ? "maps active-maps" : "maps"}>
                                        <p>Dresscode: Atasan putih berkerah dan berlengan (tidak diperkenankan memakai kaos), Celana panjang kain warna hitam, jilbab putih (bagi yang berjilbab), sepatu tertutup berwarna gelap.</p>
                                        <p>Buku/notes</p>
                                        <p>Alat Tulis</p>
                                        <p>Botol Minum berisi air mineral (tidak diperkenankan dengan gelas)</p>
                                    </Isi>
                                </HiddenBox>               
                            </Jurusan>
                        </Twoo>
                    </Two>
                </Content>

            </Container>
        </MainContainer>
     );
}
 
export default ProdiDay1;