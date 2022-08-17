import logohorizon from '../img/logo/horizonblack.png';
import oweek from '../img/logo/oweekblack.svg';
import uc from '../img/logo/ucblack.png';
import bg from '../img/bg/Taskbg.svg';
import bgmobile from '../img/bg/Taskbgmobile.svg';
import topeng from '../img/topeng/topeng3.svg';
import title from '../img/title/Task.png';

import styledComponents from "styled-components";
import {motion} from 'framer-motion';
import PowerButton4 from '../subcomponents/PowerButton4';
import { Link } from 'react-router-dom';
import SocialIcons2 from '../subcomponents/SocialIcons2';
import MapsModal from './MapsModal';
import SpotifyModal from './SpotifyModal';
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

h1, h2, h3, p, li, a, span {
    color: black;
}

li {
    margin-bottom: 5px;
}

@media only screen and (max-width: 768px) {
    background-image: url(${bgmobile});
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
padding: 3vw 10vw;

@media only screen and (max-width: 768px) {
    padding: 5vh 7vw;
}

@media only screen and (max-width: 1280px) {
    padding: 5vh 7vw;
}
`

const Topeng = styledComponents(motion.img)`
width: 10vw;
position: fixed;
right: 5px;
bottom: 5px;
`

const Title = styledComponents.div`
display: flex;
align-items: center;
justify-content: center;
margin: 30px 0px;
padding-right: 10px;
`

const Seperator = styledComponents.div`
display: flex;
gap: 5%;

@media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
}
`

const Deadline = styledComponents.div`
width: 15%;

@media (max-width: 768px) {
    width: 100%;
}
`

const Isi = styledComponents.div`
width: 80%;
text-align: left;

@media (max-width: 768px) {
    width: 100%;
}
`

const Menu = styledComponents.div`
display: flex;
flex-direction: column;
justify-content: center;

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

const Tabs = styledComponents.h2`
padding: 5px 5px;
cursor: pointer;
font-size: 1.2em;
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
border: 2px solid #1B1A66;
border-radius: 5px;
text-align: center;
text-align-last: center;
`

const Subtitle = styledComponents.h4`
@media (max-width: 768px) {
    display: none;
}
`

const Task = () => {

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
            <SocialIcons2 setShowMapsModal={setShowMapsModal} setShowSpotifyModal={setShowSpotifyModal} />

            <Container>         
                <PowerButton4 />

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
                        <img src={title} alt="" width="165" />
                    </Title>

                    <Seperator>
                        <Deadline>
                            <Subtitle>Deadline</Subtitle>
                            <Menu>
                                <Tabs className={toggleState === 1 ? "active-tabs2" : ""} onClick={() => toggleTab(1)}>22 AUG</Tabs>
                                <Tabs className={toggleState === 2 ? "active-tabs2" : ""} onClick={() => toggleTab(2)}>26 AUG</Tabs>
                                <Tabs className={toggleState === 3 ? "active-tabs2" : ""} onClick={() => toggleTab(3)}>29 AUG</Tabs>
                                <Tabs className={toggleState === 4 ? "active-tabs2" : ""} onClick={() => toggleTab(4)}>30 AUG</Tabs>
                                <Tabs className={toggleState === 5 ? "active-tabs2" : ""} onClick={() => toggleTab(5)}>31 AUG</Tabs>
                                <Tabs className={toggleState === 6 ? "active-tabs2" : ""} onClick={() => toggleTab(6)}>1 SEPT</Tabs>
                                <Tabs className={toggleState === 7 ? "active-tabs2" : ""} onClick={() => toggleTab(7)}>2 SEPT</Tabs>
                                <Tabs className={toggleState === 8 ? "active-tabs2" : ""} onClick={() => toggleTab(8)}>3 SEPT</Tabs>
                            </Menu>
                            <Menu2>
                                <Select
                                    onChange={handleChange}
                                >
                                    <option value="1">22 AUG</option>
                                    <option value="2">26 AUG</option>
                                    <option value="3">29 AUG</option>
                                    <option value="4">30 AUG</option>
                                    <option value="5">31 AUG</option>
                                    <option value="6">1 SEPT</option>
                                    <option value="7">2 SEPT</option>
                                    <option value="8">3 SEPT</option>
                                </Select>
                            </Menu2>
                        </Deadline>
                        <Isi>
                            <div className={toggleState === 1 ? "maps active-maps" : "maps"}>
                                <h2>Pengumpulan Business Proposal</h2>
                                <ul>
                                    <li>Deadline: 22 Agustus 2022, 21.00 WIB</li>
                                    <li>Format nama: No Kelompok_Nama Kelompok_B-Pro (ex: 1_Biru_B-Pro)</li>
                                    <li>Format file: PDF</li>
                                    <li>Link pengumpulan: <a href='https://bit.ly/proposalbusiness' target='_blank'>https://bit.ly/proposalbusiness</a></li>
                                    <li>Pengumpulan akan dibuka dari tanggal 17 Agustus 2022 dan ditutup pada tanggal 22 Agustus 2022 pukul 21.00 WIB. Pengumpulan hanya diperbolehkan satu kali saja.</li>
                                    <li>Link template b-pro: <a href='https://bit.ly/templateproposalbusiness' target='_blank'>https://bit.ly/templateproposalbusiness</a></li>
                                </ul>
                            </div>
                            <div className={toggleState === 2 ? "maps active-maps" : "maps"}>
                                <h2>Pengumpulan Revisi Business Proposal</h2>
                                <ul>
                                    <li>Deadline: 26 Agustus 2022, 23.59 WIB</li>
                                    <li>Format nama: No Kelompok_Nama Kelompok_B-ProRevisi (ex: 1_Biru_B-ProRevisi)</li>
                                    <li>Format file: PDF</li>
                                    <li>Link pengumpulan: <a href='https://bit.ly/revisiproposalbusiness' target='_blank'>https://bit.ly/revisiproposalbusiness</a></li>
                                    <li>Pengumpulan akan dibuka dari tanggal 25 Agustus 2022 dan ditutup pada tanggal 26 Agustus 2022 pukul 23.59 WIB. Pengumpulan hanya diperbolehkan satu kali saja.</li>
                                </ul>
                                <h2>Upload Twibbon</h2>
                                <ul>
                                    <li>Tugas diberikan mulai tanggal 17 Agustus 2022</li>
                                    <li>Deadline: 26 Agustus 2022, 23.59 WIB</li>
                                    <li>
                                        <span>Ketentuan:</span>
                                        <ul>
                                            <li>Slide pertama upload foto sendiri menggunakan Twibbon GIF. Foto yang diupload wajib menggunakan baju berkerah dan menunjukkan setengah badan ke atas. Foto tidak boleh menggunakan masker.</li>
                                            <li>Slide kedua upload foto bersama semua anggota kelompok dan AMD menggunakan baju berkerah berwarna sama.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className={toggleState === 3 ? "maps active-maps" : "maps"}>
                                <h2>Trainee Name Tag</h2>
                                <ul>
                                    <li>Tugas diinformasikan melalui AMD.</li>
                                    <li>Deadline: Senin, 29 Agustus 2022 (dibawa saat registrasi)</li>
                                    <li>
                                        <span>Ketentuan:</span>
                                        <ul>
                                            <li>Trainee akan diberikan template name tag oleh panitia yang dapat di edit.</li>
                                            <li>Trainee mengisi Nama, Nim, serta mengganti nomor kelompok sesuai nomor kelompok masing - masing.</li>
                                            <li>Trainee menggunakan font “Raleway” dan di Bold</li>
                                            <li>Trainee mencetak name tag di kertas art paper 140 atau kertas foto dengan ukuran 13,5cm x 9cm. Name tag dicetak di kertas dua sisi.</li>
                                            <li>Trainee wajib membawa dan memakai name tag selama acara Oweek berlangsung.</li>
                                        </ul>
                                    </li>
                                </ul>
                                <h2>Trainee O-Week Card</h2>
                                <ul>
                                    <li>Tugas diinformasikan melalui AMD.</li>
                                    <li>Deadline: Senin, 29 Agustus 2022 (dibawa saat registrasi).</li>
                                    <li>Trainee akan mendapatkan template yang dapat diedit.</li>
                                    <li>Trainee duplicate file template yang diberikan oleh panitia dan mengedit di template yang sudah mereka duplicate.</li>
                                    <li>
                                        <span>Hal yang perlu diedit di template adalah:</span>
                                        <ul>
                                            <li>Trainee menuliskan nama lengkap, NIM, dan jurusan.</li>
                                            <li>Trainee memasukkan foto diri di template.</li>
                                            <li>Foto memperlihatkan setengah badan, menggunakan jas warna hitam, dan melakukan pose tangan ‘E’ dengan background polos.</li>
                                            <li>Trainee mencetak O-Week Card menggunakan kertas berbahan pvc dan ukuran 5,5 cm x 8,5 cm.</li>
                                            <li>Trainee menggunakan font “Raleway” dan di Bold.</li>
                                        </ul>
                                    </li>
                                </ul>
                                <h2>Bukti Follow ditunjukkan langsung dari Instagram dan Tiktok</h2>
                                <ul>
                                    <li>Bukti follow Instagram @universitasciputra</li>
                                    <li>Bukti follow Instagram @oweekucs</li>
                                    <li>Bukti follow Instagram @uc_bma</li>
                                    <li>Bukti follow Instagram @oweek.horizon</li>
                                    <li>Bukti follow Tiktok @universitasciputra</li>
                                    <li>
                                        <span>Informasi:</span>
                                        <ul>
                                            <li>Tugas dicek melalui PCD saat registrasi</li>
                                            <li>Trainee wajib mempersiapkan screenshot bukti sudah memfollow semua account sebelum registrasi</li>
                                        </ul>
                                    </li>
                                </ul>
                                <h2>Presentasi Business Proposal</h2>
                                <ul>
                                    <li>Khusus kelompok ganjil pukul 16.45-17.30 WIB.</li>
                                    <li>Durasi presentasi adalah 5 menit setiap kelompok.</li>
                                    <li>Presentasi dilakukan di R.227, R.228, dan R.229.</li>
                                    <li>Urutan presentasi berdasarkan kelompok trainee yang datang terdahulu.</li>
                                    <li>Setiap kelompok mengirimkan 2 perwakilan.</li>
                                    <li>Dresscode: Office Look (kemeja berwarna bebas, jas hitam, dan celana panjang hitam, sepatu/flatshoes/heels berwarna putih/hitam).</li>
                                    <li>Hal yang harus dipresentasikan adalah alasan pemilihan produk & nama bisnis, keunikan produk, strategi pemasaran produk, dan prototype.</li>
                                    <li>Prototype FnB: membawa contoh produk makanan dan minuman yang ingin dijual.</li>
                                    <li>Prototype Service: diperbolehkan untuk membuat video maksimal 1 menit apabila trainee merasa prototype service tidak bisa dibawa saat presentasi dan ditunjukkan saat giliran presentasi. Apabila prototype service dapat dibawa saat presentasi, maka trainee tidak perlu membuat video.</li>
                                </ul>
                                <h2>Pengumpulan Business Proposal Final</h2>
                                <ul>
                                    <li>Khusus kelompok ganjil</li>
                                    <li>Dikumpulkan secara hardcopy</li>
                                    <li>Dikumpulkan saat giliran presentasi business proposal</li>
                                </ul>
                                <ul>
                                    <li>Poster bisnis berukuran A3.</li>
                                    <li>Hal yang wajib dimasukan: Nama Bisnis, Foto Produk, Logo O-Week, Logo Horizon, dan Logo Bisnis.</li>
                                    <li>Tambahan lainnya dapat berupa harga, menu atau tipe produk, dan info penting lainnya.</li>
                                    <li>Poster harus dikumpulkan secara hardcopy dan dipresentasikan pada presentasi showcase.</li>
                                </ul>
                                <h2>Pengumpulan Poster Ide Business</h2>
                                <ul>
                                    <li>Poster bisnis berukuran A3.</li>
                                    <li>Hal yang wajib dimasukan: Nama Bisnis, Foto Produk, Logo O-Week, Logo Horizon, dan Logo Bisnis.</li>
                                    <li>Tambahan lainnya dapat berupa harga, menu atau tipe produk, dan info penting lainnya.</li>
                                    <li>Poster harus dikumpulkan secara hardcopy dan dipresentasikan pada presentasi showcase.</li>
                                </ul>
                                <h2>Keperluan Tambahan</h2>
                                <ul>
                                    <li>Setiap individu WAJIB membawa print file berwarna dibawah dengan ketentuan kertas HVS putih ukuran A4 <br/>
                                    File yang harus di print:<br/>
                                        <ul>
                                            <li></li>
                                        </ul>
                                    </li>
                                    <li>
                                        Setiap kelompok WAJIB membawa print 1 lembar stiker topeng berwarna
                                        <ul>
                                            <li>Ketentuan kertas: ukuran A3, laminasi GLOSSY, dan SUDAH DI CUTTING LINGKARAN</li>
                                            <li>Kumpulkan dalam bentuk hardcopy ke AMD</li>
                                        </ul>
                                        Sticker yang harus di print:
                                        <ul>
                                            <li></li>
                                        </ul>
                                    </li>
                                </ul>
                                <h2>Tugas Meet & Greet Online</h2>
                                <ul>
                                    <li>Trainee akan diberikan list koordinat suatu tempat. Contoh: Langit, (koordinat UC) dan trainee akan mencari instagram panitia di instagram @mngoweek2022</li>
                                    <li>
                                    Berikut pembagian list koordinat (NB: akses drive akan dibuka pada tanggal 29 Agustus 2022):
                                        <ul>
                                            <li>Kelompok 1-5:  https://bit.ly/MnGPanitiaOnline1-5 </li>
                                            <li>Kelompok 6-10: https://bit.ly/MnGPanitiaOnline6-10</li>
                                            <li>Kelompok 11-15: https://bit.ly/MnGPanitiaOnline11-15 </li>
                                            <li>Kelompok 16-19: https://bit.ly/MnGPanitiaOnline16-19 </li>
                                            <li>Kelompok 20-23: https://bit.ly/MnGPanitiaOnline20-23 </li>
                                            <li>Kelompok 24-27: https://bit.ly/MnGPanitiaOnline24-27 </li>
                                            <li>Kelompok 28-31: https://bit.ly/MnGPanitiaOnline28-31 </li>
                                            <li>Kelompok 32-35: https://bit.ly/MnGPanitiaOnline32-35 </li>
                                            <li>Kelompok 36-39: https://bit.ly/MnGPanitiaOnline36-39 </li>
                                            <li>Kelompok 40-43: https://bit.ly/MnGPanitiaOnline40-43 </li>
                                            <li>Kelompok 44-47: https://bit.ly/MnGPanitiaOnline44-47 </li>
                                            <li>Kelompok 48-51: https://bit.ly/MnGPanitiaOnline48-51 </li>
                                            <li>Kelompok 52-55: https://bit.ly/MnGPanitiaOnline52-55 </li>
                                            <li>Kelompok 56-59: https://bit.ly/MnGPanitiaOnline56-59 </li>
                                            <li>Kelompok 60-63: https://bit.ly/MnGPanitiaOnline60-63 </li>
                                            <li>Kelompok 64-67: https://bit.ly/MnGPanitiaOnline64-67 </li>
                                            <li>Kelompok 68-72: https://bit.ly/MnGPanitiaOnline68-72 </li>
                                            <li>Kelompok 73-77: https://bit.ly/MnGPanitiaOnline73-77</li>
                                            <li>Kelompok 78-81: https://bit.ly/MnGPanitiaOnline78-81 </li>
                                            <li>Kelompok 82-85: https://bit.ly/MnGPanitiaOnline82-85 </li>
                                            <li>Kelompok 86-89: https://bit.ly/MnGPanitiaOnline86-89 </li>
                                            <li>Kelompok 90-93: https://bit.ly/MnGPanitiaOnline90-93 </li>
                                            <li>Kelompok 94-97: https://bit.ly/MnGPanitiaOnline94-97 </li>
                                            <li>Kelompok 98-101: https://bit.ly/MnGPanitiaOnline98-101 </li>
                                            <li>Kelompok 102-106: https://bit.ly/MnGPanitiaOnline102-106 </li>
                                            <li>Kelompok 107-111: https://bit.ly/MnGPanitiaOnline107-111 </li>
                                            <li>Kelompok 112-115: https://bit.ly/MnGPanitiaOnline112-115 </li>
                                            <li>Kelompok 116-119: https://bit.ly/MnGPanitiaOnline116-119 </li>
                                            <li>Kelompok 120-123: https://bit.ly/MnGPanitiaOnline120-123 </li>
                                            <li>Kelompok 124-127: https://bit.ly/MnGPanitiaOnline124-127 </li>
                                        </ul>
                                    </li>
                                    <li>Pengerjaan secara individu</li>
                                    <li>Instagram trainee tidak boleh di private</li>
                                    <li>Kemudian, trainee akan mencari foto lokasi di postingan instagram @mngoweek2022 yang menunjukkan foto lokasi koordinat dari list yang sudah diberikan. Contoh: trainee A mendapatkan koordinat UC, maka trainee A mencari foto UC di postingan instagram.</li>
                                    <li>Setelah mendapatkan postingannya, trainee akan melihat instagram panitia yang ditag di postingan tersebut</li>
                                    <li>Untuk mendapatkan instagram panitia yang tepat, trainee akan melihat di list, di bagian mana panitia tersebut ditag. Contoh: koordinat yang didapatkan adalah Langit, (koordinat UC) maka Instagram yang di tag pada bagian langit di gambar UC adalah Instagram panitia yang perlu trainee follow)</li>
                                    <li>Setelah menemukan instagram panitia, trainee WAJIB follow instagram tersebut dan tidak boleh diunfollow dan trainee akan melihat caption postingan yang terdapat emoji dan nama panggilan panitia, emoji tersebut melambangkan divisi panitia.</li>
                                    <li>Akan ada google drive https://bit.ly/FotoPanitiaMnGOnline yang diberikan, dimana trainee akan mencari foto panitia yang temukan sesuai dengan divisi dan nama panggilan. (NB: akses drive akan dibuka pada tanggal 29 Agustus 2022)</li>
                                    <li>
                                    Trainee WAJIB post foto panitia sesuai dengan list yang didapatkan oleh trainee di story instagram trainee dan diberi caption yaitu kalimat/puisi mengajak berkenalan dari huruf nama panitia tersebut pada story secara berurutan. Dan menambahkan tag @oweekucs, @mngoweek2022, @(instagram panitia yang di post fotonya) <br/>
                                    Contoh kalimat/puisi: KAY,
                                    <ul>
                                        <li>Kakak cantik dan baik hati</li>
                                        <li>Aku ingin berkenalan dengan kakak</li>
                                        <li>Yang tidak akan terlupakan</li>
                                    </ul>
                                    </li>
                                    <li>Setelah mendapatkan semua panitia, trainee mengumpulkan bukti screenshot bukti follow ig panitia, bukti post story, dan list koordinat dalam bentuk file PDF (digabung)</li>
                                    <li>Format nama: Nomor Kelompok_Nama Kelompok_Nama Lengkap Trainee (Contoh: 1_Biru_Anastasia Jesslyn)</li>
                                    <li>Format file: PDF</li>
                                    <li>Deadline: 20.00 WIB, 1 September 2022</li>
                                    <li>Link pengumpulan MnG Panitia Online: https://bit.ly/MnGPanitiaOnline</li>
                                    <li>Pengumpulan akan dibuka dari tanggal 29 Agustus 2022 dan ditutup pada tanggal 1 September 2022 pukul 20.00 WIB. Pengumpulan hanya diperbolehkan satu kali saja.</li>
                                </ul>
                            </div>
                            <div className={toggleState === 4 ? "maps active-maps" : "maps"}>
                                <h2>Tag Tumblr Trainee</h2>
                                <ul>
                                    <li>Trainee diwajibkan untuk print label untuk tumblr yang sudah disiapkan dengan kertas Art Paper dengan ukuran 21 cm x 4 cm.</li>
                                    <li>Trainee akan diberikan template yang dapat di edit oleh trainee. Trainee mengganti nomor kelompok serta nama yang ada pada template Tag Tumblr Trainee.</li>
                                    <li>Untuk day 1 trainee dibebaskan untuk membawa tumblr apapun dan wajib membawa label tumblr yang dibuat.</li>
                                    <li>Untuk day 2 trainee wajib membawa tumblr dari starter kit trainee dan sudah menempelkan label untuk tumblr, melingkari tumblr.</li>
                                    <li>Trainee menggunakan font “Raleway” dan di Bold</li>
                                </ul>
                                <h2>Presentasi Business Proposal</h2>
                                <ul>
                                    <li>Khusus kelompok genap pukul 16.45-17.30 WIB.</li>
                                    <li>Durasi presentasi adalah 5 menit setiap kelompok.</li>
                                    <li>Presentasi dilakukan di R.227, R.228, dan R.229.</li>
                                    <li>Urutan presentasi berdasarkan kelompok trainee yang datang terdahulu.</li>
                                    <li>Setiap kelompok mengirimkan 2 perwakilan.</li>
                                    <li>Dresscode: Office Look (kemeja berwarna bebas, jas hitam, dan celana panjang hitam, sepatu/flatshoes/heels berwarna putih/hitam)</li>
                                    <li>Hal yang harus dipresentasikan adalah alasan pemilihan produk & nama bisnis, keunikan produk, strategi pemasaran produk, dan prototype.</li>
                                    <li>Prototype FnB: membawa contoh produk makanan dan minuman yang ingin dijual.</li>
                                    <li>Prototype Service: diperbolehkan untuk membuat video maksimal 1 menit apabila trainee merasa prototype service tidak bisa dibawa saat presentasi dan ditunjukkan saat giliran presentasi. Apabila prototype service dapat dibawa saat presentasi, maka trainee tidak perlu membuat video.</li>
                                </ul>
                                <h2>Pengumpulan Business Proposal Final</h2>
                                <ul>
                                    <li>Khusus kelompok genap.</li>
                                    <li>Dikumpulkan secara hardcopy.</li>
                                    <li>Dikumpulkan saat giliran presentasi business proposal.</li>
                                </ul>
                                <h2>Pengumpulan poster ide business</h2>
                                <ul>
                                    <li>Poster bisnis berukuran A3.</li>
                                    <li>Hal yang wajib dimasukan: Nama Bisnis, Foto Produk, Logo O-Week, Logo Horizon, dan Logo Bisnis.</li>
                                    <li>Tambahan lainnya dapat berupa harga, menu atau tipe produk, dan info penting lainnya.</li>
                                    <li>Poster harus dikumpulkan secara hardcopy dan dipresentasikan pada presentasi showcase.</li>
                                </ul>
                                <h2>Tugas Twibbon</h2>
                                <ul>
                                    <li>Upload satu foto bersama teman satu jurusan di akun instagram pribadi Trainee.</li>
                                    <li>Foto diupload menggunakan twibbon sesuai dengan jurusan masing masing.</li>
                                    <li>Deadline: 30 Agustus 2022, 23.59 WIB.</li>
                                    <li>
                                        <span>Ketentuan:</span>
                                        <ul>
                                            <li>Trainee foto bersama 2 - 3 teman satu jurusan (max 3 teman).</li>
                                            <li>Semua teman yang diajak berfoto berasal dari kelompok O-Week yang berbeda.</li>
                                            <li>Wajah setiap trainee terlihat dengan jelas dan tidak tertutup desain twibbon.</li>
                                            <li>Trainee boleh foto lebih dari satu kali.</li>
                                            <li>IG Trainee tidak boleh diprivate.</li>
                                            <li>Trainee tidak diperkenankan untuk menghapus postingan twibbon sampai acara O-Week berakhir.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Caption: <br/>
                                        Halo semua !👋👋<br/>
                                        Nama saya *nama* dari jurusan *jurusan*<br/><br/>
                                        Hari ini saya telah berkenalan dengan *tag ig teman*, …. , dan *tag ig teman*<br/><br/>
                                        Menurut saya, prodi *jurusan* *pendapat tentang prodi*<br/><br/>
                                        Harapan saya untuk Prodi Day *harapan*<br/><br/>
                                        #universitasciputra #OWeekUCS #OWEEK2022 #HORIZON #(namakelompok)_(nomorkelompok)<br/><br/>
                                        Wajib Tag : @universitasciputra @oweekucs
                                    </li>
                                </ul>
                            </div>
                            <div className={toggleState === 5 ? "maps active-maps" : "maps"}>
                                <h2>Pengumpulan Laporan Checklist Barang Loading In</h2>
                                <ul>
                                    <li>Dalam bentuk hard copy</li>
                                    <li>Dikumpulkan ke AMD masing-masing setelah registrasi pagi</li>
                                    <li>Link template laporan checklist barang loading in: https://bit.ly/laporanchecklistloadingin</li>
                                </ul>
                                <h2>Pengumpulan Laporan Kendaraan Loading In</h2>
                                <ul>
                                    <li>Dalam bentuk hard copy</li>
                                    <li>Dikumpulkan ke AMD masing-masing setelah registrasi pagi</li>
                                    <li>Link template laporan kendaraan loading in: https://bit.ly/laporankendaraanloading</li>
                                </ul>
                                <h2>Pengumpulan Laporan Kendaraan Hari H Selling </h2>
                                <ul>
                                    <li>Dalam bentuk hard copy</li>
                                    <li>Dikumpulkan ke AMD masing-masing setelah registrasi pagi</li>
                                    <li>Link template laporan kendaraan hari H Selling: https://bit.ly/laporankendaraanselling</li>
                                </ul>
                                <h2>Pengumpulan Laporan Jasa Eksternal Selling, jika menggunakan jasa eksternal untuk loading in</h2>
                                <ul>
                                    <li>Dalam bentuk hard copy</li>
                                    <li>Dikumpulkan ke AMD masing-masing setelah registrasi pagi</li>
                                    <li>Link template laporan jasa eksternal: https://bit.ly/formjasaexternal</li>
                                </ul>
                                <h2>Video Refleksi</h2>
                                <ul>
                                    <li>Upload video refleksi berupa instagram story berdurasi minimal 15 detik (1 story)</li>
                                    <li>Video menggunakan filter, berisi perkenalan diri, recap kegiatan yang diikuti saat Prodi Day hari itu serta tanggapan, rate dari 1-10 untuk kegiatan Prodi Day dan harapan untuk masing-masing jurusan</li>
                                    <li>Deadline 31 Agustus 2022 pukul 23.59 WIB</li>
                                    <li>
                                        <span>Ketentuan:</span>
                                        <ul>
                                            <li>Mencantumkan nama lengkap, NIM, asal kelompok di caption story</li>
                                            <li>Trainee wajib menggunakan pakaian sopan dan berkerah</li>
                                            <li>Wajib menggunakan twibbon story O-Week 2022</li>
                                            <li>
                                                <span>Link twibbon:</span>
                                                <ul>
                                                    <li>Kelompok 1-31: https://bit.ly/TwibbonStory1-31</li>
                                                    <li>Kelompok 32-63: https://bit.ly/TwibbonStory32-63</li>
                                                    <li>Kelompok 64-95: https://bit.ly/TwibbonStory64-95</li>
                                                    <li>Kelompok 96-127: https://bit.ly/TwibbonStory96-127</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>Tidak diperbolehkan untuk menggunakan filter suara</li>
                                    <li>Video story tidak mengandung unsur SARA</li>
                                    <li>IG Trainee tidak boleh diprivate</li>
                                    <li>Trainee diwajibkan memasukan video story ke dalam highlight instagram dengan judul “PRODI DAY 2022”</li>
                                    <li>Trainee tidak diperbolehkan untuk menghapus highlight sampai acara O-Week berakhir</li>
                                    <li>Wajib memberi tag dan hashtag sebagai berikut:<br/> @universitasciputra @oweekucs<br/> #universitasciputra #OWeekUCS #OWEEK2022 #HORIZON </li>
                                </ul>
                                <h2>Keperluan Tambahan</h2>
                                <ul>
                                    <li>Wajib membawa perlengkapan sesuai dengan ketentuan prodi masing-masing (lihat menu Prodi Day).</li>
                                    <li>WAJIB membawa minimal 80 permen</li>
                                    <li>WAJIB membawa 16 surat kecil (tulis tangan) untuk menyemangati panitia</li>
                                </ul>
                            </div>
                            <div className={toggleState === 6 ? "maps active-maps" : "maps"}>
                                <h2>Membawa Laporan Checklist Barang Loading In </h2>
                                <ul>
                                    <li>Dalam bentuk hard copy</li>
                                    <li>Ditunjukkan ke panitia saat memasuki lobby/pintu masuk hypermart pada saat loading in malam (20.30-01.00 WIB)</li>
                                </ul>
                                <h2>Membawa Laporan Kendaraan Loading In</h2>
                                <ul>
                                    <li>Dalam bentuk hard copy</li>
                                    <li>Ditunjukkan ke panitia saat memasuki lobby/pintu masuk hypermart pada saat loading in malam (20.30-01.00 WIB)</li>
                                </ul>
                                <h2>Membawa Laporan Jasa Eksternal Selling, jika menggunakan jasa eksternal untuk loading in</h2>
                                <ul>
                                    <li>Dalam bentuk hard copy</li>
                                    <li>Ditunjukkan ke panitia saat saat memasuki lobby/pintu masuk hypermart pada saat loading in malam (20.30-01.00 WIB)</li>
                                </ul>
                                <h2>Pengumpulan tugas MnG Panitia Online </h2>
                                <ul>
                                    <li>Mengumpulkan screenshot bukti follow ig panitia, bukti post story, dan list koordinat dalam bentuk file PDF (digabung)</li>
                                    <li>Format nama: Nomor Kelompok_Nama Kelompok_Nama Lengkap Trainee</li>
                                    <li>Format file: PDF</li>
                                    <li>Deadline: 1 September 2022, 20.00 WIB</li>
                                    <li>Link pengumpulan MnG Panitia Online: https://bit.ly/MnGPanitiaOnline </li>
                                    <li>Pengumpulan akan dibuka dari tanggal 29 Agustus 2022 dan ditutup pada tanggal 1 September 2022 pukul 20.00 WIB. Pengumpulan hanya diperbolehkan satu kali saja.</li>
                                </ul>
                                <h2>Tugas Refleksi</h2>
                                <ul>
                                    <li>
                                        <span>Trainee membuat video refleksi selama mengikuti keseluruhan Talkshow Day yang isinya yaitu;</span>
                                        <ul>
                                            <li>Pesan dan Kesan</li>
                                            <li>Pengalaman/hal baru apa yang didapatkan</li>
                                            <li>Rating secara keseluruhan day beserta alasannya kenapa memberikan rating tersebut</li>
                                        </ul>
                                    </li>
                                    <li>Deadline : 1 September 2022, pukul 21.00 WIB</li>
                                    <li>
                                        <span>Ketentuan</span>
                                        <ul>
                                            <li>Story refleksi HARUS diupload di IG Story</li>
                                            <li>
                                                <span>Story mencakup:</span>
                                                <ul>
                                                    <li>Insight dari Talkshow sesi 1 - “Becoming a True Indonesian”</li>
                                                    <li>Insight dari Talkshow sesi 2 - “Creating Youthpreneur in Digital Era”</li>
                                                </ul>
                                            </li>
                                            <li>Durasi masing-masing video story insight dari Talkshow minimal 30 detik atau 1 story (1 video insight sesi 1, 1 video insight sesi 2 (secara keseluruhan, beserta alasannya).</li>
                                            <li>Story WAJIB berisikan wajah trainee dan berbentuk video dimana trainee berbicara di depan kamera (TIDAK BOLEH foto).</li>
                                            <li>Story TIDAK BOLEH mengandung unsur porno, SARA, dan hal negatif lainnya.</li>
                                            <li>Saat membuat video WAJIB menggunakan seragam di hari-H Talkshow Day & celana panjang hitam.</li>
                                            <li>Akun Instagram TIDAK BOLEH diprivate.</li>
                                            <li>WAJIB upload di akun pribadi dan bersifat publik (TIDAK BOLEH second account / close friends).</li>
                                            <li>Story WAJIB dimasukkan ke dalam highlight Instagram baru dengan judul Talkshow Day dan dikeep hingga tanggal 3 September 2022.</li>
                                            <li>WAJIB tag @oweekucs, @universitasciputra, serta WAJIB menggunakan hashtag #HORIZON #HopeRiseEmblazon #OweekUCS2022 #UCpeople #namakelompok_nomorkelompok #talkshowuc</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className={toggleState === 7 ? "maps active-maps" : "maps"}>
                                <h2>Membawa Laporan Checklist Barang Loading In </h2>
                                <ul>
                                    <li>Dalam bentuk hard copy</li>
                                    <li>Ditunjukkan ke panitia saat memasuki lobby/pintu masuk hypermart pada saat registrasi pagi (07.00-08.00 WIB) dan/ saat final booth preparation (08.30-10.30)</li>
                                </ul>
                                <h2>Membawa Laporan Kendaraan Selling Day</h2>
                                <ul>
                                    <li>Dalam bentuk hard copy</li>
                                    <li>Ditunjukkan ke panitia saat memasuki lobby/pintu masuk hypermart pada saat registrasi pagi (07.00-08.00 WIB)</li>
                                </ul>
                                <h2>Mengumpulkan Laporan Penjualan O-Week 2022 </h2>
                                <ul>
                                    <li>Deadline: 2 September 2022, 22.00 WIB</li>
                                    <li>Format nama: No Kelompok_Nama Kelompok_Laporan Penjualan (ex: 1_Biru_Laporan Penjualan)</li>
                                    <li>Format file: PDF</li>
                                    <li>Link template Laporan Penjualan: https://bit.ly/TemplateLaporanPenjualan</li>
                                    <li>Link pengumpulan Laporan Penjualan: https://bit.ly/PengumpulanLaporanPenjualan</li>
                                    <li>Pengumpulan akan dibuka dari tanggal 2 September 2022 pukul 21.00 WIB dan ditutup pada pukul 22.00 WIB. Pengumpulan hanya diperbolehkan satu kali saja.</li>
                                </ul>
                                <h2>Mengumpulkan Laporan Pertanggungjawaban Selling 2022.</h2>
                                <ul>
                                    <li>Pengumpulan Nota soft copy dimasukan kedalam LPJ Selling Day.</li>
                                    <li>Pengumpulan Nota hard copy diserahkan kepada AMD masing-masing.</li>
                                    <li>Deadline: 2 September 2022, 22.00 WIB</li>
                                    <li>Format nama: No Kelompok_Nama Kelompok_LPJ (ex: 1_Biru_LPJ)</li>
                                    <li>Format file: PDF</li>
                                    <li>Link template Laporan Pertanggungjawaban: https://bit.ly/templatelpjsellingday</li>
                                    <li>Link pengumpulan Laporan Pertanggungjawaban: https://bit.ly/lpjsellingday</li>
                                    <li>Pengumpulan akan dibuka dari tanggal 2 September 2022 pukul 21.00 WIB dan ditutup pada pukul 22.00 WIB. Pengumpulan hanya diperbolehkan satu kali saja.</li>
                                </ul>
                                <h2>Ketentuan Tambahan</h2>
                                <ul>
                                    <li>Wajib mengajak minimal 5 orang yang dibuktikan dengan berfoto dengan orang yang diajak dan mengumpulkannya di album Line grup kelompok trainee masing-masing.</li>
                                    <li>Pengembalian Modal harus kembali 100% dan diserahkan kepada AMD masing-masing setelah jam operasional selling berakhir (22.00 WIB).</li>
                                    <li>Sumbangan Sosial dari keuntungan yang didapatkan sebesar 5% dari keuntungan dengan minimal pemberian Rp25.000 dan diserahkan kepada AMD masing-masing.</li>
                                </ul>
                            </div>
                            <div className={toggleState === 8 ? "maps active-maps" : "maps"}>
                                <h2>Proses Registrasi</h2>
                                <ul>
                                    <li>Kloter 1: 14.00 - 15.00 (Kelompok 1 - 60)</li>
                                    <li>Kloter 2: 15.00 - 16.00 (kelompok 61 - 120)</li>
                                </ul>
                                <h2>Ketentuan Lengkap Closing O-WEEK 2022</h2>
                                <ul>
                                    <li></li>
                                </ul>
                                <h2>Peraturan Alur Registrasi Closing O-WEEK 2022</h2>
                                <ul>
                                    <li></li>
                                </ul>
                            </div>
                        </Isi>
                    </Seperator>
                </Content>
            </Container>
            <Topeng src={topeng} 
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            />
        </MainContainer>
     );
}
 
export default Task;