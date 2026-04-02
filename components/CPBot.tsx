
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, MessageCircle } from 'lucide-react';

// Types for robot states
type RobotMood = 'happy' | 'cheerful' | 'curious' | 'thinking' | 'surprised' | 'sad';

const RobotEyes = ({ mood }: { mood: RobotMood }) => {
    const variants = {
        happy: { d: "M15 22C15 22 17 18 21 18C25 18 27 22 27 22", strokeWidth: 3 },
        cheerful: { d: "M15 22C15 22 17 18 21 18C25 18 27 22 27 22", strokeWidth: 4 },
        curious: { d: "M15 24A3 3 0 1 1 15.1 24", strokeWidth: 0 }, // Right winks later
        thinking: { d: "M15 24L24 24", strokeWidth: 3 },
        surprised: { d: "M15 24A4 4 0 1 1 15.1 24", strokeWidth: 0 },
        sad: { d: "M15 20C15 20 17 24 21 24C25 24 27 20 27 20", strokeWidth: 3 }
    };

    return (
        <g className="eyes-group">
            {/* Left Eye */}
            <motion.path 
                animate={mood === 'curious' ? { d: "M15 22L21 22", strokeWidth: 3 } : variants[mood]}
                stroke="#00F2FF" fill="none" strokeLinecap="round" 
                className="drop-shadow-[0_0_8px_rgba(0,242,255,0.8)]"
            />
            {/* Right Eye */}
            <motion.path 
                animate={variants[mood]}
                transform="translate(20, 0)"
                stroke="#00F2FF" fill="none" strokeLinecap="round" 
                className="drop-shadow-[0_0_8px_rgba(0,242,255,0.8)]"
            />
        </g>
    );
};

const RobotMouth = ({ mood }: { mood: RobotMood }) => {
    const variants = {
        happy: { d: "M26 38C26 38 28 42 34 42C40 42 42 38 42 38", strokeWidth: 2.5 },
        cheerful: { d: "M24 36C24 36 28 44 34 44C40 44 44 36 44 36", strokeWidth: 4 },
        curious: { d: "M32 40A2 2 0 1 1 32.1 40", strokeWidth: 0 },
        thinking: { d: "M30 40L38 40", strokeWidth: 2.5 },
        surprised: { d: "M31 40A3 3 0 1 1 31.1 40", strokeWidth: 0 },
        sad: { d: "M26 42C26 42 30 38 34 38C38 38 42 42 42 42", strokeWidth: 2.5 }
    };

    return (
        <motion.path 
            animate={variants[mood]}
            stroke="#00F2FF" fill={['curious', 'surprised', 'cheerful'].includes(mood) ? '#00F2FF' : 'none'} 
            strokeLinecap="round" 
            className="drop-shadow-[0_0_8px_rgba(0,242,255,0.8)]"
        />
    );
};

export const CPBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [mood, setMood] = useState<RobotMood>('happy');
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isTalking, setIsTalking] = useState(false);
    const [talkingText, setTalkingText] = useState("");
    const [messages, setMessages] = useState([
        { role: 'bot', text: 'Olá! Sou o CP Bot. Como posso ajudar você?' }
    ]);
    const [input, setInput] = useState('');

    // Eye Tracking Logic
    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            const botEl = document.getElementById('robot-trigger');
            if (!botEl) return;
            const rect = botEl.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const x = (e.clientX - centerX) / 25;
            const y = (e.clientY - centerY) / 20;
            setMousePos({ x: Math.max(-8, Math.min(8, x)), y: Math.max(-5, Math.min(5, y)) });
        };
        window.addEventListener('mousemove', handleMove);
        return () => window.removeEventListener('mousemove', handleMove);
    }, []);

    // Simulated Talking
    const handleBotSpeech = async (text: string) => {
        setIsTalking(true);
        setTalkingText("");
        for (let i = 0; i < text.length; i++) {
            setTalkingText(prev => prev + text[i]);
            await new Promise(r => setTimeout(r, 40));
        }
        setTimeout(() => setIsTalking(false), 3000);
    };

    const sendMessage = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!input.trim()) return;

        setMessages([...messages, { role: 'user', text: input }]);
        const userInput = input;
        setInput('');
        setMood('thinking');

        // Logic patterns for mood
        setTimeout(() => {
            let response = "Estou processando seu pedido... Deseja falar com um atendente humano?";
            let newMood: RobotMood = 'curious';

            if (userInput.toLowerCase().includes('preço') || userInput.toLowerCase().includes('valor')) {
                response = "Nossos planos começam com condições excelentes. Posso te levar para a seção de planos?";
                newMood = 'cheerful';
            } else if (userInput.toLowerCase().includes('oi') || userInput.toLowerCase().includes('olá')) {
                response = "Oi! Que prazer falar com você!";
                newMood = 'happy';
            }

            setMessages(prev => [...prev, { role: 'bot', text: response }]);
            setMood(newMood);
            handleBotSpeech(response);
        }, 1200);
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="w-[320px] md:w-[400px] h-[500px] bg-slate-900/40 backdrop-blur-3xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col mb-4"
                    >
                        <div className="p-6 border-b border-white/5 bg-white/5 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                                <span className="font-black text-[10px] uppercase tracking-widest text-white/50">CP Bot Assistente</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white/30 hover:text-white transition-colors">
                                <X size={18} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-5">
                            {messages.map((m, i) => (
                                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                                        m.role === 'user' 
                                        ? 'bg-brand-blue text-white rounded-br-none shadow-lg' 
                                        : 'bg-white/5 text-slate-300 rounded-bl-none border border-white/10'
                                    }`}>
                                        {m.text}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <form onSubmit={sendMessage} className="p-4 bg-white/5 border-t border-white/5 flex gap-3">
                            <input 
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Fale comigo..."
                                className="flex-1 bg-transparent border-none text-white text-sm focus:ring-0 placeholder:text-white/20"
                            />
                            <button type="submit" className="p-2.5 bg-brand-blue hover:bg-brand-blue/80 text-white rounded-xl transition-all shadow-lg active:scale-95">
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Robot Trigger Container */}
            <div className="relative group flex items-end">
                {/* Speech Bubble (Typing Effect) */}
                <AnimatePresence>
                    {isTalking && !isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: 20, scale: 0.8 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 20, scale: 0.8 }}
                            className="absolute right-28 bottom-20 bg-slate-900 border border-white/10 px-5 py-3 rounded-2xl rounded-br-none shadow-2xl max-w-[200px]"
                        >
                            <p className="text-[11px] text-white/90 leading-tight font-medium">
                                {talkingText}
                                <span className="animate-pulse">|</span>
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* High Fidelity Interactive Robot */}
                <motion.button
                    id="robot-trigger"
                    onClick={() => setIsOpen(!isOpen)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                        y: [0, -12, 0],
                    }}
                    transition={{
                        y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="relative w-24 h-28 md:w-28 md:h-32 transition-all outline-none"
                >
                    <svg viewBox="0 0 80 90" className="w-full h-full drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]">
                        <defs>
                            <linearGradient id="robotBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style={{ stopColor: '#FDFDFD' }} />
                                <stop offset="100%" style={{ stopColor: '#D8DBE0' }} />
                            </linearGradient>
                            <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style={{ stopColor: '#2C2F36' }} />
                                <stop offset="100%" style={{ stopColor: '#1A1C22' }} />
                            </linearGradient>
                        </defs>

                        {/* Floating Shadow */}
                        <ellipse cx="40" cy="85" rx="15" ry="3" fill="rgba(0,0,0,0.15)" />

                        {/* Arms - Floating Independent */}
                        <motion.g animate={{ rotate: mood === 'curious' ? [-10, 10, -10] : 0, transition: { repeat: Infinity, duration: 2 } }}>
                            <path d="M12 55Q8 65 10 75" stroke="url(#robotBodyGradient)" strokeWidth="8" strokeLinecap="round" />
                        </motion.g>
                        <motion.g animate={{ rotate: mood === 'happy' ? [0, 15, 0] : 0, transition: { repeat: Infinity, duration: 1.5 } }}>
                            <path d="M68 55Q72 65 70 75" stroke="url(#robotBodyGradient)" strokeWidth="8" strokeLinecap="round" />
                        </motion.g>

                        {/* Head & Face - Follows Mouse */}
                        <motion.g
                            animate={{
                                x: mousePos.x,
                                y: mousePos.y,
                                rotate: mood === 'curious' ? -10 : 0
                            }}
                        >
                            {/* Head Shell */}
                            <rect x="15" y="5" width="50" height="45" rx="22" fill="url(#robotBodyGradient)" />
                            {/* Face Shield */}
                            <rect x="20" y="10" width="40" height="35" rx="18" fill="url(#shieldGradient)" />
                            
                            {/* Facial Features */}
                            <RobotEyes mood={mood} />
                            <RobotMouth mood={mood} />
                            
                            {/* Antenna */}
                            <line x1="40" y1="5" x2="40" y2="0" stroke="#BBB" strokeWidth="2.5" strokeLinecap="round" />
                            <circle cx="40" cy="0" r="2" fill="#00EDFF" className="animate-pulse" />
                        </motion.g>

                        {/* Body Shell */}
                        <motion.g animate={mood === 'sad' ? { y: 2 } : { y: 0 }}>
                            <path d="M22 50C22 50 25 78 40 78C55 78 58 50 58 50" fill="url(#robotBodyGradient)" />
                            {/* Detail Line */}
                            <path d="M25 68H55" stroke="rgba(0,0,0,0.05)" strokeWidth="1" fill="none" />
                        </motion.g>
                    </svg>
                </motion.button>
            </div>
        </div>
    );
};
