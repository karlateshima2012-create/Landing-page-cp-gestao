import React, { useState } from 'react';
import { Badge } from '../Badge';
import { ChevronDown, ChevronUp } from 'lucide-react';

export interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

export const FAQS: FAQItem[] = [
    {
        id: 1,
        question: "O que é o CP Gestão e como ele funciona?",
        answer: "O CP Gestão é um sistema completo de CRM e fidelidade.\nVocê cadastra seus clientes, acompanha histórico, registra compras e cria um programa de pontos que incentiva o cliente a voltar mais vezes."
    },
    {
        id: 2,
        question: "Preciso baixar algum aplicativo?",
        answer: "Não. O sistema funciona direto no navegador do celular, tablet ou computador.\nÉ simples, rápido e não ocupa espaço no aparelho."
    },
    {
        id: 3,
        question: "Como o sistema ajuda a aumentar minhas vendas?",
        answer: "Com o controle dos clientes e o sistema de pontos, você cria um motivo real para o cliente voltar.\nAlém disso, você passa a ter dados para tomar decisões e aumentar a frequência de compra."
    },
    {
        id: 4,
        question: "O que eu consigo controlar dentro do sistema?",
        answer: "Você consegue:\n\n• Cadastrar clientes\n• Registrar histórico de compras\n• Ver quanto cada cliente já gastou\n• Criar e gerenciar pontos e recompensas\n• Receber lembretes estratégicos\n• Acompanhar relatórios do seu negócio"
    },
    {
        id: 6,
        question: "Como funciona o programa de pontos?",
        answer: "A cada compra, o cliente acumula pontos e pode trocar por recompensas.\nIsso aumenta a chance dele voltar e comprar novamente."
    },
    {
        id: 8,
        question: "O sistema tem relatórios?",
        answer: "Sim. Você acompanha:\n\n• Clientes cadastrados\n• Frequência de retorno\n• Crescimento do negócio\n• Ranking dos melhores clientes\n\nTudo de forma simples e organizada."
    },
    {
        id: 9,
        question: "Como funciona o pagamento?",
        answer: "Após conhecer mais sobre o sistema, você escolhe o plano (6 ou 12 meses) e recebe o link de pagamento seguro."
    },
    {
        id: 10,
        question: "Posso cancelar quando quiser?",
        answer: "Sim. Você pode solicitar o cancelamento a qualquer momento.\nO sistema continua ativo até o final do período contratado."
    },
    {
        id: 11,
        question: "Preciso entender de tecnologia para usar?",
        answer: "Não. O sistema foi feito para ser simples e fácil de usar no dia a dia."
    }
];

export const FAQSection = () => {
    const [openId, setOpenId] = useState<number | null>(null);

    return (
        <section id="faq" className="py-12 md:py-16 bg-transparent relative w-full transition-all duration-700">
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-950 via-slate-950/80 to-transparent z-20 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10 px-6 md:px-16 lg:px-24 pb-24">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">Dúvidas Comuns</h2>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {FAQS.map(faq => (
                        <div
                            key={faq.id}
                            className="bg-slate-900/40 border border-white/5 rounded-2xl overflow-hidden transition-all hover:border-brand-blue/30 group backdrop-blur-md"
                        >
                            <button
                                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                                className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4"
                            >
                                <h4 className="text-lg md:text-xl font-bold text-white leading-tight">
                                    {faq.question}
                                </h4>
                                <div className="text-white/40 group-hover:text-brand-blue transition-colors">
                                    {openId === faq.id ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                                </div>
                            </button>

                            <div className={`px-6 md:px-8 transition-all duration-300 ${openId === faq.id ? 'max-h-[500px] pb-8 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                                <div className="pt-4 border-t border-white/5">
                                    <p className="text-brand-gray/80 text-base md:text-lg leading-relaxed font-light whitespace-pre-line">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
