import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Lightbulb, Target, ClipboardList, PenTool, Rocket, LineChart } from 'lucide-react';

const steps = [
  { 
    id: "01", 
    title: "Research", 
    desc: "Deep diving into the subject, understanding the target audience, and gathering foundational inspirations.",
    icon: Lightbulb
  },
  { 
    id: "02", 
    title: "Strategy", 
    desc: "Formulating a concrete plan of action, defining goals, and establishing the creative direction.",
    icon: Target
  },
  { 
    id: "03", 
    title: "Planning", 
    desc: "Structuring the workflow, allocating resources, and setting milestones for the project.",
    icon: ClipboardList
  },
  { 
    id: "04", 
    title: "Production", 
    desc: "Executing the vision through design, development, composition, and creation of assets.",
    icon: PenTool
  },
  { 
    id: "05", 
    title: "Publishing", 
    desc: "Launching the project, deploying code, releasing music, or delivering the final product.",
    icon: Rocket
  },
  { 
    id: "06", 
    title: "Optimization", 
    desc: "Analyzing performance metrics, gathering feedback, and refining the work for maximum impact.",
    icon: LineChart
  }
];

const CreativeProcess = () => {
  return (
    <section id="creative-process" className="py-32 px-6 bg-[#050505] relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-24 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-playfair font-bold mb-6 text-white"
          >
            Creative <span className="text-[#d4a853] italic">Process</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4a853] to-transparent mx-auto"
          />
        </div>

        {/* Timeline container */}
        <div className="relative">
          
          {/* Main Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[5%] right-[5%] h-0.5 bg-white/10 rounded-full">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#d4a853] via-purple-500 to-[#d4a853] shadow-[0_0_15px_#d4a853]"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative group flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                  
                  {/* Vertical Connector Line (Mobile/Tablet) */}
                  {index !== steps.length - 1 && (
                    <div className="block lg:hidden absolute top-24 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-[#d4a853]/50 to-transparent" />
                  )}

                  {/* Icon Node */}
                  <div className="relative mb-8 z-10">
                    <div className="w-20 h-20 rounded-2xl bg-[#111] border border-white/10 flex items-center justify-center transform group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-300 shadow-xl group-hover:shadow-[0_0_30px_rgba(212,168,83,0.3)] relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#d4a853]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Icon className="w-8 h-8 text-[#d4a853] group-hover:text-white transition-colors duration-300 relative z-10" />
                    </div>
                    {/* Glowing dot on the connector line (Desktop) */}
                    <div className="hidden lg:block absolute -top-[52px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#d4a853] shadow-[0_0_10px_#d4a853] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="px-4 lg:px-0">
                    <div className="text-5xl font-playfair font-black text-white/5 mb-2 group-hover:text-white/10 transition-colors duration-300">
                      {step.id}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#d4a853] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed max-w-[250px]">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CreativeProcess;
