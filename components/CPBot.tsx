
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, MessageCircle, ArrowUpCircle } from 'lucide-react';

// Robot Expressions SVGs
const RobotEyes = ({ mood }: { mood: string }) => {
    switch (mood) {
        case 'happy':
            return (
                <g className="eyes">
                    <path d="M12 22C12 22 14 18 18 18C22 18 24 22 24 22" stroke="#00F2FF" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M36 22C36 22 38 18 42 18C46 18 48 22 48 22" stroke="#00F2FF" strokeWidth="3" fill="none" strokeLinecap="round" />
                </g>
            );
        case 'thinking':
            return (
                <g className="eyes">
                    <rect x="12" y="22" width="12" height="3" rx="1.5" fill="#00F2FF" />
                    <rect x="36" y="22" width="12" height="3" rx="1.5" fill="#00F2FF" />
                </g>
            );
        case 'surprised':
            return (
                <g className="eyes">
                    <circle cx="18" cy="24" r="5" fill="#00F2FF" />
                    <circle cx="42" cy="24" r="5" fill="#00F2FF" />
                </g>
            );
        default: // idle/glad
            return (
                <g className="eyes">
                    <path d="M12 24C12 24 14 20 18 20C22 20 24 24 24 24" stroke="#00F2FF" strokeWidth="4" fill="none" strokeLinecap="round" />
                    <path d="M36 24C36 24 38 20 42 20C46 20 48 24 48 24" stroke="#00F2FF" strokeWidth="4" fill="none" strokeLinecap="round" />
                </g>
            );
    }
};

const RobotMouth = ({ mood }: { mood: string }) => {
    switch (mood) {
        case 'happy':
            return <path d="M24 38C24 38 27 42 30 42C33 42 36 38 36 38" stroke="#00F2FF" strokeWidth="3" fill="none" strokeLinecap="round" />;
        case 'thinking':
            return <rect x="26" y="38" width="8" height="2" rx="1" fill="#00F2FF" />;
        case 'surprised':
            return <circle cx="30" cy="40" r="3" fill="#00F2FF" />;
        default:
            return <path d="M26 40C26 40 28 42 30 42C32 42 34 40 34 40" stroke="#00F2FF" strokeWidth="2" fill="none" strokeLinecap="round" />;
    }
};

export const CPBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [mood, setMood] = useState('idle');
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [messages, setMessages] = useState([
        { role: 'bot', text: 'Oi! Eu sou o CP Bot. Em que posso te ajudar hoje? 😊' }
    ]);
    const [input, setInput] = useState('');

    // Handle interactive eyes tracking
    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 15;
            const y = (e.clientY / window.innerHeight - 0.5) * 10;
            setMousePos({ x, y });
        };
        window.addEventListener('mousemove', handleMove);
        return () => window.removeEventListener('mousemove', handleMove);
    }, []);

    // Handle scroll mood changes
    useEffect(() => {
        const handleScroll = () => {
            const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
            if (scrollPercent > 0.7) setMood('happy'); // Closing the deal
            else if (scrollPercent > 0.4) setMood('thinking'); // Analyzing features
            else setMood('idle');
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const sendMessage = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!input.trim()) return;

        setMessages([...messages, { role: 'user', text: input }]);
        setInput('');
        setMood('thinking');

        // Simulate Bot Response
        setTimeout(() => {
            setMessages(prev => [...prev, { role: 'bot', text: 'Estou processando sua dúvida... Por enquanto, você pode me chamar no WhatsApp também!' }]);
            setMood('happy');
        }, 1500);
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4 pointer-events-auto">
            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="w-[320px] md:w-[380px] h-[500px] bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/5 bg-white/5 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="font-black text-xs uppercase tracking-widest text-white/60">CP Bot Online</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4">
                            {messages.map((m, i) => (
                                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${
                                        m.role === 'user' 
                                        ? 'bg-brand-blue text-white rounded-br-none' 
                                        : 'bg-white/5 text-brand-gray rounded-bl-none border border-white/5'
                                    }`}>
                                        {m.text}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Input */}
                        <form onSubmit={sendMessage} className="p-4 bg-white/5 border-t border-white/5 flex gap-2">
                            <input 
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Digite sua dúvida..."
                                className="flex-1 bg-transparent border-none text-white text-sm focus:ring-0 placeholder:text-white/20"
                            />
                            <button type="submit" className="p-2 bg-brand-blue hover:bg-brand-blue/80 text-white rounded-xl transition-all">
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Robot Trigger */}
            <div className="relative group perspective-[1000px]">
                {/* Speech Bubble */}
                {!isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="absolute right-24 bottom-12 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-2xl rounded-br-none whitespace-nowrap hidden md:block"
                    >
                        <p className="text-[10px] font-black uppercase text-brand-blue tracking-tighter">Posso te ajudar? 🤖</p>
                    </motion.div>
                )}

                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                        y: [0, -15, 0],
                    }}
                    transition={{
                        y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="relative w-20 h-20 md:w-24 md:h-24 outline-none"
                >
                    <svg viewBox="0 0 60 70" className="w-full h-full drop-shadow-[0_0_15px_rgba(0,242,255,0.3)]">
                        {/* Shadow underneath */}
                        <ellipse cx="30" cy="65" rx="15" ry="3" fill="rgba(0,0,0,0.2)" />
                        
                        {/* Robot Head Group - Follows Mouse */}
                        <motion.g
                            animate={{
                                x: mousePos.x,
                                y: mousePos.y,
                            }}
                        >
                            {/* Head Outer */}
                            <rect x="5" y="8" width="50" height="42" rx="20" fill="#E8EAED" stroke="#BBB" strokeWidth="0.5" />
                            {/* Face Shield */}
                            <rect x="10" y="13" width="40" height="32" rx="15" fill="#1A1D21" />
                            {/* Antenna */}
                            <line x1="30" y1="8" x2="30" y2="2" stroke="#BBB" strokeWidth="2" strokeLinecap="round" />
                            <circle cx="30" cy="2" r="1.5" fill="#00F2FF" className="animate-pulse" />
                            
                            {/* Facial Features */}
                            <RobotEyes mood={mood} />
                            <RobotMouth mood={mood} />
                        </motion.g>

                        {/* Robot Body */}
                        <path d="M15 50C15 50 18 64 30 64C42 64 45 50 45 50" fill="#E8EAED" stroke="#BBB" strokeWidth="0.5" />
                        <rect x="22" y="52" width="16" height="6" rx="3" fill="#D1D4D9" />
                        
                        {/* Arms */}
                        <motion.path 
                            animate={{ rotate: mood === 'thinking' ? [0, -10, 0] : 0 }}
                            d="M8 52C8 52 2 55 2 60" stroke="#E8EAED" strokeWidth="4" strokeLinecap="round" 
                        />
                        <motion.path 
                            animate={{ rotate: mood === 'happy' ? [0, 10, 0] : 0 }}
                            d="M52 52C52 52 58 55 58 60" stroke="#E8EAED" strokeWidth="4" strokeLinecap="round" 
                        />
                    </svg>
                </motion.button>
            </div>
        </div>
    );
};
