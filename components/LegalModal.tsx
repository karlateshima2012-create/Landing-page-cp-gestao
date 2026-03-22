
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
                        <h3 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-6">Política de Privacidade</h3>
                        <div className="space-y-4 text-sm">
                            <p>A Creative Print valoriza a privacidade de seus usuários. Esta Política descreve como coletamos e utilizamos seus dados.</p>
                            <p>1. Coleta de Dados: Coletamos apenas informações essenciais para a prestação de nossos serviços de gestão e fidelidade, como nome, contato e preferências de serviço.</p>
                            <p>2. Uso das Informações: Seus dados são utilizados exclusivamente para gerenciar seus clientes, pontuações e enviar notificações relevantes via WhatsApp.</p>
                            <p>3. Segurança: Adotamos medidas de segurança técnicas e organizacionais adequadas para proteger seus dados contra acessos não autorizados, vazamentos ou perdas acidentais.</p>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-6">Termos de Uso</h3>
                        <div className="space-y-4 text-sm">
                            <p>Ao utilizar o sistema CP Gestão, você concorda com os seguintes termos:</p>
                            <p>1. Licença de Uso: Concedemos uma licença limitada, não exclusiva e intransferível para o uso de nossa plataforma conforme o plano contratado.</p>
                            <p>2. Responsabilidade: O usuário é responsável pela veracidade dos dados inseridos e pelo uso ético das ferramentas de comunicação disponibilizadas.</p>
                            <p>3. Pagamentos: O acesso ao sistema está condicionado à manutenção do plano de assinatura ativo de acordo com os ciclos de renovação escolhidos.</p>
                            <p>4. Cancelamento: O cancelamento do plano de assinatura pode ser solicitado a qualquer momento, porém não haverá reembolso de valores já pagos. O acesso ao sistema permanecerá ativo até o final do ciclo vigente do plano contratado.</p>
                            <p>5. O usuário declara ser o responsável legal pelos dados de seus clientes inseridos na plataforma, estando autorizado a compartilhá-los para a execução dos serviços.</p>
                            <p>6. Cookies: Utilizamos cookies essenciais para o funcionamento da plataforma, como autenticação de sessão e preferências de uso. Ao utilizar o sistema CP Gestão, você consente com o uso desses cookies. Cookies não essenciais (como analytics) são opcionais e podem ser gerenciados pelo usuário nas configurações do navegador.</p>
                        </div>
                    </section>

                    <div className="pt-8 border-t border-white/5 text-center italic text-[10px]">
                        Última atualização: Janeiro de 2026
                    </div>
                </div>
            </div>
        </div>
    );
};
