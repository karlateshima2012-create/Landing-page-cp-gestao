
import React from 'react';
import { Users, CreditCard, TrendingUp, Check } from 'lucide-react';

const FeatureSection = ({ icon, title, description, badge, items, colorClass, glowClass, imageUrl, reverse = false }: {
    icon: React.ReactNode,
    title: string,
    description?: string,
    badge?: string,
    items?: string[],
    colorClass: string,
    glowClass: string,
    imageUrl?: string,
    reverse?: boolean
}) => (
    <section className={`py-24 ${reverse ? 'bg-slate-900 border-y border-white/5' : 'bg-slate-950'}`}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
            <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 md:gap-24`}>
                <div className="flex-1 text-center md:text-left">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-8 mx-auto md:mx-0 transition-all ${colorClass} ${glowClass} animate-float shadow-xl`}>
                        {icon}
                    </div>
                    {badge && (
                        <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 bg-white/5 border border-white/10 text-brand-blue`}>
                            {badge}
                        </div>
                    )}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight tracking-tight">{title}</h2>
                    {description && (
                        <p className="text-brand-gray text-lg md:text-xl leading-relaxed font-light max-w-xl mx-auto md:mx-0 mb-8">
                            {description}
                        </p>
                    )}
                    {items && (
                        <ul className="space-y-4 text-left max-w-xl mx-auto md:mx-0">
                            {items.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4 text-brand-gray text-base md:text-lg font-light group">
                                    <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-brand-blue/20 group-hover:border-brand-blue/40 transition-colors">
                                        <Check className="w-3.5 h-3.5 text-brand-blue" />
                                    </div>
                                    <span className="group-hover:text-white transition-colors">{item}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                {imageUrl && (
                    <div className="hidden md:block flex-1 w-full perspective-1000">
                        <div className="relative group transition-transform duration-500 hover:rotate-y-6">
                            <div className={`absolute inset-0 ${reverse ? 'bg-brand-pink' : 'bg-brand-blue'} blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                            <div className="relative bg-slate-900/60 border border-white/10 p-2 rounded-[2rem] backdrop-blur-3xl shadow-2xl overflow-hidden aspect-video">
                                <img
                                    src={imageUrl}
                                    alt={title}
                                    className="w-full h-full object-cover rounded-[1.8rem] opacity-90 group-hover:opacity-100 transition-opacity"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none"></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </section>
);

export const FeaturesShowcase = () => (
    <div id="features" className="relative">
        <FeatureSection
            colorClass="bg-brand-blue text-white"
            glowClass="btn-glow-blue"
            icon={<Users className="w-8 h-8" />}
            badge="CRM COMPLETO"
            title="Tenha o controle total dos seus clientes na palma da mão"
            imageUrl="/crm-feature.png"
            items={[
                "Cadastre clientes com nome, telefone, endereço e histórico",
                "Saiba a data da última compra de cada um",
                "Receba lembretes estratégicos para acionar clientes",
                "Descubra quanto cada cliente já gastou (valor vitalício)",
                "Identifique seus clientes TOP (os que mais compram)",
                "Base organizada para campanhas de marketing certeiras"
            ]}
        />
        <FeatureSection
            reverse
            colorClass="bg-brand-pink text-white"
            glowClass="btn-glow-pink"
            icon={<CreditCard className="w-8 h-8" />}
            badge="SISTEMA DE FIDELIDADE"
            title="Transforme clientes comuns em fãs que voltam sempre"
            imageUrl="/loyalty-feature.png"
            items={[
                "Clientes acumulam pontos a cada compra realizada",
                "Pontos viram prêmios e descontos (você define as regras)",
                "Estímulo automático para recompra",
                "Cliente acompanha seus pontos pelo celular",
                "Aumento do ticket médio naturalmente",
                "Diferencial competitivo: você fideliza enquanto concorrente só vende"
            ]}
        />
        <FeatureSection
            colorClass="bg-brand-yellow text-slate-950"
            glowClass="btn-glow-yellow"
            icon={<TrendingUp className="w-8 h-8" />}
            badge="RELATÓRIOS E DECISÕES"
            title="Enxergue seu negócio com clareza e tome decisões estratégicas"
            imageUrl="/reports-feature.png"
            items={[
                "Saiba exatamente quantos clientes estão cadastrados",
                "Veja quantos estão ativos e quantos precisam ser reativados",
                "Descubra o ticket médio por cliente",
                "Relatórios de vendas por período",
                "Dados para definir promoções estratégicas",
                "Métricas de crescimento e retenção em tempo real"
            ]}
        />
    </div>
);
