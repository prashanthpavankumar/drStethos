import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Home';
import Contact from './Contact';
import useAnimeAnimations from './hooks/useAnimeAnimations';

function App() {
  useAnimeAnimations();

  return (
    <Router>
      <div id="mouse-trail"></div>
      <div id="bg-3d-scene"></div>
      
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
