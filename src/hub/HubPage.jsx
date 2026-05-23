import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, PenTool, Github, Linkedin, Mail } from 'lucide-react';
import PortfolioCard from './components/PortfolioCard';
import './hub.css';

const HubPage = () => {
  return (
    <div className="hub-page font-sans selection:bg-teal-400/30">
      <div className="hub-background ambient-pulse"></div>
      
      <div className="hub-content min-h-screen flex flex-col items-center justify-center p-6 sm:p-12">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight font-outfit">
            Krishna Sharma
          </h1>
          <p className="text-slate-400 text-lg max-w-lg mx-auto">
            Choose a portfolio to explore my work.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl z-10 relative">
          <PortfolioCard 
            title="Tech Portfolio"
            description="Explore my software engineering projects, technical skills, and development experience."
            icon={Terminal}
            path="/dev"
            colorTag="#14b8a6" // Teal
            delay={0.2}
          />
          
          <PortfolioCard 
            title="Creative Portfolio"
            description="Discover my work in portfolio management, social media marketing, and digital strategy."
            icon={PenTool}
            path="/creative"
            colorTag="#d4a853" // Gold
            delay={0.4}
          />
        </div>

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 flex gap-6 z-10 relative"
        >
          <a href="https://github.com/Krishna6438" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/krishna-sharma" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#0a66c2] transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:krishna@example.com" className="text-slate-500 hover:text-teal-400 transition-colors">
            <Mail size={24} />
          </a>
        </motion.div>

      </div>
    </div>
  );
};

export default HubPage;
