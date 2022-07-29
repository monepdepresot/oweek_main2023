import logohorizon from '../img/logo/horizonwhite.svg';
import oweek from '../img/logo/oweekwhite.svg';
import uc from '../img/logo/ucwhite.png';
import bg from '../img/bg/Rulesbg.svg';
import topeng from '../img/topeng/topeng1.svg';

import styledComponents from "styled-components";
import {motion} from 'framer-motion';
import SocialIcons from "../subcomponents/SocialIcons";
import PowerButton from '../subcomponents/PowerButton';

const MainContainer = styledComponents.div`
background-image: url(${bg});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
height: 100vh;
width: 100vw;
overflow:hidden;
position: relative;

h1 {
    font-size: 3em;
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
justify-content: center;
gap: 30px;
`

const Topeng = styledComponents(motion.img)`
width: 15vw;
position: absolute;
right: -5vw;
top: 50%;
`

const Aturan = styledComponents.div`
width: 100%;
`

const PoinPCD = styledComponents.div`
width: 100%;
`

const Isi = styledComponents.div`
border: 1px solid white;
`

const Rules = () => {
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
                    <Aturan>
                        <h1>RULES</h1>
                        <Isi>

                        </Isi>
                    </Aturan>
                    <PoinPCD>
                        <h1>POIN PCD</h1>
                        <Isi>

                        </Isi>
                    </PoinPCD>
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
 
export default Rules;