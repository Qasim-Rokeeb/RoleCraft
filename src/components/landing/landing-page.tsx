
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
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import React from 'react';

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
      'Craft compelling ad copy, social media posts, and complete marketing strategies that resonate with your target audience.',
  },
  {
    icon: <CodeXml className="w-8 h-8 text-primary" />,
    title: 'Code Assistant',
    description:
      'Get help explaining, debugging, and refactoring your code. Paste any snippet and receive a detailed analysis and actionable improvements.',
  },
  {
    icon: <Mic className="w-8 h-8 text-primary" />,
    title: 'Speech Coach',
    description:
      'Prepare structured, impactful outlines for speeches and business pitches. Conquer the stage with a clear, persuasive message.',
  },
];

const howItWorksSteps = [
  {
    icon: <MousePointerClick className="w-8 h-8 text-primary" />,
    title: '1. Select a Role',
    description:
      'Choose the specialized AI assistant that fits your task, from a writer to a programmer.',
  },
  {
    icon: <BotMessageSquare className="w-8 h-8 text-primary" />,
    title: '2. Describe Your Task',
    description:
      'Provide your instructions, topic, or code. The more detail you give, the better the result.',
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: '3. Get Expert Results',
    description:
      'The AI gets to work and delivers a high-quality, ready-to-use response in seconds.',
  },
];

const testimonials = [
  {
    name: 'Sarah L.',
    role: 'Content Marketer',
    avatar: 'https://placehold.co/100x100.png',
    dataAiHint: 'woman portrait',
    text: "RoleCraft AI has become my go-to for breaking writer's block. The Writer AI helps me generate blog outlines and drafts in minutes. It's a huge time-saver!",
  },
  {
    name: 'Mike P.',
    role: 'Software Developer',
    avatar: 'https://placehold.co/100x100.png',
    dataAiHint: 'man portrait',
    text: "The Programmer AI is surprisingly good at catching subtle bugs and suggesting refactors. It's like having a senior developer available 24/7 for a second opinion.",
  },
  {
    name: 'Jessica T.',
    role: 'Startup Founder',
    avatar: 'https://placehold.co/100x100.png',
    dataAiHint: 'woman smiling',
    text: 'As a founder, I wear many hats. The Speaker AI helped me structure my seed round pitch deck, and the Marketer AI crafts all my social media updates. Invaluable!',
  },
  {
    name: 'David H.',
    role: 'Digital Agency Owner',
    avatar: 'https://placehold.co/100x100.png',
    dataAiHint: 'man professional',
    text: 'We use RoleCraft to quickly generate copy variations for A/B testing. The Marketer AI is fantastic for this, saving us hours of work each week.',
  },
  {
    name: 'Emily R.',
    role: 'Student',
    avatar: 'https://placehold.co/100x100.png',
    dataAiHint: 'woman student',
    text: 'The Programmer AI helped me understand complex algorithms for my computer science classes. The explanations are so clear and easy to follow.',
  },
];

export function LandingPage() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div className="flex flex-col min-h-dvh bg-background animate-fade-in">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <Logo />
        <Button asChild>
          <Link href="/chat">Get Started</Link>
        </Button>
      </header>

      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 text-center container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tighter animate-fade-in-up animation-delay-200">
            Unlock Your Potential with Multi-Role AI
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground animate-fade-in-up animation-delay-400">
            RoleCraft AI isn't just another chatbot. It's a suite of
            specialized AI assistants designed for marketers, programmers,
            writers, and public speakers. Stop wrestling with generic AI and get
            expert-level help, instantly.
          </p>
          <div className="animate-fade-in-up animation-delay-600">
            <Button asChild size="lg" className="mt-8">
              <Link href="/chat">
                Start Chatting for Free <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
          <div className="mt-12 relative animate-fade-in-up animation-delay-800">
            <Image
              src="https://placehold.co/1200x600.png"
              alt="AI Chat Interface Screenshot"
              width={1200}
              height={600}
              className="rounded-xl shadow-2xl ring-1 ring-border"
              data-ai-hint="dashboard computer"
              priority
            />
          </div>
        </section>

        <section id="features" className="py-12 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-headline animate-fade-in-up">
                An Expert for Every Task
              </h2>
              <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
                No more prompt engineering. Just switch between specialized AI
                roles to get the best results for your specific needs.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {featureCards.map((feature, index) => (
                <div
                  key={index}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${200 * (index + 2)}ms` }}
                >
                  <Card className="text-center flex flex-col h-full">
                    <CardHeader>
                      <div className="flex justify-center mb-4">
                        {feature.icon}
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-12 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-headline animate-fade-in-up">
                Get Started in Seconds
              </h2>
              <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
                Our intuitive interface makes it easy to get the results you
                need.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {howItWorksSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${200 * (index + 2)}ms` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary/10 p-4 rounded-full">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-12 md:py-24 bg-secondary overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-headline animate-fade-in-up">
                Loved by Professionals Worldwide
              </h2>
              <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
                Don't just take our word for it. Here's what our users have to
                say.
              </p>
            </div>
            <div className="mt-12">
              <Carousel
                plugins={[plugin.current]}
                className="w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                opts={{
                  align: 'start',
                  loop: true,
                }}
              >
                <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="p-1 animate-fade-in-up" style={{ animationDelay: `${100 * (index + 2)}ms`}}>
                        <Card className="flex flex-col justify-between h-full">
                          <CardContent className="pt-6">
                            <p className="text-card-foreground">
                              "{testimonial.text}"
                            </p>
                          </CardContent>
                          <CardHeader className="flex-row items-center gap-4">
                            <Avatar>
                              <AvatarImage
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                data-ai-hint={testimonial.dataAiHint}
                              />
                              <AvatarFallback>
                                {testimonial.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <CardTitle className="text-base">
                                {testimonial.name}
                              </CardTitle>
                              <p className="text-sm text-muted-foreground">
                                {testimonial.role}
                              </p>
                            </div>
                          </CardHeader>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 text-center container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-headline animate-fade-in-up">
            Ready to Boost Your Productivity?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground animate-fade-in-up animation-delay-200">
            Stop switching between apps. Start getting expert-level results from
            a single, powerful AI assistant.
          </p>
          <div className="animate-fade-in-up animation-delay-400">
            <Button asChild size="lg" className="mt-8">
              <Link href="/chat">
                Try RoleCraft AI Now <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="py-6 bg-background border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} RoleCraft AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
