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
  prompt: `You are an expert public speaking coach and speechwriter.

You will generate a detailed, structured speech outline based on the given topic and key points. The outline should be easy to follow and cover all essential elements of a great speech.

You will also provide creative and practical suggestions for incorporating storytelling elements to make the speech more engaging and memorable.

Topic: {{{topic}}}
Key Points: {{{keyPoints}}}

### Speech Outline:
- **Introduction**:
  - Opener: (A compelling hook to grab the audience's attention)
  - Thesis: (Clearly state the main purpose of the speech)
  - Roadmap: (Briefly outline the main points you will cover)
- **Body**:
  - Point 1: (Elaborate on the first key point with supporting details and examples)
  - Point 2: (Elaborate on the second key point with supporting details and examples)
  - Point 3: (Elaborate on the third key point with supporting details and examples)
- **Conclusion**:
  - Summary: (Recap the main points)
  - Call to Action: (What do you want the audience to do or think about?)
  - Closer: (A memorable closing statement)

### Storytelling Suggestions:
(Provide specific ideas for personal anecdotes, metaphors, or narratives that can be woven into the speech to illustrate key points and connect with the audience emotionally.)`,
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
