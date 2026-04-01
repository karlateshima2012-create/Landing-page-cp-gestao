import React from 'react';
import { Badge } from '../Badge';

export const TargetAudience = () => {
    return (
        <section id="solucoes" className="py-12 md:py-24 bg-slate-950 relative overflow-hidden w-full">
            {/* Intensified LED Backlighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[radial-gradient(circle_at_center,rgba(56,182,255,0.25)_0%,transparent_70%)] -z-10 pointer-events-none blur-[150px]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(229,21,122,0.1)_0%,transparent_60%)] -z-10 pointer-events-none blur-[180px]"></div>

            <div className="max-w-[1440px] mx-auto relative z-10 px-6 md:px-16 lg:px-24">
                <div className="w-full bg-slate-900/40 border-2 border-brand-blue/60 rounded-[2rem] md:rounded-[4rem] py-16 md:py-24 px-6 md:px-12 lg:px-16 backdrop-blur-3xl shadow-[0_80px_160px_-40px_rgba(0,0,0,0.95)] relative overflow-hidden group/main">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-transparent opacity-100 pointer-events-none"></div>
                    <div className="absolute inset-0 opacity-[0.05] bg-grid pointer-events-none"></div>

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-10 tracking-tighter leading-[1] uppercase">
                                O que é <span className="text-brand-blue text-glow-blue">CP Gestão?</span>
                            </h2>
                            
                            <div className="space-y-8 text-lg md:text-xl text-brand-gray/90 font-light leading-relaxed text-center">
                                <p>
                                    <span className="text-white font-bold">CP Gestão</span> é o sistema que transforma clientes ocasionais em clientes fiéis. É onde você armazena nome, telefone, saldo de pontos e histórico de cada cliente <span className="text-white font-bold">tudo em um só lugar.</span>
                                </p>

                                <p>
                                    Dois sistemas em um: <span className="text-brand-blue font-bold">CRM + Programa de Fidelidade integrados.</span> Com o CRM você conhece seu cliente de verdade e tem acesso a Histórico de compras e valores, Informações importantes sobre cada cliente, Lembretes para não perder oportunidades e Controle de quem compra, quando compra e o que prefere.
                                </p>

                                <p>
                                    Com o sistema de pontos, <span className="text-brand-pink font-bold">seu cliente tem motivo para voltar.</span> Ele se cadastra uma vez e começa a acumular pontos a cada compra ou atendimento. Quanto mais pontos, mais vantagens. E na hora de escolher onde gastar, <span className="text-white font-bold">ele escolhe você.</span>
                                </p>

                                <p>
                                    Sua empresa precisa que os clientes voltem. Com o <span className="text-white font-bold text-glow-blue">CP Gestão</span>, você organiza quem é seu cliente, sabe o que ele precisa e ainda dá um incentivo real para ele escolher você de novo.
                                </p>
                            </div>
                        </div>

                        {/* Final Highlight */}
                        <div className="mt-16 text-center relative border-t border-white/10 pt-16">
                            <div className="mb-12">
                                <p className="text-brand-blue font-black text-2xl md:text-4xl tracking-tight mb-2 drop-shadow-[0_0_15px_rgba(56,182,255,0.4)]">
                                    Quem não controla, perde cliente.
                                </p>
                                <p className="text-white font-black text-2xl md:text-4xl tracking-tight">
                                    Quem fideliza, cresce.
                                </p>
                            </div>

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-12 bg-brand-blue/40 blur-[40px] rounded-full animate-pulse opacity-20"></div>

                            <a
                                href="https://wa.me/8109011886491?text=Olá! Gostaria de saber mais sobre o CP Gestão."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center relative h-14 px-12 bg-white text-slate-950 font-black rounded-xl text-[10px] uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-[0_15px_30px_-5px_rgba(255,255,255,0.25)] hover:shadow-brand-blue/40 group overflow-hidden"
                            >
                                <span className="relative z-10">Começar a fidelizar agora</span>
                                <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
