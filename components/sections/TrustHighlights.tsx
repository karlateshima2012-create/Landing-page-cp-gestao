
import React from 'react';
import { Badge } from '../Badge';
import { CheckCircle2, Zap, Clock } from 'lucide-react';

export const TrustHighlights = () => {
    const steps = [
        {
            icon: <Zap className="w-10 h-10 text-brand-yellow" />,
            title: "Passo 01: Escolha sua Economia",
            description: "Defina o investimento ideal para o seu momento. Sem taxas de setup ou letras miúdas.",
            color: "yellow"
        },
        {
            icon: <Clock className="w-10 h-10 text-brand-blue" />,
            title: "Passo 02: Personalização Express",
            description: "Customize sua marca, horários e serviços em minutos. Você tem o controle total.",
            color: "blue"
        },
        {
            icon: <CheckCircle2 className="w-10 h-10 text-brand-pink" />,
            title: "Passo 03: Liberdade de Escala",
            description: "Sua gestão rodando no modo automático enquanto você foca no crescimento. Controle total do seu negócio.",
            color: "pink"
        }
    ];

    return (
        <section id="how-it-works" className="py-32 bg-slate-950 relative overflow-hidden">
            {/* Background Atmosphere - Radiant Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-[1000px] bg-gradient-to-r from-brand-blue/10 via-brand-pink/5 to-brand-yellow/10 blur-[180px] -z-10 opacity-50"></div>

            <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20 relative z-10">
                <div className="text-center mb-24">
                    <Badge icon variant="outline" className="mb-6 uppercase tracking-[0.3em] font-black text-[10px] py-1.5 px-6 border-white/20">
                        Fluxo de Sucesso
                    </Badge>
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 italic">
                        De 0 a <span className="text-brand-blue not-italic">Total Automação</span>
                    </h2>
                    <p className="text-brand-gray/60 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        Esqueça a burocracia. Criamos um caminho simples para você focar no que realmente importa: <span className="text-white font-medium">seus clientes.</span>
                    </p>
                </div>

                {/* Animated Connection Line (Desktop) */}
                <div className="hidden lg:block absolute top-[55%] left-1/2 -translate-x-1/2 w-[60%] h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10"></div>

                {/* High-Impact Step Cards */}
                <div className="grid lg:grid-cols-3 gap-8 relative">
                    {steps.map((step, index) => (
                        <div key={index} className="group relative">
                            {/* Card Background with Depth */}
                            <div className="absolute inset-0 bg-slate-900/40 rounded-[2.5rem] border border-white/5 backdrop-blur-xl -z-10 group-hover:border-white/20 transition-all duration-500"></div>

                            <div className="p-10 flex flex-col items-center text-center">
                                {/* Large Glowing Icon Container */}
                                <div className="relative mb-10">
                                    <div className={`absolute inset-0 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-brand-${step.color}`}></div>
                                    <div className="w-24 h-24 rounded-3xl bg-slate-950 border border-white/10 flex items-center justify-center relative z-10 shadow-2xl group-hover:-translate-y-2 transition-transform duration-500">
                                        <div className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-slate-900 border-2 border-slate-800 text-xs font-black flex items-center justify-center text-white shadow-xl">
                                            0{index + 1}
                                        </div>
                                        {step.icon}
                                    </div>
                                </div>

                                <h4 className="text-2xl font-black text-white mb-5 tracking-tight group-hover:text-brand-blue transition-colors duration-300">
                                    {step.title}
                                </h4>
                                <p className="text-brand-gray/80 text-lg font-light leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
