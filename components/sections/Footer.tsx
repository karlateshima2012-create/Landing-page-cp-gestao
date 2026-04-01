
import React, { useState } from 'react';
import { Logo } from '../Logo';
import { LegalModal } from '../LegalModal';
import { ArrowUp } from 'lucide-react';

export const Footer = () => {
    const [isLegalOpen, setIsLegalOpen] = useState(false);

    return (
        <footer className="bg-slate-900/50 pt-4 pb-4 px-6 relative">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-4">
                <div className="md:col-span-3 space-y-4">
                    <div className="flex justify-between items-end md:items-start md:flex-col w-full md:w-auto pt-2 md:pt-0 pr-6 md:pr-0">
                        <div className="space-y-4">
                            <Logo className="scale-[0.55] md:scale-[0.65] origin-left" />
                            <div className="flex justify-between w-[200px]">
                                <a href="https://www.instagram.com/creativeprint.jp/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-brand-gray hover:text-brand-pink hover:bg-slate-700/50 transition-all border border-white/5 hover:border-brand-pink/40">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=61580038140386" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-brand-gray hover:text-brand-blue hover:bg-slate-700/50 transition-all border border-white/5 hover:border-brand-blue/40">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                </a>
                                <a href="https://wa.me/8109011886491" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-brand-gray hover:text-brand-yellow hover:bg-slate-700/50 transition-all border border-white/5 hover:border-brand-yellow/40">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.521.074-.793.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" /></svg>
                                </a>
                            </div>
                        </div>

                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="flex items-center gap-3 text-brand-blue/60 hover:text-brand-blue transition-all group mt-10"
                        >
                            <div className="w-12 h-12 md:w-8 md:h-8 rounded-xl md:rounded-lg border border-brand-blue/30 flex items-center justify-center group-hover:border-brand-blue/40 group-hover:bg-brand-blue/10 transition-all">
                                <ArrowUp className="w-5 h-5 md:w-4 md:h-4" />
                            </div>
                            <span className="hidden md:block text-[11px] uppercase tracking-[0.2em] font-black">Voltar ao Topo</span>
                        </button>
                    </div>
                </div>
                <div>
                    <h4 className="text-white font-black text-xs mb-8 uppercase tracking-[0.4em] opacity-40">Navegação</h4>
                    <ul className="space-y-4 text-brand-gray text-[14px] font-bold">
                        <li><a href="#solucoes" className="hover:text-brand-pink transition-colors">Solução</a></li>
                        <li><a href="#features" className="hover:text-brand-blue transition-colors">Funcionalidades</a></li>
                        <li><a href="#pricing" className="hover:text-brand-yellow transition-colors">Planos</a></li>
                        <li>
                            <button
                                onClick={() => setIsLegalOpen(true)}
                                className="hover:text-white transition-colors text-left"
                            >
                                Termos e Políticas
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 pt-4 border-t border-white/5 text-slate-500 text-[11px] font-black tracking-[0.2em]">
                <p>© {new Date().getFullYear()} Creative Print. Todos os direitos reservados.</p>
            </div>

            <LegalModal
                isOpen={isLegalOpen}
                onClose={() => setIsLegalOpen(false)}
            />
        </footer>
    );
};
