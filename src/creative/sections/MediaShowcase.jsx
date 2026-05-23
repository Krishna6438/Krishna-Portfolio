import React from 'react';
import { motion } from 'framer-motion';
import { Youtube } from 'lucide-react';
import AudioEQ from '../components/AudioEQ';

const MediaShowcase = () => {
  return (
    <section id="media" className="py-24 px-6 relative z-10 bg-[#110e0a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-4">Featured Media</h2>
          <div className="w-16 h-1 bg-[#d4a853] mx-auto opacity-60"></div>
          <p className="mt-6 text-[#f8f5f0]/60 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Listen to my latest track and explore more content on my YouTube channel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          
          {/* YouTube Channel CTA */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <div className="w-16 h-16 bg-[#26201a] rounded-2xl flex items-center justify-center border border-[#d4a853]/30 mb-8 shadow-[0_0_30px_rgba(212,168,83,0.15)]">
              <Youtube size={32} className="text-[#d4a853]" />
            </div>
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-3xl font-playfair font-bold text-[#f8f5f0]">Subscribe to my Channel</h3>
              <AudioEQ />
            </div>
            <p className="text-[#f8f5f0]/70 mb-8 font-light leading-relaxed">
              Join me as I explore digital strategy, creative content, music production, and behind-the-scenes workflows. 
            </p>
            <a 
              href="https://www.youtube.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-transparent border border-[#d4a853] text-[#d4a853] font-medium rounded-full hover:bg-[#d4a853] hover:text-[#1a1510] transition-all duration-300"
            >
              <Youtube size={20} className="group-hover:animate-pulse" />
              Visit Channel
            </a>
          </motion.div>

          {/* Video Player */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-[#d4a853]/20"
            style={{ aspectRatio: '16/9' }}
          >
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/ekMWHIULLrQ?rel=0&modestbranding=1" 
              title="Featured Song"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MediaShowcase;
