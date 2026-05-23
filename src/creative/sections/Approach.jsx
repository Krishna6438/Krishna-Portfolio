import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { num: "01", title: "Research & Discovery", desc: "Understanding goals, audience, and market landscape." },
  { num: "02", title: "Strategy Formulation", desc: "Crafting a tailored, data-backed approach to achieve objectives." },
  { num: "03", title: "Execution & Creation", desc: "Bringing the strategy to life through high-quality deliverables." },
  { num: "04", title: "Analysis & Optimization", desc: "Monitoring performance and refining tactics for maximum impact." }
];

const Approach = () => {
  return (
    <section id="approach" className="py-24 px-6 bg-[#110e0a]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-4 text-center md:text-left">My Approach</h2>
          <div className="w-16 h-1 bg-[#d4a853] mx-auto md:mx-0 opacity-60"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line for desktop */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-12 w-full h-px bg-[#d4a853]/20"></div>
              )}
              
              <div className="text-4xl font-playfair font-bold text-[#d4a853]/20 mb-4">{step.num}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-[#f8f5f0]/60 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
