// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import EventsSection from './components/EventsSection';
import AboutSection from './components/AboutSection';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="App">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {activeSection === 'home' && <Home />}
      {activeSection === 'events' && <EventsSection />}
      {activeSection === 'about' && <AboutSection />}

      <Footer />
    </div>
  );
}

export default App;