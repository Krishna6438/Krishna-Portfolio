import React from 'react';
import { Linkedin, Mail, Twitter, Youtube } from 'lucide-react';

const CreativeFooter = () => {
  return (
    <footer className="bg-[#110e0a] border-t border-[#d4a853]/10 py-12 px-6 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h2 className="font-playfair text-2xl font-semibold text-[#f8f5f0] mb-2">Krishna Sharma</h2>
          <p className="text-[#f8f5f0]/60 text-sm">Digital Strategist & Creative Professional.</p>
        </div>

        <div className="flex gap-6">
          <a href="https://linkedin.com/in/krishna-sharma" target="_blank" rel="noopener noreferrer" className="text-[#f8f5f0]/60 hover:text-[#d4a853] transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-[#f8f5f0]/60 hover:text-[#d4a853] transition-colors">
            <Youtube size={20} />
          </a>
          <a href="mailto:krishna@example.com" className="text-[#f8f5f0]/60 hover:text-[#d4a853] transition-colors">
            <Mail size={20} />
          </a>
        </div>
        
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 text-center text-[#f8f5f0]/40 text-xs">
        &copy; {new Date().getFullYear()} Krishna Sharma. All rights reserved.
      </div>
    </footer>
  );
};

export default CreativeFooter;
