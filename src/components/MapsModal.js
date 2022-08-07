import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styledComponents from 'styled-components';
import bg from '../img/bg/Rulesbg.svg';

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

p {
  font-weight: 600;
}
`

const Modal = styledComponents(motion.div)`
max-width: 60vw;
height: 50vh;
margin: 0 auto;
padding: 15px;
border-radius: 10px;
text-align: center;
position: relative;

background-image: url(${bg});
background-size: cover;
background-repeat: no-repeat;
background-position: center;

@media only screen and (max-width: 1024px) {
  max-width: 75vw;
}
`

const Menu = styledComponents.div`
display: flex;
justify-content: center;
gap: 20%;

@media only screen and (max-width: 1440px) {
  gap: 10%;
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

const Tabs = styledComponents.p`
padding: 5px 15px;
cursor: pointer;
`

const Exit = styledComponents.h2`
position: absolute;
right: 10px;
top: -10px;
cursor: pointer;
`

const Map = styledComponents.div`
height: 83%;

@media only screen and (max-width: 1440px) {
  height: 80%;
}

@media only screen and (max-width: 768px) {
  height: 87%;
}
`

const MapsModal = ({ showMapsModal, setShowMapsModal }) => {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  const handleChange = event => {
    setToggleState(parseInt(event.target.value));
  }

  const close = () => {
    toggleTab(1);
    setShowMapsModal(false);
  }

  return (
    <AnimatePresence exitBeforeEnter>
      { showMapsModal && (
        <Backdrop
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Modal
          variants={modal}
          >
            <Exit onClick={close}>X</Exit>
            
            <Menu>
              <Tabs className={toggleState === 1 ? "active-tabs2" : ""} onClick={() => toggleTab(1)}>Universitas Ciputra</Tabs>
              <Tabs className={toggleState === 2 ? "active-tabs2" : ""} onClick={() => toggleTab(2)}>Ciputra World</Tabs>
              <Tabs className={toggleState === 3 ? "active-tabs2" : ""} onClick={() => toggleTab(3)}>Palimanan</Tabs>
            </Menu>    

            <Menu2>
              <select
                onChange={handleChange}
              >
                <option value="1">Universitas Ciputra</option>
                <option value="2">Ciputra World</option>
                <option value="3">Palimanan</option>
              </select>
            </Menu2>

            <Map>     
              <iframe className={toggleState === 1 ? "maps active-maps" : "maps"} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.6060211110484!2d112.62941291469197!3d-7.2855871947414945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fde455555555%3A0xd7e2611ae591f046!2sUniversitas%20Ciputra%20Surabaya!5e0!3m2!1sid!2sid!4v1658676454189!5m2!1sid!2sid" width="100%" height="100%" style={{ border:0 }}></iframe>
              <iframe className={toggleState === 2 ? "maps active-maps" : "maps"} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.54033146722!2d112.7171467146919!3d-7.293022094736238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb8bedaba761%3A0x4a96323c89c2a25c!2sCiputra%20World%20Surabaya!5e0!3m2!1sid!2sid!4v1659104213423!5m2!1sid!2sid" width="100%" height="100%" style={{ border:0 }}></iframe>  
              <iframe className={toggleState === 3 ? "maps active-maps" : "maps"} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.542723735873!2d112.63528133049923!3d-7.2927514647245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fdeccfd6c169%3A0x258974d4253838aa!2sPalimanan!5e0!3m2!1sid!2sid!4v1659104307745!5m2!1sid!2sid" width="100%" height="100%" style={{ border:0 }}></iframe>
            </Map>
            
          </Modal>
        </Backdrop>
      )}
    </AnimatePresence>
  )
}
 
export default MapsModal;