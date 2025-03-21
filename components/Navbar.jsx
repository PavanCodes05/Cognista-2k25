"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { name: "Home", url: "/" },
  { name: "About", url: "#about" },
  { name: "Events", url: "#events" },
  { name: "Timeline", url: "#timeline" },
  { name: "Contact", url: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/80 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12">
            {/* Replace with your actual logo */}
            <div className="w-full h-full bg-gradient-to-r from-accent-cyan to-accent-magenta rounded-full flex items-center justify-center">
              <span className="font-orbitron font-bold text-white">C</span>
            </div>
          </div>
          <h1 className="font-orbitron font-bold text-xl sm:text-2xl tracking-tight">
            <span className="gradient-text">Cognista</span>
            <span className="text-white">2k25</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.url}
              className="text-gray-300 hover:text-accent-cyan transition-colors duration-300 font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="#events" 
            className="btn-primary"
          >
            Register Now
          </Link>
        </nav>

        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? 
            <FaTimes size={24} /> :
            <FaBars size={24} />
          }
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-dark/95 backdrop-blur-lg`}>
        <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.url}
              className="text-gray-300 hover:text-accent-cyan py-2 transition-colors duration-300 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="#register" 
            className="btn-primary w-full text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Register Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

