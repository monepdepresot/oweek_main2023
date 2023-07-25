import logohorizon from '../img/logo/type.png';
import oweek from '../img/logo/oweekwhite.png';
import uc from '../img/logo/ucwhite.png';
import bg from '../img/bg/bgschedule.png';
import bgmobile from '../img/bg/bgschedule.png';
import topeng from '../img/topeng/topeng4.svg';
import dot from '../img/dot2.svg';
import location from '../img/location.svg';
import dresscode from '../img/dresscode.svg';
import calendar from '../img/calendar.svg';
import clock from '../img/clock.svg';
import title from '../img/title/Schedule.png';

import styledComponents from "styled-components";
import {motion} from 'framer-motion';
import SocialIcons from "../subcomponents/SocialIcons";
import PowerButton from '../subcomponents/PowerButton';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MapsModal from './MapsModal';
import SpotifyModal from './SpotifyModal';

const MainContainer = styledComponents(motion.div)`
background-image: url(${bg});
background-size: cover;
background-attachment: fixed;
background-repeat: no-repeat;
background-position: center;
min-height: 100vh;
overflow:hidden;
position: relative;

h1 {
    font-size: 3em;
}

h2, select {
    font-size: 1.3em;
}

@media only screen and (max-width: 768px) {
    background-image: url(${bgmobile});
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
    flex-direction: column;
    padding: 5vh 7vw;
}

@media only screen and (max-width: 1280px) {
    padding: 5vh 7vw;
}
`

const Topeng = styledComponents(motion.img)`
width: 15vw;
position: fixed;
right: -5vw;
top: 55%;
`

const Menu = styledComponents.div`
display: flex;
justify-content: center;
gap: 30px;
margin-bottom: 10px;

@media only screen and (max-width: 1024px) {
    gap: 20px;
}

@media only screen and (max-width: 768px) {
    display: none;
}
`

const Menu2 = styledComponents.div`
@media only screen and (min-width: 769px) {
  display: none;
}
`

const Isi = styledComponents.div`
display: flex;
justify-content: center;
gap: 30px;

@media only screen and (max-width: 768px) {
    flex-direction: column;
}
`

const Day = styledComponents(motion.div)`
width: 100%;
border: 1px solid #FFD700	;
`

const Rundown = styledComponents(motion.div)`
width: 100%;
border: 1px solid #FFD700	;
`

const Praucday = styledComponents(motion.div)`
width: 100%;
display: flex;
flex-direction: column;
gap: 30px;
`

const Table = styledComponents.table`
padding: 5px 15px;

@media only screen and (max-width: 768px) {
    padding: 5px 5px;
}
`

const Pad = styledComponents.div`
padding: 5px 15px;
text-align: left;
margin-bottom: 10px;
`

const Padd = styledComponents.div`
padding: 5px 15px;
text-align: left;
margin-top: 20px;
margin-bottom: 10px;
`

const Flex = styledComponents.div`
display: flex;
gap: 10px;
margin-bottom: 7px;
`

const Flexx = styledComponents.div`
display: flex;
gap: 10px;
margin-bottom: 11px;
`

const Dot = styledComponents.img`
height: 15px;
margin-top: 1px;
`

const Tabs = styledComponents.h2`
padding: 20px 10px;
cursor: pointer;
`

const IconCenter = styledComponents.div`
display: flex;
justify-content: center;
align-items: flex-start;
min-width: 25px;
margin-top: -1px;
`

const BoldSpan = styledComponents.span`
font-weight: 700;
`

const Title = styledComponents.div`
display: flex;
align-items: center;
justify-content: center;
margin: 30px 0px;
padding-right: 15px
`

// const ClosingDetail = styledComponents.h3`
// &:hover {
//     color: #00B984;
//     text-decoration: underline;
//     text-decoration-color: #00B984;
// }
// `

const Button = styledComponents.a`
background: #00B984;
padding: 6px 18px;
border: 2px solid #FDFBF7;
border-radius: 8px;
text-decoration: none;
color: #FDFBF7;
font-weight: 500;

&:hover{
  background: #FFC600;
}
`

const Subtitle = styledComponents.h3`
text-align: left;
padding: 0px 20px;
`

const Select = styledComponents.select`
-webkit-appearance: menulist;
-moz-appearance:none;
-ms-appearance:none;
outline:0;
box-shadow:none;
background:#FFC600;
flex: 1;
padding: 5px 15px;
color:#fff;
cursor:pointer;
font-size: 1em;
margin-bottom: 1.5rem;
border: 2px solid white;
border-radius: 5px;
text-align: center;
text-align-last: center;
`

const Br = styledComponents.br`
display: none;

@media (max-width: 500px) {
    display: initial;
}
`

const Center2 = styledComponents.div`
margin-bottom: 5px;

@media (max-width: 768px) {
    display: flex;
    justify-content: center;
}
`

const Schedule = () => {

    const [showMapsModal, setShowMapsModal] = useState(false);
    const [showSpotifyModal, setShowSpotifyModal] = useState(false);

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    const handleChange = event => {
        setToggleState(parseInt(event.target.value));
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
                    <Title>
                       <h1> SCHEDULE</h1>
                    </Title>

                    <Menu>
                        <Tabs className={toggleState === 1 ? "active-tabs" : ""} onClick={() => toggleTab(1)}>Upacara</Tabs>
                        <Tabs className={toggleState === 2 ? "active-tabs" : ""} onClick={() => toggleTab(2)}>Day 1</Tabs>
                        <Tabs className={toggleState === 3 ? "active-tabs" : ""} onClick={() => toggleTab(3)}>Day 2</Tabs>
                        <Tabs className={toggleState === 4 ? "active-tabs" : ""} onClick={() => toggleTab(4)}>Day 3</Tabs>
                        <Tabs className={toggleState === 5 ? "active-tabs" : ""} onClick={() => toggleTab(5)}>Day 4</Tabs>
                        <Tabs className={toggleState === 6 ? "active-tabs" : ""} onClick={() => toggleTab(6)}>Day 5</Tabs>
                        <Tabs className={toggleState === 7 ? "active-tabs" : ""} onClick={() => toggleTab(7)}>Day 6</Tabs>
                    </Menu>
                    <Menu2>
                        <Select
                            onChange={handleChange}
                        >
                            <option value="1">Upacara Bendera</option>
                            <option value="2">Day 1</option>
                            <option value="3">Day 2</option>
                            <option value="4">Day 3</option>
                            <option value="5">Day 4</option>
                            <option value="6">Day 5</option>
                            <option value="7">Day 6</option>
                        </Select>
                    </Menu2>

                    <div className={toggleState === 1 ? "maps active-maps" : "maps"}>
                        <Isi>
                            <Day
                            initial={{ opacity: 0, x: -25 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.5 }}
                            >
                                <h2>Upacara Bendera</h2>  
                                <Pad>                                    
                                    <Flex>
                                        <IconCenter><img src={calendar} /></IconCenter>                                       
                                        <BoldSpan>Kamis, 17 Agustus 2023</BoldSpan>
                                    </Flex> 
                                    <Flex>
                                        <IconCenter><img src={clock} /></IconCenter>                                       
                                        <BoldSpan> 06.30 WIB - selesai
</BoldSpan>
                                    </Flex> 
                                    <Flex>
                                        <IconCenter><img src={location} /></IconCenter>                                       
                                        <BoldSpan>Plaza Universitas Ciputra / Zoom</BoldSpan>
                                    </Flex> 
                                    <Flex>
                                        <IconCenter><img src={dresscode} /></IconCenter>                                       
                                        <BoldSpan>- Kemeja putih sopan rapi 
             <p><b>- Celana panjang hitam (no Ripped, no Leggings)</b></p>
             <p><b>- Sepatu hitam</b></p>
</BoldSpan>
                                    </Flex> 
                                    <h3>Syarat dan Ketentuan</h3>
                                    <Flex>
                                        <Dot src={dot} />
                                        <span>
1. Trainee WAJIB mengikuti seminar secara offline ataupun mandiri.
<p>2. Trainee yang tinggal di daerah Gerbang Kertosusila WAJIB mengikuti kegiatan secara OFFLINE (Gresik, Bangkalan, Mojokerto, Surabaya, Sidoarjo, dan Lamongan).

</p>
<p>3. Trainee WAJIB untuk mengikuti kegiatan seminar yang diadakan setelah upacara 17 Agustus.</p>
<p>4. Trainee WAJIB membuat video refleksi upacara dan seminar.</p>
<p><b>Ketentuan mengikuti upacara 17 Agustus secara mandiri: 

</b></p>
<p>1. Trainee yang TIDAK mengikuti kegiatan secara offline, WAJIB mengikuti upacara di daerah  dekat rumah masing dan WAJIB disertai dengan dokumentasi foto mengikuti upacara minimal setengah badan.
</p>
<p>
2. Trainee WAJIB melampirkan surat pernyataan mengikuti upacara dengan tanda tangan penyelenggara.
</p>
<p>
3. Trainee WAJIB mengikuti seminar secara mandiri via Zoom.
</p>
<p>
4. Trainee WAJIB membuat penugasan yang diberikan. (akan diinformasikan lebih lanjut)
</p>
</span>
                                    </Flex>
                                    {/* <Flex>
                                        <Dot src={dot} />
                                        <span>Guidebook Selling dapat diakses pada tombol di bawah:<br /> (NB: akses akan dibuka pada tanggal 17 Agustus 2022).
                                        <br /><br />                                                                            
                                        </span>
                                    </Flex>
                                    <Center2>
                                        <Button href='https://drive.google.com/drive/folders/1MPUfCjqOz-6H83g62KbnLr2wdZ76Zrtk?usp=sharing' target='_blank'>Guidebook</Button>
                                    </Center2>   */}
                                </Pad>    
                                                                                  
                            </Day>
                            {/* <Praucday>
                                <Rundown
                                initial={{ opacity: 0, x: 25 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.5 }}
                                >
                                    <h2>Pra UC Day</h2>
                                    <Pad>                                    
                                        <Flex>
                                            <IconCenter><img src={calendar} /></IconCenter>                                       
                                            <BoldSpan>Kamis, 25 Agustus 2022</BoldSpan>
                                        </Flex> 
                                        <Flex>
                                            <IconCenter><img src={clock} /></IconCenter>                                       
                                            <BoldSpan>08.00 - 12.30 WIB</BoldSpan>
                                        </Flex> 
                                        <h3>Platform: Live streaming Youtube</h3>
                                    </Pad>                                    
                                </Rundown>
                                <Rundown
                                initial={{ opacity: 0, x: 25 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.5 }}
                                >
                                    <h2>Parents Gathering</h2>
                                    <Pad>                                    
                                        <Flex>
                                            <IconCenter><img src={calendar} /></IconCenter>                                       
                                            <BoldSpan>Sabtu, 27 Agustus 2022</BoldSpan>
                                        </Flex> 
                                        <Flex>
                                            <Dot src={dot} />
                                            <span>Untuk undangan akan dikirimkan melalui email orang tua dan mahasiswa</span>
                                        </Flex>
                                        <Flex>
                                            <Dot src={dot} />
                                            <span>Untuk informasi lebih lanjut dapat menghubungi +62 813-3635-8191 (WA BMA)</span>
                                        </Flex>
                                        <p>Pendaftaran Parents Gathering: </p>
                                        <Center2>
                                            <Button href='https://bit.ly/PARENTSGATHERINGUC2022' target='_blank'>Daftar</Button>
                                        </Center2>
                                    </Pad>
                                    
                                </Rundown>
                            </Praucday> */}
                            
                        </Isi>
                    </div>
                    <div className={toggleState === 2 ? "maps active-maps" : "maps"}>
                        <Isi>
                        {/* <Day>
                            <h2>Opening & UC Day</h2>  
                            <h3>“The Exordium”</h3> 
                            <Pad>
                                <h3>Tujuan Day</h3>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Peserta Orientation Week 2022 diperkenalkan rangkaian kegiatan Orientation Week 2022</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Peserta Orientation Week 2022 mengenal lingkungan Universitas Ciputra Surabaya.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Peserta Orientation Week 2022 mengetahui gambaran secara detail Universitas Ciputra Surabaya.</span>
                                </Flex>
                            </Pad>    
                            <Pad>
                                <h3>7 Competencies</h3>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Integrity</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>High Sense of Achievement</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Long Life Learning</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Opportunity Creation</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Creativity & Innovation</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Calculated Risk Taking</span>
                                </Flex>
                            </Pad>  
                            <Pad>
                                <h3>Keperluan</h3>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Wajib menggunakan masker minimal 3 ply dan disarankan menggunakan masker KF94 atau KN95,</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Membawa buku tulis untuk mencatat.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Membawa pulpen.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Membawa name tag.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Membawa trainee O-Week card.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Membawa tumbler minum minimal 500ml.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Membawa masker cadangan dua lembar.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Membawa hand sanitizer (dibebaskan).</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Disarankan membawa tissue kering dan tissue basah.</span>
                                </Flex>
                            </Pad>                    
                        </Day> */}
                        <Rundown>
                            <h2>Day 1</h2>

                            <Subtitle>Opening</Subtitle>
                            <Table>
                                {/* <tbody>
                                
                                <tr>
                                    <td>06.00 - 07.00</td>
                                    <td>Registrasi Trainee</td>
                                </tr>
                                <tr>
                                    <td>07.00 - 07.55</td>
                                    <td>Opening</td>
                                </tr>
                                <tr>
                                    <td>07.55 - 08.00</td>
                                    <td>Flag Ceremony</td>
                                </tr>
                                <tr>
                                    <td>08.00 - 08.30</td>
                                    <td>Sambutan Ketua O-Week, Rektor, dan BMA</td>
                                </tr>
                                <tr>
                                    <td>08.30 - 08.40</td>
                                    <td>Prosesi Peresmian O-Week</td>
                                </tr>
                                <tr>
                                    <td>08.40 - 08.50</td>
                                    <td>Parade Pengenalan Divisi</td>
                                </tr>
                                <tr>
                                    <td>08.50 - 09.20</td>
                                    <td>Istirahat (Snack Time)</td>
                                </tr>
                                </tbody> */}
                            </Table>

                            <Subtitle>UC Day "Inception"</Subtitle>
                            
                       

                            <Table>
                            <span>
                        <p >
                            Trainee akan diperkenalkan pada acara O-Week 2023 dan Universitas Ciputra Surabaya, baik tentang nilai-nilai, visi misi, fasilitas, kurikulum, dan kegiatan kemahasiswaan melalui materi dan permainan.

                            </p>
                            </span>
                                {/* <tbody>
                            
                                <tr>
                                    <td>09.20 - 10.05</td>
                                    <td>Mobilisasi Trainee</td>
                                </tr>
                                <tr>
                                    <td>10.05 - 10.50</td>
                                    <td>Materi Elearn + Cis</td>
                                </tr>
                                <tr>
                                    <td>10.50 - 11.20</td>
                                    <td>Sesi QNA Kurikulum & Department</td>
                                </tr>
                                <tr>
                                    <td>11.20 - 12.20</td>
                                    <td>ISHOMA</td>
                                </tr>
                                <tr>
                                    <td>12.20 - 12.35</td>
                                    <td>Briefing game Campus Tour</td>
                                </tr>
                                <tr>
                                    <td>12.35 - 15.20</td>
                                    <td>Game Campus Tour</td>
                                </tr>
                                <tr>
                                    <td>15.20 - 15.35</td>
                                    <td>Mobilisasi Trainee</td>
                                </tr>
                                <tr>
                                    <td>15.35 - 16.00</td>
                                    <td>Briefing Next Day</td>
                                </tr>
                                </tbody> */}
                            </Table>
                            <Padd>
                                <Flexx>
                                    <IconCenter><img src={calendar} /></IconCenter>                                       
                                    <BoldSpan>Senin, 28 Agustus 2023</BoldSpan>
                                </Flexx> 
                                <Flex>
                                        <IconCenter><img src={clock} /></IconCenter>                                       
                                        <BoldSpan> 06.00 WIB - selesai
</BoldSpan>
                                    </Flex> 
                                <Flexx>
                                    <IconCenter><img src={location} /></IconCenter>                                       
                                    <BoldSpan> Plaza Universitas Ciputra Surabaya

</BoldSpan>
                                </Flexx>                     
                                <Flexx>
                                    <IconCenter><img src={dresscode} /></IconCenter>                                       
                                    <BoldSpan>- Kemeja Putih
<p>- Celana Panjang Jeans Berwarna Gelap (tidak sobek)</p>
<p>- Sepatu Sneakers (warna bebas)</p>
</BoldSpan>
                                </Flexx>                     
                            </Padd> 
                        </Rundown>
                    </Isi>
                    </div> 
                    <div className={toggleState === 3 ? "maps active-maps" : "maps"}>
                        <Isi>
                        <Day>
                       

                       
                            <h2>Day 2</h2>   
                            <Subtitle>“Potential Unfold”

</Subtitle>
<Subtitle>Pra-LDK

</Subtitle>
<Table>
    <p>Trainee akan mengikuti kegiatan latihan dasar kepemimpinan untuk membangun kemampuan memimpin dan mengembangkan kemampuan manajerial.
</p>
</Table>
                            {/* <h2>Pra LDK + MnG Trainee</h2> */}
                            {/* <Pad>
                                <h3>Tujuan Day</h3>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Mahasiswa mampu menjelaskan civitas akademik prodi.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Mahasiswa mampu menjelaskan academic roadmap / alur studi.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Mahasiswa mengetahui dan memahami kegiatan kemahasiswaan dibawah prodi (Student Union dan lain-lain).</span>
                                </Flex>
                            </Pad>     */}
                            {/* <Pad>
                                <h3>7 Competencies</h3>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Long Life Learning</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Networking</span>
                                </Flex>
                            </Pad>  */}
                            {/* <Pad>
                                <h3>Keperluan</h3>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Wajib menggunakan masker minimal 3 ply dan disarankan menggunakan masker KF94 atau KN95,</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Membawa buku tulis untuk mencatat.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Membawa pulpen.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Membawa name tag.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Membawa trainee O-Week card.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Membawa masker cadangan dua lembar.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Membawa hand sanitizer (dibebaskan).</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Disarankan membawa tissue kering dan tissue basah.</span>
                                </Flex>
                            </Pad>                      */}
                            <Padd>
                                <Flexx>
                                    <IconCenter><img src={calendar} /></IconCenter>                                       
                                    <BoldSpan>Selasa, 29 Agustus 2023</BoldSpan>
                                </Flexx> 
                                <Flex>
                                        <IconCenter><img src={clock} /></IconCenter>                                       
                                        <BoldSpan> 06.00 WIB - selesai
</BoldSpan>
                                    </Flex> 
                                <Flexx>
                                    <IconCenter><img src={location} /></IconCenter>                                       
                                    <BoldSpan> Plaza Universitas Ciputra Surabaya

</BoldSpan>
                                </Flexx>                     
                                <Flexx>
                                    <IconCenter><img src={dresscode} /></IconCenter>                                       
                                    <BoldSpan>- Kemeja Putih
<p>- Celana Panjang Jeans Berwarna Gelap (tidak sobek)</p>
<p>- Sepatu Sneakers (warna bebas)</p>
</BoldSpan>
                                </Flexx>             
                            </Padd>       
                        </Day>
                        {/* <Rundown>
                            <h2>Rundown</h2>
                            <Table>
                                <tbody>
                                <tr>
                                    <td>06.00 - 07.00</td>
                                    <td>Registrasi Trainee</td>
                                </tr>
                                <tr>
                                    <td>07.00 - 07.45  </td>
                                    <td>Briefing pagi (Plaza UC)</td>
                                </tr>
                                <tr>
                                    <td>07.45 - 08.00  </td>
                                    <td>Snack Time </td>
                                </tr>
                                <tr>
                                    <td>08.00 - 08.45  </td>
                                    <td>Mobilisasi ke prodi masing masing </td>
                                </tr>
                                <tr>
                                    <td>08.45 - 11.30  </td>
                                    <td>Prodi sesi 1</td>
                                </tr>
                                <tr>
                                    <td>11.30 - 12.30  </td>
                                    <td>ISHOMA</td>
                                </tr>
                                <tr>
                                    <td>12.30 - 14.45  </td>
                                    <td>Prodi sesi 2</td>
                                </tr>
                                <tr>
                                    <td>14.45 - 15.30  </td>
                                    <td>Mobilisasi ke Plaza</td>
                                </tr>
                                <tr>
                                    <td>15.30 - 15.45  </td>
                                    <td>Snack Time</td>
                                </tr>
                                <tr>
                                    <td>15.45 - 16.30  </td>
                                    <td>Briefing next day dan Closing</td>
                                </tr>
                                </tbody>
                            </Table>
                                                 
                        </Rundown> */}
                    </Isi>
                    </div> 
                    <div className={toggleState === 4 ? "maps active-maps" : "maps"}>
                        <Isi>
                        {/* <Day>
                            <h2>Prodi Day 2</h2>
                            <h3>“The Enhancement”</h3>
                            <Pad>
                                <h3>Tujuan Day</h3>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Mahasiswa mampu menjelaskan civitas akademik prodi.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Mahasiswa mampu menjelaskan academic roadmap / alur studi.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Mahasiswa mengetahui dan memahami kegiatan kemahasiswaan dibawah prodi (Student Union dan lain-lain).</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Memperluas dan membangun koneksi antara panitia dan peserta O-Week 2022.</span>
                                </Flex>
                            </Pad>        
                            <Pad>
                                <h3>7 Competencies</h3>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Long Life Learning</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Networking</span>
                                </Flex>
                            </Pad>  
                            <Pad>
                                <h3>Keperluan</h3>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Wajib menggunakan masker minimal 3 ply dan disarankan menggunakan masker KF94 atau KN95,</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Membawa buku tulis untuk mencatat.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Membawa pulpen.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Membawa name tag.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Membawa trainee O-Week card.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Membawa masker cadangan dua lembar.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Membawa hand sanitizer (dibebaskan).</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Disarankan membawa tissue kering dan tissue basah.</span>
                                </Flex>
                            </Pad>                 
                        </Day> */}
                        <Rundown>
                            <h2>Day 3</h2>
                            <Subtitle> “Perceive Propinquity”
</Subtitle>
<Subtitle> Prodi Day
</Subtitle>
                            {/* <Table>
                                <tbody>
                                <tr>
                                    <td>06.00 - 07.00</td>
                                    <td>Registrasi Trainee</td>
                                </tr>
                                <tr>
                                    <td>07.00 - 07.45</td>
                                    <td>Briefing pagi (Plaza UC)</td>
                                </tr>
                                <tr>
                                    <td>07.45 - 08.30</td>
                                    <td>Snack Time, Mobilisasi ke prodi masing masing </td>
                                </tr>
                                <tr>
                                    <td>08.30 - 11.30</td>
                                    <td>Prodi sesi 1</td>
                                </tr>
                                <tr>
                                    <td>11.30 - 12.30</td>
                                    <td>ISHOMA</td>
                                </tr>
                                <tr>
                                    <td>12.30 - 13.30</td>
                                    <td>Prodi sesi 2</td>
                                </tr>
                                <tr>
                                    <td>13.30 - 14.15</td>
                                    <td>Mobilisasi balik ke plaza</td>
                                </tr>
                                <tr>
                                    <td>14.15 - 16.15</td>
                                    <td>Meet n Greet Panitia</td>
                                </tr>
                                <tr>
                                    <td>16.15 - 17.00</td>
                                    <td>Snack Time, Briefing next day dan Closing</td>
                                </tr>
                                </tbody>
                            </Table> */}
                            <Padd>
                                <Flexx>
                                    <IconCenter><img src={calendar} /></IconCenter>                                       
                                    <BoldSpan>Rabu, 30 Agustus 2023</BoldSpan>
                                </Flexx> 
                                <Flex>
                                        <IconCenter><img src={clock} /></IconCenter>                                       
                                        <BoldSpan> 06.00 WIB - selesai
</BoldSpan>
                                    </Flex> 
                                <Flexx>
                                    <IconCenter><img src={location} /></IconCenter>                                       
                                    <BoldSpan> Plaza Universitas Ciputra Surabaya

</BoldSpan>
                                </Flexx>                     
                                <Flexx>
                                    <IconCenter><img src={dresscode} /></IconCenter>                                       
                                    <BoldSpan>-Sesuai ketentuan program studi masing-masing. 

</BoldSpan>
                                </Flexx>    
                                <h3>Tugas 1 Prodi Day</h3>
                              
                                        <Dot src={dot} />
                                        <span>
                                        Trainee memposting di IG pribadi Twibbon dari setiap Prodi.

</span>
<p><Dot src={dot} />
                                        <span>
                                        IG Trainee <b>TIDAK BOLEH</b> di private.

</span></p>
<p><Dot src={dot} />
                                        <span>
                                        Trainee <b>TIDAK DIPERKENANKAN</b> untuk menghapus postingan twibbon sampai acara O-Week berakhir.

</span></p>
<p><Dot src={dot} />
                                        <span>
                                        Deadline pengumpulan twibbon adalah <b>Hari-1 Prodi Day</b>. 


</span></p>
<h3>Tugas 2 Prodi Day WAJIB</h3>
                              
                              <Dot src={dot} />
                              <span>
                              Trainee membuat video kreatif tiktok <b>secara individu</b> tentang insight yang didapat.


</span>
<p><Dot src={dot} />
                              <span>
                              Isi konten video kreatif :
                              <p>1.Perkenalan diri berupa pantun </p>
                              <p>2.Video refleksi dari insight yang didapat
 </p>
                              <p>3.Closing dengan jargon O-week </p>

</span></p>
<p><Dot src={dot} />
                              <span>
                              Poin Perkenalan diri :
                              <p>1.Nama Lengkap </p>
                              <p>2.Nomor kelompok
 </p>
                              <p>3.Nama kelompok </p>
                              <p>4.Jurusan </p>

</span></p>
<p><Dot src={dot} />
                              <span>
                              Video TikTok minimal berdurasi selama 1 menit, dan maksimal 3 menit.

</span></p>
<p><Dot src={dot} />
                              <span>
                              Trainee <b>TIDAK BOLEH</b> menggunakan masker pada video refleksi.



</span></p>
<p><Dot src={dot} />
                              <span>
                              Trainee <b>WAJIB</b> memperlihatkan <b>MINIMAL</b> setengah badan.



</span></p>
<p><Dot src={dot} />
                              <span>
                              TikTok Trainee <b>TIDAK BOLEH</b> di private.


</span></p>
<p><Dot src={dot} />
                              <span>
                              Template caption & hashtag yang WAJIB dicantumkan, antara lain:
Perkenalkan nama saya (nama) dari (nomor kelompok-nama kelompok) jurusan (jurusan). 
#OWeekUCS #OWEEK2023 #ERUDITE
Wajib Tag :
@universitasciputra @oweekucs 



</span></p>

           
                            </Padd> 
                        </Rundown>
                    </Isi>
                    </div> 
                    <div className={toggleState === 5 ? "maps active-maps" : "maps"}>
                        <Isi>
                        {/* <Day>
                            <h2>Talkshow Day</h2>  
                            <h3>“Exploring the Horizon”</h3> 
                            <Pad>
                                <h3>Tujuan Day</h3>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Mahasiswa dapat menambah pengetahuan untuk mengembangkan creativity and innovation dalam memanfaatkan peluang yang ada dan dapat meningkatkan brand awareness untuk bisnisnya dengan berlandaskan integritas.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Mempersiapkan mahasiswa menjadi lebih bersinergi dengan mempertimbangkan nilai - nilai Pancasila dalam menyatukan setiap perbedaan sebagai kesatuan bangsa.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Mahasiswa mengetahui bagaimana cara melihat masalah yang terjadi di sekitar serta mengetahui cara merubah masalah menjadi peluang.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Memperkaya pengetahuan mahasiswa mengenai korupsi dan radikalisme.</span>
                                </Flex>
                            </Pad>    
                            <Pad>
                                <h3>7 Competencies</h3>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Long Life Learning</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Moral Integrity</span>
                                </Flex>
                            </Pad>  
                            <Pad>
                                <h3>Keperluan</h3>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Wajib menggunakan masker minimal 3 ply dan disarankan menggunakan masker KF94 atau KN95,</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Membawa buku tulis untuk mencatat.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Membawa pulpen.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Membawa name tag.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Membawa trainee O-Week card.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Membawa masker cadangan dua lembar.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Membawa hand sanitizer (dibebaskan).</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Disarankan membawa tissue kering dan tissue basah.</span>
                                </Flex>
                            </Pad>                   
                        </Day> */}
                        <Rundown>
                            <h2>Day 4</h2>
                            <Subtitle>“Emerging True Self”
</Subtitle>
<Subtitle>Talkshow Day
</Subtitle>
<Table>
    <p>Trainee akan mendengarkan talkshow bertema Kebangsaan dan Entrepreneur yang dibawakan oleh ahli-ahli dalam bidang tersebut.</p>
</Table>
                            {/* <Table>
                                <tbody>
                                <tr>
                                    <td>06.30 - 07.45</td>
                                    <td>Registrasi Trainee</td>
                                </tr>
                                <tr>
                                    <td>07.45 - 08.10</td>
                                    <td>Briefing Pagi</td>
                                </tr>
                                <tr>
                                    <td>08.10- 08.30</td>
                                    <td>Snack Time</td>
                                </tr>
                                <tr>
                                    <td>08.30- 10.00</td>
                                    <td>Seminar Sesi 1 : Becoming a True Indonesian</td>
                                </tr>
                                <tr>
                                    <td>10.00 - 10.30</td>
                                    <td>Istirahat</td>
                                </tr>
                                <tr>
                                    <td>10.30 - 11.40</td>
                                    <td>Seminar Sesi 2 : Creating Youthpreneur in Digital Era</td>
                                </tr>
                                <tr>
                                    <td>11.40 - 12.00</td>
                                    <td>Closing</td>
                                </tr>
                                </tbody>
                            </Table> */}
                            <Padd>
                                <Flexx>
                                    <IconCenter><img src={calendar} /></IconCenter>                                       
                                    <BoldSpan>Kamis, 31 September 2023</BoldSpan>
                                </Flexx> 
                                <Flex>
                                        <IconCenter><img src={clock} /></IconCenter>                                       
                                        <BoldSpan> 06.00 WIB - selesai
</BoldSpan>
                                    </Flex> 
                                <Flexx>
                                    <IconCenter><img src={location} /></IconCenter>                                       
                                    <BoldSpan> Multi Purpose Hall 4th Floor, Ciputra World Mall Surabaya 


</BoldSpan>
                                </Flexx>                     
                                <Flexx>
                                    <IconCenter><img src={dresscode} /></IconCenter>                                       
                                    <BoldSpan>- Batik Berkerah
<p>- Celana Kain Hitam</p>
<p>- Sepatu (bebas, menutupi jari & tumit)</p>
</BoldSpan>
                                </Flexx>           
                            </Padd> 
                        </Rundown>
                    </Isi>
                    </div> 
                    <div className={toggleState === 6 ? "maps active-maps" : "maps"}>
                        <Isi>
                        {/* <Day>
                            <h2>Selling Day</h2>
                            <h3>“Another Step to Luminosity”</h3>
                            <Pad>
                                <h3>Tujuan Day</h3>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Mengasah kemampuan mahasiswa baru Universitas Ciputra Surabaya dalam menemukan dan meresponi peluang yang ditemukan serta mengelola risiko yang sudah diperhitungkan.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Menanamkan kualitas yang mencerminkan sikap integritas melalui tindakan yang jujur, respek, konsisten dengan standar moral universal, dan bertanggung jawab dalam masyarakat.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Meningkatkan kemampuan mahasiswa untuk menjalin, mengembangkan, dan memelihara relasi dengan pihak internal maupun eksternal.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Mengajak mahasiswa baru Universitas Ciputra Surabaya agar menjadi individu yang memiliki kemauan untuk terus mengembangkan diri guna meraih prestasi setinggi-tingginya.</span>
                                </Flex>
                            </Pad>    
                            <Pad>
                                <h3>Tujuan MnG Trainee</h3>  
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Menambah relasi para mahasiswa baru dengan mahasiswa lainnya.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Mahasiswa baru dapat lebih mengenal mahasiswa lainnya.</span>
                                </Flex>

                            </Pad>   
                            <Pad>
                                <h3>7 Competencies</h3>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Integrity</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>High Sense of Achievement</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Long Life Learning</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Opportunity Creation</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Creativity & Innovation</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Calculated Risk Taking</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Networking</span>
                                </Flex>
                            </Pad> 
                            <Pad>
                                <h3>Keperluan</h3>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Wajib menggunakan masker minimal 3 ply dan disarankan menggunakan masker KF94 atau KN95,</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Membawa buku tulis untuk mencatat.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Membawa pulpen.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Membawa name tag.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Membawa trainee O-Week card.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Membawa masker cadangan dua lembar.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Membawa hand sanitizer (dibebaskan).</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Disarankan membawa tissue kering dan tissue basah.</span>
                                </Flex>
                            </Pad>                    
                        </Day> */}
                        <Rundown>
                            <h2>Day 5</h2>
                            <Subtitle>“Nusantara Heritage”</Subtitle>
                            <Subtitle>Selling Day</Subtitle>
                            <Table>
                                <p>Trainee menjalankan bisnis yang telah mereka rancang berdasarkan BMC secara nyata untuk membangun jiwa entrepreneur masing-masing.</p>
                            </Table>
                            {/* <Table>
                                <tbody>
                                <tr>
                                    <td>07.00 - 08.00 </td>
                                    <td>Registrasi Trainee</td>
                                </tr>
                                <tr>
                                    <td>08.00- 08.30 </td>
                                    <td>Briefing pagi</td>
                                </tr>
                                <tr>
                                    <td>08.30 - 10.30 </td>
                                    <td>Loading In + Final Booth Preparation</td>
                                </tr>
                                <tr>
                                    <td>10.30 - 11.00 </td>
                                    <td>Opening </td>
                                </tr>
                                <tr>
                                    <td>11.00 - 21.00 </td>
                                    <td>Selling Time</td>
                                </tr>
                                <tr>
                                    <td>21.00 - 22.00 </td>
                                    <td>Cleaning</td>
                                </tr>
                                </tbody>
                            </Table> 
                            <Subtitle>MnG Trainee</Subtitle> */}
                            {/* <Table>
                                <tbody>
                                    <tr>
                                        <td>13.00 - 13.30</td>
                                        <td>Trainee sesi 1 jalan ke <Br/>lokasi MnG sesi 1</td>
                                    </tr>
                                    <tr>
                                        <td>13.30 - 15.12</td>
                                        <td>MnG Trainee sesi 1</td>
                                    </tr>
                                    <tr>
                                        <td>15.12 - 15.42</td>
                                        <td>Trainee sesi 1 balik ke lokasi selling, trainee sesi 2 jalan ke lokasi MnG sesi 2</td>
                                    </tr>
                                    <tr>
                                        <td>15.42 - 17.25</td>
                                        <td>MnG Trainee sesi 2</td>
                                    </tr>
                                    <tr>
                                        <td>17.25 - 18.25</td>
                                        <td>ISHOMA</td>
                                    </tr>
                                    <tr>
                                        <td>18.25- 18.45</td>
                                        <td>Trainee sesi 3 jalan ke lokasi MnG sesi 3</td>
                                    </tr>
                                    <tr>
                                        <td>18.45- 20.27</td>
                                        <td>MnG Trainee sesi 3</td>
                                    </tr>
                                    <tr>
                                        <td>20.27- 20.47</td>
                                        <td>Trainee sesi 3 balik ke lokasi selling</td>
                                    </tr>
                                </tbody>
                            </Table> */}
                            <Padd>
                                <Flexx>
                                    <IconCenter><img src={calendar} /></IconCenter>                                       
                                    <BoldSpan>Jumat, 1 September 2023</BoldSpan>
                                </Flexx> 
                                <Flex>
                                        <IconCenter><img src={clock} /></IconCenter>                                       
                                        <BoldSpan> 06.00 WIB - selesai
</BoldSpan>
                                    </Flex> 
                                <Flexx>
                                    <IconCenter><img src={location} /></IconCenter>                                       
                                    <BoldSpan> Atrium Ground Floor, Ciputra World Mall Surabaya 

</BoldSpan>
                                </Flexx>                     
                                <Flexx>
                                    <IconCenter><img src={dresscode} /></IconCenter>                                       
                                    <BoldSpan>- Kaos Universitas Ciputra Surabaya
<p>- Celana Panjang Berwarna Gelap (tidak sobek)</p>
<p>- Sepatu Sneakers (warna bebas)</p>
<p>- Atribut/aksesoris Daerah (detail ketentuan menyusul)</p>
</BoldSpan>
                                </Flexx>           
                            </Padd>
                        </Rundown>
                    </Isi>
                    </div> 
                    <div className={toggleState === 7 ? "maps active-maps" : "maps"}>
                        <Isi>
                        {/* <Day>
                            <h2>Closing</h2>
                            <h3>“Unaccomplished Journey”</h3>
                            <Pad>
                                <h3>Tujuan Sidang Senat</h3>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Untuk melaksanakan proses peresmian seluruh calon mahasiswa baru Universitas Ciputra tahun ajaran 2022/2022 menjadi mahasiswa dan bagian dari keluarga besar Universitas Ciputra secara simbolik.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Sebagai pengukuhan menjadi mahasiswa Universitas Ciputra tahun ajaran 2022/2023.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Memiliki rasa bangga menjadi mahasiswa Universitas Ciputra.</span>
                                </Flex>
                            </Pad>    
                            <Pad>
                                <h3>Tujuan Day</h3>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Peserta Orientation Week 2022 dapat menutup rangkaian acara Orientation Week 2022 secara simbolik melalui kegiatan inagurasi.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Peserta Orientation Week 2022 dapat merefleksikan pelajaran yang didapat selama masa Orientation Week dan sebagai bentuk apresiasi terhadap para peserta Orientation Week 2022.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Peserta Orientation Week 2022 mampu mengembangkan softskill khususnya kepemimpinan, komunikasi, dan kerja sama.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Peserta Orientation Week 2022 mampu mengenal tujuan masing-masing dan memiliki semangat untuk mengejarnya selama berkuliah di Universitas Ciputra Surabaya.</span>
                                </Flex>
                            </Pad>    
                            <Pad>
                                <h3>7 Competencies</h3>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Moral Integrity</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>High Sense of Achievement</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Long Life Learning</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Opportunity Creation</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Creativity & Innovation</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Calculated Risk Taking</span>
                                </Flex>
                            </Pad>  
                            <Pad>
                                <h3>Keperluan</h3>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Wajib menggunakan masker minimal 3 ply dan disarankan menggunakan masker KF94 atau KN95,</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Membawa buku tulis untuk mencatat.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Membawa pulpen.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Membawa name tag.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Membawa trainee O-Week card.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Membawa masker cadangan dua lembar.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Membawa hand sanitizer (dibebaskan).</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Disarankan membawa tissue kering dan tissue basah.</span>
                                </Flex>
                            </Pad>                  
                        </Day> */}
                        <Rundown>
                            <h2>Day 6</h2>
                            <Subtitle>“Be Bond to Radiate”
</Subtitle>
<Subtitle>Closing
</Subtitle>
<Table>
    <p>Trainee akan mengikuti kegiatan peresmian Trainee menjadi mahasiswa Universitas Ciputra Surabaya melalui prosesi sidang senat.</p>
</Table>
                            {/* <Table>
                                <tbody>
                                <tr>
                                    <td>14.00 - 16.00 </td>
                                    <td>Registrasi Trainee</td>
                                </tr>
                                <tr>
                                    <td>16.00 - 17.30 </td>
                                    <td>Sidang Senat</td>
                                </tr>
                                <tr>
                                    <td>17.30 - 18.30 </td>
                                    <td>ISHOMA</td>
                                </tr>
                                <tr>
                                    <td>18.30 - 18.43 </td>
                                    <td>Opening Closing O'Week</td>
                                </tr>
                                <tr>
                                    <td>18.43 - 19.42 </td>
                                    <td>Awarding Night, Perform All Star & Mrs Mr O-week 2022</td>
                                </tr>
                                <tr>
                                    <td>19.42 - 21.00</td>
                                    <td>Performance & Closing Party</td>
                                </tr>
                                <tr>
                                    <td>21.00 - 22.00</td>
                                    <td>Special Performance</td>
                                </tr>
                                </tbody>
                            </Table> */}
                            <Padd>
                                <Flexx>
                                    <IconCenter><img src={calendar} /></IconCenter>                                       
                                    <BoldSpan>Sabtu, 2 September 2023</BoldSpan>
                                </Flexx> 
                                <Flex>
                                        <IconCenter><img src={clock} /></IconCenter>                                       
                                        <BoldSpan> 06.00 WIB - selesai
</BoldSpan>
                                    </Flex> 
                                <Flexx>
                                    <IconCenter><img src={location} /></IconCenter>                                       
                                    <BoldSpan>  Plaza Universitas Ciputra & Zoom  

</BoldSpan>
                                </Flexx>                     
                                <Flexx>
                                    <IconCenter><img src={dresscode} /></IconCenter>                                       
                                    <BoldSpan>- Kemeja Putih
<p>- Almamater UC</p>
<p><b>Perempuan</b></p>
<p>- Rok Hitam (panjang di bawah lutut)</p>
<p>- Flat Shoes (warna gelap)</p>
<p><b>Laki-Laki</b></p>
<p>- Celana Panjang Kain Hitam</p>
<p>- Sepatu Pantofel (warna gelap)
</p>
</BoldSpan>
                                </Flexx>               
                            </Padd>
                        </Rundown>
                    </Isi>
                    </div>                                        
                </Content>
            </Container>
            {/* <Topeng src={topeng} 
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            /> */}
        </MainContainer>
     );
}
 
export default Schedule;