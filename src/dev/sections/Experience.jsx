import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Calendar, Briefcase, Award, Code2 } from 'lucide-react';

const experienceData = [
    {
        id: 1,
        institution: 'DigiMark Pro',
        degree: 'Growth & Technology Associate',
        field: 'Full-time',
        location: 'India · On-site',
        period: "Jun 2026 – Present",
        icon: '📈',
        color: '#10b981',
        points: [
            "Contribute to building modern digital experiences and growth-focused solutions for businesses.",
            "Design brand identities, digital assets, and marketing visuals.",
            "Develop modern responsive websites and landing pages.",
            "Manage social media presence, branding, and LinkedIn banners.",
            "Support client projects from concept to execution and explore innovative digital strategies.",
            "Collaborate on branding, UI/UX, and online positioning."
        ],
        skills: ['Web Application Development', 'MERN Stack', 'UI/UX Design', 'Social Media Branding', 'Digital Growth']
    },
    {
        id: 2,
        institution: 'Deccan AI Experts',
        degree: 'Data Annotator',
        field: 'Freelance',
        location: 'India · Remote',
        period: "May 2026 – Present",
        icon: '🤖',
        color: '#8b5cf6',
        points: [
            "Annotate complex training datasets and verify logic consistency for large language models.",
            "Develop and evaluate conversational data for code and mathematics tasks."
        ],
        skills: ['AI Data Annotation', 'MERN Stack', 'Programming Verification', 'Quality Assurance']
    },
    {
        id: 3,
        institution: 'Capgemini',
        degree: 'Analyst Trainee',
        field: 'Apprenticeship',
        location: 'India · On-site',
        period: "Dec 2025 – May 2026",
        icon: '🏢',
        color: '#0070ad',
        points: [
            "Received hands-on training in software development frameworks and technologies.",
            "Built and optimized services using ASP.NET Core and relational database management systems."
        ],
        skills: ['.NET Development', 'ASP.NET Core', 'C#', 'SQL Server']
    },
    {
        id: 4,
        institution: 'Outlier AI',
        degree: 'AI Trainer Intern',
        field: 'Internship',
        location: 'Remote',
        period: "Aug 2024 – May 2025",
        icon: '🧠',
        color: '#14b8a6',
        points: [
            "Trained AI systems by annotating educational datasets with a focus on HTML, CSS, JS, and math logic.",
            "Enhanced model outputs by refining examples, labeling edge cases, and improving output clarity."
        ],
        skills: ['HTML', 'CSS', 'JavaScript', 'Mathematical Logic', 'Prompt Engineering']
    },
    {
        id: 5,
        institution: 'Cipher School',
        degree: 'MERN Stack Trainee',
        field: 'Training',
        location: 'Online',
        period: "Jul 2024 – Oct 2024",
        icon: '💻',
        color: '#facc15',
        points: [
            "Completed an intensive training program on MERN Stack Web Development.",
            "Developed fully responsive frontend pages and backend REST APIs with JWT authentication."
        ],
        skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs']
    }
];

const ExperienceCard = ({ item, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative pl-8 md:pl-0 w-full group/timeline"
        >
            {/* ── Timeline Center Node (Desktop) ── */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-14 h-14 rounded-full items-center justify-center z-20 transition-all duration-500 group-hover/timeline:scale-110"
                style={{
                    background: 'rgba(5, 13, 20, 0.95)',
                    border: `2px solid ${item.color}`,
                    boxShadow: `0 0 25px ${item.color}50, inset 0 0 10px ${item.color}30`,
                    backdropFilter: 'blur(10px)',
                }}
            >
                <span className="text-2xl drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">{item.icon}</span>
            </div>

            {/* ── Timeline Node (Mobile) ── */}
            <div className="md:hidden absolute left-0 top-6 w-8 h-8 rounded-full flex items-center justify-center z-20 transition-all duration-300 group-hover/timeline:scale-125"
                style={{
                    background: 'rgba(5, 13, 20, 0.95)',
                    border: `2px solid ${item.color}`,
                    boxShadow: `0 0 20px ${item.color}60`,
                }}
            >
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: item.color, boxShadow: `0 0 10px ${item.color}` }} />
            </div>

            {/* ── The Card ── */}
            <div className={`md:w-[45%] ${index % 2 === 0 ? 'md:ml-auto md:pl-14' : 'md:mr-auto md:pr-14'} mb-14 relative group`}>

                {/* Horizontal connector line (Desktop) */}
                <div className={`hidden md:block absolute top-[2.75rem] h-[2px] w-14 ${index % 2 === 0 ? '-left-14' : '-right-14'} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
                    style={{ background: `linear-gradient(${index % 2 === 0 ? '90deg' : '270deg'}, ${item.color}, transparent)` }}
                />

                <div className="rounded-3xl p-8 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
                    style={{
                        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.6) 0%, rgba(5, 13, 20, 0.8) 100%)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(16px)',
                    }}
                >
                    {/* Hover Glow Background */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                        style={{ background: `radial-gradient(circle at top ${index % 2 === 0 ? 'right' : 'left'}, ${item.color}15 0%, transparent 80%)` }} />

                    {/* Glowing animated border lines */}
                    <div className="absolute top-0 left-0 w-full h-[2px] opacity-20 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: `linear-gradient(90deg, ${index % 2 === 0 ? 'transparent' : item.color}, ${index % 2 === 0 ? item.color : 'transparent'})` }} />
                    <div className="absolute bottom-0 left-0 w-full h-[1px] opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                        style={{ background: `linear-gradient(90deg, ${index % 2 === 0 ? item.color : 'transparent'}, ${index % 2 === 0 ? 'transparent' : item.color})` }} />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col gap-5">

                        {/* Header: Degree & Period */}
                        <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-4 border-b border-slate-700/50 pb-5">
                            <div>
                                <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 tracking-tight leading-tight group-hover:to-white transition-colors">
                                    {item.degree}
                                </h3>
                                <span className="inline-block text-xs font-mono font-bold mt-1.5 px-2.5 py-0.5 rounded-full border"
                                    style={{
                                        color: item.color,
                                        borderColor: `${item.color}40`,
                                        background: `${item.color}10`,
                                    }}
                                >
                                    {item.field}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-xs font-mono font-medium text-slate-300 bg-slate-800/80 px-4 py-2 rounded-full w-fit border border-slate-700 shadow-inner whitespace-nowrap"
                                style={{ boxShadow: `inset 0 0 10px ${item.color}10` }}>
                                <Calendar size={14} style={{ color: item.color }} />
                                {item.period}
                            </div>
                        </div>

                        {/* Middle: Institution */}
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg" style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                                    <Briefcase size={20} style={{ color: item.color }} className="drop-shadow-lg" />
                                </div>
                                <h4 className="text-xl font-bold text-slate-100 tracking-wide">{item.institution}</h4>
                            </div>

                            {/* Role Bullet Points */}
                            {item.points && (
                                <ul className="text-sm text-slate-300 pl-4 border-l-2 ml-4 py-1 space-y-2" style={{ borderColor: `${item.color}40` }}>
                                    {item.points.map((pt, idx) => (
                                        <li key={idx} className="relative leading-relaxed pl-1.5">
                                            <span className="absolute left-0 top-2 w-1 h-1 rounded-full" style={{ background: item.color }} />
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Footer: Location & Skills Tags */}
                        <div className="flex flex-col gap-4 pt-4 mt-2 border-t border-slate-800/30">
                            <div className="flex items-center gap-2 text-sm text-slate-400 font-medium bg-slate-900/50 px-3 py-1.5 rounded-lg border border-slate-800 w-fit">
                                <MapPin size={16} className="text-rose-400" />
                                {item.location}
                            </div>

                            {/* Skills Badges */}
                            {item.skills && (
                                <div className="flex flex-wrap gap-1.5">
                                    {item.skills.map((skill, idx) => (
                                        <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded-md border text-slate-400"
                                            style={{
                                                borderColor: 'rgba(255, 255, 255, 0.05)',
                                                background: 'rgba(255, 255, 255, 0.02)',
                                            }}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="experience" className="py-24 relative overflow-hidden">

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6 w-fit"
                        style={{ background: 'rgba(234,179,8,0.1)', borderColor: 'rgba(234,179,8,0.2)', color: '#facc15' }}>
                        <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#facc15' }}></span>
                        <span className="text-xs font-mono tracking-widest">EXPERIENCE</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Experience</span>
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto text-lg font-light">
                        My professional timeline and roles in technology and growth.
                    </p>
                </motion.div>

                {/* Timeline Container */}
                <div className="relative">

                    {/* Vertical Line Background */}
                    <div className="absolute left-[16px] md:left-1/2 top-4 bottom-4 w-px bg-slate-800/80 -translate-x-1/2" />

                    {/* Animated Vertical Line Progress */}
                    <motion.div
                        className="absolute left-[16px] md:left-1/2 top-4 w-0.5 -translate-x-1/2 rounded-full glow-shadow"
                        style={{
                            height: lineHeight,
                            background: 'linear-gradient(to bottom, #facc15, #f97316, #ef4444)',
                            boxShadow: '0 0 10px rgba(245,158,11,0.5)'
                        }}
                    />

                    {/* Timeline Items */}
                    <div className="flex flex-col relative z-10 pt-8 pb-8">
                        {experienceData.map((item, index) => (
                            <ExperienceCard key={item.id} item={item} index={index} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
