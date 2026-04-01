import React from 'react';
import { Badge } from '../Badge';
import { TrendingUp, Users, Zap, BarChart3, Check } from 'lucide-react';

const SubFeature = ({ icon: Icon, title, subtitle, items, colorClass }: {
    icon: any,
    title: string,
    subtitle: string,
    items: string[],
    colorClass: string
}) => (
    <div className="mb-10 last:mb-0 group">
        <div className="flex items-center gap-4 mb-4">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorClass} bg-opacity-10 border border-white/5 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`w-5 h-5 ${colorClass.replace('bg-', 'text-')}`} />
            </div>
            <h3 className={`text-sm font-black uppercase tracking-widest ${colorClass.replace('bg-', 'text-')}`}>{title}</h3>
        </div>
        <p className="text-white font-bold text-lg mb-4 leading-tight">{subtitle}</p>
        <ul className="space-y-2">
            {items.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-brand-gray/80 text-sm font-light">
                    <Check className={`w-3.5 h-3.5 ${colorClass.replace('bg-', 'text-')}`} />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

export const FeaturesShowcase = () => (
    <section id="features" className="py-20 md:py-32 bg-slate-950 relative overflow-hidden">
        {/* Atmosphere */}
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[150px] -z-10 -translate-x-1/2"></div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
            <div className="flex flex-col md:flex-row items-start gap-16 md:gap-24">
                {/* Visual Side (Left) */}
                <div className="flex-1 w-full order-2 md:order-1">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-brand-blue/20 blur-[100px] opacity-20 transition-opacity group-hover:opacity-40"></div>
                        <div className="relative bg-slate-900/60 border border-white/10 p-2 rounded-[2.5rem] backdrop-blur-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden aspect-[4/3] transform hover:-rotate-y-6 transition-transform duration-700">
                            <img
                                src="/reports-feature.jpg"
                                alt="Dashboard CP Gestão"
                                className="w-full h-full object-cover rounded-[2rem] opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </div>

                {/* Content Side (Right) */}
                <div className="flex-1 order-1 md:order-2">
                    <Badge variant="blue" className="mb-8 uppercase tracking-[0.3em] font-black text-[10px] py-1 px-5">PLATAFORMA COMPLETA</Badge>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-12 tracking-tighter leading-[1.1] uppercase">
                        Tudo que sua empresa precisa para <span className="text-brand-blue text-glow-blue">crescer com previsibilidade</span>
                    </h2>

                    <div className="space-y-4">
                        <SubFeature 
                            icon={Users}
                            title="CONTROLE TOTAL"
                            subtitle="Organize todos os seus clientes em um só lugar"
                            items={[
                                "Data da última compra e valor vitalício",
                                "Lembretes estratégicos"
                            ]}
                            colorClass="bg-brand-blue"
                        />

                        <SubFeature 
                            icon={Zap}
                            title="SISTEMA DE FIDELIDADE"
                            subtitle="Transforme clientes comuns em fãs"
                            items={[
                                "Pontos por compra (você define as regras)",
                                "Prêmios, descontos e acompanhamento pelo celular"
                            ]}
                            colorClass="bg-brand-pink"
                        />

                        <SubFeature 
                            icon={TrendingUp}
                            title="RELATÓRIOS E DECISÕES"
                            subtitle="Enxergue seu negócio com clareza"
                            items={[
                                "Clientes ativos, ticket médio e vendas por período",
                                "Métricas de retenção em tempo real"
                            ]}
                            colorClass="bg-brand-yellow"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
);
