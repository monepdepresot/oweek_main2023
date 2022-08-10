import logohorizon from '../img/logo/horizonwhite.png';
import oweek from '../img/logo/oweekwhite.svg';
import uc from '../img/logo/ucwhite.png';
import bg from '../img/bg/Rulesbgmobile.svg';
import bgmobile from '../img/bg/Rulesbgmobile.svg';
import topeng from '../img/topeng/topeng1.svg';
import dot from '../img/dot1.svg';
import dot2 from '../img/dot3.svg';
import title from '../img/title/Rules.png';
import title2 from '../img/title/PoinPCD.png';

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

@media only screen and (max-width: 768px) {
    h2 {
        font-size: 18px;
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
    left: 1rem;
    top: 1rem;
}
`

const Content = styledComponents.div`
padding: 3vw 15vw;
display: flex;
justify-content: center;
gap: 30px;

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
gap: 10px;
margin-bottom: 5px;
`

const Flex2 = styledComponents.div`
display: flex;
gap: 10px;
margin-top: 6px;
margin-bottom: 6px;
`

const Dot = styledComponents.img`
height: 15px;
margin-top: 3px;
`

const Title = styledComponents.div`
display: flex;
align-items: center;
justify-content: center;
margin: 30px 0px;
`

const Italic = styledComponents.span`
font-style: italic;
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
                        <img src={logohorizon} alt="" className='horizonlogo' /> 
                    </Link>                                    
                </Leftlogo>

                <Rightlogo>
                    <img src={oweek} alt="" className='rightlogo' /> 
                    <img src={uc} alt="" className='rightlogo' />                    
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
                                    <span>Dilarang merokok dan membawa rokok (termasuk rokok elektrik) serta minuman keras yang beralkohol selama O-Week berlangsung atau saat masih menggunakan atribut O-Week.</span>
                                </Flex2>
                                <Flex2>
                                    <Dot src={dot2} />
                                    <span>Dilarang membawa atau memakai NAPZA serta zat adiktif lainnya selama O-Week berlangsung dan atau masih berada di area Universitas Ciputra Surabaya.</span>
                                </Flex2>
                                <Flex2>
                                    <Dot src={dot2} />
                                    <span>Dilarang berkelahi dan atau menjadi provokator selama kegiatan O-Week berlangsung.</span>
                                </Flex2>
                                <Flex2>
                                    <Dot src={dot2} />
                                    <span>Dilarang melakukan tindakan asusila (contoh: KNPI (<Italic>kissing, necking, petting, intercourse</Italic>) dan pelecehan seksual).</span>
                                </Flex2>
                                <Flex2>
                                    <Dot src={dot2} />
                                    <span>Diwajibkan untuk datang tepat waktu selama kegiatan O-Week (sesuai dengan Waktu Indonesia Bagian Barat).</span>
                                </Flex2>
                                <Flex2>
                                    <Dot src={dot2} />
                                    <span>Diperbolehkan membawa SATU gadget (Handphone) dan menggunakan gadget (Handphone) tersebut pada waktu yang ditentukan oleh panitia.</span>
                                </Flex2>
                                <Flex2>
                                    <Dot src={dot2} />
                                    <span>Membawa atribut dan atau perlengkapan sesuai dengan ketentuan yang ditetapkan oleh panitia.</span>
                                </Flex2>
                                <Flex2>
                                    <Dot src={dot2} />
                                    <span>Masing-masing bertanggung jawab terhadap barang bawaannya. Apabila terjadi kehilangan, maka tidak menjadi tanggung jawab pihak panitia dan Universitas.</span>
                                </Flex2>
                                <Flex2>
                                    <Dot src={dot2} />
                                    <span>Dilarang berbicara kotor dan bersikap kasar kepada panitia, staff, dosen dan sesama mahasiswa baru.</span>
                                </Flex2>
                                <Flex2>
                                    <Dot src={dot2} />
                                    <span>Memberikan salam dan bersikap kooperatif kepada panitia, staff, dosen dan sesama mahasiswa baru.</span>
                                </Flex2>
                                <Flex2>
                                    <Dot src={dot2} />
                                    <span>Menggunakan atribut dan atau perlengkapan O-Week selama masih berada dalam lingkungan O-Week.</span>
                                </Flex2>
                                <Flex2>
                                    <Dot src={dot2} />
                                    <span>Berpenampilan rapi dan sopan serta harus menaati <Italic>dresscode</Italic> yang telah ditentukan oleh panitia selama kegiatan O-Week berlangsung.</span>
                                </Flex2>
                                <Flex2>
                                    <Dot src={dot2} />
                                    <span>Menjaga ketenangan dan ketertiban selama acara O-Week berlangsung.</span>
                                </Flex2>
                                <Flex2>
                                    <Dot src={dot2} />
                                    <span>Berkontribusi secara aktif di dalam kelompok dan dilarang pindah ke kelompok lain.</span>
                                </Flex2>
                                <Flex2>
                                    <Dot src={dot2} />
                                    <span>Dilarang menginjak rumput yang berada di sekitar Universitas Ciputra kecuali mendapat izin dari panitia.</span>
                                </Flex2>
                                <Flex2>
                                    <Dot src={dot2} />
                                    <span>Menjaga kebersihan lingkungan selama O-Week berlangsung serta menjaga segala bentuk properti yang dimiliki Universitas Ciputra.</span>
                                </Flex2>
                                <Flex2>
                                    <Dot src={dot2} />
                                    <span>Dilarang berbuat curang dalam bentuk apapun selama kegiatan O-Week berlangsung, baik sengaja maupun tidak disengaja.</span>
                                </Flex2>
                                <Flex2>
                                    <Dot src={dot2} />
                                    <span>Selama acara O-Week berlangsung, HANYA trainee, panitia dan seluruh staf Universitas Ciputra yang berkepentingan diperbolehkan memasuki area O-Week.</span>
                                </Flex2>
                                <Flex2>
                                    <Dot src={dot2} />
                                    <span>Trainee tidak diperbolehkan menitipkan barang dalam bentuk apapun kepada panitia O-Week selama acara O-Week berlangsung.</span>
                                </Flex2>
                                <Flex2>
                                    <Dot src={dot2} />
                                    <span>Diperbolehkan mengendarai kendaraan pribadi sesuai dengan aturan yang telah ditentukan. Trainee yang membawa kendaraan bermotor WAJIB memiliki dan membawa SIM beserta STNK.</span>
                                </Flex2>
                                <Flex2>
                                    <ul>
                                        <li>Pada saat Opening, UC Day, dan Prodi Day apabila membawa kendaraan WAJIB berisikan: 1 motor 2 orang yang menggunakan helm serta 1 mobil berisikan minimal 4 orang.</li>
                                        <li>Pada saat <Italic>talkshow</Italic> trainee diperbolehkan membawa mobil yang berisikan minimal 4 orang dalam 1 mobil dan dilarang membawa sepeda motor.</li>
                                        <li>Pada saat <Italic>selling day</Italic> masing-masing kelompok diperbolehkan membawa kendaraan maksimal 2 mobil per kelompok dan dilarang membawa sepeda motor.</li>
                                        <li>Pada saat closing trainee DILARANG membawa kendaraan.</li>
                                    </ul>
                                </Flex2>
                                <Flex2>
                                    <Dot src={dot2} />
                                    <span>Menggunakan lift sesuai jadwal dan arahan panitia, apabila akan menggunakan lift di luar jadwal yang ditentukan wajib melapor panitia.</span>
                                </Flex2>
                                <Flex2>
                                    <Dot src={dot2} />
                                    <span>Diperbolehkan menggunakan make-up natural sesuai dengan referensi yang diberikan panitia dan dilarang menggunakan bulu mata palsu/<Italic>extension</Italic>.</span>
                                </Flex2>
                                <Flex2>
                                    <Dot src={dot2} />
                                    <span>Dihimbau bagi seluruh trainee untuk tidak menggunakan <Italic>softlens</Italic>. Apabila ada trainee yang menggunakan <Italic>softlens</Italic> dengan alasan tertentu wajib melapor AMD dan jika terjadi hal yang tidak diinginkan bukan menjadi tanggung jawab seluruh panitia O-Week dan Universitas Ciputra.</span>
                                </Flex2>
                                <Flex2>
                                    <Dot src={dot2} />
                                    <span>Kuku wajib pendek (dilarang <Italic>extension, nail art</Italic>).</span>
                                </Flex2>
                                <Flex2>
                                    <Dot src={dot2} />
                                    <span>Dilarang membawa dan menggunakan perhiasan/aksesoris kecuali jam tangan (contoh: kalung, gelang, anting panjang, cincin, dan tindik). Apabila terjadi kehilangan barang berharga tidak menjadi tanggung jawab panitia dan Universitas.</span>
                                </Flex2>
                                <Flex2>
                                    <Dot src={dot2} />
                                    <span>Selama acara O-Week berlangsung, dilarang meninggalkan acara dan area, kecuali mendapat izin tertentu dari pihak HOD dan AMD (Trainee wajib melapor SID).</span>
                                </Flex2>
                                <Flex2>
                                    <Dot src={dot2} />
                                    <span>Bagi trainee yang sakit wajib memberitahu AMD masing-masing jika mengalami halangan dalam mengikuti acara O-Week secara penuh dengan menunjukan bukti surat keterangan sakit dari Dokter atau bukti riwayat sakit, serta Diperbolehkan untuk membawa obat-obat pribadi (bagi yang sakit).</span>
                                </Flex2>
                                <Flex2>
                                    <Dot src={dot2} />
                                    <span>Memberitahu AMD masing-masing jika mengalami halangan dalam mengikuti acara O-Week secara penuh dengan menunjukan bukti. Yang ditoleransi hanya sakit (di rumah sakit), kedukaan keluarga inti, keluarga inti menikah beserta surat undangannya dan lomba.</span>
                                </Flex2>
                                <Flex2>
                                    <Dot src={dot2} />
                                    <span>Dilarang mengajak atau memaksa sesama peserta O-Week  dalam kerjasama organisasi pribadi (organisasi bisnis, rumah ibadah, dan sebagainya).</span>
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
                                    <span>Pemenang Best Networking</span>
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