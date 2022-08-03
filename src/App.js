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