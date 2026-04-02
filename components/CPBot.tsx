
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, MessageCircle } from 'lucide-react';

// --- ROBOT VISUAL COMPONENT (EXTRACTED FROM USER'S ENHANCED VERSION) ---

export type RobotExpression = "happy" | "cheerful" | "curious" | "thinking" | "surprised" | "sad" | "love" | "sparkle" | "confused" | "angry";

interface RobotProps {
  expression?: RobotExpression;
  className?: string;
}

const Robot = ({ expression = "happy", className = "" }: RobotProps) => {
  const variants = {
    happy: {
      head: { y: [0, -6, 0], rotate: [0, 2, -2, 0], transition: { duration: 3, repeat: Infinity, ease: "easeInOut" } },
      body: { y: [0, -2, 0], transition: { duration: 3, repeat: Infinity, ease: "easeInOut" } },
      eyes: { scaleY: [1, 0.1, 1], transition: { duration: 4, repeat: Infinity, times: [0, 0.95, 1] } },
    },
    cheerful: {
      head: { rotate: [0, 15, -15, 0], y: [0, -8, 0], transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" } },
      body: { y: [0, -3, 0], transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" } },
      eyes: { scale: [1, 1.2, 1], transition: { duration: 0.5, repeat: Infinity } },
    },
    curious: {
      head: { rotate: [12, 18, 12], x: [4, 6, 4], transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } },
      body: { rotate: 4, x: 1 },
      eyesLeft: { scale: 0.6, y: 4, x: 2 },
      eyesRight: { scale: 1.5, y: -4, x: -2 }
    },
    thinking: {
      head: { y: 2, rotate: -12, x: -2 },
      body: { y: 0, rotate: -2 },
      eyes: { scaleY: 0.1, y: 4 },
    },
    surprised: {
      head: { y: [-12, -18, -12], scale: 1.1, transition: { duration: 0.3, repeat: Infinity, repeatType: "mirror" as const } },
      body: { scale: 0.9 },
      eyes: { scale: 1.8, y: -4 },
    },
    sad: {
      head: { y: 10, rotate: 5 },
      body: { y: 3, scale: 0.95, rotate: -2 },
      eyes: { y: 10, scaleY: 0.2, opacity: 0.3 },
    },
    love: {
      head: { y: [0, -4, 0], transition: { duration: 2, repeat: Infinity } },
      body: { scale: 1.05 },
      eyes: { scale: [1, 1.2, 1], transition: { duration: 0.8, repeat: Infinity } }
    },
    sparkle: {
      head: { rotate: [0, 5, -5, 0], transition: { duration: 1, repeat: Infinity } },
      body: { y: -2 },
      eyes: { scale: [1, 1.3, 1], rotate: [0, 90, 180, 270, 360], transition: { duration: 2, repeat: Infinity } }
    },
    confused: {
      head: { rotate: -10, x: -5 },
      body: { rotate: -2 },
      eyes: { y: 2 }
    },
    angry: {
      head: { y: 4, scale: 1.05 },
      body: { y: 2, scale: 1.1 },
      eyes: { rotate: [0, 2, -2, 0], transition: { duration: 0.1, repeat: Infinity } }
    }
  };

  const current = variants[expression];

  return (
    <div className={`relative select-none ${className}`}>
      <svg viewBox="0 0 100 120" className="w-full h-full scale-[1.1] origin-bottom">
        <defs>
          <linearGradient id="robotBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#F3F4F6" />
            <stop offset="100%" stopColor="#E5E7EB" />
          </linearGradient>
          <linearGradient id="robotHeadGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E5E7EB" />
          </linearGradient>
          <linearGradient id="robotScreenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1F2937" />
            <stop offset="100%" stopColor="#111827" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
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
        </defs>

        {/* Shadow */}
        <motion.ellipse
          cx="50" cy="114" rx="20" ry="5"
          fill="rgba(0,0,0,0.1)"
          animate={{ rx: [18, 24, 18], opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Entire Robot Group */}
        <motion.g animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
          
          {/* BODY (Small - 20%) - Reduced scale and moved up closer to head */}
          <motion.g animate={current.body} transform="translate(0, -10)" className="origin-center">
            <path d="M 32 60 C 32 90 68 90 68 60 L 68 55 L 32 55 Z" fill="url(#robotBodyGrad)" stroke="#D1D5DB" strokeWidth="0.5" />
            {/* Minimal Detail */}
            <path d="M 38 68H62" stroke="rgba(0,0,0,0.05)" strokeWidth="1" fill="none" />
          </motion.g>

          {/* HEAD (Large - 70%) - Increased scale dramatically */}
          <motion.g animate={current.head} transform="translate(2, -15) scale(1.15)" className="origin-[50px_60px]">
             {/* Antennas - Hidden or smaller */}
            <rect x="18" y="25" width="2" height="15" rx="1" fill="#D1D5DB" />
            <rect x="80" y="25" width="3" height="12" rx="1.5" fill="#D1D5DB" />
            
            <rect x="10" y="5" width="80" height="60" rx="30" fill="url(#robotHeadGrad)" stroke="#D1D5DB" strokeWidth="0.5" />
            <rect x="18" y="15" width="64" height="42" rx="20" fill="url(#robotScreenGrad)" />

            {/* Expressive Eyes */}
            <g filter="url(#glow)">
              {expression === "curious" ? (
                <>
                  <motion.circle cx="36" cy="36" r="6" fill="url(#cyanGlow)" animate={(current as any).eyesLeft} />
                  <motion.circle cx="64" cy="36" r="6" fill="url(#cyanGlow)" animate={(current as any).eyesRight} />
                </>
              ) : ["cheerful", "happy"].includes(expression) ? (
                <>
                  <motion.path d="M28 40 Q36 28 44 40" fill="none" stroke="url(#cyanGlow)" strokeWidth="6" strokeLinecap="round" animate={(current as any).eyes} />
                  <motion.path d="M56 40 Q64 28 72 40" fill="none" stroke="url(#cyanGlow)" strokeWidth="6" strokeLinecap="round" animate={(current as any).eyes} />
                </>
              ) : expression === "love" ? (
                <>
                  <motion.path d="M36 42 Q36 38 32 38 Q28 38 28 42 Q28 48 36 54 Q44 48 44 42 Q44 38 40 38 Q36 38 36 42" fill="url(#redGlow)" animate={(current as any).eyes} transform="translate(0, -8)" />
                  <motion.path d="M64 42 Q64 38 60 38 Q56 38 56 42 Q56 48 64 54 Q72 48 72 42 Q72 38 68 38 Q64 38 64 42" fill="url(#redGlow)" animate={(current as any).eyes} transform="translate(0, -8)" />
                </>
              ) : (
                <>
                  <motion.ellipse cx="36" cy="38" rx="7" ry="6" fill="url(#cyanGlow)" animate={(current as any).eyes} />
                  <motion.ellipse cx="64" cy="38" rx="7" ry="6" fill="url(#cyanGlow)" animate={(current as any).eyes} />
                </>
              )}
            </g>
            
            {/* Top Light */}
            <circle cx="50" cy="5" r="2.5" fill="#00EDFF" className="animate-pulse" />
          </motion.g>

          {/* Arms - Smaller and closer to head */}
          <motion.g animate={{ rotate: 10, y: -10 }} transform="translate(15, 60) scale(0.6)">
             <path d="M 0 0 Q -10 10 -5 25" stroke="url(#robotBodyGrad)" strokeWidth="12" strokeLinecap="round" />
          </motion.g>
          <motion.g animate={{ rotate: -10, y: -10 }} transform="translate(85, 60) scale(0.6)">
             <path d="M 0 0 Q 10 10 5 25" stroke="url(#robotBodyGrad)" strokeWidth="12" strokeLinecap="round" />
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
                        className="w-[320px] md:w-[400px] h-[520px] bg-white rounded-[40px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] border border-gray-100 overflow-hidden flex flex-col mb-4"
                    >
                        {/* Custom Chat Header */}
                        <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" />
                                <span className="font-black text-[10px] uppercase tracking-[0.2em] text-gray-400">CP BOT ONLINE</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-gray-900 transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Message Feed */}
                        <div className="flex-1 overflow-y-auto p-8 space-y-6">
                            {messages.map((m, i) => (
                                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] p-5 rounded-[24px] text-xs font-bold leading-relaxed tracking-wider ${
                                        m.role === 'user' 
                                        ? 'bg-cyan-500 text-white rounded-br-none shadow-lg' 
                                        : 'bg-gray-100 text-gray-800 rounded-bl-none border border-gray-50'
                                    }`}>
                                        {m.text}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Input Area */}
                        <form onSubmit={sendMessage} className="p-6 bg-white border-t border-gray-50 flex gap-3">
                            <input 
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="DIGITE SUA MENSAGEM..."
                                className="flex-1 bg-gray-50 border-none rounded-2xl px-5 text-[10px] font-black uppercase tracking-wider focus:ring-2 focus:ring-cyan-500/20 text-gray-800"
                            />
                            <button type="submit" className="p-3.5 bg-gray-900 text-white rounded-2xl hover:bg-cyan-500 transition-all shadow-xl active:scale-95">
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
                            className="absolute right-36 md:right-40 bottom-24 bg-gray-900 text-cyan-400 px-6 py-4 rounded-3xl rounded-br-none shadow-2xl border border-gray-800 min-w-[200px]"
                        >
                            <p className="text-[10px] font-black uppercase tracking-[0.15em] leading-tight">
                                {talkingText}
                                <span className="animate-pulse">|</span>
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* The Improved Robot Component - Big Head Proportions */}
                <motion.div
                    onClick={() => {
                        setIsOpen(!isOpen);
                        if (!isOpen) setExpression('sparkle');
                    }}
                    onMouseEnter={() => setExpression('curious')}
                    onMouseLeave={() => setExpression('happy')}
                    className="w-32 h-36 md:w-44 md:h-48 cursor-pointer pointer-events-auto"
                >
                    <Robot expression={expression} className="w-full h-full" />
                </motion.div>
            </div>
        </div>
    );
};
