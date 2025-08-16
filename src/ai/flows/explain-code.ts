'use server';
/**
 * @fileOverview Explains code in plain English.
 *
 * - explainCode - A function that handles the code explanation process.
 * - ExplainCodeInput - The input type for the explainCode function.
 * - ExplainCodeOutput - The return type for the explainCode function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExplainCodeInputSchema = z.object({
  code: z.string().describe('The code to explain.'),
  language: z.string().optional().describe('The programming language of the code.'),
});
export type ExplainCodeInput = z.infer<typeof ExplainCodeInputSchema>;

const ExplainCodeOutputSchema = z.object({
  explanation: z.string().describe('The explanation of the code.'),
});
export type ExplainCodeOutput = z.infer<typeof ExplainCodeOutputSchema>;

export async function explainCode(input: ExplainCodeInput): Promise<ExplainCodeOutput> {
  return explainCodeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'explainCodePrompt',
  input: {schema: ExplainCodeInputSchema},
  output: {schema: ExplainCodeOutputSchema},
  prompt: `You are an expert programmer with years of experience in software development. You can explain, debug, and refactor code.

You will receive a code snippet and your task is to:
1.  **Explain**: Clearly explain what the code does, its purpose, and how it works.
2.  **Debug**: Identify any potential bugs, errors, or inefficiencies in the code. Provide suggestions for fixing them.
3.  **Refactor**: Suggest improvements to the code structure, readability, and performance.

Provide your response in a clear, structured format using markdown.

Code:
\'\'\'{{language}}
{{{code}}}
\'\'\'

{{#if language}}The code is written in {{language}}.{{/if}}`,
});

const explainCodeFlow = ai.defineFlow(
  {
    name: 'explainCodeFlow',
    inputSchema: ExplainCodeInputSchema,
    outputSchema: ExplainCodeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
