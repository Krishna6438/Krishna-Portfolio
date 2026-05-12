import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

const knowledgeBase = [
    {
        keywords: ['skill', 'technolog', 'stack', 'know', 'react', 'node'],
        response: "Krishna's core stack includes React 19, Node.js, Express, and Tailwind CSS. He's also proficient in PHP, MySQL, and modern tools like Framer Motion and Three.js."
    },
    {
        keywords: ['project', 'build', 'made', 'work', 'portfolio'],
        response: "Krishna has built several impressive projects including 'Quick AI' (a SaaS platform), a secure Recipe Blog with JWT authentication, and a scalable Discussion Forum. You can see them in the Projects section above!"
    },
    {
        keywords: ['contact', 'hire', 'email', 'reach', 'touch'],
        response: "You can reach Krishna via the Contact form on this website, or connect with him on LinkedIn. He's always open to discussing new opportunities!"
    },
    {
        keywords: ['education', 'study', 'college', 'degree'],
        response: "Krishna holds a B.Tech in Information Technology from MAIT, Delhi (2022-2026) with an 8.5 CGPA."
    },
    {
        keywords: ['experience', 'job', 'intern'],
        response: "Krishna is actively building real-world digital solutions and seeking internship or full-time opportunities where he can leverage his full-stack skills."
    },
    {
        keywords: ['hi', 'hello', 'hey', 'who'],
        response: "Hello! I'm Krishna's AI Assistant. You can ask me about his skills, projects, education, or how to contact him. How can I help you today?"
    }
];

const findBestMatch = (input) => {
    const lowerInput = input.toLowerCase();
    for (const entry of knowledgeBase) {
        if (entry.keywords.some(kw => lowerInput.includes(kw))) {
            return entry.response;
        }
    }
    return "I'm not quite sure about that. I specialize in answering questions about Krishna's skills, projects, and background. Could you try rephrasing your question?";
};

const AIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi there! I'm Krishna's AI assistant. What would you like to know about his background or skills?", sender: 'ai' }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = (e) => {
        e?.preventDefault();
        if (!input.trim()) return;

        const userMsg = input.trim();
        setInput('');
        setMessages(prev => [...prev, { text: userMsg, sender: 'user' }]);
        setIsTyping(true);

        // Simulate AI thinking and typing delay
        setTimeout(() => {
            const response = findBestMatch(userMsg);
            setMessages(prev => [...prev, { text: response, sender: 'ai' }]);
            setIsTyping(false);
        }, 1200 + Math.random() * 800);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-16 right-0 w-[350px] h-[450px] bg-[#0f172a] border border-teal-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                        style={{ boxShadow: '0 10px 40px -10px rgba(20,184,166,0.3)' }}
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-teal-500/20 to-indigo-500/20 border-b border-teal-500/30 p-4 flex justify-between items-center backdrop-blur-md">
                            <div className="flex items-center gap-2">
                                <div className="bg-teal-500/20 p-2 rounded-lg">
                                    <Bot size={18} className="text-teal-400" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-white">Krishna's AI</h3>
                                    <div className="flex items-center gap-1.5 mt-0.5">
                                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                                        <span className="text-[10px] text-slate-400 font-mono">Online</span>
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-[#050b14]/50">
                            {messages.map((msg, i) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    key={i}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`flex max-w-[85%] gap-2 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                        <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${msg.sender === 'user' ? 'bg-indigo-500/20 text-indigo-400' : 'bg-teal-500/20 text-teal-400'}`}>
                                            {msg.sender === 'user' ? <User size={12} /> : <Bot size={12} />}
                                        </div>
                                        <div className={`p-3 rounded-2xl text-sm ${msg.sender === 'user' ? 'bg-indigo-500/20 text-indigo-100 rounded-tr-sm border border-indigo-500/20' : 'bg-teal-500/10 text-slate-300 rounded-tl-sm border border-teal-500/20'}`}>
                                            {msg.text}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                                    <div className="flex max-w-[85%] gap-2 flex-row">
                                        <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 bg-teal-500/20 text-teal-400">
                                            <Bot size={12} />
                                        </div>
                                        <div className="p-4 rounded-2xl bg-teal-500/10 border border-teal-500/20 rounded-tl-sm flex gap-1.5 items-center h-[42px]">
                                            <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-teal-500 rounded-full opacity-60" />
                                            <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-teal-500 rounded-full opacity-60" />
                                            <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-teal-500 rounded-full opacity-60" />
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSend} className="p-3 border-t border-slate-800 bg-[#0f172a]">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask anything..."
                                    className="w-full bg-[#050b14] border border-slate-800 rounded-xl py-2.5 pl-4 pr-10 text-sm text-slate-200 focus:outline-none focus:border-teal-500/50 transition-colors"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || isTyping}
                                    className="absolute right-2 p-1.5 text-teal-500 hover:bg-teal-500/10 rounded-lg transition-colors disabled:opacity-50 disabled:hover:bg-transparent"
                                >
                                    <Send size={16} />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-gradient-to-tr from-teal-500 to-indigo-500 rounded-full shadow-lg flex items-center justify-center text-white relative overflow-hidden"
                style={{ boxShadow: '0 4px 20px rgba(20,184,166,0.4)' }}
            >
                <div className="absolute inset-0 bg-white/20 hover:opacity-100 opacity-0 transition-opacity" />
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
                {!isOpen && (
                    <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 border-2 border-[#0f172a] rounded-full animate-pulse" />
                )}
            </motion.button>
        </div>
    );
};

export default AIChatbot;
