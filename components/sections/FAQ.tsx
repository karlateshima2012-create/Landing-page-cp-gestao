
import React, { useState } from 'react';
import { Badge } from '../Badge';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const questions = [
        {
            q: "Quanto tempo leva para ativar o sistema?",
            a: "A ativação online é imediata após a confirmação do pagamento. Você recebe o acesso ao seu painel administrativo e já pode começar a cadastrar clientes e configurar suas regras de fidelidade via QR Code digital."
        },
        {
            q: "Como recebo o Totem 3D com QR Code?",
            a: "Após a ativação, nossa equipe de design entrará em contato para personalizar o totem com sua logo. Assim que você aprovar o design, ele é impresso em 3D de alta qualidade e enviado via correio para o seu endereço comercial."
        },
        {
            q: "Qual a diferença real entre o Plano PRO e o ELITE?",
            a: "O Plano PRO foca em organização e controle manual de pontos (ideal para até 4.000 clientes). O Plano ELITE é focado em escala: ele automatiza 100% da validação de pontos, possui maior capacidade (até 6.000 clientes) e relatórios mais avançados."
        },
        {
            q: "O pagamento é mensal ou anual?",
            a: "Trabalhamos com o modelo de Assinatura Anual, com o benefício do faturamento mensal recorrente via Stripe. Isso garante estabilidade técnica e suporte contínuo para o seu negócio durante todo o ano."
        },
        {
            q: "Meus dados dos clientes estão seguros?",
            a: "Sim, segurança e privacidade são prioridades. Todos os dados são armazenados em servidores criptografados e você tem controle total sobre as informações da sua base de clientes, em conformidade com as melhores práticas de dados."
        },
        {
            q: "Posso fazer upgrade de plano depois?",
            a: "Com certeza! Se o seu negócio crescer e você precisar de automação total ou mais espaço para clientes, basta solicitar o upgrade para o Plano ELITE a qualquer momento através do nosso suporte via WhatsApp."
        }
    ];

    return (
        <section id="faq" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] -z-10"></div>
            
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <Badge variant="blue" className="mb-6 uppercase tracking-[0.3em] font-black text-[10px] py-1 px-5">CENTRAL DE DÚVIDAS</Badge>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-[1.1]">
                        Dúvidas Frequentes
                    </h2>
                    <p className="text-brand-gray text-lg font-light max-w-2xl mx-auto">
                        Tudo o que você precisa saber para começar a escalar sua fidelidade hoje.
                    </p>
                </div>

                <div className="space-y-4">
                    {questions.map((item, index) => (
                        <div 
                            key={index}
                            className={`group rounded-2xl border transition-all duration-300 ${
                                activeIndex === index 
                                ? 'bg-slate-900 border-brand-blue/30 shadow-[0_0_20px_rgba(56,182,255,0.05)]' 
                                : 'bg-slate-900/40 border-white/5 hover:border-white/10'
                            }`}
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                            >
                                <span className={`text-lg md:text-xl font-bold tracking-tight transition-colors ${activeIndex === index ? 'text-brand-blue' : 'text-slate-200'}`}>
                                    {item.q}
                                </span>
                                <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                                    activeIndex === index ? 'bg-brand-blue border-brand-blue text-slate-950' : 'border-white/10 text-white/40'
                                }`}>
                                    {activeIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                </div>
                            </button>
                            
                            <div 
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    activeIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="p-6 md:p-8 pt-0 border-t border-white/5">
                                    <p className="text-brand-gray text-lg font-light leading-relaxed">
                                        {item.a}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Final Help Note */}
                <div className="mt-16 text-center text-brand-gray/60 flex items-center justify-center gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-blue" />
                    <p className="text-sm font-medium uppercase tracking-[0.1em]">
                        Não encontrou sua dúvida? <a href="https://wa.me/8109011886491" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:text-brand-blue/80 underline underline-offset-4 font-black transition-colors">Fale com um especialista</a>
                    </p>
                </div>
            </div>
        </section>
    );
};
