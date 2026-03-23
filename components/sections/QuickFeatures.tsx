
import React from 'react';

const QuickCard = ({ title, description, badge, colorClass }: { title: string, description: string, badge: string, colorClass: string }) => (
    <div className="bg-slate-900 border-2 border-slate-800 p-8 rounded-[1.6rem] backdrop-blur-xl shadow-2xl transition-all hover:bg-slate-800/80 hover:border-brand-blue/40 group animate-fade-in-up">
        <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 ${colorClass} bg-opacity-20`}>
            {badge}
        </div>
        <h3 className="text-2xl md:text-3xl font-black text-white mb-4 group-hover:text-brand-blue transition-colors">
            {title}
        </h3>
        <p className="text-base text-brand-gray/80 leading-relaxed font-light">
            {description}
        </p>
    </div>
);

export const QuickFeatures = () => (
    <section className="relative py-12 px-6 z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <QuickCard
                badge="CRM COMPLETO"
                title="Tenha o controle total da sua empresa"
                description="Cadastre seus clientes, acompanhe a data da última compra, receba lembretes estratégicos, descubra o valor que cada um já gastou, identifique os clientes recorrentes e tenha uma base organizada para decisões estratégicas."
                colorClass="text-brand-blue bg-brand-blue"
            />
            <QuickCard
                badge="Retenção"
                title="PROGRAMA DE FIDELIDADE"
                description="Seu cliente acumula pontos a cada compra e troca por prêmios que você escolhe. Crie níveis de fidelidade, defina metas e deixe o sistema gerenciar toda a pontuação automaticamente. Quanto mais ele compra, mais benefícios ganha e mais motivos tem para voltar."
                colorClass="text-brand-pink bg-brand-pink"
            />
            <QuickCard
                badge="Estratégia"
                title="DASHBOARD ESTRATÉGICO"
                description="Acompanhe vendas, retenção, ticket médio e valor vitalício dos clientes em um painel simples e atualizado em tempo real. Visualize o desempenho do seu negócio de forma clara, identifique oportunidades de crescimento e tome decisões estratégicas com base em dados."
                colorClass="text-brand-yellow bg-brand-yellow"
            />
        </div>
    </section>
);
