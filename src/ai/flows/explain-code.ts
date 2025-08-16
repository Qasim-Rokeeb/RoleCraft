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

You will receive a code snippet and your task is to provide a comprehensive analysis that includes:
- A clear explanation of what the code does, its purpose, and how it works, in plain English.
- Identification of any potential bugs, errors, or inefficiencies, along with concrete suggestions for fixing them.
- Actionable improvements to the code's structure, readability, and performance, including refactored code examples where applicable.

Provide your response as a single, clean block of text. Use plain text and newlines for structure. Do not use markdown, asterisks, or any other special characters for formatting.

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
