import { GoogleGenAI, Type, Schema } from "@google/genai";
import { CalculatorResponse } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const modelName = 'gemini-3-flash-preview';

export const consultStoneExpert = async (query: string): Promise<CalculatorResponse> => {
  if (!query) throw new Error("A pergunta não pode estar vazia.");

  const systemInstruction = `
    Você é um especialista sênior em pedras decorativas, geologia e construção civil, trabalhando para a empresa 'São Paulo Pedras'.
    Seu objetivo é ajudar clientes a escolherem a pedra certa (Miracema, Madeira, Paralelepípedo, Seixo, etc.) e estimar quantidades.
    Responda em Português do Brasil. Seja técnico mas acessível.
    Se o cliente perguntar sobre 'Muro de Arrimo', recomende pedras brutas e mencione a necessidade de drenagem.
    Se perguntar sobre calçada, sugira Miracema ou Paralelepípedo.
    Sempre mencione que a 'São Paulo Pedras' executa a obra.
  `;

  const responseSchema: Schema = {
    type: Type.OBJECT,
    properties: {
      advice: {
        type: Type.STRING,
        description: "Conselho técnico detalhado sobre qual pedra usar e por que, incluindo dicas de instalação.",
      },
      estimatedMaterial: {
        type: Type.STRING,
        description: "Uma estimativa aproximada de material se o usuário forneceu medidas (ex: 'Aprox. 20m² de pedra + 1m³ de areia'). Se não houver medidas, deixe em branco ou dê uma dica geral de cálculo.",
      }
    },
    required: ["advice"]
  };

  try {
    const response = await ai.models.generateContent({
      model: modelName,
      contents: query,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema,
        thinkingConfig: { thinkingBudget: 0 } // Flash model usually doesn't need high thinking budget for this
      },
    });

    const text = response.text;
    if (!text) throw new Error("Sem resposta da IA");
    
    return JSON.parse(text) as CalculatorResponse;

  } catch (error) {
    console.error("Erro ao consultar Gemini:", error);
    return {
      advice: "Desculpe, nossos especialistas estão ocupados no momento. Por favor, entre em contato via WhatsApp para um orçamento imediato.",
      estimatedMaterial: ""
    };
  }
};