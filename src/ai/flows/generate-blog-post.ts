'use server';

/**
 * @fileOverview Generates a blog post based on a topic and target audience.
 *
 * - generateBlogPost - A function that generates a blog post.
 * - GenerateBlogPostInput - The input type for the generateBlogPost function.
 * - GenerateBlogPostOutput - The return type for the generateBlogPost function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBlogPostInputSchema = z.object({
  topic: z.string().describe('The topic of the blog post.'),
  targetAudience: z.string().describe('The target audience for the blog post.'),
});

export type GenerateBlogPostInput = z.infer<typeof GenerateBlogPostInputSchema>;

const GenerateBlogPostOutputSchema = z.object({
  blogPost: z.string().describe('The generated blog post.'),
});

export type GenerateBlogPostOutput = z.infer<typeof GenerateBlogPostOutputSchema>;

export async function generateBlogPost(input: GenerateBlogPostInput): Promise<GenerateBlogPostOutput> {
  return generateBlogPostFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBlogPostPrompt',
  input: {schema: GenerateBlogPostInputSchema},
  output: {schema: GenerateBlogPostOutputSchema},
  prompt: `You are an expert blog writer, skilled in creating engaging and well-structured content. Your task is to generate a complete, well-written, and ready-to-publish blog post based on the given topic and target audience.

If the user's request is too broad, ask for more specific details to ensure the content is tailored to their needs. Incorporate relevant statistical figures and data to add credibility and depth to the post.

The blog post must include:
- A catchy and relevant title.
- A brief introduction that hooks the reader and clearly states the post's purpose.
- A main body with clear, logical sections. Use plain text and newlines for formatting. Do not use markdown, asterisks, or any other special characters for formatting.
- A concluding paragraph that summarizes the key points and offers a final, impactful thought.

Adopt a tone that is appropriate for the target audience. The final output should be a single block of text representing the entire blog post.

Topic: {{{topic}}}
Target Audience: {{{targetAudience}}}

Blog Post:`,
});

const generateBlogPostFlow = ai.defineFlow(
  {
    name: 'generateBlogPostFlow',
    inputSchema: GenerateBlogPostInputSchema,
    outputSchema: GenerateBlogPostOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
