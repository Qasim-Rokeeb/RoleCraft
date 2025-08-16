'use client';

import type { Role } from '@/lib/types';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CodeXml, Megaphone, Mic, PenSquare } from 'lucide-react';

interface EmptyChatProps {
  role: Role;
}

const roleDetails = {
  writer: {
    icon: <PenSquare className="w-16 h-16 text-primary" />,
    title: 'Writer AI',
    description: 'Ready to craft a blog post, essay, or creative story? Tell me the topic to get started.',
    example: 'e.g., "The future of renewable energy"',
  },
  marketer: {
    icon: <Megaphone className="w-16 h-16 text-primary" />,
    title: 'Marketer AI',
    description: 'Need compelling marketing copy? Describe your product or service, and I\'ll generate ad copy.',
    example: 'e.g., "A new productivity app that organizes tasks with AI"',
  },
  programmer: {
    icon: <CodeXml className="w-16 h-16 text-primary" />,
    title: 'Programmer AI',
    description: 'Paste a code snippet, and I can explain, debug, or refactor it for you.',
    example: 'e.g., "function example() { ... }"',
  },
  speaker: {
    icon: <Mic className="w-16 h-16 text-primary" />,
    title: 'Speaker AI',
    description: 'Let\'s build a speech or business pitch. What is the topic you want to cover?',
    example: 'e.g., "Seed funding pitch for an AI-powered startup"',
  },
};

export function EmptyChat({ role }: EmptyChatProps) {
  const details = roleDetails[role];

  return (
    <div className="flex h-full items-center justify-center">
      <Card className="w-full max-w-lg text-center shadow-lg">
        <CardHeader>
          <div className="flex justify-center mb-4">{details.icon}</div>
          <CardTitle className="font-headline text-3xl">{details.title}</CardTitle>
          <CardDescription className="text-lg">
            {details.description}
          </CardDescription>
          <p className="text-sm text-muted-foreground mt-2">
            {details.example}
          </p>
        </CardHeader>
      </Card>
    </div>
  );
}
