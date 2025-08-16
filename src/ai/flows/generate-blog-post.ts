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
  prompt: `You are an expert blog writer, skilled in creating engaging and well-structured content. Your task is to generate a blog post based on the given topic and target audience.

The blog post should have:
1.  A catchy and relevant title.
2.  A brief introduction that hooks the reader.
3.  A main body with clear sections, using markdown for formatting (e.g., headings, lists, bold text).
4.  A concluding paragraph that summarizes the key points and offers a final thought.

Adopt a tone that is appropriate for the target audience.

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
