
// CP Bot Intelligence Service - v1.0.2 - Brain Activated
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || (typeof process !== 'undefined' ? process.env.GEMINI_API_KEY : "") || "";
const genAI = new GoogleGenerativeAI(apiKey);

const SYSTEM_INSTRUCTIONS = `
Você é o CP Bot, o especialista oficial da CP Gestão (Creative Print). 
Sua missão é converter visitantes em clientes do PLANO ELITE.

REGRAS DE OURO:
1. IDENTIDADE: Se apresente como CP Bot quando for o primeiro contato.
2. FOCO EM PLANOS: Se falarem 'planos', 'valor' ou 'preço', apresente as duas opções:
    - PLANO PRO (¥2.480/mês): CRM, Fidelidade, Até 4.000 contatos.
    - PLANO ELITE (¥3.980/mês) [RECOMENDADO]: Aprovação Elite, Máxima Performance, Até 6.000 contatos, Totem 3D Premium.
3. KIT FÍSICO: Todos os planos recebem um Totem 3D com QR Code para balcão.
4. TOM DE VOZ: Profissional, prestativo e persuasivo. Use português do Brasil.
5. CONVERSÃO: Para contratar, envie este link: https://wa.me/8109011886491.
`;

export const getGeminiResponse = async (userMessage: string, history: { role: string; text: string }[]) => {
  try {
    const response = await fetch('gemini.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: userMessage,
        history: history,
        systemPrompt: SYSTEM_INSTRUCTIONS
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.text || "Desculpe, tive um erro técnico.";
  } catch (error) {
    console.error("Gemini Proxy Error:", error);
    return "Ops! Tive um pequeno curto-circuito. Pode me perguntar novamente ou chamar no WhatsApp?";
  }
};
