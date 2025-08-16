'use server';

/**
 * @fileOverview An AI agent to generate a structured speech outline.
 *
 * - generateSpeechOutline - A function that handles the speech outline generation process.
 * - GenerateSpeechOutlineInput - The input type for the generateSpeechOutline function.
 * - GenerateSpeechOutlineOutput - The return type for the generateSpeechOutline function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSpeechOutlineInputSchema = z.object({
  topic: z.string().describe('The topic of the speech or business pitch.'),
  keyPoints: z.string().describe('The key points to be covered in the speech or pitch.'),
});
export type GenerateSpeechOutlineInput = z.infer<typeof GenerateSpeechOutlineInputSchema>;

const GenerateSpeechOutlineOutputSchema = z.object({
  outline: z.string().describe('The structured speech or pitch outline.'),
  storytellingSuggestions: z
    .string()
    .describe('Suggestions for incorporating storytelling elements into the speech or pitch.'),
});
export type GenerateSpeechOutlineOutput = z.infer<typeof GenerateSpeechOutlineOutputSchema>;

export async function generateSpeechOutline(
  input: GenerateSpeechOutlineInput
): Promise<GenerateSpeechOutlineOutput> {
  return generateSpeechOutlineFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSpeechOutlinePrompt',
  input: {schema: GenerateSpeechOutlineInputSchema},
  output: {schema: GenerateSpeechOutlineOutputSchema},
  prompt: `You are an expert public speaking coach and pitch strategist.

Your task is to generate a detailed, structured speech or business pitch. Before you begin, if the user's request is unclear or lacks detail, you MUST ask for additional information about the occasion, audience, time constraints, and desired outcomes to craft a more impactful message. Incorporate relevant data and statistics to strengthen the arguments.

The content should be complete and ready to be delivered, covering all essential elements.

If it's a business pitch, include:
- A compelling hook and a clear problem statement.
- A concise solution and value proposition.
- A brief market analysis and business model overview.
- A strong call to action, such as a request for funding or a partnership.

If it's a speech, include:
- A powerful introduction with a clear thesis.
- A well-structured body with logical points and supporting examples.
- A memorable conclusion that summarizes the message and inspires the audience.

You must also provide creative and practical suggestions for incorporating storytelling elements to make the delivery more engaging and memorable.

The final output must be a single block of clean text. Use only plain text and newlines for structure. Do not use markdown, asterisks, or any other special formatting characters. The output should contain the full speech/pitch text first, followed by the storytelling suggestions.

Topic: {{{topic}}}
Key Points: {{{keyPoints}}}

Speech/Pitch Outline:

Storytelling Suggestions:`,
});

const generateSpeechOutlineFlow = ai.defineFlow(
  {
    name: 'generateSpeechOutlineFlow',
    inputSchema: GenerateSpeechOutlineInputSchema,
    outputSchema: GenerateSpeechOutlineOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
