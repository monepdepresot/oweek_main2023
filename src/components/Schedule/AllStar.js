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

const AllStar = () => {

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
                    <Link to="/">
                        <img src={logohorizon} alt="" width="120" /> 
                    </Link>                                    
                </Leftlogo>

                <Rightlogo>
                    <img src={oweek} alt="" width="55" /> 
                    <img src={uc} alt="" width="55" />                    
                </Rightlogo>

                <Content>
                    <h1>ALL STAR</h1>

                    <Faq>
                        <h3>Apa itu All Star Oweek?</h3>
                        <p>Sebuah ajang dimana para trainee dapat menunjukkan bakat mereka pada masa orientasi di Universitas Ciputra</p>

                        <h3>Bakat apa saja sih yang bisa?</h3>
                        <p>Segala bentuk bakat yang bisa ditampilkan di panggung, karena nantinya penampilan-penampilan yang akan dipilih untuk perform pada closing party O-Week 2022 </p>

                        <h3>Benefits:</h3>
                        <p>Poin tambahan O-Week, Medali dan Plakat bagi penampilan yang terbaik</p>

                        <h3>Tunggu apa lagi, yuk segera daftar</h3>
                        <p>Jangan lupa, kalian bisa mengajak teman kalian untuk tampil bersama kalian, untuk lebih jelasnya yuk baca ketentuan lengkapnya</p>
                    </Faq>

                    <Faq>
                        <h2>Ketentuan All Star</h2>
                        <Flex>
                            <Dot src={dot} />
                            <span>Pendaftaran dan pengumpulan karya All Star O-Week 2022 akan dibuka pada tanggal 17 Agustus 2022 - 30 Agustus 2022 pukul 11:59 WIB</span>
                        </Flex>
                        <Flex>
                            <Dot src={dot} />
                            <span>Trainee tidak diwajibkan untuk mengikuti kegiatan All Star, namun seluruh trainee yang mendaftar akan mendapatkan poin tambahan O-Week.</span>
                        </Flex>
                        <Flex>
                            <Dot src={dot} />
                            <span>Penampilan Trainee berdurasi minimal 1 menit dan maksimal 2 menit.</span>
                        </Flex>
                        <Flex>
                            <Dot src={dot} />
                            <span>Trainee dapat tampil/mengumpulkan karya sendiri ataupun collab dengan teman lain yang sesama mengikuti O-Week Batch 1 dengan jumlah anggota maksimal 5 Orang.</span>
                        </Flex>
                        <Flex>
                            <Dot src={dot} />
                            <span>Trainee sangat disarankan untuk melakukan performance dengan kolaborasi dengan sesama trainee.</span>
                        </Flex>
                        <Flex>
                            <Dot src={dot} />
                            <span>Trainee yang mendaftar harus bersedia untuk tampil pada closing O-Week pada tanggal 3 September 2022 dan mengikuti Gladi Bersih pada tanggal 3 September 2022.</span>
                        </Flex>
                        <Flex>
                            <Dot src={dot} />
                            <span>Dari karya yang dikumpulkan, akan dipilih 3 penampilan yang terbaik yang akan tampil pada Closing Ceremony O-Week 2022.</span>
                        </Flex>
                        <Flex>
                            <Dot src={dot} />
                            <span>Semakin unik dan menarik performance trainee, poin tambahan yang didapatkan akan semakin banyak.</span>
                        </Flex>
                        <Flex>
                            <Dot src={dot} />
                            <span>Selama closing ceremony, panitia akan menilai performer terbaik sebagai pemenang All Star O-week 2022.</span>
                        </Flex>
                        <Flex>
                            <Dot src={dot} />
                            <span>Tiga penampilan terbaik All Star O-Week 2022 akan mendapatkan Poin tambahan dan medali.</span>
                        </Flex>
                        <Flex>
                            <Dot src={dot} />
                            <span>Pemenang All Star O-Week 2022 akan mendapatkan poin tambahan, medali, dan Plakat.</span>
                        </Flex>
                        <Flex>
                            <Dot src={dot} />
                            <span>Seluruh segi dari performance Trainee tidak diperbolehkan mengandung kata kasar, kekerasan, benda tajam, ilmu hitam dan yang menyinggung SARA.</span>
                        </Flex>
                        <Flex>
                            <Dot src={dot} />
                            <span>Menggunakan kostum / seragam tampil merupakan poin plus bagi para all star.</span>
                        </Flex>
                        <Flex>
                            <Dot src={dot} />
                            <span>Kostum atau atribut yang digunakan trainee wajib rapi dan sopan.</span>
                        </Flex>
                        <Flex>
                            <Dot src={dot} />
                            <span>Mengumpulkan Foto Close Up menggunakan kostum yang dipakai saat tampil (sesuai dengan contoh) dikumpulkan ke link google drive. Jika berkelompok, Trainee mengupload foto bersama kelompok dan foto pribadi masing-masing.</span>
                        </Flex>
                        <Flex>
                            <Dot src={dot} />
                            <span>Trainee wajib mengupload teaser performance yang mereka kumpulkan di instagram pribadi mereka (tidak boleh second account, tidak boleh private) dengan durasi 20-30 detik dan link post dikumpulkan pada google form.</span>
                        </Flex>
                        <Flex>
                            <Dot src={dot} />
                            <span>Segala trainee yang tampil wajib mengumpulkan foto close up menggunakan kostum yang digunakan saat performance</span>
                        </Flex>
                        <Flex>
                            <Dot src={dot} />
                            <span>Trainee harus memberikan keterangan mengenai segala perlengkapan yang perlu disediakan panitia O-Week dan yang dibawa sendiri saat mereka tampil pada Closing Ceremony pada google form pengumpulan karya. (contoh: gitar)</span>
                        </Flex>
                        <Flex>
                            <Dot src={dot} />
                            <span>Trainee wajib menandatangani surat pernyataan yang bisa di download pada link berikut:<span><a>Surat Perjanjian Trainee All Star</a></span>, mengupload surat yang telah ditandatangani pada folder google drive (pastikan hak akses bisa dilihat oleh seluruh orang yang memiliki link)  dan dikumpulkan pada google form pengumpulan karya melalui link folder google drive. </span>
                        </Flex>
                        <Flex>
                            <Dot src={dot} />
                            <span>Post IG trainee (ketentuan post IG akan diinfokan lebih lanjut)</span>
                        </Flex>
                    </Faq>
                </Content>

            </Container>
        </MainContainer>
     );
}
 
export default AllStar;