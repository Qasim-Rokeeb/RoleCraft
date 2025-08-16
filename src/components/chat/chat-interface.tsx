'use client';

import { useState } from 'react';
import type { Role, Message } from '@/lib/types';
import { generateResponse } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { Sidebar, SidebarProvider, SidebarInset, SidebarRail, SidebarTrigger } from '@/components/ui/sidebar';
import { SidebarNav } from './sidebar-nav';
import { ChatPanel } from './chat-panel';

export function ChatInterface() {
  const [role, setRole] = useState<Role>('writer');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSendMessage = async (content: string) => {
    if (isLoading) return;

    const newUserMessage: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content,
    };
    setMessages((prev) => [...prev, newUserMessage]);
    setIsLoading(true);

    try {
      const assistantResponse = await generateResponse(role, content);
      const newAssistantMessage: Message = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: assistantResponse,
      };
      setMessages((prev) => [...prev, newAssistantMessage]);
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to get a response from the AI.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRoleChange = (newRole: Role) => {
    setRole(newRole);
    setMessages([]); // Clear messages when role changes
  };

  return (
    <SidebarProvider>
      <div className="relative flex min-h-dvh bg-background">
        <Sidebar>
          <SidebarNav selectedRole={role} setSelectedRole={handleRoleChange} />
        </Sidebar>
        <SidebarRail />
        <SidebarInset>
          <ChatPanel
            role={role}
            messages={messages}
            isLoading={isLoading}
            onSendMessage={handleSendMessage}
          />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

    