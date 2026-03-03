
import { GoogleGenAI } from "@google/genai";

// Fix: Always use named parameter { apiKey: process.env.API_KEY } for initialization
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askAIAssistant = async (userPrompt: string, context?: string) => {
  try {
    const systemInstruction = `Vous êtes l'assistant IA de Adja Fatou Sagna, une étudiante en 4e année de Data Science. 
    Répondez de manière professionnelle, chaleureuse et intelligente. 
    Adja est passionnée par le Machine Learning, l'analyse de données et l'éthique en IA. 
    Votre rôle est de répondre aux questions sur son parcours, ses compétences techniques (Python, R, SQL, TensorFlow) et ses projets.
    ${context ? `\n\nVoici des informations supplémentaires provenant d'un document fourni par l'utilisateur :\n${context}` : ''}`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction
      }
    });
    // Fix: Access .text property directly instead of calling it as a function
    return response.text || "Désolé, je ne peux pas répondre pour le moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Erreur lors de la communication avec l'IA.";
  }
};
