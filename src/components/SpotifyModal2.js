import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styledComponents from 'styled-components';
import bg from '../img/bg/Schedulebg.svg';

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
}
  
const modal = {
    hidden: {
        y: '-100vh',
        opacity: 0
    },
    visible: {
        y: '20vh',
        opacity: 1,
        transition: {
            delay: 0.5
        }
    }
}

const Backdrop = styledComponents(motion.div)`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0,0,0,0.5);
z-index: 3;
`

const Modal = styledComponents(motion.div)`
max-width: 60vw;
height: 50vh;
margin: 0 auto;
padding: 25px;
border-radius: 10px;
text-align: center;
position: relative;

background-image: url(${bg});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
`

const Exit = styledComponents.h3`
position: absolute;
right: 8px;
top: -12px;
cursor: pointer;
`

const SpotifyModal = ({ showSpotifyModal, setShowSpotifyModal }) => {
    return (
      <AnimatePresence exitBeforeEnter>
        { showSpotifyModal && (
          <Backdrop
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => setShowSpotifyModal(false)}
          >
           <Modal
           variants={modal}
           >
            <Exit>X</Exit>
              <iframe src="https://open.spotify.com/embed/playlist/6u4dxGNWAAS4NgsBm2KLrZ?utm_source=generator" width="100%" height="100%" frameBorder="0"></iframe>
           </Modal>
          </Backdrop>
        )}
      </AnimatePresence>
    )
}
 
export default SpotifyModal;