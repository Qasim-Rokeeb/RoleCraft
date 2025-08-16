'use client';

import type { Message } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BrainCircuit, User } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const { role, content } = message;
  const isAssistant = role === 'assistant';

  return (
    <div className={cn('flex items-start gap-4', isAssistant ? '' : 'justify-end')}>
      {isAssistant && (
        <Avatar className="h-8 w-8">
          <AvatarFallback>
            <BrainCircuit />
          </AvatarFallback>
        </Avatar>
      )}
      <div
        className={cn(
          'max-w-xl rounded-lg p-4 shadow-sm whitespace-pre-wrap',
          isAssistant
            ? 'bg-secondary text-secondary-foreground'
            : 'bg-primary text-primary-foreground'
        )}
      >
        <div className="prose prose-sm dark:prose-invert text-inherit">
          {content}
        </div>
      </div>
      {!isAssistant && (
        <Avatar className="h-8 w-8">
          <AvatarFallback>
            <User />
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
