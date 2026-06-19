import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaSpotify, FaEnvelope } from 'react-icons/fa6';

const CreativeFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 px-6 relative z-10 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#d4a853]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 mb-16 relative z-10">
        
        {/* Monogram / Logo */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start"
        >
          <a href="#" className="group relative inline-flex items-center justify-center w-16 h-16 rounded-full border border-white/10 bg-white/5 hover:border-[#d4a853]/50 transition-all duration-500 mb-4 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#d4a853]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="font-playfair text-2xl font-black text-white group-hover:text-[#d4a853] transition-colors duration-500 relative z-10">KS</span>
          </a>
          <h2 className="font-playfair text-xl font-semibold text-white tracking-wide">Krishna Sharma</h2>
          <p className="text-white/40 text-sm mt-1">Digital Strategist & Creative Professional.</p>
        </motion.div>

        {/* Social Icons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex gap-4"
        >
          {[
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/krishna-sharma123/" },
            { icon: FaInstagram, href: "https://www.instagram.com/krishna_r_sharma_/" },
            { icon: FaSpotify, href: "https://open.spotify.com/album/3mh5VGrOeQnHHgi738uMPL?si=pISJRcPbTS2nYRU6hxOLpA" },
            { icon: FaEnvelope, href: "mailto:krishnasharma283125@gmail.com" }
          ].map((social, index) => {
            const Icon = social.icon;
            return (
              <a 
                key={index}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full border border-white/10 bg-transparent flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1"
              >
                <Icon size={18} />
              </a>
            )
          })}
        </motion.div>
        
      </div>
      
      {/* Copyright Line */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-xs font-mono relative z-10"
      >
        <p>&copy; {currentYear} Krishna Sharma. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white/70 transition-colors">Terms of Service</a>
        </div>
      </motion.div>
    </footer>
  );
};

export default CreativeFooter;
