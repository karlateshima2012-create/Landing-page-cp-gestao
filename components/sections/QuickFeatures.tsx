
import React from 'react';
import { Check } from 'lucide-react';

const QuickCard = ({ badge, title, features, footer, colorClass }: { 
    badge: string, 
    title: string, 
    features: string[], 
    footer: string,
    colorClass: string 
}) => (
    <div className="bg-slate-900 border-2 border-slate-800 p-8 rounded-[2rem] backdrop-blur-xl shadow-2xl transition-all hover:bg-slate-800/80 hover:border-brand-blue/40 group flex flex-col h-full border-b-4 border-b-slate-800 hover:border-b-brand-blue transition-all duration-500">
        <div className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 ${colorClass} bg-opacity-20 self-start`}>
            {badge}
        </div>
        <h3 className="text-2xl font-black text-white mb-6 tracking-tight">
            {title}
        </h3>
        
        <ul className="space-y-4 mb-8 flex-grow">
            {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-brand-gray/90 text-sm leading-relaxed font-light">
                    <Check className={`w-4 h-4 mt-1 flex-shrink-0 ${colorClass.split(' ')[0]}`} />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>

        <div className="pt-2">
            <p className="text-sm font-bold leading-relaxed text-white opacity-90">
                {footer}
            </p>
        </div>
    </div>
);

export const QuickFeatures = () => (
    <section className="relative py-12 px-6 md:px-16 lg:px-24 z-20">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <QuickCard
                badge="CRM COMPLETO"
                title="CRM COMPLETO"
                features={[
                    "Organize todos os seus clientes em um só lugar",
                    "Cadastro simples e rápido",
                    "Histórico de cada cliente",
                    "Controle total do atendimento"
                ]}
                footer="Você sabe quem é seu cliente e quando ele voltou pela última vez"
                colorClass="text-brand-blue bg-brand-blue"
            />
            <QuickCard
                badge="RETENÇÃO"
                title="PROGRAMA DE FIDELIDADE"
                features={[
                    "Dê um motivo real para o cliente voltar",
                    "Sistema de pontos por atendimento",
                    "Recompensas que incentivam retorno",
                    "Engajamento contínuo"
                ]}
                footer="Seu cliente volta porque tem vantagem em voltar"
                colorClass="text-brand-pink bg-brand-pink"
            />
            <QuickCard
                badge="ESTRATÉGIA"
                title="CONTROLE INTELIGENTE"
                features={[
                    "Você acompanha e decide o que é estratégico no seu negócio",
                    "Cadastro feito pelo próprio cliente",
                    "Pontuação automática a cada atendimento",
                    "Controle manual das informações mais importantes"
                ]}
                footer="Menos esforço no atendimento, mais controle na gestão"
                colorClass="text-brand-yellow bg-brand-yellow"
            />
        </div>
    </section>
);
