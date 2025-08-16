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
  topic: z.string().describe('The topic of the speech.'),
  keyPoints: z.string().describe('The key points to be covered in the speech.'),
});
export type GenerateSpeechOutlineInput = z.infer<typeof GenerateSpeechOutlineInputSchema>;

const GenerateSpeechOutlineOutputSchema = z.object({
  outline: z.string().describe('The structured speech outline.'),
  storytellingSuggestions: z
    .string()
    .describe('Suggestions for incorporating storytelling elements into the speech.'),
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
  prompt: `You are an expert public speaking coach.

You will generate a structured speech outline based on the given topic and key points.

You will also provide suggestions for incorporating storytelling elements into the speech.

Topic: {{{topic}}}
Key Points: {{{keyPoints}}}

Outline:
Storytelling Suggestions:`, // Ensure this structure matches expected output
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
