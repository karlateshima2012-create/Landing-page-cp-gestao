
import React, { useState, useEffect } from 'react';

export const FloatingCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) setIsVisible(true);
            else setIsVisible(false);
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[320px]">
            <button className="w-full bg-brand-blue hover:bg-brand-blue/90 text-slate-950 font-black text-xs h-12 rounded-lg shadow-[0_15px_30px_rgba(0,0,0,0.4),0_0_15px_rgba(56,182,255,0.2)] transition-all flex items-center justify-center gap-3 active:scale-95 uppercase tracking-wider">
                QUERO MEU CP GESTÃO AGORA
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
        </div>
    );
};
