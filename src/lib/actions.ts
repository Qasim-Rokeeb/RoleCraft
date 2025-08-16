'use server';

import {
  generateMarketingCopy,
} from '@/ai/flows/generate-marketing-copy';
import { explainCode } from '@/ai/flows/explain-code';
import { generateBlogPost } from '@/ai/flows/generate-blog-post';
import { generateSpeechOutline } from '@/ai/flows/generate-speech-outline';
import type { Role } from './types';

export async function generateResponse(role: Role, message: string): Promise<string> {
  try {
    switch (role) {
      case 'marketer': {
        const result = await generateMarketingCopy({ productDescription: message });
        return result.adCopy;
      }
      case 'programmer': {
        const result = await explainCode({ code: message });
        return result.explanation;
      }
      case 'writer': {
        const result = await generateBlogPost({
          topic: message,
          targetAudience: 'a general audience',
        });
        return result.blogPost;
      }
      case 'speaker': {
        const result = await generateSpeechOutline({
          topic: message,
          keyPoints:
            'Please elaborate on the key aspects and structure them logically.',
        });
        return `### Speech Outline\n\n${result.outline}\n\n### Storytelling Suggestions\n\n${result.storytellingSuggestions}`;
      }
      default:
        throw new Error('Invalid role selected');
    }
  } catch (error) {
    console.error('Error generating AI response:', error);
    return 'Sorry, I encountered an error and could not generate a response. Please check the server logs and try again.';
  }
}
