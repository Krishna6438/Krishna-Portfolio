import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroCanvas from '../ui/HeroCanvas';

const GlobalSpace = () => {
    const [timeOfDay, setTimeOfDay] = useState('night');

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour >= 6 && hour < 17) {
            setTimeOfDay('day');
        } else if (hour >= 17 && hour < 20) {
            setTimeOfDay('sunset');
        } else {
            setTimeOfDay('night');
        }
    }, []);

    const themes = {
        day: {
            bg: '#0a192f',
            grad1: 'rgba(56,189,248,0.15)', // sky blue
            grad2: 'rgba(20,184,166,0.15)', // teal
            grad3: 'rgba(99,102,241,0.10)'  // indigo
        },
        sunset: {
            bg: '#1a0b16',
            grad1: 'rgba(249,115,22,0.12)', // orange
            grad2: 'rgba(217,70,239,0.10)', // fuchsia
            grad3: 'rgba(159,18,57,0.12)'   // rose
        },
        night: {
            bg: '#03080c',
            grad1: 'rgba(20,184,166,0.12)', // teal
            grad2: 'rgba(99,102,241,0.10)', // indigo
            grad3: 'rgba(167,139,250,0.08)' // violet
        }
    };

    const currentTheme = themes[timeOfDay];

    return (
        <div className="fixed inset-0 z-0 pointer-events-none transition-colors duration-1000" style={{ backgroundColor: currentTheme.bg }}>
            <HeroCanvas />
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
                    transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full mix-blend-screen"
                    style={{ background: `radial-gradient(circle, ${currentTheme.grad1} 0%, transparent 70%)`, transition: 'background 1s ease-in-out' }}
                />
                <motion.div
                    animate={{ x: [0, -50, 0], y: [0, 60, 0] }}
                    transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
                    className="absolute top-[30%] -right-20 w-[600px] h-[600px] rounded-full mix-blend-screen"
                    style={{ background: `radial-gradient(circle, ${currentTheme.grad2} 0%, transparent 70%)`, transition: 'background 1s ease-in-out' }}
                />
                <motion.div
                    animate={{ x: [0, 40, 0], y: [0, 50, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                    className="absolute bottom-[-10%] left-1/3 w-[700px] h-[700px] rounded-full mix-blend-screen"
                    style={{ background: `radial-gradient(circle, ${currentTheme.grad3} 0%, transparent 70%)`, transition: 'background 1s ease-in-out' }}
                />
            </div>

            {/* Global scanline overlay for texture */}
            <div className="absolute inset-0 pointer-events-none z-10 mix-blend-overlay opacity-30" style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.2) 2px, rgba(0,0,0,0.2) 4px)'
            }} />
        </div>
    );
};

export default GlobalSpace;
