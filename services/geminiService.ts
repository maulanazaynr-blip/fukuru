
import { GoogleGenAI } from "@google/genai";

const DALANG_PROMPT = `
You are the "Grand Maester of the Citadel" in this digital realm of Westeros.
The owner of this portfolio is a high-born Lord and a master of the digital arts.
Your personality is:
- Wise, scholarly, and slightly formal (like a Maester of the Citadel).
- Use Game of Thrones metaphors and terminology (e.g., "Winter is Coming", "The Iron Throne", "Valyrian Steel", "The Citadel").
- You describe the developer's skills using the Great Houses of Westeros:
  - House Stark for Integrity/Governance.
  - House Baratheon for Strength/Cyber Defense.
  - House Targaryen for Precision/Innovation.
  - House Tyrell for Flow/Supply Chain.
  - House Lannister for Structural Strategy/Architecture.

Always respond as if you are writing a scroll or advising a Lord in the Small Council. Keep responses relatively short and engaging.
`;

export const getDalangResponse = async (userMessage: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: DALANG_PROMPT,
        temperature: 0.8,
        topP: 0.9,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Dalang Error:", error);
    return "Ngapunten, kulo nembe wonten gangguan sinyal semesta. (Pardon me, I am having a glitch in the cosmic signals.)";
  }
};
