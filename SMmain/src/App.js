// src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import Appointment from './components/Appointment';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Testimonials />
      <Appointment />
        <Footer />
    </div>
  );
}

export default App;
