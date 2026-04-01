import React from 'react';
import { Badge } from '../Badge';
import { Target, Users, Zap, TrendingUp } from 'lucide-react';

export const FeaturesShowcase = () => (
    <div id="features" className="relative py-20 bg-slate-950 border-y border-white/5 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-pink/5 rounded-full blur-[120px] -z-10"></div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 relative z-10">
            <div className="text-center mb-20 max-w-4xl mx-auto animate-fade-in">
                <Badge variant="blue" className="mb-8 uppercase tracking-[0.3em] font-black text-[10px] py-1 px-5">TUDO QUE VOCÊ PRECISA</Badge>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight leading-[1]">
                    Tudo que sua empresa precisa para <span className="text-brand-blue">crescer com previsibilidade</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                {/* 1. CONTROLE TOTAL */}
                <div className="bg-slate-900/40 border-2 border-white/5 p-10 rounded-[2.5rem] backdrop-blur-3xl hover:border-brand-blue/40 transition-all duration-500 flex flex-col group shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-full blur-[60px] translate-x-16 -translate-y-16"></div>
                    
                    <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-8 border border-brand-blue/20 group-hover:scale-110 transition-all duration-500">
                        <Users className="w-7 h-7 text-brand-blue" />
                    </div>
                    
                    <h3 className="text-xl font-black text-white mb-4 uppercase tracking-wider">CONTROLE TOTAL</h3>
                    <p className="text-brand-gray/90 font-medium mb-8 leading-relaxed">Organize todos os seus clientes em um só lugar</p>
                    
                    <ul className="space-y-4 mt-auto">
                        <li className="flex items-start gap-3 text-sm text-brand-gray/80 font-light group-hover:text-white transition-colors duration-300">
                            <span className="text-brand-blue font-black mt-0.5">•</span>
                            <span>Data da última compra e valor vitalício</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-brand-gray/80 font-light group-hover:text-white transition-colors duration-300">
                            <span className="text-brand-blue font-black mt-0.5">•</span>
                            <span>Lembretes estratégicos</span>
                        </li>
                    </ul>
                </div>

                {/* 2. SISTEMA DE FIDELIDADE */}
                <div className="bg-slate-900/40 border-2 border-white/5 p-10 rounded-[2.5rem] backdrop-blur-3xl hover:border-brand-pink/40 transition-all duration-500 flex flex-col group shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pink/10 rounded-full blur-[60px] translate-x-16 -translate-y-16"></div>

                    <div className="w-14 h-14 bg-brand-pink/10 rounded-2xl flex items-center justify-center mb-8 border border-brand-pink/20 group-hover:scale-110 transition-all duration-500">
                        <Zap className="w-7 h-7 text-brand-pink" />
                    </div>

                    <h3 className="text-xl font-black text-white mb-4 uppercase tracking-wider">SISTEMA DE FIDELIDADE</h3>
                    <p className="text-brand-gray/90 font-medium mb-8 leading-relaxed">Transforme clientes comuns em fãs</p>

                    <ul className="space-y-4 mt-auto">
                        <li className="flex items-start gap-3 text-sm text-brand-gray/80 font-light group-hover:text-white transition-colors duration-300">
                            <span className="text-brand-pink font-black mt-0.5">•</span>
                            <span>Pontos por compra (você define as regras)</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-brand-gray/80 font-light group-hover:text-white transition-colors duration-300">
                            <span className="text-brand-pink font-black mt-0.5">•</span>
                            <span>Prêmios, descontos e acompanhamento pelo celular</span>
                        </li>
                    </ul>
                </div>

                {/* 3. RELATÓRIOS E DECISÕES */}
                <div className="bg-slate-900/40 border-2 border-white/5 p-10 rounded-[2.5rem] backdrop-blur-3xl hover:border-brand-yellow/40 transition-all duration-500 flex flex-col group shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-full blur-[60px] translate-x-16 -translate-y-16"></div>

                    <div className="w-14 h-14 bg-brand-yellow/10 rounded-2xl flex items-center justify-center mb-8 border border-brand-yellow/20 group-hover:scale-110 transition-all duration-500">
                        <TrendingUp className="w-7 h-7 text-brand-yellow" />
                    </div>

                    <h3 className="text-xl font-black text-white mb-4 uppercase tracking-wider">RELATÓRIOS E DECISÕES</h3>
                    <p className="text-brand-gray/90 font-medium mb-8 leading-relaxed">Enxergue seu negócio com clareza</p>

                    <ul className="space-y-4 mt-auto">
                        <li className="flex items-start gap-3 text-sm text-brand-gray/80 font-light group-hover:text-white transition-colors duration-300">
                            <span className="text-brand-yellow font-black mt-0.5">•</span>
                            <span>Clientes ativos, ticket médio e vendas por período</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-brand-gray/80 font-light group-hover:text-white transition-colors duration-300">
                            <span className="text-brand-yellow font-black mt-0.5">•</span>
                            <span>Métricas de retenção em tempo real</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);
