'use client';

import type { Role } from '@/lib/types';
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarContent,
  SidebarFooter,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { Logo } from '@/components/icons/logo';
import { CodeXml, Megaphone, Mic, PenSquare, Github } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface SidebarNavProps {
  selectedRole: Role;
  setSelectedRole: (role: Role) => void;
}

const roles: { id: Role; name: string; icon: React.ReactNode }[] = [
  { id: 'writer', name: 'Writer', icon: <PenSquare /> },
  { id: 'marketer', name: 'Marketer', icon: <Megaphone /> },
  { id: 'programmer', name: 'Programmer', icon: <CodeXml /> },
  { id: 'speaker', name: 'Speaker', icon: <Mic /> },
];

export function SidebarNav({ selectedRole, setSelectedRole }: SidebarNavProps) {
  return (
    <>
      <SidebarHeader className="flex items-center justify-between">
        <Logo />
        <SidebarTrigger className="md:hidden" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {roles.map((role) => (
            <SidebarMenuItem key={role.id}>
              <SidebarMenuButton
                onClick={() => setSelectedRole(role.id)}
                isActive={selectedRole === role.id}
                tooltip={role.name}
              >
                {role.icon}
                <span>{role.name}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <Separator className="my-2" />
        <a href="https://github.com/firebase/genkit" target="_blank" rel="noopener noreferrer">
          <SidebarMenuButton variant="ghost">
            <Github />
            <span>View on GitHub</span>
          </SidebarMenuButton>
        </a>
      </SidebarFooter>
    </>
  );
}

    