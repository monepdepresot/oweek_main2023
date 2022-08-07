import logohorizon from '../img/logo/horizonwhite.svg';
import oweek from '../img/logo/oweekwhite.svg';
import uc from '../img/logo/ucwhite.png';
import bg from '../img/bg/Schedulebg.svg';
import bgmobile from '../img/bg/Schedulebgmobile.svg';
import topeng from '../img/topeng/topeng4.svg';
import dot from '../img/dot2.svg';
import location from '../img/location.svg';
import dresscode from '../img/dresscode.svg';
import calendar from '../img/calendar.svg';
import title from '../img/title/Schedule.svg';

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
border: 1px solid white;
`

const Rundown = styledComponents(motion.div)`
width: 100%;
border: 1px solid white;
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

const Flex = styledComponents.div`
display: flex;
align-items: center;
gap: 10px;
margin-bottom: 7px;
`

const Dot = styledComponents.img`
height: 15px;
`

const Tabs = styledComponents.h2`
padding: 2px 3px;
cursor: pointer;
`

const IconCenter = styledComponents.div`
display: flex;
justify-content: center;
align-items: center;
min-width: 25px;
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

const ClosingDetail = styledComponents.h3`
&:hover {
    color: #00B984;
    text-decoration: underline;
    text-decoration-color: #00B984;
}
`

const Subtitle = styledComponents.h3`
text-align: left;
padding: 0px 20px;
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
                    <img src={oweek} alt="" className='rightlogo' /> 
                    <img src={uc} alt="" className='rightlogo' />                    
                </Rightlogo>

                <Content>
                    <Title>
                        <img src={title} alt="" width="220" />
                    </Title>

                    <Menu>
                        <Tabs className={toggleState === 1 ? "active-tabs" : ""} onClick={() => toggleTab(1)}>Pra UC Day</Tabs>
                        <Tabs className={toggleState === 2 ? "active-tabs" : ""} onClick={() => toggleTab(2)}>Day 1</Tabs>
                        <Tabs className={toggleState === 3 ? "active-tabs" : ""} onClick={() => toggleTab(3)}>Day 2</Tabs>
                        <Tabs className={toggleState === 4 ? "active-tabs" : ""} onClick={() => toggleTab(4)}>Day 3</Tabs>
                        <Tabs className={toggleState === 5 ? "active-tabs" : ""} onClick={() => toggleTab(5)}>Day 4</Tabs>
                        <Tabs className={toggleState === 6 ? "active-tabs" : ""} onClick={() => toggleTab(6)}>Day 5</Tabs>
                        <Tabs className={toggleState === 7 ? "active-tabs" : ""} onClick={() => toggleTab(7)}>Day 6</Tabs>
                    </Menu>
                    <Menu2>
                        <select
                            onChange={handleChange}
                        >
                            <option value="1">Pra UC Day</option>
                            <option value="2">Day 1</option>
                            <option value="3">Day 2</option>
                            <option value="4">Day 3</option>
                            <option value="5">Day 4</option>
                            <option value="6">Day 5</option>
                            <option value="7">Day 6</option>
                        </select>
                    </Menu2>

                    <div className={toggleState === 1 ? "maps active-maps" : "maps"}>
                        <Isi>
                            <Day
                            initial={{ opacity: 0, x: -25 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.5 }}
                            >
                                <h2>Pra UC Day</h2>  
                                <Pad>
                                    <h3>Platform: Live streaming youtube</h3>
                                    <Flex>
                                        <IconCenter><img src={calendar} /></IconCenter>                                       
                                        <BoldSpan>25 Agustus 2022</BoldSpan>
                                    </Flex> 
                                </Pad>                                                      
                            </Day>
                            <Rundown
                            initial={{ opacity: 0, x: 25 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.5 }}
                            >
                                <h2>Rundown</h2>
                                <Table>
                                    <tbody>
                                    <tr>
                                        <td>08.00 - 08.15</td>
                                        <td>Opening</td>
                                    </tr>
                                    <tr>
                                        <td>08.15 - 08.45</td>
                                        <td>Visi misi uc</td>
                                    </tr>
                                    <tr>
                                        <td>08.45 - 09.15</td>
                                        <td>Kurikulum mahasiswa dan akademik</td>
                                    </tr>
                                    <tr>
                                        <td>09.15 - 09.45</td>
                                        <td>Pengenalan departemen</td>
                                    </tr>
                                    <tr>
                                        <td>09.45 - 10.15</td>
                                        <td>Break</td>
                                    </tr>
                                    <tr>
                                        <td>10.15 - 10.45</td>
                                        <td>Virtual Campus Tour</td>
                                    </tr>
                                    <tr>
                                        <td>10.45 - 12.15</td>
                                        <td>Pengenalan organisasi & ukm</td>
                                    </tr>
                                    <tr>
                                        <td>12.15 - 12.30</td>
                                        <td>Video persiapan hari h</td>
                                    </tr>
                                    <tr>
                                        <td>12.30 - 12.40</td>
                                        <td>Closing</td>
                                    </tr>
                                    </tbody>
                                </Table> 
                            </Rundown>
                        </Isi>
                    </div>
                    <div className={toggleState === 2 ? "maps active-maps" : "maps"}>
                        <Isi>
                        <Day>
                            <h2>Opening & UC Day</h2>   
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
                                                  
                        </Day>
                        <Rundown>
                            <h2>Rundown</h2>

                            <Subtitle>Opening</Subtitle>
                            <Table>
                                <tbody>
                                
                                <tr>
                                    <td>06.00 - 07.00</td>
                                    <td>Registrasi Trainee</td>
                                </tr>
                                <tr>
                                    <td>07.00 - 07.50</td>
                                    <td>Opening</td>
                                </tr>
                                <tr>
                                    <td>07.50 - 07.55</td>
                                    <td>Flag Ceremony</td>
                                </tr>
                                <tr>
                                    <td>07.55 - 08.25</td>
                                    <td>Sambutan Ketua O-Week, Rektor, dan BMA</td>
                                </tr>
                                <tr>
                                    <td>08:25 - 08:35</td>
                                    <td>Prosesi Peresmian O-Week</td>
                                </tr>
                                <tr>
                                    <td>08:35 - 08:45</td>
                                    <td>Parade Pengenalan Divisi</td>
                                </tr>
                                <tr>
                                    <td>08:45 - 09:00</td>
                                    <td>Briefing BAA</td>
                                </tr>
                                <tr>
                                    <td>09:00 - 09:20</td>
                                    <td>Istirahat (Snack Time)</td>
                                </tr>
                                </tbody>
                            </Table>

                            <Subtitle>UC Day</Subtitle>

                            <Table>
                                <tbody>
                            
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
                                    <td>Sesi QNA Kur + Dep</td>
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
                                    <td>15.20 - 16.05</td>
                                    <td>Mobilisasi Trainee</td>
                                </tr>
                                <tr>
                                    <td>16.05 - 16.20</td>
                                    <td>Briefing Next Day</td>
                                </tr>
                                </tbody>
                            </Table>
                            <Pad>
                                <Flex>
                                    <IconCenter><img src={calendar} /></IconCenter>                                       
                                    <BoldSpan>29 Agustus 2022</BoldSpan>
                                </Flex> 
                                <Flex>
                                    <IconCenter><img src={location} /></IconCenter>                                       
                                    <BoldSpan>Mural Universitas Ciputra</BoldSpan>
                                </Flex>                     
                                <Flex>
                                    <IconCenter><img src={dresscode} /></IconCenter>                                       
                                    <BoldSpan>Kemeja Putih, celana jeans berwarna gelap (tidak sobek), sepatu sneakers</BoldSpan>
                                </Flex>                     
                            </Pad> 
                        </Rundown>
                    </Isi>
                    </div> 
                    <div className={toggleState === 3 ? "maps active-maps" : "maps"}>
                        <Isi>
                        <Day>
                            <h2>Prodi Day 1</h2>   
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
                                <Link to="/prodiday1">
                                    <ClosingDetail>Perlengkapan Prodi Day 1</ClosingDetail>
                                </Link>                                
                            </Pad>                     
                        </Day>
                        <Rundown>
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
                            <Pad>
                                <Flex>
                                    <IconCenter><img src={calendar} /></IconCenter>                                       
                                    <BoldSpan>30 Agustus 2022</BoldSpan>
                                </Flex> 
                                <Flex>
                                    <IconCenter><img src={location} /></IconCenter>                                       
                                    <BoldSpan>Universitas Ciputra</BoldSpan>
                                </Flex>           
                                <Flex>
                                    <IconCenter><img src={dresscode} /></IconCenter>                                       
                                    <BoldSpan>Sesuai ketentuan prodi</BoldSpan>
                                </Flex>           
                            </Pad>                            
                        </Rundown>
                    </Isi>
                    </div> 
                    <div className={toggleState === 4 ? "maps active-maps" : "maps"}>
                        <Isi>
                        <Day>
                            <h2>Prodi Day 2</h2>
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
                                <Link to="/prodiday2">
                                    <ClosingDetail>Perlengkapan Prodi Day 2</ClosingDetail>
                                </Link>                                
                            </Pad>                   
                        </Day>
                        <Rundown>
                            <h2>Rundown</h2>
                            <Table>
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
                            </Table>
                            <Pad>
                                <Flex>
                                    <IconCenter><img src={calendar} /></IconCenter>                                       
                                    <BoldSpan>31 Agustus 2022</BoldSpan>
                                </Flex> 
                                <Flex>
                                    <IconCenter><img src={location} /></IconCenter>                                       
                                    <BoldSpan>Universitas Ciputra</BoldSpan>
                                </Flex>     
                                <Flex>
                                    <IconCenter><img src={dresscode} /></IconCenter>                                       
                                    <BoldSpan>Sesuai ketentuan prodi</BoldSpan>
                                </Flex>                  
                            </Pad> 
                        </Rundown>
                    </Isi>
                    </div> 
                    <div className={toggleState === 5 ? "maps active-maps" : "maps"}>
                        <Isi>
                        <Day>
                            <h2>Talkshow</h2>   
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
                            </Pad>  
                                                  
                        </Day>
                        <Rundown>
                            <h2>Rundown</h2>
                            <Table>
                                <tbody>
                                <tr>
                                    <td>06.00 - 07.00</td>
                                    <td>Registrasi Trainee</td>
                                </tr>
                                <tr>
                                    <td>07.00 - 07.30</td>
                                    <td>Briefing Pagi</td>
                                </tr>
                                <tr>
                                    <td>07.30 - 07.45</td>
                                    <td>Ice Breaking</td>
                                </tr>
                                <tr>
                                    <td>07.45 - 08.00</td>
                                    <td>Sambutan</td>
                                </tr>
                                <tr>
                                    <td>08.00 - 09.15 </td>
                                    <td>Seminar Sesi 1 : Becoming a True Indonesian</td>
                                </tr>
                                <tr>
                                    <td>09.15 - 09.35</td>
                                    <td>BREAK</td>
                                </tr>
                                <tr>
                                    <td>09.35 - 09.50</td>
                                    <td>Performance</td>
                                </tr>
                                <tr>
                                    <td>09.50 - 10.00</td>
                                    <td>Ice Breaking</td>
                                </tr>
                                <tr>
                                    <td>10.00 - 11.15</td>
                                    <td>Seminar Sesi 2 : Creating Youthpreneur in Digital Era</td>
                                </tr>
                                <tr>
                                    <td>11.15 - 11.30</td>
                                    <td>Closing</td>
                                </tr>
                                </tbody>
                            </Table>
                            <Pad>
                                <Flex>
                                    <IconCenter><img src={calendar} /></IconCenter>                                       
                                    <BoldSpan>1 September 2022</BoldSpan>
                                </Flex> 
                                <Flex>
                                    <IconCenter><img src={location} /></IconCenter>                                       
                                    <BoldSpan>Ciputra World Exhibition Hall</BoldSpan>
                                </Flex>      
                                <Flex>
                                    <IconCenter><img src={dresscode} /></IconCenter>                                       
                                    <BoldSpan>Baju batik, celana panjang kain hitam, sepatu sneakers</BoldSpan>
                                </Flex>                 
                            </Pad> 
                        </Rundown>
                    </Isi>
                    </div> 
                    <div className={toggleState === 6 ? "maps active-maps" : "maps"}>
                        <Isi>
                        <Day>
                            <h2>Selling Day</h2>
                            <Pad>
                                <h3>Tujuan Day</h3>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Menjadi sarana bagi mahasiswa baru Universitas Ciputra Surabaya untuk menerapkan nilai entrepreneurship secara riil melalui perencanaan ide bisnis dan implementasinya dalam kegiatan Selling Day.</span>
                                </Flex>
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
                                                  
                        </Day>
                        <Rundown>
                            <h2>Rundown</h2>
                            <Table>
                                <tbody>
                                <tr>
                                    <td>07.00 - 08.00 </td>
                                    <td>Registrasi Trainee</td>
                                </tr>
                                <tr>
                                    <td>08.00 - 08.30 </td>
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
                            <Pad>
                                <Flex>
                                    <IconCenter><img src={calendar} /></IconCenter>                                       
                                    <BoldSpan>2 September 2022</BoldSpan>
                                </Flex> 
                                <Flex>
                                    <IconCenter><img src={location} /></IconCenter>                                       
                                    <BoldSpan>Atrium Ciputra World Mall Surabaya</BoldSpan>
                                </Flex>  
                                <Flex>
                                    <IconCenter><img src={dresscode} /></IconCenter>                                       
                                    <BoldSpan>Baju O-Week, celana panjang (gelap tidak sobek), dan bersepatu hitam</BoldSpan>
                                </Flex>                 
                            </Pad>
                        </Rundown>
                    </Isi>
                    </div> 
                    <div className={toggleState === 7 ? "maps active-maps" : "maps"}>
                        <Isi>
                        <Day>
                            <h2>Closing</h2>
                            <Pad>
                                <h3>Tujuan Sidang Senat</h3>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Untuk menjadikan sebuah acara formal peresmian mahasiswa baru untuk menjadi mahasiswa dan bagian dari keluarga Universitas Ciputra secara simbolik.</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Pengukuhan menjadi mahasiswa UC</span>
                                </Flex>
                                <Flex>
                                    <Dot src={dot} />
                                    <span>Memiliki rasa bangga menjadi mahasiswa UC</span>
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
                                                   
                        </Day>
                        <Rundown>
                            <h2>Rundown</h2>
                            <Table>
                                <tbody>
                                <tr>
                                    <td>15.00 - 16.00 </td>
                                    <td>Registrasi Trainee</td>
                                </tr>
                                <tr>
                                    <td>16.00 - 16.30 </td>
                                    <td>Persiapan Sidang Senat</td>
                                </tr>
                                <tr>
                                    <td>16.30 - 18.00 </td>
                                    <td>Sidang Senat</td>
                                </tr>
                                <tr>
                                    <td>18.00 - 19.30 </td>
                                    <td>ISHOMA</td>
                                </tr>
                                <tr>
                                    <td>19.30 - 19.44 </td>
                                    <td>Opening Closing O'Week</td>
                                </tr>
                                <tr>
                                    <td>19.44 - 20.36 </td>
                                    <td>Awarding, All Star, Mr and Mrs O'Week</td>
                                </tr>
                                <tr>
                                    <td>20.36 - 20.41 </td>
                                    <td>Performance by UKM</td>
                                </tr>
                                <tr>
                                    <td>20.41 - 20.58 </td>
                                    <td>Flashmob, Lagu Panitia & Aftermovie</td>
                                </tr>
                                <tr>
                                    <td>20.58 - 21.58 </td>
                                    <td>External Performance</td>
                                </tr>
                                <tr>
                                    <td>21.58 - 22.08 </td>
                                    <td>Closing</td>
                                </tr>
                                </tbody>
                            </Table>
                            <Pad>
                                <Flex>
                                    <IconCenter><img src={calendar} /></IconCenter>                                       
                                    <BoldSpan>3 September 2022</BoldSpan>
                                </Flex> 
                                <Flex>
                                    <IconCenter><img src={location} /></IconCenter>                                       
                                    <BoldSpan>Palimanan Resto & Cafe</BoldSpan>
                                </Flex>                     
                                <Flex>
                                    <IconCenter><img src={dresscode} /></IconCenter>                                       
                                    <BoldSpan>Kemeja putih, jas hitam, rok hitam,flat shoes (cewek), celana panjang hitam kain,sepatu hitam formal (cowok)</BoldSpan>
                                </Flex>                     
                            </Pad>
                            <Pad>                                
                                <Link to="/mobilisasi">
                                    <ClosingDetail>Mobilisasi Trainee</ClosingDetail>
                                </Link>
                                <Link to="/ketentuanclosing">
                                    <ClosingDetail>Ketentuan Closing</ClosingDetail>
                                </Link>                                
                            </Pad>
                        </Rundown>
                    </Isi>
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
 
export default Schedule;