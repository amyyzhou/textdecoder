import OpenAI from 'openai';

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing OPENAI_API_KEY environment variable');
}

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function analyzeText(message: string): Promise<string> {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are an expert at analyzing text messages and social cues. Your task is to interpret the underlying meaning, intent, and level of interest in text messages, particularly in a dating or romantic context. Be honest but tactful in your analysis."
      },
      {
        role: "user",
        content: `Please analyze this text message and tell me what it likely means in terms of the sender's interest level and intentions: "${message}"`
      }
    ],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0].message.content || "Sorry, I couldn't analyze this message.";
} 