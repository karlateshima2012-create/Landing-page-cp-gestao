
import React from 'react';
import { Starfield } from '../Starfield';

export const FinalCTA = () => (
    <section className="py-20 md:py-32 bg-transparent px-4 md:px-8 lg:px-12 relative text-center w-full">
        {/* Continuous Background - Transitioning to black for footer */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-20 pointer-events-none"></div>

        {/* Card - Page Content Width (matching App.tsx main container max-w) */}
        <div className="w-[90%] md:max-w-[1440px] mx-auto relative z-10 bg-slate-950/95 border border-white/10 border-b-0 rounded-[2rem] md:rounded-[3rem] py-16 md:py-24 px-6 md:px-16 lg:px-24 backdrop-blur-3xl shadow-[0_50px_200px_-50px_rgba(0,0,0,1),0_0_80px_-20px_rgba(56,182,255,0.15)] overflow-hidden transition-all duration-500">
            <Starfield />
            {/* Internal Card Glow */}

            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-blue/5 to-transparent pointer-events-none opacity-40"></div>

            <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
                    Chega de adiar o <br /><span className="text-brand-pink drop-shadow-[0_0_20px_rgba(229,21,122,0.7)]">seu crescimento.</span>
                </h2>
                <p className="text-brand-gray/90 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                    Sua gestão profissional hoje significa escala e liberdade amanhã. O futuro do seu negócio começa aqui.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button className="relative w-full sm:w-auto px-12 h-14 bg-white text-slate-950 font-black rounded-xl text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center justify-center gap-3 group/p overflow-hidden">
                        <span className="relative z-10">QUERO VER NA PRÁTICA</span>
                        <span className="relative z-10 group-hover/p:translate-x-1 transition-transform">→</span>
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-blue transform scale-x-0 group-hover/p:scale-x-100 transition-transform duration-300"></div>
                    </button>
                </div>
            </div>
        </div>
    </section>
);
