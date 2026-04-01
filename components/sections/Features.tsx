import React from 'react';
import { Badge } from '../Badge';
import { Check } from 'lucide-react';

const FeaturePoint = ({ subtitle, items, colorClass }: {
    subtitle: string,
    items: string[],
    colorClass: string
}) => (
    <div className="mb-10 last:mb-0 group">
        <p className="text-white font-bold text-xl mb-4 leading-tight group-hover:text-brand-blue transition-colors duration-300">{subtitle}</p>
        <ul className="space-y-3">
            {items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-brand-gray/90 text-base font-light group-hover:text-white transition-colors duration-300">
                    <Check className={`w-4 h-4 mt-1 shrink-0 ${colorClass.replace('bg-', 'text-')}`} />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

export const FeaturesShowcase = () => (
    <section id="features" className="py-20 md:py-32 bg-slate-950 relative overflow-hidden">
        {/* Atmosphere */}
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[150px] -z-10 translate-x-1/2"></div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
            {/* Centered Header (Top) */}
            <div className="text-center mb-16 md:mb-24 max-w-4xl mx-auto">
                <Badge variant="blue" className="mb-6 uppercase tracking-[0.3em] font-black text-[10px] py-1 px-5">PLATAFORMA COMPLETA</Badge>
                <h2 className="text-3xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[1.1] uppercase">
                    Tudo que sua empresa precisa para <span className="text-brand-blue text-glow-blue">crescer com previsibilidade</span>
                </h2>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
                {/* Content Side (Left) */}
                <div className="flex-1 w-full max-w-2xl">
                    <div className="space-y-4">
                        <FeaturePoint 
                            subtitle="Organize todos os seus clientes em um só lugar"
                            items={[
                                "Data da última compra e valor vitalício",
                                "Lembretes estratégicos"
                            ]}
                            colorClass="bg-brand-blue"
                        />

                        <FeaturePoint 
                            subtitle="Transforme clientes comuns em fãs"
                            items={[
                                "Pontos por compra (você define as regras)",
                                "Prêmios, descontos e acompanhamento pelo celular"
                            ]}
                            colorClass="bg-brand-pink"
                        />

                        <FeaturePoint 
                            subtitle="Enxergue seu negócio com clareza"
                            items={[
                                "Clientes ativos, ticket médio e vendas por período",
                                "Métricas de retenção em tempo real"
                            ]}
                            colorClass="bg-brand-yellow"
                        />
                    </div>
                </div>

                {/* Visual Side (Right) */}
                <div className="flex-1 w-full">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-brand-blue/20 blur-[100px] opacity-20 transition-opacity group-hover:opacity-40"></div>
                        <div className="relative bg-slate-900/60 border-2 border-white/5 p-2 rounded-[3.5rem] backdrop-blur-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden aspect-[4/3] transform hover:rotate-y-6 transition-transform duration-700">
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
