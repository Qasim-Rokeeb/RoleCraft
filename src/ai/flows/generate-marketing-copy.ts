'use server';

/**
 * @fileOverview Generates marketing copy based on a product description.
 *
 * - generateMarketingCopy - A function that generates marketing copy.
 * - GenerateMarketingCopyInput - The input type for the generateMarketingCopy function.
 * - GenerateMarketingCopyOutput - The return type for the generateMarketingCopy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMarketingCopyInputSchema = z.object({
  productDescription: z
    .string()
    .describe('The description of the product for which to generate marketing copy.'),
  targetAudience: z
    .string()
    .optional()
    .describe('Optional: The target audience for the marketing copy.'),
  tone: z
    .string()
    .optional()
    .describe('Optional: The desired tone of the marketing copy (e.g., persuasive, informative, humorous).'),
});

export type GenerateMarketingCopyInput = z.infer<typeof GenerateMarketingCopyInputSchema>;

const GenerateMarketingCopyOutputSchema = z.object({
  adCopy: z.string().describe('The generated ad copy.'),
});

export type GenerateMarketingCopyOutput = z.infer<typeof GenerateMarketingCopyOutputSchema>;

export async function generateMarketingCopy(input: GenerateMarketingCopyInput): Promise<GenerateMarketingCopyOutput> {
  return generateMarketingCopyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMarketingCopyPrompt',
  input: {schema: GenerateMarketingCopyInputSchema},
  output: {schema: GenerateMarketingCopyOutputSchema},
  prompt: `You are an expert marketing strategist and copywriter. Based on the product description, generate a comprehensive marketing plan.

Your plan should include:
1.  **Catchy Headline**: A powerful headline to grab attention.
2.  **Ad Copy**: Persuasive and compelling ad copy (2-3 variations).
3.  **Social Media Posts**: Short posts for platforms like Twitter, Facebook, and LinkedIn.
4.  **Target Audience Insights**: A brief analysis of the target audience and how to reach them.
5.  **Key Messaging**: The core message and value proposition.

Product Description: {{{productDescription}}}

{{#if targetAudience}}
Target Audience: {{{targetAudience}}}
{{/if}}

{{#if tone}}
Tone: {{{tone}}}
{{/if}}
`,
});

const generateMarketingCopyFlow = ai.defineFlow(
  {
    name: 'generateMarketingCopyFlow',
    inputSchema: GenerateMarketingCopyInputSchema,
    outputSchema: GenerateMarketingCopyOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
