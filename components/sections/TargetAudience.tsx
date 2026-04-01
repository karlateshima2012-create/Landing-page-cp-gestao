import React from 'react';
import { Badge } from '../Badge';
import { Target, Users, Zap, BarChart, CheckCircle2 } from 'lucide-react';

export const TargetAudience = () => {
    return (
        <section id="solucoes" className="py-12 md:py-24 bg-slate-950 relative overflow-hidden w-full">
            {/* Intensified LED Backlighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[radial-gradient(circle_at_center,rgba(56,182,255,0.25)_0%,transparent_70%)] -z-10 pointer-events-none blur-[150px]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(229,21,122,0.1)_0%,transparent_60%)] -z-10 pointer-events-none blur-[180px]"></div>

            <div className="max-w-[1440px] mx-auto relative z-10 px-6 md:px-16 lg:px-24">
                <div className="w-full bg-slate-900/40 border-2 border-brand-blue/60 rounded-[2.5rem] md:rounded-[4rem] py-16 md:py-24 px-6 md:px-12 lg:px-20 backdrop-blur-3xl shadow-[0_80px_160px_-40px_rgba(0,0,0,0.95)] relative overflow-hidden group/main">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-transparent opacity-100 pointer-events-none"></div>
                    <div className="absolute inset-0 opacity-[0.05] bg-grid pointer-events-none"></div>

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4 tracking-tighter leading-[1] uppercase">
                                O que é <span className="text-brand-blue text-glow-blue">CP Gestão?</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-white font-bold tracking-tight mb-8">
                                O sistema que transforma clientes ocasionais em clientes fiéis.
                            </p>
                        </div>

                        <div className="space-y-12 text-base md:text-lg text-brand-gray/90 font-light leading-relaxed">
                            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                                <p className="mb-0">
                                    É onde você armazena <span className="text-white font-bold italic">nome, telefone, saldo de pontos e histórico</span> de cada cliente — <span className="text-brand-blue font-bold">tudo em um só lugar.</span>
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-8">
                                <div className="space-y-6">
                                    <h3 className="text-2xl md:text-3xl font-black text-white flex items-center gap-3">
                                        <Zap className="w-6 h-6 text-brand-blue" />
                                        Dois sistemas em um: <span className="text-brand-blue">CRM + Programa de Fidelidade</span> integrados.
                                    </h3>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-4">
                                            <p className="font-bold text-white uppercase text-sm tracking-widest text-brand-blue/80">Com o CRM você tem acesso a:</p>
                                            <ul className="space-y-3">
                                                <li className="flex items-center gap-3 italic">
                                                    <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0" />
                                                    Histórico de compras e valores
                                                </li>
                                                <li className="flex items-center gap-3 italic">
                                                    <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0" />
                                                    Informações importantes de cada cliente
                                                </li>
                                                <li className="flex items-center gap-3 italic">
                                                    <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0" />
                                                    Lembretes para não perder oportunidades
                                                </li>
                                                <li className="flex items-center gap-3 italic">
                                                    <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0" />
                                                    Controle completo de preferências
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="space-y-4">
                                            <p className="font-bold text-white uppercase text-sm tracking-widest text-brand-pink/80">Com o sistema de pontos:</p>
                                            <p className="text-white font-bold text-xl leading-snug">
                                                Seu cliente tem um <span className="text-brand-pink">motivo real</span> para voltar.
                                            </p>
                                            <p className="text-sm">
                                                Ele se cadastra uma vez e começa a acumular pontos a cada compra. Quanto mais pontos, mais vantagens. E na hora de escolher onde gastar, <span className="text-white font-bold">ele escolhe você.</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-white/5">
                                <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
                                    Sua empresa precisa que os clientes voltem. Com o <span className="text-brand-blue font-black underline decoration-brand-blue/30 underline-offset-8">CP Gestão</span>, você organiza quem é seu cliente, sabe o que ele precisa e ainda dá um incentivo real para ele escolher você de novo.
                                </p>
                            </div>
                        </div>

                        {/* Final Highlight */}
                        <div className="mt-16 text-center relative pt-12 border-t-2 border-brand-blue/20">
                            <div className="mb-12">
                                <h4 className="text-brand-blue font-black text-3xl md:text-5xl tracking-tighter mb-2 drop-shadow-[0_0_15px_rgba(56,182,255,0.4)] uppercase">
                                    Quem não controla, perde cliente.
                                </h4>
                                <h4 className="text-white font-black text-3xl md:text-5xl tracking-tighter uppercase">
                                    Quem fideliza, cresce.
                                </h4>
                            </div>

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-24 bg-brand-blue/40 blur-[60px] rounded-full animate-pulse opacity-20"></div>

                            <a
                                href="https://wa.me/8109011886491?text=Olá! Gostaria de saber mais sobre o CP Gestão."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center relative h-16 px-14 bg-white text-slate-950 font-black rounded-2xl text-[11px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_20px_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-brand-blue/40 group overflow-hidden"
                            >
                                <span className="relative z-10">Começar a Gerir e Crescer Agora</span>
                                <div className="absolute inset-x-0 bottom-0 h-1.5 bg-brand-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
