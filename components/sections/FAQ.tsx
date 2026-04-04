import React, { useState } from 'react';
import { Badge } from '../Badge';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const questions = [
        {
            q: "Quanto tempo leva para ativar o sistema?",
            a: "A ativação online é imediata após a confirmação do pagamento. Você recebe o acesso ao seu painel administrativo e já pode começar a cadastrar clientes e configurar suas regras de fidelidade via QR Code digital."
        },
        {
            q: "Como recebo o Totem 3D com QR Code?",
            a: "Após a ativação, entraremos em contato para personalizar o totem com sua logo. Assim que você aprovar o design, ele é impresso em 3D de alta qualidade e enviado via correio para o seu endereço comercial."
        },
        {
            q: "Qual a diferença real entre o Plano PRO e o ELITE?",
            a: "O Plano PRO conta com aprovação de pontos manual via dashboard ou por notificações no Telegram, funcionando perfeitamente no PC e Celular. No Plano ELITE, a aprovação de pontos é automática e validada via senha dinâmica que muda a cada 24 horas, garantindo segurança total e autonomia para o seu negócio."
        },
        {
            q: "E se eu precisar de mais limites de contatos cadastrados?",
            a: "Sem problemas! Se o seu negócio crescer além do limite do seu plano, temos disponíveis packs de limites extras que podem ser contratados de forma rápida e eficiente para que você nunca pare de escalar."
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
            a: (
                <div className="space-y-4">
                    <p>
                        Com certeza! Se o seu negócio precisar de automação total ou maior capacidade, basta solicitar o upgrade para o Plano ELITE a qualquer momento através do nosso suporte via WhatsApp.
                    </p>
                    <div className="pt-4 border-t border-white/5 flex items-center gap-3 text-brand-blue/60 italic">
                        <HelpCircle className="w-4 h-4" />
                        <p className="text-sm font-medium">
                            Não encontrou sua dúvida? <a href="https://wa.me/8109011886491" target="_blank" rel="noopener noreferrer" className="text-brand-gray hover:text-white underline underline-offset-4 transition-all duration-300 not-italic">Fale com a gente</a>
                        </p>
                    </div>
                </div>
            )
        }
    ];

    return (
        <section id="faq" className="py-20 relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900/30">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] -z-10 opacity-60"></div>
            
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-[1.1]">
                        Dúvidas Frequentes
                    </h2>
                    <p className="text-[15px] md:text-[17px] text-brand-gray/90 font-medium max-w-2xl mx-auto leading-relaxed">
                        Tudo o que você precisa saber para começar a escalar sua fidelidade hoje.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-2.5">
                    {questions.map((item, index) => (
                        <div 
                            key={index}
                            className={`group rounded-xl border transition-all duration-300 ${
                                activeIndex === index 
                                ? 'bg-slate-900 border-brand-blue/20 shadow-[0_0_15px_rgba(56,182,255,0.03)]' 
                                : 'bg-slate-900/40 border-white/5 hover:border-white/10'
                            }`}
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-4 md:p-5 text-left"
                            >
                                <span className={`text-[15px] md:text-[17px] font-medium tracking-tight transition-colors ${activeIndex === index ? 'text-brand-blue' : 'text-slate-200'}`}>
                                    {item.q}
                                </span>
                                <div className={`flex-shrink-0 ml-4 w-7 h-7 rounded-full border flex items-center justify-center transition-all ${
                                    activeIndex === index ? 'bg-brand-blue border-brand-blue text-slate-950 shadow-[0_0_10px_rgba(56,182,255,0.3)]' : 'border-white/10 text-white/40'
                                }`}>
                                    {activeIndex === index ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                                </div>
                            </button>
                            
                            <div 
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    activeIndex === index ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="p-4 md:p-5 pt-0 border-t border-white/5">
                                    <div className="text-brand-gray/80 text-[15px] md:text-[17px] font-normal leading-relaxed">
                                        {item.a}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
