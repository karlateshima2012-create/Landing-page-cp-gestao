import React, { useState } from 'react';
import { Logo } from '../Logo';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900/50 animate-fade-in">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Logo className="scale-[0.5] md:scale-[0.65] origin-left flex-shrink-0" />

                {/* Desktop Menu */}
                <div className="hidden lg:flex gap-10 items-center text-[11px] font-black uppercase tracking-[0.15em] text-white/70">
                    <a href="#solucoes" className="hover:text-brand-pink transition-colors">Solução</a>
                    <a href="#features" className="hover:text-brand-blue transition-colors">Funcionalidades</a>
                    <a href="#pricing" className="hover:text-brand-yellow transition-colors">Investimento</a>
                    <a href="#faq" className="hover:text-white transition-colors">Dúvidas</a>
                </div>

                <div className="hidden lg:block">
                    <a
                        href="https://wa.me/8109011886491?text=Olá! Gostaria de saber mais sobre o CP Gestão."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center relative bg-brand-blue hover:bg-brand-blue/90 text-slate-950 text-[10px] sm:text-xs font-black uppercase tracking-wider px-6 md:px-8 h-12 rounded-lg transition-all active:scale-95 shadow-lg shadow-brand-blue/20 group overflow-hidden"
                    >
                        <span className="relative z-10">Atendimento personalizado</span>
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </a>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    className="lg:hidden text-white p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-20 left-0 right-0 bg-slate-950 border-b border-white/10 p-8 flex flex-col gap-6 items-center text-center animate-fade-in">
                    <a href="#solucoes" onClick={() => setIsMenuOpen(false)} className="text-sm font-black uppercase tracking-widest text-white/70 hover:text-brand-pink">Solução</a>
                    <a href="#features" onClick={() => setIsMenuOpen(false)} className="text-sm font-black uppercase tracking-widest text-white/70 hover:text-brand-blue">Funcionalidades</a>
                    <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="text-sm font-black uppercase tracking-widest text-white/70 hover:text-brand-yellow">Investimento</a>
                    <a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-sm font-black uppercase tracking-widest text-white/70 hover:text-white">Dúvidas</a>
                    <a
                        href="https://wa.me/8109011886491?text=Olá! Gostaria de saber mais sobre o CP Gestão."
                        onClick={() => setIsMenuOpen(false)}
                        className="w-full bg-brand-blue text-slate-950 text-xs font-black uppercase tracking-wider h-14 rounded-xl flex items-center justify-center active:scale-95 shadow-lg shadow-brand-blue/20"
                    >
                        Atendimento personalizado
                    </a>
                </div>
            )}
        </nav>
    );
};
