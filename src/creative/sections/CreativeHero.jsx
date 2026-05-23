import React from 'react';
import { motion } from 'framer-motion';
import CreativeBlob from '../components/CreativeBlob';

const CreativeHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Warm ambient glow & 3D object */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4a853]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <CreativeBlob />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#d4a853] tracking-[0.2em] text-sm uppercase mb-6 font-medium"
        >
          Portfolio Management & Strategy
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-playfair font-semibold leading-tight mb-8"
        >
          Crafting Digital<br/>
          <span className="italic text-[#f8f5f0]/80">Experiences & Strategies</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[#f8f5f0]/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          Specializing in portfolio curation, social media marketing, and comprehensive digital strategies that elevate brands and engage audiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#services" className="inline-flex items-center justify-center px-8 py-4 bg-[#d4a853] text-[#1a1510] font-medium rounded-full hover:bg-[#ebd095] transition-colors duration-300">
            Explore My Services
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CreativeHero;
