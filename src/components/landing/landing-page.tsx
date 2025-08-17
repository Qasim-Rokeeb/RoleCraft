'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import {
  CodeXml,
  Megaphone,
  Mic,
  PenSquare,
  ArrowRight,
  BotMessageSquare,
  Sparkles,
  MousePointerClick,
} from 'lucide-react';
import Image from 'next/image';
import { Logo } from '@/components/icons/logo';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useRef } from 'react';

/* ------------------------------------------------------------------ */
/* Data                                                               */
/* ------------------------------------------------------------------ */
const featureCards = [
  {
    icon: <PenSquare className="w-8 h-8 text-primary" />,
    title: 'Expert Writer',
    description:
      'Generate high-quality blog posts, articles, and creative content. Just provide a topic and get a well-structured, ready-to-publish draft.',
  },
  {
    icon: <Megaphone className="w-8 h-8 text-primary" />,
    title: 'Marketing Pro',
    description:
      'Craft compelling ad copy, social-media posts, and complete marketing strategies that resonate with your audience.',
  },
  {
    icon: <CodeXml className="w-8 h-8 text-primary" />,
    title: 'Code Assistant',
    description:
      'Explain, debug, and refactor any snippet. Get instant, senior-level feedback with actionable improvements.',
  },
  {
    icon: <Mic className="w-8 h-8 text-primary" />,
    title: 'Speech Coach',
    description:
      'Prepare structured, persuasive outlines for speeches and business pitches. Own the stage with clarity.',
  },
];

const howItWorksSteps = [
  {
    icon: <MousePointerClick className="w-8 h-8 text-primary" />,
    title: '1. Select a Role',
    description:
      'Choose the specialized AI assistant that fits your task—writer, marketer, coder or speaker.',
  },
  {
    icon: <BotMessageSquare className="w-8 h-8 text-primary" />,
    title: '2. Describe Your Task',
    description:
      'Tell the AI what you need. The more detail you give, the better the result.',
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: '3. Get Expert Results',
    description:
      'Receive a polished, ready-to-use response in seconds—no prompt engineering required.',
  },
];

const testimonials = [
  {
    name: 'Sarah L.',
    role: 'Content Marketer',
    avatar: 'https://i.pravatar.cc/100?u=sarah',
    text: "RoleCraft AI has become my go-to for breaking writer's block. I can generate outlines and drafts in minutes—huge time-saver!",
  },
  {
    name: 'Mike P.',
    role: 'Software Developer',
    avatar: 'https://i.pravatar.cc/100?u=mike',
    text: 'The Code Assistant catches subtle bugs and suggests refactors like a senior dev available 24/7.',
  },
  {
    name: 'Jessica T.',
    role: 'Startup Founder',
    avatar: 'https://i.pravatar.cc/100?u=jessica',
    text: 'I used the Speaker AI to craft my seed-round pitch and the Marketer AI for all our social updates—invaluable!',
  },
  {
    name: 'David H.',
    role: 'Agency Owner',
    avatar: 'https://i.pravatar.cc/100?u=david',
    text: 'We generate copy variations for A/B tests in seconds. Our campaigns have never been more efficient, all thanks to RoleCraft AI.',
  },
  {
    name: 'Emily R.',
    role: 'CS Student',
    avatar: 'https://i.pravatar.cc/100?u=emily',
    text: 'The explanations are crystal-clear. It helped me nail the algorithms for my final project.',
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                               */
/* ------------------------------------------------------------------ */
export default function LandingPage() {
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <div className="flex flex-col min-h-dvh bg-background overflow-x-hidden">
      {/* -------------------------------------------------------------- */
      /* Header                                                         */
      /* -------------------------------------------------------------- */}
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <Logo />
        <Button asChild>
          <Link href="/chat">Get Started</Link>
        </Button>
      </header>

      <main className="flex-1">
        {/* ---------------------------------------------------------- */
        /* Hero                                                       */
        /* ---------------------------------------------------------- */}
        <section className="py-12 md:py-24 lg:py-32 text-center container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Unlock Your Potential with Multi-Role AI
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            RoleCraft AI isn’t just another chatbot. It’s a suite of specialized
            assistants for marketers, programmers, writers, and speakers—ready
            to help instantly.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/chat">
              Start Chatting for Free <ArrowRight className="ml-2" />
            </Link>
          </Button>

          <div className="mt-12">
            <Image
              src="https://placehold.co/1200x600/0f172a/e2e8f0?text=AI+Chat+Interface"
              alt="AI Chat Interface"
              width={1200}
              height={600}
              className="rounded-xl shadow-2xl ring-1 ring-border max-w-full"
              priority
            />
          </div>
        </section>

        {/* ---------------------------------------------------------- */
        /* Features                                                   */
        /* ---------------------------------------------------------- */}
        <section id="features" className="py-12 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold">
                An Expert for Every Task
              </h2>
              <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                Get access to taiored Ai without having to prompt every single time
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {featureCards.map((f, i) => (
                <Card key={i} className="text-center flex flex-col">
                  <CardHeader>
                    <div className="flex justify-center mb-4">{f.icon}</div>
                    <CardTitle>{f.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground">{f.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */
        /* How it works                                               */
        /* ---------------------------------------------------------- */}
        <section id="how-it-works" className="py-12 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold">
                Get Started in Seconds
              </h2>
              <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                Three simple steps to expert-level output.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {howItWorksSteps.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary/10 p-4 rounded-full">
                      {s.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */
        /* Testimonials                                               */
        /* ---------------------------------------------------------- */}
        <section id="testimonials" className="py-12 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold">
                Loved by Professionals Worldwide
              </h2>
            </div>

            <div className="mt-12">
              <Carousel
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
                opts={{ align: 'start', loop: true }}
              >
                <CarouselContent>
                  {testimonials.map((t, i) => (
                    <CarouselItem
                      key={i}
                      className="md:basis-1/2 lg:basis-1/3 p-2"
                    >
                      <Card className="flex flex-col h-full">
                        <CardContent className="pt-6">
                          <p className="text-card-foreground">
                            &ldquo;{t.text}&rdquo;
                          </p>
                        </CardContent>
                        <CardHeader className="flex-row items-center gap-4">
                          <Avatar>
                            <AvatarImage src={t.avatar} alt={t.name} />
                            <AvatarFallback>{t.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-base">
                              {t.name}
                            </CardTitle>
                            <p className="text-sm text-muted-foreground">
                              {t.role}
                            </p>
                          </div>
                        </CardHeader>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */
        /* CTA                                                        */
        /* ---------------------------------------------------------- */}
        <section className="py-12 md:py-24 text-center container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Boost Your Productivity?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Stop switching between apps. Get expert-level results from one
            powerful AI assistant.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/chat">
              Try RoleCraft AI Now <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </section>
      </main>

      {/* -------------------------------------------------------------- */
      /* Footer                                                         */
      /* -------------------------------------------------------------- */}
      <footer className="py-6 bg-background border-t">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} RoleCraft AI. All rights reserved.
        </div>
      </footer>
    </div>
  );
}