import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Send } from 'lucide-react';
import { FaLinkedin, FaInstagram, FaSpotify, FaEnvelope } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Magnetic Button Component
const MagneticButton = ({ children, className, onClick, type = "button", disabled = false }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.button>
  );
};

// Social Link with Glow Effect
const SocialLink = ({ href, icon: Icon, label }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
              rgba(212, 168, 83, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10 w-10 h-10 rounded-full bg-[#111] flex items-center justify-center border border-white/5 group-hover:border-[#d4a853]/50 transition-colors duration-300">
        <Icon className="w-5 h-5 text-white/70 group-hover:text-[#d4a853] transition-colors duration-300" />
      </div>
      <span className="relative z-10 text-white/70 font-medium group-hover:text-white transition-colors duration-300">
        {label}
      </span>
    </a>
  );
};

const CreativeContact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    emailjs.init({ publicKey: PUBLIC_KEY });
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        name: form.name,
        email: form.email,
        message: form.message,
        reply_to: form.email,
        title: 'Creative Portfolio Contact',
      }, { publicKey: PUBLIC_KEY });
      setSent(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setError(true);
      setTimeout(() => setError(false), 6000);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-[#050505] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#d4a853]/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-playfair font-black text-white mb-6"
          >
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a853] to-purple-500 italic">Collaborate</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="w-32 h-1 bg-gradient-to-r from-[#d4a853] to-transparent origin-left"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Socials & Info (Left side) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Connect</h3>
              <p className="text-white/50 mb-8 max-w-sm">
                Whether you have a project in mind or just want to chat, feel free to reach out across any of these platforms.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <SocialLink href="mailto:krishnasharma283125@gmail.com" icon={FaEnvelope} label="krishnasharma283125@gmail.com" />
              <SocialLink href="https://www.linkedin.com/in/krishna-sharma123/" icon={FaLinkedin} label="LinkedIn" />
              <SocialLink href="https://www.instagram.com/krishna_r_sharma_/" icon={FaInstagram} label="Instagram" />
              <SocialLink href="https://open.spotify.com/album/3mh5VGrOeQnHHgi738uMPL?si=pISJRcPbTS2nYRU6hxOLpA" icon={FaSpotify} label="Spotify" />
            </div>
          </motion.div>

          {/* Contact Form (Right side) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-[#111] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative">
              {/* Form glowing accent */}
              <div className="absolute inset-0 border border-white/5 rounded-3xl pointer-events-none" />
              
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input 
                      id="name" 
                      required 
                      value={form.name} 
                      onChange={handleChange} 
                      className="w-full bg-transparent border-b-2 border-white/10 py-4 text-white placeholder-transparent focus:outline-none focus:border-[#d4a853] transition-colors peer"
                      placeholder="Name"
                    />
                    <label htmlFor="name" className="absolute left-0 top-4 text-white/40 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#d4a853] transition-all duration-300">Name</label>
                  </div>
                  
                  <div className="relative group">
                    <input 
                      id="email" 
                      type="email" 
                      required 
                      value={form.email} 
                      onChange={handleChange} 
                      className="w-full bg-transparent border-b-2 border-white/10 py-4 text-white placeholder-transparent focus:outline-none focus:border-[#d4a853] transition-colors peer"
                      placeholder="Email"
                    />
                    <label htmlFor="email" className="absolute left-0 top-4 text-white/40 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#d4a853] transition-all duration-300">Email Address</label>
                  </div>
                </div>

                <div className="relative group pt-4">
                  <textarea 
                    id="message" 
                    required 
                    rows={4} 
                    value={form.message} 
                    onChange={handleChange} 
                    className="w-full bg-transparent border-b-2 border-white/10 py-4 text-white placeholder-transparent focus:outline-none focus:border-[#d4a853] transition-colors peer resize-none"
                    placeholder="Message"
                  />
                  <label htmlFor="message" className="absolute left-0 top-8 text-white/40 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-8 peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#d4a853] transition-all duration-300">Your Message</label>
                </div>

                <div className="pt-6">
                  <MagneticButton
                    type="submit" 
                    disabled={submitting || sent || error}
                    className={`relative w-full py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 overflow-hidden group transition-colors ${sent ? 'bg-green-500 text-white' : error ? 'bg-red-500 text-white' : 'bg-[#d4a853] text-[#111]'}`}
                  >
                    {!sent && !error && (
                      <span className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      {sent ? 'Message Sent Successfully' : error ? 'Failed. Try Again.' : submitting ? 'Sending...' : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </span>
                  </MagneticButton>
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CreativeContact;
