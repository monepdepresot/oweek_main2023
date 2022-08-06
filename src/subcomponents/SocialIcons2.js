import { motion } from 'framer-motion';
import styled from 'styled-components';

import maps from '../img/mapsblack.svg';
import instagram from '../img/instagramblack.svg';
import spotify from '../img/spotifyblack.svg';
import web from '../img/webblack.svg';

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
`

const Line = styled(motion.span)`
width: 2px;
height: 7rem;
background-color: black;
`

const Button = styled.button`
padding: 0;
border: none;
background: none;
cursor: pointer;
`

const SocialIcons2 = ({setShowMapsModal, setShowSpotifyModal} ) => {
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
                height: '7rem'
            }}
            transition={{
                type:'spring', duration:1, delay:0.8
            }}
            />
        </Icons>
    )
}

export default SocialIcons2
