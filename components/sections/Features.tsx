import React from 'react';
import { Badge } from '../Badge';
import { Check } from 'lucide-react';

const FeaturePoint = ({ subtitle, items }: {
    subtitle: string,
    items: string[]
}) => (
    <div className="flex-1 bg-slate-950/40 border border-white/5 p-8 rounded-3xl backdrop-blur-sm group hover:border-brand-blue/30 transition-all duration-300 shadow-xl flex flex-col justify-center">
        <p className="text-white font-black text-2xl mb-4 uppercase tracking-tight">
            {subtitle}
        </p>
        <ul className="space-y-4">
            {items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-brand-gray/80 text-lg font-light group-hover:text-white transition-colors duration-300">
                    <Check className="w-5 h-5 mt-1.5 shrink-0 text-brand-blue" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

export const FeaturesShowcase = () => (
    <section id="features" className="py-20 md:py-32 bg-slate-900/50 relative overflow-hidden">
        {/* Atmosphere */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(56,182,255,0.03)_0%,transparent_70%)] pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 relative z-10">
            {/* Centered Header (Top) */}
            <div className="text-center mb-16 md:mb-20 max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-tight">
                    Tudo que sua empresa precisa para crescer
                </h2>
            </div>

            <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-12">
                {/* Content Side (Left) */}
                <div className="flex-1 flex flex-col gap-6 md:gap-8">
                    <FeaturePoint 
                        subtitle="Organize todos os seus clientes em um só lugar"
                        items={[
                            "Data da última compra e valor vitalício",
                            "Lembretes estratégicos"
                        ]}
                    />

                    <FeaturePoint 
                        subtitle="Transforme clientes comuns em fãs"
                        items={[
                            "Pontos por compra (você define as regras)",
                            "Prêmios, descontos e acompanhamento pelo celular"
                        ]}
                    />

                    <FeaturePoint 
                        subtitle="Enxergue seu negócio com clareza"
                        items={[
                            "Clientes ativos, ticket médio e vendas por período",
                            "Métricas de retenção em tempo real"
                        ]}
                    />
                </div>

                {/* Visual Side (Right) */}
                <div className="flex-1 w-full flex items-center">
                    <div className="relative group w-full h-full">
                        <div className="absolute inset-0 bg-brand-blue/20 blur-[100px] opacity-10 transition-opacity group-hover:opacity-20"></div>
                        <div className="relative h-full bg-slate-950/40 border border-white/10 p-2 rounded-[3.5rem] backdrop-blur-3xl shadow-2xl overflow-hidden transform hover:rotate-y-2 transition-all duration-700 min-h-[400px]">
                            <img
                                src="/reports-feature.jpg"
                                alt="Dashboard CP Gestão"
                                className="w-full h-full object-cover rounded-[3rem] opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
