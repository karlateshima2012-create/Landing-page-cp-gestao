
// CP Bot Intelligence Service - v1.0.1
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || (typeof process !== 'undefined' ? process.env.GEMINI_API_KEY : "") || "";
const genAI = new GoogleGenerativeAI(apiKey);

const SYSTEM_INSTRUCTIONS = `
Você é o CP Bot, um assistente virtual especialista da CP Gestão (Creative Print). 
Seu objetivo principal é responder tudo com clareza e inteligência sobre o nosso sistema.

Informações Cruciais (O que você PRECISA saber):
- O QUE É O CP GESTÃO: Um sistema completo de CRM, Gestão de Clientes e Programa de Fidelidade (Gamificação).
- VALORES E PLANOS: 
    * Plano PRO: ¥2.480/mês (inclui CRM, Fidelidade, Ponto Manual, até 4.000 contatos).
    * Plano AUTOMÁTICO: ¥3.980/mês (Aprovação Automática de pontos, Máxima Performance, até 6.000 contatos).
- KIT FÍSICO: Todos os planos ganham um Totem 3D com QR Code para o balcão.

Instruções de Resposta:
- Se perguntarem 'oi', seja amigável e se apresente.
- Se perguntarem 'o que é isso', explique o sistema de fidelidade e gestão.
- Se perguntarem 'valor' ou 'preço', liste os dois planos.
- Responda sempre em português, de forma curta e amigável (2-3 frases).
- Use letras minúsculas e maiúsculas (não use caixa alta).
- Para contratar ou suporte técnico, envie o link do WhatsApp: https://wa.me/8109011886491.
`;

export const getGeminiResponse = async (userMessage: string, history: { role: string; text: string }[]) => {
  if (!apiKey || apiKey === "") {
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
