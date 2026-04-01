import React from 'react';
import { Badge } from '../Badge';
import { LayoutGrid, TrendingUp, Users, Zap } from 'lucide-react';

export const TargetAudience = () => {
    return (
        <section id="solucoes" className="py-12 md:py-24 bg-slate-950 relative overflow-hidden w-full">
            {/* Intensified LED Backlighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[radial-gradient(circle_at_center,rgba(56,182,255,0.25)_0%,transparent_70%)] -z-10 pointer-events-none blur-[150px]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(229,21,122,0.1)_0%,transparent_60%)] -z-10 pointer-events-none blur-[180px]"></div>

            <div className="max-w-[1440px] mx-auto relative z-10 px-6 md:px-16 lg:px-24">
                <div className="w-full bg-slate-900/40 border-2 border-brand-blue/60 rounded-[2rem] md:rounded-[4rem] py-16 md:py-24 px-6 md:px-12 lg:px-20 backdrop-blur-3xl shadow-[0_80px_160px_-40px_rgba(0,0,0,0.95)] relative overflow-hidden group/main">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-transparent opacity-100 pointer-events-none"></div>
                    <div className="absolute inset-0 opacity-[0.05] bg-grid pointer-events-none"></div>

                    <div className="relative z-10 max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-8 tracking-tighter leading-[1]">
                                O que é <span className="text-brand-blue text-glow-blue">CP Gestão?</span>
                            </h2>
                            
                            <p className="text-lg md:text-2xl text-brand-gray/90 font-light leading-relaxed max-w-4xl mx-auto mb-10">
                                CP Gestão é a plataforma que transforma clientes ocasionais em clientes fiéis. 
                                <span className="block mt-4 text-white font-bold">Dois sistemas em um: CRM + Programa de Fidelidade integrados.</span>
                            </p>
                        </div>

                        {/* Feature Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
                            <div className="bg-slate-950/60 border border-white/10 p-8 md:p-10 rounded-[2.5rem] backdrop-blur-xl group hover:border-brand-blue/40 transition-all duration-500 flex flex-col items-center text-center">
                                <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6 border border-brand-blue/20 group-hover:scale-110 transition-transform duration-500">
                                    <Users className="w-7 h-7 text-brand-blue" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-black text-brand-blue mb-4 uppercase tracking-wider">CRM SIMPLES E PODEROSO</h3>
                                <p className="text-brand-gray/80 text-lg font-light leading-relaxed">
                                    Acesso a Histórico de compras, Informações importantes sobre cada cliente e lembretes para não perder oportunidades.
                                </p>
                            </div>

                            <div className="bg-slate-950/60 border border-white/10 p-8 md:p-10 rounded-[2.5rem] backdrop-blur-xl group hover:border-brand-pink/40 transition-all duration-500 flex flex-col items-center text-center">
                                <div className="w-14 h-14 bg-brand-pink/10 rounded-2xl flex items-center justify-center mb-6 border border-brand-pink/20 group-hover:scale-110 transition-transform duration-500">
                                    <Zap className="w-7 h-7 text-brand-pink" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-black text-brand-pink mb-4 uppercase tracking-wider">PROGRAMA DE FIDELIDADE COM PONTOS</h3>
                                <p className="text-brand-gray/80 text-lg font-light leading-relaxed">
                                    O cliente se cadastra, acumula pontos a cada compra ou atendimento, tudo feito de forma prática pelo celular.
                                </p>
                            </div>
                        </div>

                        {/* Result Highlight - No Card/Fluid */}
                        <div className="text-center mb-20 max-w-4xl mx-auto">
                            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed tracking-tight">
                                <span className="text-white font-black block md:inline mb-2 md:mb-0 mr-2 uppercase text-base md:text-lg tracking-widest text-brand-blue/80">Resultado real para o seu negócio:</span>
                                mais retenção de clientes, ticket médio maior e crescimento organizado.
                            </p>
                        </div>

                        {/* Final Highlight */}
                        <div className="text-center relative pt-8 border-t border-white/5">
                            <div className="mb-12">
                                <p className="text-brand-blue font-black text-2xl md:text-4xl tracking-tight mb-2 drop-shadow-[0_0_15px_rgba(56,182,255,0.4)]">
                                    Quem não controla, perde cliente.
                                </p>
                                <p className="text-white font-black text-2xl md:text-4xl tracking-tight">
                                    Quem fideliza, cresce. <span className="text-brand-pink">Escolha crescer.</span>
                                </p>
                            </div>

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-12 bg-brand-blue/40 blur-[40px] rounded-full animate-pulse opacity-20"></div>

                            <a
                                href="#pricing"
                                className="inline-flex items-center justify-center relative h-14 px-12 bg-white text-slate-950 font-black rounded-xl text-[10px] uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-[0_15px_30px_-5px_rgba(255,255,255,0.25)] hover:shadow-brand-blue/40 group overflow-hidden"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <span className="relative z-10">Ver Planos</span>
                                <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
