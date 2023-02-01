import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';

// Styling
import './App.css';

// Components
import Nav from './components/Nav';


function App() {
  return (
    <>
    <Nav />
    <main>
      <Routes>
        <Route path='/' />
      </Routes>
    </main>
    </>
  );
}

export default App;
