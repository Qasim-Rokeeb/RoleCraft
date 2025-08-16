'use client';

import type { Message } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BrainCircuit, User } from 'lucide-react';
import { CodeBlock } from './code-block';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const { role, content } = message;
  const isAssistant = role === 'assistant';

  const parts = content.split(/(```[\s\S]*?```)/g).filter(Boolean);

  const renderContent = (text: string) => {
    return text.split('\n').map((line, i) => (
      <span key={i}>
        {line}
        <br />
      </span>
    ));
  };

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
          'max-w-xl rounded-lg p-4 shadow-sm',
          isAssistant
            ? 'bg-secondary text-secondary-foreground'
            : 'bg-primary text-primary-foreground'
        )}
      >
        <div className="prose prose-sm dark:prose-invert text-inherit">
          {parts.map((part, index) => {
            if (part.startsWith('```') && part.endsWith('```')) {
              const codeContent = part.slice(3, -3);
              const langMatch = codeContent.match(/^[a-z]+\n/);
              const language = langMatch ? langMatch[0].trim() : '';
              const code = langMatch ? codeContent.substring(langMatch[0].length) : codeContent;
              return <CodeBlock key={index} language={language} code={code} />;
            }
            return <div key={index}>{renderContent(part)}</div>;
          })}
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
