import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

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
    <section id="contact" className="py-24 px-6 bg-[#1a1510]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-4 text-[#f8f5f0]">Get in Touch</h2>
          <div className="w-16 h-1 bg-[#d4a853] mx-auto opacity-60"></div>
          <p className="mt-6 text-[#f8f5f0]/60 text-lg">Have a project in mind? Let's create something together.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#26201a] p-8 md:p-12 rounded-2xl border border-[#d4a853]/20"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm text-[#f8f5f0]/80 mb-2 uppercase tracking-wider font-medium">Name</label>
                <input id="name" required value={form.name} onChange={handleChange} className="w-full bg-[#1a1510] border border-[#d4a853]/30 rounded-none px-4 py-3 text-[#f8f5f0] focus:outline-none focus:border-[#d4a853] transition-colors" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-[#f8f5f0]/80 mb-2 uppercase tracking-wider font-medium">Email</label>
                <input id="email" type="email" required value={form.email} onChange={handleChange} className="w-full bg-[#1a1510] border border-[#d4a853]/30 rounded-none px-4 py-3 text-[#f8f5f0] focus:outline-none focus:border-[#d4a853] transition-colors" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-[#f8f5f0]/80 mb-2 uppercase tracking-wider font-medium">Message</label>
              <textarea id="message" required rows={5} value={form.message} onChange={handleChange} className="w-full bg-[#1a1510] border border-[#d4a853]/30 rounded-none px-4 py-3 text-[#f8f5f0] focus:outline-none focus:border-[#d4a853] transition-colors resize-none" />
            </div>

            <button
              type="submit" disabled={submitting || sent || error}
              className={`w-full py-4 text-[#1a1510] font-semibold text-lg flex items-center justify-center gap-2 transition-all ${sent ? 'bg-green-500' : error ? 'bg-red-500 text-white' : 'bg-[#d4a853] hover:bg-[#ebd095]'}`}
            >
              {sent ? 'Message Sent!' : error ? 'Failed. Try Again.' : submitting ? 'Sending...' : <><Send size={20} /> Send Message</>}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default CreativeContact;
