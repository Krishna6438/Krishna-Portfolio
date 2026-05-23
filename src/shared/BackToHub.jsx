import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackToHub = () => {
  return (
    <div className="fixed top-6 left-6 z-[100]">
      <Link 
        to="/" 
        className="flex items-center gap-2 px-4 py-2 bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-white/70 hover:text-white transition-all group shadow-lg"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-medium tracking-wide">Hub</span>
      </Link>
    </div>
  );
};

export default BackToHub;
