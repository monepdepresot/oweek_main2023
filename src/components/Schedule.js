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
height: 100vh;
width: 100vw;
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
`

const Leftlogo = styledComponents.div`
position: absolute;
left: calc(2rem);
z-index: 1;
`

const Content = styledComponents.div`
padding: 3vw 15vw;
display: flex;
flex-direction: column;
justify-content: center;
`

const Topeng = styledComponents.img`
width: 15vw;
position: absolute;
right: -5vw;
top: 50%;
`

const Menu = styledComponents.div`
display: flex;
justify-content: center;
gap: 30px;
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

                </Content>
            </Container>
            <Topeng src={topeng} />
        </MainContainer>
     );
}
 
export default Schedule;