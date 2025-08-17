'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CodeXml, Megaphone, Mic, PenSquare, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Logo } from '@/components/icons/logo';

const featureCards = [
  {
    icon: <PenSquare className="w-8 h-8 text-primary" />,
    title: 'Expert Writer',
    description:
      'Generate blog posts, articles, and creative content on any topic.',
  },
  {
    icon: <Megaphone className="w-8 h-8 text-primary" />,
    title: 'Marketing Pro',
    description:
      'Craft compelling ad copy and marketing strategies for your products.',
  },
  {
    icon: <CodeXml className="w-8 h-8 text-primary" />,
    title: 'Code Assistant',
    description:
      'Explain, debug, and refactor code snippets in various languages.',
  },
  {
    icon: <Mic className="w-8 h-8 text-primary" />,
    title: 'Speech Coach',
    description: 'Prepare structured outlines for speeches and business pitches.',
  },
];

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Logo />
        <Button asChild>
          <Link href="/chat">Get Started</Link>
        </Button>
      </header>

      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 text-center container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tighter">
            Unlock Your Potential with Multi-Role AI
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            RoleCraft AI provides specialized assistants for marketing, programming,
            writing, and public speaking. Get expert help, instantly.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/chat">
              Start Chatting <ArrowRight className="ml-2" />
            </Link>
          </Button>
          <div className="mt-12 relative">
             <Image
                src="https://placehold.co/1200x600.png"
                alt="AI Chat Interface Screenshot"
                width={1200}
                height={600}
                className="rounded-xl shadow-2xl"
                data-ai-hint="dashboard computer"
              />
          </div>
        </section>

        <section className="py-12 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">
                An Expert for Every Task
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Switch between specialized AI roles to get the best results.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {featureCards.map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-4">{feature.icon}</div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} RoleCraft AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
