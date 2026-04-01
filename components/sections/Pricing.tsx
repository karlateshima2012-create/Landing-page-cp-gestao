import React from 'react';
import { Badge } from '../Badge';
import { MessageCircle, Check, Box, ShieldCheck, Zap, ArrowRight, Settings, Smartphone, Rocket, Crown } from 'lucide-react';

export const Pricing = () => {
    const [openPro, setOpenPro] = React.useState(false);
    const [openAuto, setOpenAuto] = React.useState(false);

    const whatsappUrl = "https://wa.me/8109011886491?text=";
    const proUrl = `${whatsappUrl}${encodeURIComponent("Olá! Gostaria de saber mais sobre o Plano PRO.")}`;
    const automaticoUrl = `${whatsappUrl}${encodeURIComponent("Olá! Gostaria de saber mais sobre o Plano AUTOMÁTICO.")}`;
    const generalUrl = `${whatsappUrl}${encodeURIComponent("Olá! Gostaria de saber mais sobre os planos do CP Gestão.")}`;

    return (
        <section id="pricing" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-pink/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>

            <div className="max-w-[1440px] mx-auto px-6 md:px-24 w-full">
                {/* 1. Pricing Plans Header */}
                <div className="text-center mb-12 px-4">
                    <Badge variant="outline" className="mb-6 uppercase tracking-[0.3em] font-black text-[10px] py-1 px-4 text-brand-yellow border-brand-yellow/50">PLANOS</Badge>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[1.1]">
                        Escolha o seu plano
                    </h2>
                    <p className="text-lg md:text-2xl text-brand-gray/90 font-light max-w-2xl mx-auto">
                        Sem taxa de ativação e sem cobranças ocultas.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16 items-start px-0">
                    {/* PLANO PRO */}
                    <div className="w-full relative p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border-2 bg-slate-900/60 border-slate-800 hover:border-brand-blue/40 transition-all duration-500 backdrop-blur-xl flex flex-col group overflow-hidden">
                        <div className="absolute -top-10 -left-10 w-24 h-24 bg-brand-blue/10 rounded-full blur-[40px]"></div>
                        
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-2">
                                <Settings className="w-5 h-5 text-brand-blue" />
                                <span className="text-white/60 text-[10px] font-black uppercase tracking-widest">Ideal para organização</span>
                            </div>
                            <Smartphone className="w-6 h-6 text-brand-blue/40" />
                        </div>

                        <div className="mb-6">
                            <h3 className="text-4xl font-black text-white mb-3 uppercase tracking-tight">PLANO PRO</h3>
                            <p className="text-brand-gray/80 text-sm font-light leading-relaxed">
                                Toda a organização que seu negócio precisa para crescer com ordem e controle total sobre cada cliente.
                            </p>
                        </div>

                        <div className="mb-10">
                            <div className="flex items-baseline gap-2">
                                <span className="text-white text-5xl font-black tracking-tighter">¥2.980</span>
                                <span className="text-brand-gray/40 text-sm font-bold uppercase">/mês</span>
                            </div>
                        </div>

                        <div className="mb-10 space-y-4">
                            <a href={proUrl} className="relative w-full h-14 bg-brand-blue text-slate-950 font-black rounded-xl flex items-center justify-center gap-2 hover:scale-[1.03] transition-all text-[11px] uppercase tracking-widest active:scale-95 shadow-lg shadow-brand-blue/20 group/btn overflow-hidden">
                                <span className="relative z-10 px-4 text-center">QUERO ORGANIZAR MEUS CLIENTES</span>
                                <div className="absolute inset-x-0 bottom-0 h-1 bg-white transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300"></div>
                            </a>
                        </div>

                        {/* Features List (Always Visible) */}
                        <div className="border-t border-white/5 pt-6">
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-white font-black text-xs uppercase tracking-widest">Principais recursos</span>
                            </div>
                            
                            <div>
                                <ul className="space-y-3">
                                    <SmallCheckBullet text="Gestão 360º de Clientes (CRM)" />
                                    <SmallCheckBullet text="Sistema de Fidelidade Completo" />
                                    <SmallCheckBullet text="Gamificação por Pontuação" />
                                    <SmallCheckBullet text="Aprovação de pontuação Manual" />
                                    <SmallCheckBullet text="Relatórios & Métricas" />
                                    <SmallCheckBullet text="Capacidade até 4.000 contatos" />
                                    <SmallCheckBullet text="Packs de Contatos Extras disponíveis" />
                                    <SmallCheckBullet text="Suporte rápido e direto via Whatsapp" />
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* PLANO AUTOMÁTICO */}
                    <div className="w-full relative p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border-2 bg-slate-900 border-brand-yellow/30 backdrop-blur-3xl flex flex-col shadow-[0_0_50px_rgba(255,242,0,0.1)] transition-all duration-500 overflow-visible group">
                        <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-yellow/10 rounded-full blur-[40px]"></div>
                        <div className="absolute top-0 left-12 z-40 transform -translate-y-1/2">
                            <div className="bg-slate-950 text-brand-yellow font-black px-6 py-2 rounded-full shadow-2xl text-[10px] uppercase tracking-[0.2em] border border-brand-yellow/30">
                                MAIS VENDIDO
                            </div>
                        </div>

                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-2">
                                <Zap className="w-5 h-5 text-brand-yellow" />
                                <span className="text-white/60 text-[10px] font-black uppercase tracking-widest">Máxima Performance</span>
                            </div>
                            <Crown className="w-6 h-6 text-brand-yellow/80 hover:scale-110 transition-transform duration-300 cursor-help" />
                        </div>

                        <div className="mb-6">
                            <h3 className="text-4xl font-black text-white mb-3 uppercase tracking-tight leading-tight">Plano Automático</h3>
                            <p className="text-brand-gray/80 text-sm font-light leading-relaxed">
                                A solução definitiva para escalar suas vendas e fidelizar clientes no automático, sem esforço manual.
                            </p>
                        </div>

                        <div className="mb-10">
                            <div className="flex items-baseline gap-2">
                                <span className="text-white text-5xl font-black tracking-tighter">¥5.480</span>
                                <span className="text-brand-gray/40 text-sm font-bold uppercase">/mês</span>
                            </div>
                        </div>

                        <div className="mb-10 space-y-4">
                            <a href={automaticoUrl} className="relative w-full h-14 bg-brand-yellow text-slate-950 font-black rounded-xl flex items-center justify-center gap-2 hover:scale-[1.03] transition-all shadow-xl active:scale-95 text-[11px] uppercase tracking-widest leading-none group/btn overflow-hidden">
                                <span className="relative z-10 px-4 text-center">QUERO AUTOMATIZAR MEU NEGÓCIO</span>
                                <div className="absolute inset-x-0 bottom-0 h-1 bg-white transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300"></div>
                            </a>
                        </div>

                        {/* Features List (Always Visible) */}
                        <div className="border-t border-white/5 pt-6">
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-white font-black text-xs uppercase tracking-widest">Principais recursos</span>
                            </div>
                            
                            <div>
                                <ul className="space-y-3">
                                    <SmallCheckBullet text="Gestão 360º de Clientes (CRM)" color="yellow" />
                                    <SmallCheckBullet text="Sistema de Fidelidade Completo" color="yellow" />
                                    <SmallCheckBullet text="Gamificação por Pontuação" color="yellow" />
                                    <SmallCheckBullet text="Aprovação de pontuação 100% automática" color="yellow" />
                                    <SmallCheckBullet text="Relatórios & Métricas" color="yellow" />
                                    <SmallCheckBullet text="Capacidade até 6.000 contatos" color="yellow" />
                                    <SmallCheckBullet text="Packs de Contatos Extras disponíveis" color="yellow" />
                                    <SmallCheckBullet text="Suporte rápido e direto via Whatsapp" color="yellow" />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                {/* KIT ESTRATÉGICO DE ATIVAÇÃO */}
                <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 mb-16 pt-16 border-t border-white/5">
                    <div className="text-center mb-16">
                        <Badge variant="blue" className="mb-6 uppercase tracking-[0.3em] font-black text-[10px] py-1 px-5">KIT ESTRATÉGICO DE ATIVAÇÃO</Badge>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-[1.1] max-w-4xl mx-auto">
                            Totem com QR Code em 3D incluso na contratação
                        </h2>
                        <p className="text-brand-gray text-lg md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
                            Seu cliente acessa o sistema de fidelidade em segundos, apenas escaneando.
                        </p>
                    </div>

                    <div className="w-full bg-slate-900/50 border border-white/5 rounded-[2rem] p-10 md:p-16 mb-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                 <h3 className="text-2xl font-black text-white mb-10 tracking-tight">
                                    Digital + Físico: a combinação completa
                                 </h3>
                                 <ul className="space-y-8">
                                    <li className="flex items-start gap-5">
                                        <div className="w-6 h-6 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0 mt-1">
                                            <Check className="w-4 h-4 text-slate-950" strokeWidth={4} />
                                        </div>
                                        <span className="text-brand-gray text-lg md:text-xl font-light">QR Code digital liberado desde o primeiro dia</span>
                                    </li>
                                    <li className="flex items-start gap-5">
                                        <div className="w-6 h-6 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0 mt-1">
                                            <Check className="w-4 h-4 text-slate-950" strokeWidth={4} />
                                        </div>
                                        <span className="text-brand-gray text-lg md:text-xl font-light">Totem físico no balcão, caixa ou área principal</span>
                                    </li>
                                    <li className="flex items-start gap-5">
                                        <div className="w-6 h-6 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0 mt-1">
                                            <Check className="w-4 h-4 text-slate-950" strokeWidth={4} />
                                        </div>
                                        <span className="text-brand-gray text-lg md:text-xl font-light">Ideal para captar clientes e registrar pontos</span>
                                    </li>
                                 </ul>
                                 <div className="mt-12">
                                     <a href="https://wa.me/8109011886491?text=Olá! Quero começar agora com o CP Gestão pelo WhatsApp. Pode me orientar sobre o próximo passo?" className="relative bg-brand-blue hover:bg-slate-100 hover:text-slate-950 text-slate-950 font-black text-[11px] h-14 px-10 rounded-xl inline-flex items-center justify-center transition-all shadow-xl active:scale-95 uppercase tracking-widest group/btn overflow-hidden">
                                         <span className="relative z-10 px-4 text-center">Começar agora pelo WhatsApp</span>
                                         <div className="absolute inset-x-0 bottom-0 h-1 bg-white transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300"></div>
                                     </a>
                                 </div>
                             </div>
                            <div className="flex justify-center">
                                 <div className="relative group">
                                    <div className="absolute inset-0 bg-brand-blue/20 blur-[80px] rounded-full group-hover:bg-brand-blue/30 transition-all duration-1000"></div>
                                    <ShieldCheck className="w-32 h-32 md:w-56 md:h-56 text-brand-blue/40 relative z-10 transition-all duration-700 group-hover:text-brand-blue/60 group-hover:scale-110" strokeWidth={0.5} />
                                 </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <p className="text-brand-gray/80 text-lg md:text-xl font-light mb-4">
                            Fale com a gente e comece hoje mesmo
                        </p>
                    </div>
                </div>

        </section>
    );
};

const SmallCheckBullet = ({ text, color = 'blue' }: { text: string, color?: 'blue' | 'yellow' }) => (
    <li className="flex items-center gap-3 text-slate-300">
        <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${color === 'yellow' ? 'bg-brand-yellow text-slate-950' : 'bg-brand-blue text-slate-950'}`}>
            <Check strokeWidth={4} className="w-2.5 h-2.5" />
        </div>
        <span className="text-[12px] md:text-sm font-bold uppercase tracking-tight">{text}</span>
    </li>
);

const FeatureTile = ({ title, sub, highlight = false }: { title: string, sub: string, highlight?: boolean }) => (
    <div className={`flex flex-col items-center justify-center p-8 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-all group/tile ${highlight ? 'border-brand-blue/30' : ''}`}>
        <Check className={`w-8 h-8 mb-6 group-hover/tile:scale-125 transition-transform ${highlight ? 'text-brand-pink animate-pulse' : 'text-brand-blue'}`} />
        <span className={`text-white font-black text-xl tracking-tighter text-center uppercase mb-3 leading-none ${highlight ? 'text-brand-blue' : ''}`}>{title}</span>
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
