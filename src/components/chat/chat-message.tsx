'use client';

import { useState } from 'react';
import type { Message } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { BrainCircuit, User, Check, Clipboard } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const { role, content } = message;
  const isAssistant = role === 'assistant';
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn('group/message flex items-start gap-4', isAssistant ? '' : 'justify-end')}>
      {isAssistant && (
        <Avatar className="h-8 w-8">
          <AvatarFallback>
            <BrainCircuit />
          </AvatarFallback>
        </Avatar>
      )}
      <div
        className={cn(
          'relative max-w-xl rounded-lg p-4 shadow-sm whitespace-pre-wrap',
          isAssistant
            ? 'bg-secondary text-secondary-foreground'
            : 'bg-primary text-primary-foreground'
        )}
      >
        <div className="prose prose-sm dark:prose-invert text-inherit">
          {content}
        </div>
         {isAssistant && (
          <Button
            variant="ghost"
            size="icon"
            onClick={handleCopy}
            className="absolute -top-2 -right-2 h-7 w-7 text-foreground opacity-0 group-hover/message:opacity-100 transition-opacity"
          >
            {copied ? <Check size={16} /> : <Clipboard size={16} />}
            <span className="sr-only">Copy message</span>
          </Button>
        )}
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
