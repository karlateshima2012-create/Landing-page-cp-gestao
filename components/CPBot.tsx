
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, CheckCircle2, AlertCircle, HelpCircle } from 'lucide-react';
import { getGeminiResponse } from '../lib/gemini';

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

        <motion.g 
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 2, -2, 0]
          }} 
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          
          {/* SIDE ANTENNAS - Middle Ground (6x20) */}
          <rect x="6" y="22.5" width="6" height="20" rx="3" fill="#3BA9D5" />
          <rect x="88" y="22.5" width="6" height="20" rx="3" fill="#3BA9D5" />
          
          {/* TOP ANTENNA - Middle Ground (22x6) */}
          <rect 
            x="39" y="4" width="22" height="6" rx="3" 
            fill={expression === "inquiry" ? brandYellow : (expression === "error" ? brandYellow : "#3BA9D5")} 
            filter={expression === "inquiry" ? "url(#yellowGlow)" : "none"}
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
            {expression === "inquiry" ? (
              <>
                <rect x="34" y="31" width="6" height="12" rx="3" fill={brandYellow} />
                <rect x="60" y="31" width="6" height="12" rx="3" fill={brandYellow} />
              </>
            ) : (expression === "error" || expression === "crazy") ? (
              <>
                <rect x="34" y="31" width="6" height="12" rx="3" fill={brandBlue} />
                <rect x="62" y="38" width="6" height="6" rx="3" fill={brandBlue} />
                <path d="M58 30 Q65 24 72 30" fill="none" stroke={brandBlue} strokeWidth="2.5" strokeLinecap="round" />
              </>
            ) : ["happy", "cheerful", "scanning"].includes(expression) ? (
              <>
                <path d="M32 38 Q38 28 44 38" fill="none" stroke={brandBlue} strokeWidth="3.5" strokeLinecap="round" />
                <path d="M56 38 Q62 28 68 38" fill="none" stroke={brandBlue} strokeWidth="3.5" strokeLinecap="round" />
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
                setExpression('happy');
                if (behaviorTimeoutRef.current) clearTimeout(behaviorTimeoutRef.current);
                behaviorTimeoutRef.current = setTimeout(() => {
                    if (!activeHoverRef.current) setExpression('neutral');
                }, 600);
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

    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    const sendMessage = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMsg = input;
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setInput('');
        setIsLoading(true);
        setExpression('thinking');

        try {
            // BACKEND IA DESATIVADO (QUOTA EXCEEDED)
            // Aguardando script personalizado do usuário
            await new Promise(r => setTimeout(r, 600)); 
            
            const responseText = "Entendido! Estou aguardando o novo script para poder te responder com precisão. Por enquanto, se quiser adiantar, clique no botão para falarmos no WhatsApp!";
            
            setMessages(prev => [...prev, { role: 'bot', text: responseText }]);
            setExpression('happy');
            setIsTalking(true);
            setTalkingText(responseText);
            setTimeout(() => setIsTalking(false), 4000);
        } catch (error) {
            setExpression('sad');
        } finally {
            setIsLoading(false);
        }
    };

    const getWhatsAppLink = () => {
        // Find the last niche mentioned (after a bot question about "ramo" or "atuação")
        let niche = "";
        for (let i = messages.length - 1; i >= 1; i--) {
            if (messages[i-1].role === 'bot' && (messages[i-1].text.toLowerCase().includes('ramo') || messages[i-1].text.toLowerCase().includes('atuação'))) {
                niche = messages[i].text.split(' ').slice(0, 3).join(' '); // Take first 3 words
                break;
            }
        }

        const baseText = "Olá! Vim do CP Bot. Sou do ramo " + (niche || "[DIGITE SEU RAMO]") + " e quero organizar minha gestão hoje!";
        return `https://wa.me/8109011886491?text=${encodeURIComponent(baseText)}`;
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
                        setTalkingText("COMO POSSO AJUDAR ?");
                        setIsTalking(true);
                        setTimeout(() => {
                            setExpression('neutral');
                            setIsTalking(false);
                        }, 4000);
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

                                {/* Area de Mensagens Humanizada e Branca */}
                                <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white scrollbar-hide">
                                {messages.map((m, i) => (
                                    <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'} space-y-2`}>
                                        <div className={`max-w-[90%] p-5 rounded-[22px] text-[15px] font-medium leading-relaxed tracking-wide shadow-sm border border-slate-100 ${
                                            m.role === 'user' 
                                            ? 'bg-slate-100 text-slate-800 rounded-br-none border-none' 
                                            : 'bg-white text-slate-800 font-medium rounded-bl-none border border-[#22D3EE]/30'
                                        }`}>
                                            {m.text}
                                        </div>
                                        {(m.role === 'bot' && (m.text.toLowerCase().includes('botão') || m.text.toLowerCase().includes('conversarmos'))) && (
                                            <a 
                                                href={getWhatsAppLink()}
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full text-sm font-bold shadow-lg hover:scale-105 transition-transform animate-pulse"
                                            >
                                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.521.074-.793.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
                                                </svg>
                                                Conversar no whatsapp
                                            </a>
                                        )}
                                    </div>
                                ))}
                                {isLoading && (
                                    <div className="flex justify-start">
                                        <div className="bg-white p-5 rounded-[22px] rounded-bl-none border border-[#22D3EE]/30 shadow-sm flex gap-1 items-center">
                                            <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 0.6, repeat: Infinity }} className="w-2 h-2 rounded-full bg-[#22D3EE]" />
                                            <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} className="w-2 h-2 rounded-full bg-[#22D3EE]" />
                                            <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} className="w-2 h-2 rounded-full bg-[#22D3EE]" />
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
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
                            {(isTalking && !isOpen) && (
                                <motion.div initial={{ opacity: 0, scale: 0.8, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.8, y: 20 }} className="absolute right-16 bottom-32 bg-slate-900 text-[#22D3EE] px-6 py-4 rounded-3xl rounded-br-none shadow-[0_10px_40px_-5px_rgba(34,211,238,0.3)] border border-[#22D3EE]/20 min-w-[200px] z-[110]">
                                    <p className="text-[13px] font-bold tracking-[0.05em] leading-tight drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">{talkingText}</p>
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
