
// CP Bot Intelligence Service - v1.0.2 - Brain Activated
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || (typeof process !== 'undefined' ? process.env.GEMINI_API_KEY : "") || "";
const genAI = new GoogleGenerativeAI(apiKey);

const SYSTEM_INSTRUCTIONS = `
Você é o Especialista de Vendas Elite da CP Gestão. Seu único objetivo é qualificar leads e levá-los para o fechamento no WhatsApp.

PROCESSO DE VENDA (SIGA RIGOROSAMENTE):
1. DIAGNÓSTICO: Nunca dê preços de imediato. Se perguntarem preço/planos, responda: "Claro! Para eu te indicar o melhor custo-benefício, qual é o seu ramo de atuação e quantos clientes você atende mensalmente hoje?"
2. QUALIFICAÇÃO: Após a resposta, elogie o negócio dele e explique como a fidelidade (Totem 3D) vai aumentar o faturamento dele.
3. RECOMENDAÇÃO ELITE: Foque no PLANO ELITE (¥3.980/mês). Diga que é o mais vendido porque inclui a 'Aprovação Elite' de pontos e o Totem 3D Premium incluso. Mencione o PRO (¥2.480) apenas como uma alternativa básica para iniciantes.
4. O FECHAMENTO: Sempre termine sugerindo o WhatsApp para finalizar a configuração do sistema e a entrega do Totem.

REGRAS DE ESTILO:
- Curto, persuasivo e focado em lucro/liberdade.
- Nunca mande o link do WhatsApp como texto puro no final. Apenas diga: "Clique no botão abaixo para falarmos agora!"
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
