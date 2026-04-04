
export const WHATSAPP_NUMBER = "8109011886491";
export const WHATSAPP_BASE_TEXT = "Olá! Vim do chatbot da landing page e gostaria de saber mais sobre o CP Gestão.";

interface BotResponse {
    keywords: string[];
    response: string;
}

interface BotResponses {
    [key: string]: BotResponse | string;
}

export const botResponses: BotResponses = {
    saudacao: {
        keywords: ["oi", "olá", "bom dia", "boa tarde", "boa noite", "eae", "hello"],
        response: "Olá! 👋 Eu sou o assistente virtual da CP Gestão. Posso te ajudar com informações sobre nossos planos, benefícios e como organizar sua gestão hoje. Como posso te ajudar?"
    },

    oquee: {
        keywords: ["o que é", "o que faz", "cp gestão", "o que é cp", "sobre o cp"],
        response: "A CP Gestão é uma plataforma que une CRM + Programa de Fidelidade. Ela organiza seus clientes e faz você vender mais vezes para as mesmas pessoas através de recorrência estratégica."
    },

    beneficios: {
        keywords: ["benefício", "vantagem", "o que ganha", "para que serve", "melhorias"],
        response: "Benefícios Elite:<br>• Gestão completa e automática<br>• Programa de fidelidade inteligente<br>• Relatórios de ticket médio em tempo real<br>• Aumento imediato na frequência de retorno dos clientes."
    },

    planos: {
        keywords: ["plano", "preço", "quanto custa", "valor", "pro", "elite", "custo"],
        response: "Temos dois planos (sem taxa de ativação):<br><br><strong>Plano Elite (Recomendado)</strong> — ¥3.980/mês<br><strong>Plano Pro</strong> — ¥2.480/mês<br><br>Quer que eu te explique a diferença ou prefere falar direto com o time no WhatsApp?"
    },

    comofunciona: {
        keywords: ["como funciona", "como usar", "passo a passo", "funcionamento", "cadastro"],
        response: "Simples: O cliente escaneia o QR Code no seu balcão, faz um cadastro rápido e já começa a acumular pontos. Você controla tudo pelo sistema e foca no que importa: vender mais!"
    },

    kit: {
        keywords: ["kit", "totem", "qr code", "ativação", "3d", "inclui"],
        response: "Sim! Na contratação você recebe o <strong>Kit Estratégico</strong>: QR Code digital imediato + Totem físico 3D Premium para o balcão do seu caixa."
    },

    contratar: {
        keywords: ["quero contratar", "quero assinar", "quero comprar", "quero o plano", "quero ativar", "contratar", "assinar", "comprar", "demo", "fechar"],
        response: "Perfeito! 🎉 Vou te direcionar agora para o WhatsApp do nosso time comercial. Eles vão te apresentar os detalhes e ajudar na sua ativação imediata!"
    },

    padrao: "Entendi! Para te dar um atendimento personalizado e indicar o melhor plano para o seu negócio, clique no botão abaixo para conversarmos no WhatsApp!"
};

export function getBotResponse(message: string): string {
    const lowerMsg = message.toLowerCase().trim();

    for (const key in botResponses) {
        if (key === "padrao") continue;
        const entry = botResponses[key] as BotResponse;
        if (entry.keywords.some(keyword => lowerMsg.includes(keyword))) {
            return entry.response;
        }
    }

    return botResponses.padrao as string;
}
