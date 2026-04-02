
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X } from 'lucide-react';

// --- ROBOT VISUAL COMPONENT (FIDELITY REPRODUCTION OF CPBOT.SVG) ---

export type RobotExpression = "happy" | "cheerful" | "curious" | "thinking" | "surprised" | "sad" | "love" | "sparkle" | "confused" | "angry";

interface RobotProps {
  expression?: RobotExpression;
  className?: string;
}

const Robot = ({ expression = "happy", className = "" }: RobotProps) => {
  const variants = {
    happy: {
      head: { y: [0, -4, 0], rotate: [0, 1, -1, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } },
      body: { y: [0, -2, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } },
      eyes: { scaleY: [1, 0.1, 1], transition: { duration: 4, repeat: Infinity, times: [0, 0.95, 1] } },
    },
    cheerful: {
      head: { rotate: [0, 10, -10, 0], y: [0, -6, 0], transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" } },
      body: { y: [0, -3, 0], x: [0, 1, -1, 0], transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" } },
      eyes: { scale: [1, 1.2, 1], transition: { duration: 0.5, repeat: Infinity } },
    },
    curious: {
      head: { rotate: [8, 12, 8], x: [2, 4, 2], transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } },
      body: { rotate: 2, x: 1 },
      eyesLeft: { scale: 0.7, y: 2, x: 1 },
      eyesRight: { scale: 1.3, y: -2, x: -1 }
    },
    thinking: {
      head: { y: 2, rotate: -8, x: -1 },
      body: { y: 0, rotate: -1 },
      eyes: { scaleY: 0.1, y: 3 },
    },
    surprised: {
      head: { y: [-8, -12, -8], scale: 1.05, transition: { duration: 0.3, repeat: Infinity, repeatType: "mirror" as const } },
      body: { scale: 0.95 },
      eyes: { scale: 1.6, y: -3 },
    },
    sad: {
      head: { y: 6, rotate: 3 },
      body: { y: 2, scale: 0.98, rotate: -1 },
      eyes: { y: 8, scaleY: 0.2, opacity: 0.4 },
    },
    love: {
      head: { y: [0, -3, 0], transition: { duration: 2, repeat: Infinity } },
      body: { scale: 1.02 },
      eyes: { scale: [1, 1.1, 1], transition: { duration: 0.8, repeat: Infinity } }
    },
    sparkle: {
      head: { rotate: [0, 3, -3, 0], transition: { duration: 1, repeat: Infinity } },
      body: { y: -1 },
      eyes: { scale: [1, 1.2, 1], rotate: [0, 90, 180, 270, 360], transition: { duration: 2, repeat: Infinity } }
    },
    confused: {
      head: { rotate: -8, x: -3 },
      body: { rotate: -1 },
      eyes: { y: 1 }
    },
    angry: {
      head: { y: 3, scale: 1.02 },
      body: { y: 1, scale: 1.05 },
      eyes: { rotate: [0, 1, -1, 0], transition: { duration: 0.1, repeat: Infinity } }
    }
  };

  const current = variants[expression];

  return (
    <div className={`relative select-none ${className}`}>
      <svg viewBox="0 0 100 120" className="w-full h-full">
        <defs>
          <linearGradient id="robotBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#F9FAFB" />
            <stop offset="100%" stopColor="#F1F5F9" />
          </linearGradient>
          <linearGradient id="robotHeadGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F1F5F9" />
          </linearGradient>
          <linearGradient id="robotScreenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <radialGradient id="cyanGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="100%" stopColor="#0891B2" />
          </radialGradient>
          <radialGradient id="redGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF4D4D" />
            <stop offset="100%" stopColor="#B30000" />
          </radialGradient>
          {/* Internal shadow for visor depth */}
          <filter id="innerShadow">
            <feOffset dx="0" dy="2" />
            <feGaussianBlur stdDeviation="1.5" result="offset-blur" />
            <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
            <feFlood floodColor="black" floodOpacity="0.2" result="color" />
            <feComposite operator="in" in="color" in2="inverse" result="shadow" />
            <feComposite operator="over" in="shadow" in2="SourceGraphic" />
          </filter>
        </defs>

        {/* Shadow on ground */}
        <motion.ellipse
          cx="50" cy="112" rx="25" ry="6"
          fill="rgba(0,0,0,0.08)"
          animate={{ rx: [23, 28, 23], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Entire Robot Group */}
        <motion.g animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
          
          {/* BODY */}
          <motion.g animate={current.body} className="origin-center">
            {/* Main Rounded Body */}
            <path d="M 28 55 C 28 100 72 100 72 55 L 72 45 L 28 45 Z" fill="url(#robotBodyGrad)" stroke="#E2E8F0" strokeWidth="0.5" />
            {/* Detail lines from CPBot.svg aesthetic */}
            <path d="M 35 65 Q 50 72 65 65" stroke="rgba(0,0,0,0.03)" strokeWidth="1" fill="none" />
            <rect x="42" y="80" width="16" height="1.5" rx="0.5" fill="rgba(0,0,0,0.05)" />
          </motion.g>

          {/* HEAD */}
          <motion.g animate={current.head} className="origin-[50px_50px]">
            {/* Orelhas / Antenas laterais */}
            <rect x="8" y="25" width="4" height="15" rx="2" fill="#CBD5E1" />
            <rect x="88" y="25" width="4" height="15" rx="2" fill="#CBD5E1" />
            
            {/* Main Head Shell */}
            <rect x="12" y="10" width="76" height="52" rx="26" fill="url(#robotHeadGrad)" stroke="#E2E8F0" strokeWidth="0.5" />
            
            {/* The Visor (Dark Screen) */}
            <rect x="18" y="18" width="64" height="38" rx="18" fill="url(#robotScreenGrad)" filter="url(#innerShadow)" />

            {/* Expressive Eyes */}
            <g filter="url(#glow)">
              {expression === "curious" ? (
                <>
                  <motion.circle cx="36" cy="34" r="5.5" fill="url(#cyanGlow)" animate={(current as any).eyesLeft} />
                  <motion.circle cx="64" cy="34" r="5.5" fill="url(#cyanGlow)" animate={(current as any).eyesRight} />
                </>
              ) : ["cheerful", "happy"].includes(expression) ? (
                <>
                  <motion.path d="M30 38 Q36 28 42 38" fill="none" stroke="url(#cyanGlow)" strokeWidth="5.5" strokeLinecap="round" animate={(current as any).eyes} />
                  <motion.path d="M58 38 Q64 28 70 38" fill="none" stroke="url(#cyanGlow)" strokeWidth="5.5" strokeLinecap="round" animate={(current as any).eyes} />
                </>
              ) : expression === "love" ? (
                <>
                  <motion.path d="M36 40 Q36 36 32 36 Q28 36 28 40 Q28 46 36 52 Q44 46 44 40 Q44 36 40 36 Q36 36 36 40" fill="url(#redGlow)" animate={(current as any).eyes} transform="translate(0, -10)" />
                  <motion.path d="M64 40 Q64 36 60 36 Q56 36 56 40 Q56 46 64 52 Q72 46 72 40 Q72 36 68 36 Q64 36 64 40" fill="url(#redGlow)" animate={(current as any).eyes} transform="translate(0, -10)" />
                </>
              ) : (
                <>
                  <motion.ellipse cx="36" cy="36" rx="6.5" ry="5.5" fill="url(#cyanGlow)" animate={(current as any).eyes} />
                  <motion.ellipse cx="64" cy="36" rx="6.5" ry="5.5" fill="url(#cyanGlow)" animate={(current as any).eyes} />
                </>
              )}
            </g>
          </motion.g>

        </motion.g>
      </svg>
    </div>
  );
};

// --- MAIN BOT COMPONENT WITH INTERFACE ---

export const CPBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [expression, setExpression] = useState<RobotExpression>("happy");
    const [messages, setMessages] = useState([
        { role: 'bot', text: 'OLÁ! EU SOU O CP BOT. COMO POSSO TE AJUDAR?' }
    ]);
    const [isTalking, setIsTalking] = useState(false);
    const [talkingText, setTalkingText] = useState("");
    const [input, setInput] = useState('');

    const handleBotSpeech = async (text: string) => {
        setIsTalking(true);
        setTalkingText("");
        const upperText = text.toUpperCase();
        for (let i = 0; i < upperText.length; i++) {
            setTalkingText(prev => prev + upperText[i]);
            await new Promise(r => setTimeout(r, 40));
        }
        setTimeout(() => setIsTalking(false), 3000);
    };

    const sendMessage = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!input.trim()) return;

        setMessages([...messages, { role: 'user', text: input.toUpperCase() }]);
        const userInput = input.toLowerCase();
        setInput('');
        setExpression('thinking');

        setTimeout(() => {
            let response = "ESTOU PROCESSANDO SUA DÚVIDA... DESEJA FALAR COM UM ESPECIALISTA?";
            let nextExpression: RobotExpression = 'curious';

            if (userInput.includes('preço') || userInput.includes('valor') || userInput.includes('plano')) {
                response = "TEMOS PLANOS FLEXÍVEIS! POSSO TE MOSTRAR A TABELA?";
                nextExpression = 'sparkle';
            } else if (userInput.includes('oi') || userInput.includes('olá')) {
                response = "OLÁ! É UM PRAZER TE ATENDER!";
                nextExpression = 'love';
            }

            setMessages(prev => [...prev, { role: 'bot', text: response }]);
            setExpression(nextExpression);
            handleBotSpeech(response);
        }, 1500);
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="w-[320px] md:w-[400px] h-[520px] bg-white rounded-[40px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] border border-gray-100 overflow-hidden flex flex-col mb-4 font-sans"
                    >
                        {/* Custom Chat Header */}
                        <div className="p-8 border-b border-slate-50 flex justify-between items-center bg-slate-50/50">
                            <div className="flex items-center gap-3">
                                <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse" />
                                <span className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400">CP BOT ONLINE</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-slate-900 transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Message Feed */}
                        <div className="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-hide">
                            {messages.map((m, i) => (
                                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] p-5 rounded-[24px] text-xs font-bold leading-relaxed tracking-wider ${
                                        m.role === 'user' 
                                        ? 'bg-slate-900 text-white rounded-br-none shadow-lg' 
                                        : 'bg-slate-100 text-slate-800 rounded-bl-none border border-slate-50'
                                    }`}>
                                        {m.text}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Input Area */}
                        <form onSubmit={sendMessage} className="p-6 bg-white border-t border-slate-50 flex gap-3">
                            <input 
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="DIGITE SUA MENSAGEM..."
                                className="flex-1 bg-slate-50 border-none rounded-2xl px-5 text-[10px] font-black uppercase tracking-wider focus:ring-2 focus:ring-cyan-500/20 text-slate-800"
                            />
                            <button type="submit" className="p-3.5 bg-slate-900 text-white rounded-2xl hover:bg-cyan-600 transition-all shadow-xl active:scale-95 flex items-center justify-center">
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative flex items-end">
                {/* Speech Bubble */}
                <AnimatePresence>
                    {isTalking && !isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: 20, scale: 0.8 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 20, scale: 0.8 }}
                            className="absolute right-36 bottom-20 bg-slate-900 text-cyan-400 px-7 py-5 rounded-3xl rounded-br-none shadow-2xl border border-slate-800 min-w-[220px]"
                        >
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] leading-tight">
                                {talkingText}
                                <span className="animate-pulse">|</span>
                            </p>
                            {/* Decorative tail */}
                            <div className="absolute -bottom-2 right-0 w-4 h-4 bg-slate-900 border-r border-b border-slate-800 rotate-45 transform translate-x-1/2 -translate-y-1/2" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* The Vectorized CPBot - Fidelity Reproduction */}
                <motion.div
                    onClick={() => {
                        setIsOpen(!isOpen);
                        if (!isOpen) setExpression('sparkle');
                    }}
                    onMouseEnter={() => setExpression('curious')}
                    onMouseLeave={() => setExpression('happy')}
                    className="w-32 h-36 md:w-36 md:h-40 cursor-pointer pointer-events-auto drop-shadow-2xl"
                >
                    <Robot expression={expression} className="w-full h-full" />
                </motion.div>
            </div>
        </div>
    );
};
