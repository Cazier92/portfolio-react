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


function App() {
  return (
    <>
    <Nav />
    <main>
      <Routes>
        <Route path='/' element={<Landing />}/>
      </Routes>
    </main>
    </>
  );
}

export default App;
