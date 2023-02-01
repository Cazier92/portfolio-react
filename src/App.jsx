import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';

// Styling
import './App.css';
import './fonts/NunitoSans-Regular.ttf'
import './fonts/NunitoSans-SemiBold.ttf'

// Components
import Nav from './components/Nav';
import Landing from './pages/Landing';
import Bio from './pages/Bio';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import ProjectDetails from './pages/ProjectDetails';



function App() {
  return (
    <>
    <Nav />
    <main>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/bio' element={<Bio />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:idx' element={<ProjectDetails />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
    </main>
    </>
  );
}

export default App;
