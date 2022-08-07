import './App.css';
import React from 'react';
import {Route, Routes} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Home from './components/Home';
import Rules from './components/Rules';
import Schedule from './components/Schedule';
import Task from './components/Task';
import About from './components/About';
import NotFound from './components/NotFound';
import { AnimatePresence } from 'framer-motion';
import AllStar from './components/Schedule/AllStar';
import Mobilisasi from './components/Schedule/Mobilisasi';
import ProdiDay1 from './components/Schedule/ProdiDay1';
import ProdiDay2 from './components/Schedule/ProdiDay2';
import KetentuanClosing from './components/Schedule/KetentuanClosing';

function App() {
  const location = useLocation();

  return (  
    <div className="App">
      <div className="content">   
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />} />              
            <Route path='/rules' element={<Rules />} />              
            <Route path='/schedule' element={<Schedule />} />              
            {/* <Route path='/task' element={<Task />} />      */}
            <Route path='/about' element={<About />} />    

            <Route path='*' element={<NotFound />} /> 

            {/* <Route path='/allstar' element={<AllStar />} />  */}
            <Route path='/mobilisasi' element={<Mobilisasi />} /> 
            <Route path='/prodiday1' element={<ProdiDay1 />} /> 
            <Route path='/prodiday2' element={<ProdiDay2 />} /> 
            <Route path='/ketentuanclosing' element={<KetentuanClosing />} /> 
          </Routes>  
        </AnimatePresence>                     
      </div>
    </div>   
  );
}

export default App;