import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, GitCommit, ExternalLink, Activity } from 'lucide-react';

const GitHubActivity = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchGitHubActivity = async () => {
            try {
                // Fetch public events for the user
                const response = await fetch('https://api.github.com/users/Krishna6438/events/public?per_page=20');
                if (!response.ok) throw new Error('Failed to fetch');
                const data = await response.json();
                
                // Filter for meaningful events (Push, Create Repo, PullRequest)
                const meaningfulEvents = data.filter(event => 
                    ['PushEvent', 'PullRequestEvent', 'CreateEvent'].includes(event.type)
                );
                
                // Keep the top 3 most recent meaningful events
                setEvents(meaningfulEvents.slice(0, 3));
            } catch (err) {
                console.error("GitHub fetch error:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchGitHubActivity();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffHours = Math.floor((now - date) / (1000 * 60 * 60));
        if (diffHours < 24) return `${diffHours}h ago`;
        return `${Math.floor(diffHours / 24)}d ago`;
    };

    const renderEventContent = (event) => {
        if (event.type === 'PushEvent') {
            const commits = event.payload.commits;
            return (
                <p className="text-sm text-slate-300 truncate mt-1">
                    Pushed {commits.length} commit{commits.length > 1 ? 's' : ''}: "{commits[0]?.message || 'Updates'}"
                </p>
            );
        } else if (event.type === 'CreateEvent') {
            return <p className="text-sm text-slate-300 truncate mt-1">Created repository {event.repo.name}</p>;
        } else if (event.type === 'PullRequestEvent') {
            return <p className="text-sm text-slate-300 truncate mt-1">{event.payload.action} pull request in {event.repo.name}</p>;
        }
        return null;
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full bg-gradient-to-br from-[#0f172a] to-[#050b14] border border-teal-500/20 rounded-2xl p-6 relative overflow-hidden"
        >
            {/* Background glowing orb */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-teal-500/10 blur-3xl rounded-full pointer-events-none" />
            
            <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-teal-500/10 rounded-lg border border-teal-500/20 text-teal-400">
                        <Activity size={20} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                            Live Coding Activity
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></span>
                        </h3>
                        <p className="text-xs text-slate-400 font-mono">github.com/Krishna6438</p>
                    </div>
                </div>
                <a 
                    href="https://github.com/Krishna6438" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                    <ExternalLink size={18} />
                </a>
            </div>

            <div className="space-y-4 relative z-10">
                {loading ? (
                    <div className="animate-pulse space-y-4">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="flex gap-3">
                                <div className="w-8 h-8 bg-slate-800 rounded-full" />
                                <div className="flex-1 space-y-2 py-1">
                                    <div className="h-4 bg-slate-800 rounded w-1/3" />
                                    <div className="h-3 bg-slate-800 rounded w-2/3" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : error || events.length === 0 ? (
                    <div className="text-center py-6 text-slate-500 text-sm">
                        <Github size={24} className="mx-auto mb-2 opacity-50" />
                        <p>No recent public activity found</p>
                    </div>
                ) : (
                    <div className="relative border-l border-teal-500/20 ml-4 space-y-6">
                        {events.map((event, idx) => (
                            <motion.div 
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                key={event.id} 
                                className="relative pl-6"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-teal-500 rounded-full shadow-[0_0_8px_#14b8a6]" />
                                
                                <div className="group block">
                                    <div className="flex items-baseline justify-between mb-0.5">
                                        <a href={`https://github.com/${event.repo.name}`} target="_blank" rel="noopener noreferrer" className="font-medium text-teal-400 hover:underline text-sm truncate pr-4">
                                            {event.repo.name.split('/')[1] || event.repo.name}
                                        </a>
                                        <span className="text-[10px] text-slate-500 font-mono whitespace-nowrap">
                                            {formatDate(event.created_at)}
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <GitCommit size={14} className="text-slate-500 mt-1 flex-shrink-0" />
                                        {renderEventContent(event)}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
            
            <a 
                href="https://github.com/Krishna6438" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block mt-6 w-full py-2.5 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 rounded-xl text-center text-sm font-semibold text-slate-300 hover:text-white transition-all cursor-pointer flex items-center justify-center gap-2"
            >
                <Github size={16} /> View GitHub Profile
            </a>
        </motion.div>
    );
};

export default GitHubActivity;
