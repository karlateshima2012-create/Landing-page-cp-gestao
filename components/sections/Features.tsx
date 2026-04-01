import React from 'react';
import { Badge } from '../Badge';
import { Check } from 'lucide-react';

const FeaturePoint = ({ subtitle, items }: {
    subtitle: string,
    items: string[]
}) => (
    <div className="mb-6 last:mb-0 bg-slate-950/40 border border-white/5 p-8 rounded-3xl backdrop-blur-sm group hover:border-brand-blue/30 transition-all duration-300 shadow-xl">
        <p className="text-white font-bold text-lg md:text-xl mb-4 leading-tight group-hover:text-brand-blue transition-colors duration-300">
            {subtitle}
        </p>
        <ul className="space-y-4">
            {items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-brand-gray/90 text-lg md:text-xl font-light group-hover:text-white transition-colors duration-300">
                    <Check className="w-5 h-5 mt-1.5 shrink-0 text-brand-blue" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

export const FeaturesShowcase = () => (
    <section id="features" className="py-20 md:py-24 bg-slate-900/50 relative overflow-hidden">
        {/* Atmosphere */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(56,182,255,0.03)_0%,transparent_70%)] pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 relative z-10">
            {/* Centered Header (Top) */}
            <div className="text-center mb-12 md:mb-16 max-w-5xl mx-auto">
                <Badge variant="blue" className="mb-6 uppercase tracking-[0.3em] font-black text-[10px] py-1 px-5">PLATAFORMA COMPLETA</Badge>
                <h2 className="text-3xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[1.1]">
                    Tudo que sua empresa precisa para <span className="text-brand-blue text-glow-blue">crescer com previsibilidade</span>
                </h2>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                {/* Content Side (Left) */}
                <div className="flex-1 w-full space-y-2">
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
                <div className="flex-1 w-full">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-brand-blue/20 blur-[100px] opacity-10 transition-opacity group-hover:opacity-20"></div>
                        <div className="relative bg-slate-950/40 border border-white/10 p-2 rounded-[3.5rem] backdrop-blur-3xl shadow-2xl overflow-hidden aspect-[4/3] transform hover:rotate-y-2 transition-all duration-700">
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
