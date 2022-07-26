import './App.css';
import React, { useState } from 'react';
import {Route, Routes} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Home from './components/Home';
import Rules from './components/Rules';
import Schedule from './components/Schedule';
import Task from './components/Task';
import About from './components/About';
import NotFound from './components/NotFound';
import { AnimatePresence } from 'framer-motion';
import MapsModal from './components/MapsModal';
import SpotifyModal from './components/SpotifyModal';
import SocialIcons from './subcomponents/SocialIcons';

function App() {
  const location = useLocation();

  const [showMapsModal, setShowMapsModal] = useState(false);
  const [showSpotifyModal, setShowSpotifyModal] = useState(false);

  return (  
    <div className="App">
      <div className="content">   
        <MapsModal showMapsModal={showMapsModal} setShowMapsModal={setShowMapsModal} />
        <SpotifyModal showSpotifyModal={showSpotifyModal} setShowSpotifyModal={setShowSpotifyModal} />
        <SocialIcons setShowMapsModal={setShowMapsModal} setShowSpotifyModal={setShowSpotifyModal} />
        
        <AnimatePresence exitBeforeEnter onExitComplete={() => setShowMapsModal(false) && setShowSpotifyModal(false)}>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />} />              
            <Route path='/rules' element={<Rules />} />              
            <Route path='/schedule' element={<Schedule />} />              
            <Route path='/task' element={<Task />} />              
            <Route path='/about' element={<About />} />              
            <Route path='*' element={<NotFound />} /> 
          </Routes>  
        </AnimatePresence>                     
      </div>
    </div>   
  );
}

export default App;