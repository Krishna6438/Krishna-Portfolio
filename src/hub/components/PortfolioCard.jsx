import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PortfolioCard = ({ title, description, icon: Icon, path, colorTag, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="group relative w-full max-w-sm mx-auto"
    >
      <Link to={path} className="block w-full h-full">
        {/* Glow behind card */}
        <div 
          className="absolute -inset-0.5 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-500" 
          style={{ backgroundColor: colorTag }}
        ></div>
        
        {/* Card Content */}
        <div className="relative h-full bg-[#0a1118]/80 backdrop-blur-md border border-slate-800 p-8 rounded-2xl transition-all duration-300 group-hover:bg-[#0d1620]/90 group-hover:border-slate-700 flex flex-col items-center text-center">
          
          {/* Icon wrapper */}
          <div 
            className="mb-6 p-4 rounded-full bg-black/30 border border-slate-700/50 shadow-inner transition-transform duration-300 group-hover:scale-110" 
            style={{ boxShadow: `inset 0 0 20px -10px ${colorTag}` }}
          >
            <Icon size={40} style={{ color: colorTag }} />
          </div>

          <h2 className="text-2xl font-semibold mb-3 tracking-tight font-outfit" style={{ color: '#f1f5f9' }}>{title}</h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            {description}
          </p>
          
          {/* Fake action button */}
          <div className="mt-auto px-6 py-2 rounded-full border border-slate-700 text-sm font-medium text-slate-300 group-hover:bg-slate-800 transition-colors flex items-center gap-2">
            Explore 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PortfolioCard;
