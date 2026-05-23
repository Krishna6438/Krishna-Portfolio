import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Menu, X } from 'lucide-react';

const CreativeNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Approach', href: '#approach' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1a1510]/90 backdrop-blur-md border-b border-[#d4a853]/20 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo / Back */}
        <Link to="/" className="flex items-center gap-2 text-[#f8f5f0] hover:text-[#d4a853] transition-colors group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-playfair text-xl tracking-wider font-semibold">KS.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm tracking-wide text-[#f8f5f0]/80 hover:text-[#d4a853] transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-5 py-2 border border-[#d4a853] text-[#d4a853] hover:bg-[#d4a853] hover:text-[#1a1510] transition-colors rounded-full text-sm tracking-wide">
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-[#f8f5f0]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#1a1510] border-b border-[#d4a853]/20 py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-[#f8f5f0]/80 hover:text-[#d4a853] text-lg">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default CreativeNavbar;
