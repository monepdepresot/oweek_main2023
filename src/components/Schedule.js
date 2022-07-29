import logohorizon from '../img/logo/horizonwhite.svg';
import oweek from '../img/logo/oweekwhite.svg';
import uc from '../img/logo/ucwhite.png';
import bg from '../img/bg/Schedulebg.svg';
import topeng from '../img/topeng/topeng4.svg';

import styledComponents from "styled-components";
import {motion} from 'framer-motion';
import SocialIcons from "../subcomponents/SocialIcons";
import PowerButton from '../subcomponents/PowerButton';

const MainContainer = styledComponents.div`
background-image: url(${bg});
background-size: cover;
background-repeat: no-repeat;
background-position: center;

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

const Menu = styledComponents.div`
display: flex;
justify-content: center;
gap: 30px;
`

const Isi = styledComponents.div`
display: flex;
justify-content: center;
gap: 30px;
`

const Day = styledComponents.div`
width: 100%;
border: 1px solid white;
`

const Rundown = styledComponents.div`
width: 100%;
border: 1px solid white;
`

const Table = styledComponents.table`
padding: 5px 15px;
`

const Pad = styledComponents.div`
padding: 5px 15px;
text-align: left;
margin-bottom: 10px;
`

const Schedule = () => {
    return ( 
        <MainContainer>
            <Container>         
                <PowerButton />
                
                <Leftlogo>
                    <img src={logohorizon} alt="" width="120" />                  
                </Leftlogo>

                <Rightlogo>
                    <img src={oweek} alt="" width="55" /> 
                    <img src={uc} alt="" width="55" />                    
                </Rightlogo>

                <Content>
                    <h1>SCHEDULE</h1>
                    <Menu>
                        <h2>Pra-Oweek</h2>
                        <h2>Day 1</h2>
                        <h2>Day 2</h2>
                        <h2>Day 3</h2>
                        <h2>Day 4</h2>
                        <h2>Day 5</h2>
                        <h2>Day 6</h2>
                    </Menu>
                    <Isi>
                        <Day>
                            <h2>"Unaccomplished Journey"</h2>
                            <Pad>
                                <h3>Tujuan Sidang Senat</h3>
                                <ul>
                                    <li>Untuk menjadikan sebuah acara formal peresmian mahasiswa baru untuk menjadi mahasiswa dan bagian dari keluarga Universitas Ciputra secara simbolik.</li>
                                    <li>Pengukuhan menjadi mahasiswa UC</li>
                                    <li>Memiliki rasa bangga menjadi mahasiswa UC</li>
                                </ul>
                            </Pad>    
                            <Pad>
                                <h3>Tujuan Closing Ceremony</h3>
                                <ul>
                                    <li>Peserta Orientation Week 2022 dapat menutup rangkaian acara Orientation Week 2022 secara simbolik melalui kegiatan inagurasi.</li>
                                    <li>Peserta Orientation Week 2022 dapat merefleksikan pelajaran yang didapat selama masa Orientation Week dan sebagai bentuk apresiasi terhadap para peserta Orientation Week 2022.</li>
                                    <li>Peserta Orientation Week 2022 mampu mengembangkan softskill khususnya kepemimpinan, komunikasi, dan kerja sama.</li>
                                    <li>Peserta Orientation Week 2022 mampu mengenal tujuan masing-masing dan memiliki semangat untuk mengejarnya selama berkuliah di Universitas Ciputra Surabaya.</li>
                                </ul>
                            </Pad>    
                            <Pad>
                                <h3>Tujuan Closing Ceremony</h3>
                                <ul>
                                    <li>Integrity</li>
                                    <li>High Sense of Achievement</li>
                                    <li>Long Life Learning</li>
                                    <li>Opportunity Creation</li>
                                    <li>Creativity & Innovation</li>
                                    <li>Calculated risk taking</li>
                                </ul>
                            </Pad>  
                            <Pad>
                                <h3>Palimanan Resto & Cafe</h3>                     
                            </Pad>                       
                        </Day>
                        <Rundown>
                            <h2>Rundown</h2>
                            <Table>
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
                            </Table>
                        </Rundown>
                    </Isi>
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
 
export default Schedule;