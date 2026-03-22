
import React from 'react';

const QuickCard = ({ title, description, badge, colorClass }: { title: string, description: string, badge: string, colorClass: string }) => (
    <div className="bg-slate-900 border-2 border-slate-800 p-8 rounded-[1.6rem] backdrop-blur-xl shadow-2xl transition-all hover:bg-slate-800/80 hover:border-brand-blue/40 group animate-fade-in-up">
        <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 ${colorClass} bg-opacity-20`}>
            {badge}
        </div>
        <h3 className="text-2xl font-black text-white mb-4 group-hover:text-brand-blue transition-colors">
            {title}
        </h3>
        <p className="text-brand-gray/80 leading-relaxed font-light">
            {description}
        </p>
    </div>
);

export const QuickFeatures = () => (
    <section className="relative py-12 px-6 z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <QuickCard
                badge="Mobilidade"
                title="ACESSO EM TEMPO REAL"
                description="Seu negócio no bolso, 24 horas por dia. Acompanhe tudo em tempo real do celular ou computador. Sem instalação, sem dor de cabeça."
                colorClass="text-brand-blue bg-brand-blue"
            />
            <QuickCard
                badge="Retenção"
                title="PROGRAMA DE FIDELIDADE"
                description="Seu cliente acumula pontos e ganha prêmios. Estimule a recompra com um sistema de fidelidade que prende o cliente no seu negócio."
                colorClass="text-brand-pink bg-brand-pink"
            />
            <QuickCard
                badge="Estratégia"
                title="DASHBOARD ESTRATÉGICO"
                description="Enxergue o futuro do seu negócio em números. Acompanhe métricas de crescimento e retenção em um painel simples e intuitivo."
                colorClass="text-brand-yellow bg-brand-yellow"
            />
        </div>
    </section>
);
