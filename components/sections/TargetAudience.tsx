import React from 'react';
import { Badge } from '../Badge';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export const TargetAudience = () => {
    const objections = [
        {
            title: "Eu já uso WhatsApp",
            description: "WhatsApp não controla cliente nem gera retorno automático. Aqui você organiza e fideliza."
        },
        {
            title: "Meus clientes são poucos",
            description: "Então você precisa fazer eles voltarem mais vezes. Fidelidade aumenta o valor de cada cliente."
        },
        {
            title: "Uso planilha",
            description: "Planilha não lembra, não pontua, não vende. Aqui o sistema faz isso por você."
        },
        {
            title: "Não tenho tempo",
            description: "O sistema trabalha por você. Pontuação e controle automáticos."
        },
        {
            title: "Meu negócio é pequeno",
            description: "Negócio pequeno cresce com cliente fiel. Fidelidade é o começo do crescimento."
        },
        {
            title: "É caro",
            description: "Um cliente perdido já paga o sistema. Um cliente fiel paga vários meses."
        },
    ];

    return (
        <section id="solucoes" className="py-32 bg-slate-950 relative overflow-hidden w-full">
            {/* Intensified LED Backlighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[radial-gradient(circle_at_center,rgba(56,182,255,0.25)_0%,transparent_70%)] -z-10 pointer-events-none blur-[150px]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(229,21,122,0.1)_0%,transparent_60%)] -z-10 pointer-events-none blur-[180px]"></div>

            <div className="max-w-[1440px] mx-auto relative z-10 px-0">
                <div className="w-[92%] mx-auto md:w-full bg-slate-900/40 border-2 border-brand-blue/60 rounded-[2rem] md:rounded-[4rem] py-16 md:py-24 px-4 md:px-8 lg:px-12 backdrop-blur-3xl shadow-[0_80px_160px_-40px_rgba(0,0,0,0.95)] relative overflow-hidden group/main">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-transparent opacity-100 pointer-events-none"></div>
                    <div className="absolute inset-0 opacity-[0.05] bg-grid pointer-events-none"></div>

                    <div className="max-w-4xl mx-auto text-center relative z-10 mb-20">
                        <Badge variant="outline" className="border-brand-blue/40 text-brand-blue bg-brand-blue/10 uppercase tracking-[0.3em] font-black text-[10px] py-1 px-4 mb-6 shadow-[0_0_15px_rgba(56,182,255,0.2)]">DECISÃO INTELIGENTE</Badge>
                        <h2 className="text-4xl md:text-6xl font-black text-white mt-4 mb-4 tracking-tighter leading-[1]">
                            Seu problema não é falta de cliente… <br /> <span className="text-brand-blue">é cliente que não volta.</span>
                        </h2>
                        <p className="text-brand-gray text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                            Com CRM + programa de fidelidade, você organiza, acompanha e faz seu cliente comprar de novo.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                        {objections.map((item, index) => (
                            <div key={index}
                                className="group relative bg-slate-950/80 backdrop-blur-xl border border-white/5 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-slate-900/60 hover:border-brand-blue/60 hover:shadow-[0_30px_60px_-15px_rgba(56,182,255,0.4)]">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>

                                <div className="flex items-start gap-4 mb-4">
                                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-1 opacity-70" />
                                    <h4 className="relative z-10 text-white font-black text-lg tracking-tight group-hover:text-brand-blue transition-colors duration-300">
                                        "{item.title}"
                                    </h4>
                                </div>

                                <div className="flex items-start gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-1" />
                                    <p className="relative z-10 text-brand-gray/70 text-sm md:text-base font-bold leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center relative">
                        <div className="mb-10">
                            <p className="text-brand-blue font-black text-2xl md:text-4xl tracking-tight mb-2 drop-shadow-[0_0_15px_rgba(56,182,255,0.4)]">
                                Quem não controla, perde cliente.
                            </p>
                            <p className="text-white font-black text-2xl md:text-4xl tracking-tight uppercase">
                                Quem fideliza, cresce.
                            </p>
                        </div>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-12 bg-brand-blue/40 blur-[40px] rounded-full animate-pulse"></div>
                        <button className="relative h-14 px-12 bg-white text-slate-950 font-black rounded-xl text-[10px] uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-[0_15px_30px_-5px_rgba(255,255,255,0.25)] hover:shadow-brand-blue/40 group overflow-hidden">
                            <span className="relative z-10">Começar a fidelizar agora</span>
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
