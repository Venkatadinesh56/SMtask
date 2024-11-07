// src/components/Navbar.js
import React, { useEffect } from 'react';

const Navbar = () => {
  useEffect(() => {
    const menuToggle = document.querySelector('.menu-toggle');                                                             
    const navLinks = document.querySelector('.nav-links');

    const toggleMenu = () => {
      navLinks.classList.toggle('active');
    };

    menuToggle.addEventListener('click', toggleMenu);

    // Cleanup event listener on component unmount
    return () => {
      menuToggle.removeEventListener('click', toggleMenu);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">SafeMax</div>
      <div className="menu-toggle">&#9776;</div>
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#why-choose">Why Choose Us</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#Appointment">Appointment</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
