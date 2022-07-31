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
display: flex;
align-items: center;
justify-content: center;
`

const TaskModal = ({ showTaskModal, setShowTaskModal }) => {
    return (
      <AnimatePresence exitBeforeEnter>
        { showTaskModal && (
          <Backdrop
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => setShowTaskModal(false)}
          >
           <Modal
           variants={modal}
           >
            <h2>Task will be available soon</h2>
           </Modal>
          </Backdrop>
        )}
      </AnimatePresence>
    )
}
 
export default TaskModal;