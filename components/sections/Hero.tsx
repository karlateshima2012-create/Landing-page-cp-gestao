
import React from 'react';
import { Badge } from '../Badge';
import { Starfield } from '../Starfield';

export const Hero = () => (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-40 pb-20 px-4 md:px-8 lg:px-12 overflow-hidden bg-slate-950 animate-fade-in text-center">
        <Starfield />

        <div className="w-[90%] md:w-full max-w-5xl mx-auto relative z-10">


            <h1 className="text-4xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tighter max-w-5xl mx-auto">
                Sua empresa está <span className="bg-gradient-to-r from-brand-blue to-brand-pink bg-clip-text text-transparent">perdendo dinheiro</span> todos os dias sem saber.
            </h1>

            <p className="text-lg md:text-xl text-brand-gray font-light leading-relaxed max-w-4xl mx-auto mb-12">
                Com o <span className="text-white font-bold">CP Gestão</span>, você organiza seus clientes, fideliza quem compra e garante um <span className="text-white font-bold">crescimento previsível</span> com uma plataforma completa e inteligente.
            </p>

            <div className="flex justify-center items-center">
                <a
                    href="https://wa.me/8109011886491?text=Olá! Gostaria de saber mais sobre o CP Gestão."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative bg-white hover:bg-slate-100 text-slate-950 font-black text-xs h-12 px-10 rounded-lg flex items-center justify-center gap-3 transition-all shadow-[0_0_25px_rgba(56,182,255,0.35)] hover:scale-105 active:scale-95 uppercase tracking-wider group overflow-hidden"
                >
                    <span className="relative z-10">Começar a Crescer Agora</span>
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </a>
            </div>
        </div>

        {/* Efeito de Luz Pulsante - Top Left (Exact Specs from Guide) */}
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-[#38b6ff] rounded-full blur-[120px] opacity-25 animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite] -z-10 pointer-events-none"></div>

        {/* Global Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950 -z-10"></div>
        <div className="absolute top-[20%] left-[5%] w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[120px] -z-10"></div>
    </section>
);
