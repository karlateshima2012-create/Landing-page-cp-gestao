
import React from 'react';
import { Badge } from '../Badge';
import { Starfield } from '../Starfield';

export const Hero = () => (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-40 pb-20 px-4 md:px-8 lg:px-12 overflow-hidden bg-slate-950 animate-fade-in text-center">
        <Starfield />

        <div className="max-w-5xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 py-2 px-6 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 bg-[#38b6ff] rounded-full animate-pulse shadow-[0_0_20px_rgba(56,182,255,0.4)]"></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#38b6ff]">
                    Impulsionando Empresas no Japão
                </span>
            </div>

            <h1 className="text-[38px] md:text-[63px] font-black text-white mb-8 leading-[1.2] tracking-tighter max-w-4xl mx-auto">
                Pare de deixar dinheiro na mesa: conheça seus clientes e <span className="bg-gradient-to-r from-brand-blue to-brand-pink bg-clip-text text-transparent">faça a sua empresa crescer.</span>
            </h1>

            <p className="text-[20px] md:text-[23px] text-brand-gray font-medium leading-relaxed max-w-3xl mx-auto mb-12">
                Organize seus dados, <span className="text-white font-bold">fidelize quem compra</span> e garanta um <span className="text-white font-bold">crescimento previsível</span> com um CRM completo e inteligente.
            </p>

            <div className="flex justify-center items-center">
                <a
                    href="https://wa.me/MESSAGE_URL?text=Olá! Vim pelo site e gostaria de conhecer mais sobre como o CP Gestão pode ajudar minha empresa a crescer no Japão."
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
