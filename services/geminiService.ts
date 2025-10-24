
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const convertToMarkdown = async (text: string): Promise<string> => {
  if (!process.env.API_KEY) {
    throw new Error("API key is not configured.");
  }
  
  const prompt = `
    Your task is to act as a highly accurate text-to-markdown converter.
    Convert the following text into well-formatted Markdown.

    - Identify headings, subheadings, lists (ordered and unordered), blockquotes, and code blocks.
    - Preserve bold and italic emphasis.
    - Ensure links and images are correctly formatted if they appear in the text.
    - Maintain the original structure and intent of the content.
    - CRITICAL: Do not add any extra commentary, explanations, or introductory/concluding remarks. Your output must be ONLY the raw Markdown text.

    Here is the text to convert:
    ---
    ${text}
    ---
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Could not connect to the conversion service.");
  }
};
