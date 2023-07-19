import { motion } from 'framer-motion';
import styled from 'styled-components';

import maps from '../img/maps.svg';
import instagram from '../img/instagram.svg';
import spotify from '../img/spotify.svg';
import web from '../img/web.svg';

const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;

position: fixed;
bottom: 0;
left: 2rem;

z-index:2;

&>*:not(:last-child){
    margin: 0.5rem 0;
}

@media only screen and (max-width: 768px) {
    left: 1rem;
}
@media only screen and (max-width: 630px) {
    position: absolute;
    top: 80%;
   
  }
`

const Line = styled(motion.span)`
width: 2px;
height: 12vh;
background-color: white;

`

const Button = styled.button`
padding: 0;
border: none;
background: none;
cursor: pointer;

`

const SocialIcons = ({setShowMapsModal, setShowSpotifyModal} ) => {
    return (
        <Icons>
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1}}
            >
                <Button onClick={() => setShowSpotifyModal(true)}>
                    <img src={spotify} width={25} height={25} />
                </Button>
            </motion.div>
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.2}}
            >
                <a target="_blank" href="https://www.instagram.com/oweekucs/">
                    <img src={instagram} width={25} height={25} />
                </a>
            </motion.div>
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.4}}
            >
                <a target="_blank" href="https://uc.ac.id/bma/">
                    <img src={web} width={25} height={25} />
                </a>
            </motion.div>
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.6}}
            >
                <Button onClick={() => setShowMapsModal(true)}>
                    <img src={maps} width={25} height={25} />
                </Button>
            </motion.div>

            <Line
            initial={
                {
                    height:0
                }
            }
            animate={{
                height: '12vh'
            }}
            transition={{
                type:'spring', duration:1, delay:0.8
            }}
            />
        </Icons>
    )
}

export default SocialIcons
