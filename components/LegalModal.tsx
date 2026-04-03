
import React from 'react';

interface LegalModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm animate-fade-in"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-4xl max-h-[80vh] bg-slate-900 border border-slate-800 rounded-[2rem] shadow-2xl overflow-hidden animate-fade-in-up">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900/50">
                    <h2 className="text-sm md:text-base font-black text-white uppercase tracking-[0.2em]">Termos de Uso e Política de Privacidade</h2>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-white/5 text-brand-gray transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                {/* Scrollable Body */}
                <div className="p-8 overflow-y-auto max-h-[calc(80vh-80px)] space-y-12 text-brand-gray leading-relaxed font-light custom-scrollbar">
                    <section>
                        <h3 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-6">📄 CONTRATO DE PRESTAÇÃO DE SERVIÇO – CP GESTÃO</h3>
                        <div className="space-y-6 text-sm">
                            <div className="space-y-2">
                                <p className="font-bold text-white">1. Objeto</p>
                                <p>A CONTRATADA (Creative Print) disponibiliza ao CONTRATANTE acesso ao sistema CP Gestão, incluindo funcionalidades de fidelidade, CRM, gestão de clientes e integração com dispositivos NFC/QR Code.</p>
                            </div>

                            <div className="space-y-2">
                                <p className="font-bold text-white">2. Modalidade de Contratação</p>
                                <p>O serviço é contratado na modalidade de Plano Anual, com duração mínima de 12 meses. O período mínimo contratado começa a partir da data da confirmação do primeiro pagamento. O compromisso assumido no momento da contratação será aplicado durante todo o período contratado.</p>
                            </div>

                            <div className="space-y-2">
                                <p className="font-bold text-white">3. Forma de Pagamento e Renovação</p>
                                <p>O serviço é cobrado de forma recorrente, com pagamentos mensais automáticos via Stripe. A assinatura permanece ativa e será renovada automaticamente até que o cliente solicite o cancelamento, respeitando o período mínimo contratado.</p>
                                <p className="italic underline">Valores Vigentes (Plano Anual):</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Plano PRO: ¥3.150/mês</li>
                                    <li>Plano ELITE: ¥5.850/mês</li>
                                </ul>
                            </div>

                            <div className="space-y-2">
                                <p className="font-bold text-white">4. Compromisso e Cancelamento</p>
                                <p>Ao contratar o serviço, o CONTRATANTE concorda com o período mínimo de 12 meses.</p>
                                <p className="underline">Regras:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Caso o cancelamento ocorra antes de 12 meses, o plano contratado será considerado até o final do período.</li>
                                    <li>O acesso ao sistema será encerrado imediatamente após o cancelamento.</li>
                                    <li>Não haverá reembolso de valores já pagos.</li>
                                    <li>As cobranças futuras serão interrompidas após o processamento do cancelamento.</li>
                                </ul>
                            </div>

                            <div className="space-y-2">
                                <p className="font-bold text-white">5. Inadimplência</p>
                                <p>Caso o pagamento não seja realizado, o acesso ao sistema poderá ser suspenso automaticamente. A reativação dependerá da regularização do pagamento.</p>
                            </div>

                            <div className="space-y-2">
                                <p className="font-bold text-white">6. Ativação do Serviço</p>
                                <p>Após a confirmação do pagamento, a Creative Print realizará a configuração inicial do sistema. O prazo de ativação pode variar conforme a complexidade da configuração personalizada.</p>
                            </div>

                            <div className="space-y-2">
                                <p className="font-bold text-white">7. Responsabilidade do Cliente</p>
                                <p>O CONTRATANTE é responsável pelo uso correto da plataforma, gestão de seus clientes e dados, e operação dos dispositivos NFC/QR Code vinculados ao sistema.</p>
                            </div>

                            <div className="space-y-2">
                                <p className="font-bold text-white">8. Limitação de Responsabilidade</p>
                                <p>A CONTRATADA não se responsabiliza por perda de vendas por mau uso do sistema ou falhas externas (internet, dispositivos de terceiros).</p>
                            </div>

                            <div className="space-y-2">
                                <p className="font-bold text-white italic">9. Aceite</p>
                                <p>Ao realizar o pagamento, o CONTRATANTE declara estar de acordo com todos os termos deste contrato.</p>
                            </div>
                        </div>
                    </section>

                    <section className="pt-8 border-t border-white/5">
                        <h3 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-6">📜 TERMOS DE USO – CP GESTÃO</h3>
                        <div className="space-y-4 text-sm">
                            <p>1. Uso da Plataforma: O sistema deve ser utilizado exclusivamente para fins comerciais legítimos, sendo proibida a prática de spam, fraudes ou uso indevido de dados de clientes.</p>
                            <p>2. Dados e Privacidade: Os dados inseridos no sistema são de responsabilidade do CONTRATANTE. A Creative Print não compartilha dados com terceiros, exceto provedores técnicos essenciais (Stripe).</p>
                            <p>3. Acesso: O acesso é individual e vinculado ao cliente contratante. O compartilhamento indevido ou revenda do acesso sem autorização resultará na suspensão imediata do serviço.</p>
                            <p>4. Atualizações: Reservamo-nos o direito de realizar melhorias e atualizações visando desempenho e segurança sem aviso prévio.</p>
                            <p>5. Suporte: O suporte técnico será prestado conforme disponibilidade, principalmente durante a ativação e uso inicial.</p>
                        </div>
                    </section>

                    <section className="pt-8 border-t border-white/5">
                        <h3 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-6">🔒 POLÍTICA DE PRIVACIDADE</h3>
                        <div className="space-y-4 text-sm">
                            <p>A Creative Print valoriza a sua privacidade. Coletamos apenas informações essenciais para a prestação de serviços de gestão e fidelidade.</p>
                            <p>Adotamos medidas de segurança técnicas rigorosas para proteger os seus dados e os dados de seus clientes contra acessos não autorizados.</p>
                            <p>Este sistema utiliza Cookies para autenticação de sessão e gerenciamento de preferências. Ao utilizar, você consente com o uso destes recursos.</p>
                        </div>
                    </section>

                    <div className="pt-8 border-t border-white/5 text-center italic text-[10px]">
                        Última atualização: 31 de Março de 2026
                    </div>
                </div>
            </div>
        </div>
    );
};
