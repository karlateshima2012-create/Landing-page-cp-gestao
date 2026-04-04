
import React, { useState } from 'react';
import { Logo } from '../Logo';
import { LegalModal } from '../LegalModal';
import { ArrowUp } from 'lucide-react';

export const Footer = () => {
    const [isLegalOpen, setIsLegalOpen] = useState(false);

    return (
        <footer className="py-12 px-6 relative border-t border-white/5 bg-slate-950 overflow-hidden">
            {/* Intensified Blue Horizon Glow (WCAG Compliant) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[2px] bg-gradient-to-r from-transparent via-brand-blue/80 to-transparent"></div>
            <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-blue/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>
            
            <div className="max-w-7xl mx-auto flex flex-col items-start gap-8">
                {/* Branding & Back to Top Line - Original Logo Scale & Grid Protected */}
                <div className="w-full flex items-center justify-between gap-4">
                    <Logo className="scale-[0.55] md:scale-[0.65] origin-left" title="CREATIVE PRINT" subtitle="TECNOLOGIA E IMPRESSÃO 3D" />
                    
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-2 bg-brand-blue/10 backdrop-blur-md hover:bg-brand-blue/20 border border-brand-blue/20 px-3 py-1.5 md:px-4 md:py-2 rounded-full transition-all group shrink-0"
                    >
                        <ArrowUp className="w-3.5 h-3.5 md:w-4 md:h-4 text-brand-blue transition-transform group-hover:-translate-y-0.5" />
                        <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.1em] text-brand-blue/80 group-hover:text-brand-blue">topo</span>
                    </button>
                </div>

                {/* Navigation & Socials Column/Row */}
                <div className="w-full flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8 px-2 md:px-0">
                    {/* Navigation Cluster: Menu + Socials below on desktop */}
                    <div className="flex flex-col gap-8 w-full md:w-auto">
                        {/* Navigation - Stacked vertically on mobile after logo */}
                        <ul className="flex flex-col md:flex-row gap-4 md:gap-x-10 text-brand-gray text-[11px] md:text-[12px] font-black uppercase tracking-[0.2em]">
                            <li><a href="#solucoes" className="hover:text-white transition-colors">Solução</a></li>
                            <li><a href="#features" className="hover:text-white transition-colors">Funcionalidades</a></li>
                            <li><a href="#pricing" className="hover:text-white transition-colors">Planos</a></li>
                            <li>
                                <button
                                    onClick={() => setIsLegalOpen(true)}
                                    className="hover:text-white transition-colors text-left uppercase"
                                >
                                    Políticas
                                </button>
                            </li>
                        </ul>

                        {/* Socials - Positioning according to rule: below the menu */}
                        <div className="flex items-center gap-6">
                            <a href="https://www.instagram.com/creativeprint.jp/" target="_blank" rel="noopener noreferrer" className="text-brand-gray/80 hover:text-brand-pink transition-all hover:scale-110">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61580038140386" target="_blank" rel="noopener noreferrer" className="text-brand-gray/80 hover:text-brand-blue transition-all hover:scale-110">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </a>
                            <a href="https://wa.me/8109011886491" target="_blank" rel="noopener noreferrer" className="text-brand-gray/80 hover:text-brand-yellow transition-all hover:scale-110">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.521.074-.793.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright - Single line on mobile */}
                <div className="w-full pt-8 border-t border-white/5">
                    <p className="text-slate-500 text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] whitespace-nowrap overflow-hidden text-ellipsis">
                        © {new Date().getFullYear()} Creative Print. Todos os direitos reservados.
                    </p>
                </div>
            </div>

            <LegalModal
                isOpen={isLegalOpen}
                onClose={() => setIsLegalOpen(false)}
            />
        </footer>
    );
};
