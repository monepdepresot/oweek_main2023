import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styledComponents from 'styled-components';

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
padding: 15px;
background: #ABD8F4;
border-radius: 10px;
text-align: center;
`

const Menu = styledComponents.div`
display: flex;
justify-content: center;
gap: 20%;
`

const MapsModal = ({ showMapsModal, setShowMapsModal }) => {
    return (
      <AnimatePresence exitBeforeEnter>
        { showMapsModal && (
          <Backdrop
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => setShowMapsModal(false)}
          >
           <Modal
           variants={modal}
           >
            <Menu>
              <p>Universitas Ciputra</p>
              <p>Ciputra World</p>
              <p>Palimanan Resto</p>
            </Menu>              
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.6060211110484!2d112.62941291469197!3d-7.2855871947414945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fde455555555%3A0xd7e2611ae591f046!2sUniversitas%20Ciputra%20Surabaya!5e0!3m2!1sid!2sid!4v1658676454189!5m2!1sid!2sid" width="100%" height="85%" style={{ border:0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
           </Modal>
          </Backdrop>
        )}
      </AnimatePresence>
    )
}
 
export default MapsModal;