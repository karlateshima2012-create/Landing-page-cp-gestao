
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, CheckCircle2, AlertCircle, HelpCircle } from 'lucide-react';

// --- ROBOT VISUAL COMPONENT ---

export type RobotExpression = "neutral" | "happy" | "skeptic" | "sad" | "broken" | "tired" | "crazy" | "wink" | "surprised" | "scared" | "love" | "denying" | "thinking" | "cheerful" | "sparkle" | "confused" | "success" | "scanning" | "error" | "inquiry";

interface RobotProps {
  expression?: RobotExpression;
  className?: string;
}

const Robot = ({ expression = "neutral", className = "" }: RobotProps) => {
  const brandYellow = "#FFD700";
  const brandBlue = "#22D3EE";
  const alertRed = "#EF4444";

  return (
    <div className={`relative select-none ${className}`}>
      <svg viewBox="-60 -30 170 120" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="robotHeadGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F1F5F9" />
          </linearGradient>
          <linearGradient id="screenBG" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="successGlow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="15" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="yellowGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <motion.g animate={{ y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
          
          {/* SIDE ANTENNAS - Middle Ground (6x20) */}
          <rect x="6" y="22.5" width="6" height="20" rx="3" fill="#3BA9D5" />
          <rect x="88" y="22.5" width="6" height="20" rx="3" fill="#3BA9D5" />
          
          {/* TOP ANTENNA - Middle Ground (22x6) */}
          <rect 
            x="39" y="4" width="22" height="6" rx="3" 
            fill={expression === "scanning" || expression === "inquiry" ? brandYellow : (expression === "error" ? brandYellow : "#3BA9D5")} 
            filter={expression === "scanning" || expression === "inquiry" ? "url(#yellowGlow)" : "none"}
          />

          <rect 
            x="12" y="10" width="76" height="52" rx="16" 
            fill="url(#robotHeadGrad)" 
            stroke={expression === "success" ? brandBlue : (expression === "inquiry" ? brandYellow : "#E2E8F0")} 
            strokeWidth={expression === "success" || expression === "inquiry" ? "3" : "0.5"}
            filter={expression === "success" ? "url(#successGlow)" : (expression === "inquiry" ? "url(#yellowGlow)" : "none")} 
          />
          
          <rect x="18" y="18" width="64" height="38" rx="12" fill="url(#screenBG)" />

          <g filter="url(#glow)">
            {expression === "scanning" || expression === "inquiry" ? (
              <>
                <rect x="34" y="31" width="6" height="12" rx="3" fill={expression === "inquiry" ? brandYellow : brandBlue} />
                <rect x="60" y="31" width="6" height="12" rx="3" fill={expression === "inquiry" ? brandYellow : brandBlue} />
              </>
            ) : (expression === "error" || expression === "crazy") ? (
              <>
                <rect x="34" y="31" width="6" height="12" rx="3" fill={brandBlue} />
                <rect x="62" y="38" width="6" height="6" rx="3" fill={brandBlue} />
                <path d="M58 30 Q65 24 72 30" fill="none" stroke={brandBlue} strokeWidth="2.5" strokeLinecap="round" />
              </>
            ) : ["happy", "cheerful"].includes(expression) ? (
              <>
                <path d="M32 38 Q38 28 44 38" fill="none" stroke={brandBlue} strokeWidth="5.5" strokeLinecap="round" />
                <path d="M56 38 Q62 28 68 38" fill="none" stroke={brandBlue} strokeWidth="5.5" strokeLinecap="round" />
              </>
            ) : expression === "love" ? (
              <>
                <g transform="translate(36, 36)">
                    <path d="M 0 -3 A 4 4 0 0 1 8 -3 C 8 4 0 9 0 9 C 0 9 -8 4 -8 -3 A 4 4 0 0 1 0 -3" fill={brandBlue} />
                </g>
                <g transform="translate(64, 36)">
                    <path d="M 0 -3 A 4 4 0 0 1 8 -3 C 8 4 0 9 0 9 C 0 9 -8 4 -8 -3 A 4 4 0 0 1 0 -3" fill={brandBlue} />
                </g>
              </>
            ) : expression === "surprised" ? (
              <>
                <circle cx="36" cy="36" r="8" stroke={brandBlue} strokeWidth="3" fill="none" />
                <circle cx="64" cy="36" r="8" stroke={brandBlue} strokeWidth="3" fill="none" />
              </>
            ) : expression === "scared" ? (
              <>
                <path d="M33 34 L38 38 L33 42" fill="none" stroke={brandBlue} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M67 34 L62 38 L67 42" fill="none" stroke={brandBlue} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
              </>
            ) : (
              <>
                <rect x="34" y="31" width="6" height="12" rx="3" fill={brandBlue} />
                <rect x="60" y="31" width="6" height="12" rx="3" fill={brandBlue} />
              </>
            )}
          </g>

          <AnimatePresence>
              {expression === "success" && (
                  <motion.g 
                    initial={{ opacity: 0, scale: 0, x: 20 }} animate={{ opacity: 1, scale: 1, x: 0 }}
                    transform="translate(80, 50)"
                  >
                    <circle cx="0" cy="0" r="12" fill="#0F172A" stroke={brandBlue} strokeWidth="2" />
                    <path d="M -5 0 L -1 4 L 6 -4" fill="none" stroke={brandBlue} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </motion.g>
              )}
          </AnimatePresence>

          <AnimatePresence>
              {expression === "inquiry" && (
                  <motion.g 
                    initial={{ opacity: 0, scale: 0, x: 20 }} animate={{ opacity: 1, scale: 1, x: 0 }}
                    transform="translate(80, 50)"
                  >
                    <circle cx="0" cy="0" r="12" fill="#0F172A" stroke={brandYellow} strokeWidth="2" />
                    <text x="-4" y="5" fill={brandYellow} fontSize="16" fontWeight="900" filter="url(#yellowGlow)">?</text>
                  </motion.g>
              )}
          </AnimatePresence>
        </motion.g>
      </svg>
    </div>
  );
};

export const CPBot = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [expression, setExpression] = useState<RobotExpression>("neutral");
    const [messages, setMessages] = useState([
        { role: 'bot', text: 'Olá! Eu sou o CP Bot. Como posso te ajudar?' }
    ]);
    const [isTalking, setIsTalking] = useState(false);
    const [talkingText, setTalkingText] = useState("");
    const [input, setInput] = useState('');
    
    const behaviorTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const revertTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const activeHoverRef = useRef<boolean>(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleBehavior = (e: any) => {
            if (activeHoverRef.current) return;
            const currentScrollY = window.scrollY;
            const scrollDelta = Math.abs(currentScrollY - lastScrollY);
            lastScrollY = currentScrollY;
            if (scrollDelta > 0) {
                setExpression('scanning');
                if (behaviorTimeoutRef.current) clearTimeout(behaviorTimeoutRef.current);
                behaviorTimeoutRef.current = setTimeout(() => {
                    if (!activeHoverRef.current) setExpression('neutral');
                }, 800);
            }
        };

        const handleGlobalHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target) return;
            const isCTA = target.closest('a, button, [class*="cta"], #final-cta, #pricing button');
            if (isCTA) {
                activeHoverRef.current = true;
                setExpression('success');
                if (revertTimeoutRef.current) clearTimeout(revertTimeoutRef.current);
                return;
            }
            const isOther = target.closest('.card, .feature-card, .faq-item, input, select, textarea, [class*="cursor-pointer"], [data-interactive], .pricing-card');
            if (isOther) {
                activeHoverRef.current = true;
                setExpression('inquiry');
                if (revertTimeoutRef.current) clearTimeout(revertTimeoutRef.current);
                return;
            }
        };

        const handleGlobalLeave = () => {
            activeHoverRef.current = false;
            if (revertTimeoutRef.current) clearTimeout(revertTimeoutRef.current);
            revertTimeoutRef.current = setTimeout(() => {
                if (!activeHoverRef.current) setExpression('neutral');
            }, 2500); 
        };

        window.addEventListener('scroll', handleBehavior);
        document.addEventListener('mouseover', handleGlobalHover);
        document.addEventListener('mouseout', handleGlobalLeave);

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.id === 'pricing') setExpression('success');
                    if (entry.target.id === 'final-cta') setExpression('sad');
                } else if (entry.target.id === 'pricing') {
                    setExpression('neutral');
                }
            });
        }, { threshold: 0.2 });

        ['pricing', 'final-cta'].forEach(id => {
            const el = document.getElementById(id);
            if (el) sectionObserver.observe(el);
        });

        return () => {
            window.removeEventListener('scroll', handleBehavior);
            document.removeEventListener('mouseover', handleGlobalHover);
            document.removeEventListener('mouseout', handleGlobalLeave);
            sectionObserver.disconnect();
            if (behaviorTimeoutRef.current) clearTimeout(behaviorTimeoutRef.current);
            if (revertTimeoutRef.current) clearTimeout(revertTimeoutRef.current);
        };
    }, []);

    const sendMessage = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!input.trim()) return;
        setMessages([...messages, { role: 'user', text: input }]);
        setInput('');
        setExpression('thinking');
        setTimeout(() => {
            const response = "Estou processando sua dúvida... Deseja falar com um especialista?";
            setMessages(prev => [...prev, { role: 'bot', text: response }]);
            setExpression('happy');
            setIsTalking(true);
            setTalkingText(response);
            setTimeout(() => setIsTalking(false), 3000);
        }, 1500);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div 
                    initial={{ opacity: 0, x: "-100vw", y: "-50vh", scale: 0.5 }}
                    animate={{ 
                        opacity: [0, 1, 1, 1],
                        x: ["-100vw", "-50vw", "-45vw", "0px"],
                        y: ["-50vh", "-38vh", "-38vh", "0px"],
                        scale: [0.5, 1.2, 1, 1],
                        rotate: [0, 15, -15, 0],
                        transition: { 
                            duration: 3, 
                            times: [0, 0.4, 0.6, 1],
                            ease: "easeInOut"
                        }
                    }}
                    onUpdate={(latest: any) => {
                        if (latest.x === "-50vw" || latest.scale > 1.1) {
                            setExpression('scared');
                        }
                    }}
                    onAnimationComplete={() => {
                        setExpression('love');
                        setTimeout(() => setExpression('neutral'), 3000);
                    }}
                    className="fixed bottom-8 right-4 z-[100] flex flex-col items-end"
                >
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.8, y: 30 }}
                                className="w-[320px] md:w-[400px] h-[520px] bg-white rounded-[32px] shadow-[0_30px_90px_-20px_rgba(0,0,0,0.3)] border border-slate-100 overflow-hidden flex flex-col mb-1 font-sans relative"
                            >
                                {/* Header Vibrante */}
                                <div className="p-6 bg-gradient-to-r from-[#22D3EE] to-[#3BA9D5] flex justify-between items-center shadow-lg relative">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2.5 h-2.5 rounded-full bg-black animate-pulse" />
                                        <span className="font-bold text-[13px] uppercase tracking-[0.25em] text-black">CP Bot Online</span>
                                    </div>
                                    <button onClick={() => setIsOpen(false)} className="text-black/50 hover:text-black transition-colors"><X size={22} strokeWidth={3} /></button>
                                </div>

                                {/* Area de Mensagens - Minimalista */}
                                <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white scrollbar-hide">
                                    {messages.map((m, i) => (
                                        <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                            <div className={`max-w-[90%] p-5 rounded-[22px] text-[15px] leading-relaxed tracking-wide shadow-sm ${
                                                m.role === 'user' 
                                                ? 'bg-slate-100 text-slate-800 rounded-br-none border-none' 
                                                : 'bg-white text-slate-800 font-medium rounded-bl-none border border-[#22D3EE]/30'
                                            }`}>
                                                {m.text}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Barra de Input */}
                                <form onSubmit={sendMessage} className="p-5 bg-white border-t border-slate-100 flex gap-2">
                                    <input 
                                        type="text" value={input} onChange={(e) => setInput(e.target.value)} 
                                        placeholder="Digite sua mensagem..." 
                                        className="flex-1 bg-slate-50 border border-slate-100 rounded-xl px-4 text-[13px] font-medium tracking-wide focus:ring-2 focus:ring-[#22D3EE]/40 text-slate-800 placeholder-slate-400" 
                                    />
                                    <button type="submit" className="p-3 bg-[#22D3EE] text-black rounded-xl hover:bg-[#3BA9D5] transition-all shadow-md active:scale-95 flex items-center justify-center">
                                        <Send size={18} strokeWidth={2.5} />
                                    </button>
                                </form>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <div className="relative flex items-end">
                        <AnimatePresence>
                            {isTalking && !isOpen && (
                                <motion.div initial={{ opacity: 0, scale: 0.8, x: 20 }} animate={{ opacity: 1, scale: 1, x: 0 }} exit={{ opacity: 0, scale: 0.8, x: 20 }} className="absolute right-32 bottom-20 bg-slate-900 text-[#22D3EE] px-6 py-4 rounded-3xl rounded-br-none shadow-2xl border border-slate-800 min-w-[200px] z-[110]">
                                    <p className="text-[13px] font-bold tracking-tight leading-tight">{talkingText}<span className="animate-pulse">|</span></p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <div 
                            onClick={() => setIsOpen(!isOpen)} 
                            onMouseEnter={() => {
                                activeHoverRef.current = true;
                                if (revertTimeoutRef.current) clearTimeout(revertTimeoutRef.current);
                                setExpression('happy');
                            }} 
                            onMouseLeave={() => {
                                activeHoverRef.current = false;
                                if (revertTimeoutRef.current) clearTimeout(revertTimeoutRef.current);
                                revertTimeoutRef.current = setTimeout(() => setExpression('neutral'), 2500);
                            }} 
                            className="w-28 h-28 md:w-36 md:h-36 cursor-pointer pointer-events-auto drop-shadow-2xl translate-x-2"
                        >
                            <Robot expression={expression} className="w-full h-full" />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
