import React from 'react';
import { Badge } from '../Badge';
import { MessageCircle, Check, Box, ShieldCheck, Zap, ArrowRight, Settings, Smartphone, Rocket } from 'lucide-react';

export const Pricing = () => {
    const [proPeriod, setProPeriod] = React.useState<'semestral' | 'anual'>('anual');
    const [elitePeriod, setElitePeriod] = React.useState<'semestral' | 'anual'>('anual');

    const whatsappUrl = "https://wa.me/8109011886491?text=";
    const proUrl = `${whatsappUrl}${encodeURIComponent("Olá! Gostaria de saber mais sobre o Plano PRO.")}`;
    const eliteUrl = `${whatsappUrl}${encodeURIComponent("Olá! Gostaria de saber mais sobre o Plano ELITE.")}`;
    const consultUrl = `${whatsappUrl}${encodeURIComponent("Olá! Gostaria de conhecer mais o sistema antes de decidir.")}`;
    const generalUrl = `${whatsappUrl}${encodeURIComponent("Olá! Gostaria de saber mais sobre os planos do CP Gestão.")}`;

    return (
        <section id="pricing" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-pink/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>

            <div className="max-w-[1440px] mx-auto px-6 md:px-24 w-full">
                {/* 1. Pricing Plans Header */}
                <div className="text-center mb-12 px-4">
                    <Badge variant="outline" className="mb-6 uppercase tracking-[0.3em] font-black text-[10px] py-1 px-4 text-brand-yellow border-brand-yellow/50">INVESTIMENTO</Badge>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[1.1]">
                        Escolha o seu plano
                    </h2>
                    <p className="text-brand-gray text-base md:text-lg font-light max-w-2xl mx-auto opacity-80">
                        Sem taxa de ativação e sem cobranças ocultas.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16 items-stretch px-0">
                    {/* PLANO PRO */}
                    <div className="w-full relative p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border-2 bg-slate-900/60 border-slate-800 hover:border-brand-blue/40 transition-all duration-500 backdrop-blur-xl flex flex-col group overflow-hidden">
                        <div className="absolute -top-10 -left-10 w-24 h-24 bg-brand-blue/10 rounded-full blur-[40px]"></div>

                        <div className="mb-8">
                            <h3 className="text-3xl font-black text-white mb-1 uppercase tracking-tight font-black">PLANO PRO</h3>
                            <p className="text-brand-blue text-xs uppercase font-black tracking-widest opacity-80">Ideal para controle total</p>
                        </div>

                        <ul className="space-y-3 mb-10 flex-grow">
                            <SmallCheckBullet text="Gestão 360º de Clientes (CRM)" />
                            <SmallCheckBullet text="Sistema de Fidelidade Completo" />
                            <SmallCheckBullet text="Gamificação por Pontuação" />
                            <SmallCheckBullet text="Aprovação de pontuação Manual" />
                            <SmallCheckBullet text="Relatórios & Métricas" />
                            <SmallCheckBullet text="Capacidade até 4.000 contatos" />
                            <SmallCheckBullet text="Packs de Contatos Extras disponíveis" />
                        </ul>

                        <div className="bg-slate-950/40 border border-white/5 rounded-2xl p-6 mb-8 relative overflow-hidden">
                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-white text-5xl font-black transition-all">
                                            {proPeriod === 'anual' ? '¥37.800' : '¥21.000'}
                                        </span>
                                        <span className="text-brand-blue text-xs uppercase font-bold tracking-widest">/ {proPeriod === 'anual' ? 'anual' : 'semestral'}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-brand-blue font-bold text-base">
                                            ¥{proPeriod === 'anual' ? '3.150' : '3.500'}/mês
                                        </span>
                                        <span className="text-brand-gray text-[11px] uppercase opacity-60">valor mensal estimado</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5">
                                    <button
                                        onClick={() => setProPeriod('semestral')}
                                        className={`py-2 px-3 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all border ${proPeriod === 'semestral' ? 'bg-brand-blue text-slate-900 border-brand-blue shadow-lg shadow-brand-blue/20' : 'bg-transparent text-white/40 border-white/10 hover:border-white/20'}`}
                                    >
                                        Ver Plano Semestral
                                    </button>
                                    <button
                                        onClick={() => setProPeriod('anual')}
                                        className={`py-2 px-3 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all border ${proPeriod === 'anual' ? 'bg-brand-blue text-slate-900 border-brand-blue shadow-lg shadow-brand-blue/20' : 'bg-transparent text-white/40 border-white/10 hover:border-white/20'}`}
                                    >
                                        Ver Plano Anual
                                    </button>
                                </div>
                                {proPeriod === 'anual' && (
                                    <div className="bg-brand-pink/10 text-brand-pink text-[9px] font-black uppercase py-1.5 px-3 rounded-full text-center border border-brand-pink/20">
                                        Economize ¥4.200 no período
                                    </div>
                                )}
                            </div>
                        </div>

                        <a href={proUrl} className="relative w-full h-12 bg-brand-blue text-slate-950 font-black rounded-xl flex items-center justify-center gap-2 hover:scale-[1.03] transition-all text-[10px] uppercase tracking-widest active:scale-95 shadow-lg shadow-brand-blue/20 group/btn overflow-hidden">
                            <span className="relative z-10">COMEÇAR COM PLANO PRO</span>
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-white transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300"></div>
                        </a>
                    </div>

                    {/* PLANO ELITE */}
                    <div className="w-full relative p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border-2 bg-slate-900 border-brand-yellow/30 backdrop-blur-3xl flex flex-col shadow-[0_0_50px_rgba(255,242,0,0.1)] transition-all duration-500 overflow-visible">
                        <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-yellow/10 rounded-full blur-[40px]"></div>
                        <div className="absolute -top-5 left-12 z-20">
                            <Badge variant="outline" className="bg-slate-950 text-brand-yellow font-black px-6 py-1.5 shadow-2xl text-[9px] uppercase border-2 border-brand-yellow">RECOMENDADO</Badge>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-3xl font-black text-white mb-1 uppercase tracking-tight font-black">PLANO ELITE</h3>
                            <p className="text-brand-yellow text-xs uppercase font-black tracking-widest">Automação total e escala</p>
                        </div>

                        <ul className="space-y-3 mb-10 flex-grow">
                            <SmallCheckBullet text="Gestão 360º de Clientes (CRM)" color="yellow" />
                            <SmallCheckBullet text="Sistema de Fidelidade Completo" color="yellow" />
                            <SmallCheckBullet text="Gamificação por Pontuação" color="yellow" />
                            <SmallCheckBullet text="Aprovação de pontuação 100% automática" color="yellow" />
                            <SmallCheckBullet text="Relatórios & Métricas" color="yellow" />
                            <SmallCheckBullet text="Capacidade até 6.000 contatos" color="yellow" />
                            <SmallCheckBullet text="Packs de Contatos Extras disponíveis" color="yellow" />
                        </ul>

                        <div className="bg-slate-950/40 border border-white/5 rounded-2xl p-6 mb-8 relative overflow-hidden">
                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-white text-5xl font-black transition-all">
                                            {elitePeriod === 'anual' ? '¥70.200' : '¥39.000'}
                                        </span>
                                        <span className="text-brand-yellow text-xs uppercase font-bold tracking-widest">/ {elitePeriod === 'anual' ? 'anual' : 'semestral'}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-brand-yellow font-bold text-base">
                                            ¥{elitePeriod === 'anual' ? '5.850' : '6.500'}/mês
                                        </span>
                                        <span className="text-brand-gray text-[11px] uppercase opacity-60">valor mensal estimado</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5">
                                    <button
                                        onClick={() => setElitePeriod('semestral')}
                                        className={`py-2 px-3 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all border ${elitePeriod === 'semestral' ? 'bg-brand-yellow text-slate-900 border-brand-yellow shadow-lg shadow-brand-yellow/20' : 'bg-transparent text-white/40 border-white/10 hover:border-white/20'}`}
                                    >
                                        Ver Plano Semestral
                                    </button>
                                    <button
                                        onClick={() => setElitePeriod('anual')}
                                        className={`py-2 px-3 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all border ${elitePeriod === 'anual' ? 'bg-brand-yellow text-slate-900 border-brand-yellow shadow-lg shadow-brand-yellow/20' : 'bg-transparent text-white/40 border-white/10 hover:border-white/20'}`}
                                    >
                                        Ver Plano Anual
                                    </button>
                                </div>
                                {elitePeriod === 'anual' && (
                                    <div className="bg-brand-pink/10 text-brand-pink text-[9px] font-black uppercase py-1.5 px-3 rounded-full text-center border border-brand-pink/20">
                                        Economize ¥7.800 no período
                                    </div>
                                )}
                            </div>
                        </div>

                        <a href={eliteUrl} className="relative w-full h-14 bg-brand-yellow text-slate-950 font-black rounded-xl flex items-center justify-center gap-2 hover:scale-[1.03] transition-all shadow-xl active:scale-95 text-[10px] uppercase tracking-widest leading-none group/btn overflow-hidden">
                            <span className="relative z-10">COMEÇAR COM PLANO ELITE</span>
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-white transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300"></div>
                        </a>
                    </div>
                </div>

                {/* Consultative Supporting Text (No separate headline) */}
                <div className="max-w-4xl mx-auto mb-16 text-center px-4">
                    <p className="text-brand-gray text-lg font-light leading-relaxed mb-8 max-w-2xl mx-auto">
                        Ainda tem dúvidas? <span className="text-white font-bold">Conheça antes de decidir.</span><br />
                        Agende uma conversa rápida para conhecer o sistema, entender como ele se adapta ao seu negócio e tirar todas as suas dúvidas. Sem compromisso.
                    </p>

                    <a href={consultUrl} className="relative inline-flex items-center justify-center bg-white text-slate-950 font-black py-4 px-8 rounded-xl text-[10px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl leading-none group overflow-hidden">
                        <span className="relative z-10">QUERO CONHECER ANTES DE DECIDIR</span>
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </a>
                </div>
            </div>

            {/* 2. OFERTA LANÇAMENTO */}
            <div className="max-w-[1440px] mx-auto relative z-10 px-6 md:px-16 lg:px-24 mb-16">
                <div className="w-full border-2 border-brand-blue/30 rounded-[2rem] md:rounded-[4rem] bg-slate-900 overflow-hidden relative group">
                    <div className="absolute inset-0 bg-brand-blue/5 opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div className="py-16 md:py-24 px-8 md:px-16 lg:px-24 relative z-10 text-center">
                        <Badge variant="blue" className="mb-8 uppercase tracking-[0.3em] font-black text-[10px] py-1 px-5">OFERTA LANÇAMENTO</Badge>
                        <h3 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-none max-w-3xl mx-auto">
                            Ganhe 2 Totens NFC com QR Code impressos em 3D ao contratar hoje
                        </h3>
                        <p className="text-brand-gray text-lg font-light mb-12 max-w-2xl mx-auto">
                            Sua estrutura completa, configurada por nós e pronta para uso imediato. Sem custo adicional.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14 max-w-3xl mx-auto">
                            <FeatureTile
                                title="Exclusividade impressa em 3D"
                                sub="Totens físicos com acabamento premium."
                            />
                            <FeatureTile
                                title="Chegam funcionando"
                                sub="Configuração do sistema de pontos inclusa."
                            />
                            <FeatureTile
                                title="CUSTO ZERO"
                                sub="Presente exclusivo para quem contrata hoje."
                                highlight
                            />
                        </div>

                        <a href={generalUrl} className="relative inline-flex items-center gap-4 bg-white text-slate-950 font-black py-4 px-8 rounded-xl text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl leading-none group/btn overflow-hidden">
                            <span className="relative z-10">Quero garantir meu bônus</span>
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-blue transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300"></div>
                        </a>

                        <div className="mt-12 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10 text-left">
                            <div className="flex-grow space-y-10">
                                <div>
                                    <h4 className="text-brand-blue font-black text-[10px] uppercase tracking-[0.2em] mb-2">
                                        IMPLEMENTAÇÃO PROFISSIONAL INCLUSA EM TODOS OS PLANOS
                                    </h4>
                                </div>

                                <div className="max-w-xl">
                                    <h4 className="text-white font-black text-xs uppercase tracking-widest mb-4">
                                        TRANSPARÊNCIA NO CONTRATO
                                    </h4>
                                    <p className="text-base text-brand-gray/80 font-light leading-relaxed">
                                        Os planos operam em períodos de 6 ou 12 meses. Cancelamento livre a qualquer momento, com acesso ativo até o final do período contratado.
                                    </p>
                                </div>
                            </div>

                            <div className="flex-shrink-0 relative">
                                <div className="absolute inset-0 bg-brand-blue/20 blur-3xl rounded-full"></div>
                                <ShieldCheck className="w-24 h-24 text-white/5 group-hover:text-brand-blue/20 transition-all duration-700 relative z-10" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. COMO CONTRATAR EM 3 PASSOS */}
            <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 mb-16">
                <div className="text-center mb-20">
                    <Badge variant="outline" className="mb-6 uppercase tracking-[0.3em] font-black text-[10px] py-1 px-4 text-brand-blue border-brand-blue/30">COMEÇAR É SIMPLES</Badge>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[0.9]">
                        Como contratar em 3 passos
                    </h2>
                    <p className="text-brand-gray text-lg md:text-xl font-light max-w-2xl mx-auto">
                        Sem burocracia e sem formulários complexos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-[90%] md:max-w-5xl mx-auto">
                    <StepCardMinimal
                        icon={<MessageCircle className="w-10 h-10" />}
                        step="PASSO 1"
                        title="Atendimento pelo WhatsApp"
                        desc="Fale diretamente pelo whatsapp, sem complicação e sem formulários."
                    />
                    <StepCardMinimal
                        icon={<Zap className="w-10 h-10" />}
                        step="PASSO 2"
                        title="Escolha do plano ideal"
                        desc="Entendemos sua necessidade e definimos juntos a melhor opção para o seu negócio."
                    />
                    <StepCardMinimal
                        icon={<Rocket className="w-10 h-10" />}
                        step="PASSO 3"
                        title="Pagamento e acesso imediato"
                        desc="Pagamento simples e sistema liberado para uso imediatamente."
                    />
                </div>
            </div>

            {/* Final CTA */}
            <div className="text-center pb-12">
                <a href="https://wa.me/MESSAGE_URL?text=Olá! Quero começar agora com o CP Gestão pelo WhatsApp. Pode me orientar sobre o próximo passo?" className="relative bg-white hover:bg-slate-100 text-slate-950 font-black text-xs h-12 px-10 rounded-lg inline-flex items-center justify-center transition-all shadow-[0_0_25px_rgba(56,182,255,0.35)] hover:scale-105 active:scale-95 uppercase tracking-wider group overflow-hidden">
                    <span className="relative z-10">Começar agora pelo WhatsApp</span>
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </a>
            </div>
        </section>
    );
};

const SmallCheckBullet = ({ text, color = 'blue' }: { text: string, color?: 'blue' | 'yellow' }) => (
    <li className="flex items-center gap-3 text-slate-300">
        <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${color === 'yellow' ? 'bg-brand-yellow text-slate-950' : 'bg-brand-blue text-slate-950'}`}>
            <Check strokeWidth={4} className="w-2.5 h-2.5" />
        </div>
        <span className="text-[13px] md:text-sm font-bold leading-tight uppercase font-medium">{text}</span>
    </li>
);

const FeatureTile = ({ title, sub, highlight = false }: { title: string, sub: string, highlight?: boolean }) => (
    <div className={`flex flex-col items-center justify-center p-8 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-all group/tile ${highlight ? 'border-brand-blue/30' : ''}`}>
        <Check className={`w-8 h-8 mb-6 group-hover/tile:scale-125 transition-transform ${highlight ? 'text-brand-pink animate-pulse' : 'text-brand-blue'}`} />
        <span className={`text-white font-black text-xl md:text-2xl tracking-tighter text-center uppercase mb-3 leading-none ${highlight ? 'text-brand-blue' : ''}`}>{title}</span>
        <span className="text-brand-gray/80 text-sm md:text-base font-light text-center leading-relaxed">{sub}</span>
    </div>
);

const StepCardMinimal = ({ icon, step, title, desc }: { icon: React.ReactNode, step: string, title: string, desc: string }) => (
    <div className="relative p-10 rounded-[3rem] bg-slate-900 border border-white/5 group hover:border-brand-blue/30 transition-all flex flex-col items-center text-center">
        <div className="text-brand-blue mb-8 group-hover:scale-110 transition-transform">{icon}</div>
        <span className="text-[11px] font-black tracking-[0.3em] text-white/30 mb-3 uppercase">{step}</span>
        <h4 className="text-2xl font-black text-white mb-6 uppercase tracking-tight leading-none">{title}</h4>
        <p className="text-brand-gray/80 text-base font-light leading-relaxed">{desc}</p>
    </div>
);
