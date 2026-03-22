
import React from 'react';
import { Logo } from '../Logo';

export const Navbar = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900/50 animate-fade-in">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Logo className="scale-[0.55] md:scale-[0.65] origin-left" />

            <div className="hidden lg:flex gap-10 items-center text-[11px] font-black uppercase tracking-[0.15em] text-white/70">
                <a href="#features" className="hover:text-brand-blue transition-colors">Funcionalidades</a>
                <a href="#solucoes" className="hover:text-brand-blue transition-colors">Soluções</a>
                <a href="#pricing" className="hover:text-brand-blue transition-colors">Investimento</a>
                <a href="#faq" className="hover:text-brand-blue transition-colors">Dúvidas</a>
            </div>

            <button className="relative bg-brand-blue hover:bg-brand-blue/90 text-slate-950 text-[10px] sm:text-xs font-black uppercase tracking-wider px-6 md:px-8 h-12 rounded-lg transition-all active:scale-95 shadow-lg shadow-brand-blue/20 group overflow-hidden">
                <span className="relative z-10">Atendimento personalizado</span>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </button>
        </div>
    </nav>
);
