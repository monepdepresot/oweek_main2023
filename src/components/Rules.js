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
padding: 3vw;
display: flex;
justify-content: center;
gap: 50px;
`

const Topeng = styledComponents(motion.img)`
width: 15vw;
position: absolute;
right: -5vw;
top: 50%;
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
                    <div>
                        <h1>RULES</h1>
                    </div>
                    <div>
                        <h1>POIN PCD</h1>
                    </div>
                </Content>
            </Container>
            <Topeng src={topeng} />
        </MainContainer>
     );
}
 
export default Rules;