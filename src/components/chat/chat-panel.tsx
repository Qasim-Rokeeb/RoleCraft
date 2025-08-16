'use client';

import type { Role, Message } from '@/lib/types';
import { EmptyChat } from './empty-chat';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { SendHorizonal, LoaderCircle } from 'lucide-react';
import { ChatMessage } from './chat-message';
import { useEffect, useRef } from 'react';

interface ChatPanelProps {
  role: Role;
  messages: Message[];
  isLoading: boolean;
  onSendMessage: (message: string) => void;
}

const formSchema = z.object({
  message: z.string().min(1, 'Message cannot be empty.'),
});
type FormValues = z.infer<typeof formSchema>;

export function ChatPanel({ role, messages, isLoading, onSendMessage }: ChatPanelProps) {
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    onSendMessage(data.message);
    form.reset();
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);


  return (
    <div className="flex flex-col h-dvh bg-background">
      <div className="flex-1 overflow-y-auto">
        <ScrollArea className="h-full" ref={scrollAreaRef}>
          <div className="p-4 md:p-8">
            {messages.length === 0 ? (
              <EmptyChat role={role} />
            ) : (
              <div className="space-y-6">
                {messages.map((message) => (
                  <ChatMessage key={message.id} message={message} />
                ))}
              </div>
            )}
          </div>
        </ScrollArea>
      </div>

      <div className="p-4 bg-background border-t">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex items-center gap-4"
          >
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Textarea
                      placeholder={`Message ${role.charAt(0).toUpperCase() + role.slice(1)} AI...`}
                      className="resize-none"
                      {...field}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          form.handleSubmit(onSubmit)();
                        }
                      }}
                      disabled={isLoading}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" size="icon" disabled={isLoading}>
              {isLoading ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                <SendHorizonal />
              )}
              <span className="sr-only">Send message</span>
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
