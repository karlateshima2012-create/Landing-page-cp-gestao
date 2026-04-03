
// CP Bot Intelligence Service - v1.0.1
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || (typeof process !== 'undefined' ? process.env.GEMINI_API_KEY : "") || "";
const genAI = new GoogleGenerativeAI(apiKey);

const SYSTEM_INSTRUCTIONS = `
Você é o CP Bot, um assistente virtual especialista da CP Gestão (Creative Print). 
Seu objetivo é ajudar os visitantes da landing page a entender os benefícios dos nossos planos de gestão e fidelidade. 

Nossos planos atuais:
1. Plano PRO: ¥2.480/mês. Inclui CRM (Gestão 360º), Sistema de Fidelidade, Gamificação, Aprovação Manual de pontos, Relatórios e capacidade até 4.000 contatos.
2. Plano AUTOMÁTICO: ¥3.980/mês. É o nosso plano MAIS VENDIDO e de MÁXIMA PERFORMANCE. Inclui tudo do PRO, mas com Aprovação de pontuação 100% AUTOMÁTICA e capacidade até 6.000 contatos.

Diferencial Exclusivo:
- Todos os planos incluem um Totem físico com QR Code 3D para o balcão da loja.

Instruções de Resposta:
- Seja sempre amigável, consultivo e profissional.
- Use emojis com moderação para manter o tom tecnológico.
- Responda de forma direta e curta (máximo 2 a 3 frases).
- Use letras minúsculas e maiúsculas normalmente (não use caixa alta).
- Se o usuário quiser contratar, saber mais detalhes técnicos ou tiver dúvidas sobre instalação, encaminhe para o WhatsApp oficial: https://wa.me/8109011886491.
- Se não souber a resposta, peça para falar com um consultor humano pelo WhatsApp.
`;

export const getGeminiResponse = async (userMessage: string, history: { role: string; text: string }[]) => {
  if (!apiKey || apiKey === "PLACEHOLDER_API_KEY") {
    return "Olá! Estou configurando meu cérebro digital. Por enquanto, posso te ajudar pelo nosso WhatsApp oficial!";
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const chat = model.startChat({
      history: [
        { role: "user", parts: [{ text: SYSTEM_INSTRUCTIONS }] },
        { role: "model", parts: [{ text: "Entendido. Sou o CP Bot e estou pronto para ajudar como especialista em CP Gestão." }] },
        ...history.map(msg => ({
          role: msg.role === "bot" ? "model" : "user",
          parts: [{ text: msg.text }]
        }))
      ],
    });

    const result = await chat.sendMessage(userMessage);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ops! Tive um pequeno curto-circuito. Pode me perguntar novamente ou chamar no WhatsApp?";
  }
};
