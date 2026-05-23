import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Share2, Target, Users } from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: "Portfolio Management",
    desc: "Strategic curation and optimization of digital portfolios to maximize professional impact and showcase capabilities effectively."
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Developing engaging content strategies, managing community interactions, and driving organic growth across platforms."
  },
  {
    icon: Target,
    title: "Digital Marketing",
    desc: "Executing data-driven campaigns, SEO optimization, and analytics tracking to ensure measurable ROI."
  },
  {
    icon: Users,
    title: "Talent Acquisition",
    desc: "Sourcing top-tier talent, streamlining recruitment processes, and building strong employer brand strategies."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-4">Areas of Expertise</h2>
          <div className="w-16 h-1 bg-[#d4a853] mx-auto opacity-60"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#26201a] p-8 md:p-10 rounded-2xl border border-[#d4a853]/10 hover:border-[#d4a853]/30 transition-colors"
            >
              <service.icon size={32} className="text-[#d4a853] mb-6" />
              <h3 className="text-2xl font-playfair font-semibold mb-4">{service.title}</h3>
              <p className="text-[#f8f5f0]/70 leading-relaxed font-light">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
