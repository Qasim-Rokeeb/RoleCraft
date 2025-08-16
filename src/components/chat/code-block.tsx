'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Clipboard } from 'lucide-react';

interface CodeBlockProps {
  language: string;
  code: string;
}

export function CodeBlock({ language, code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-4 rounded-lg bg-black/70 text-sm text-white">
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-600">
        <span className="text-xs font-semibold text-gray-300">{language || 'code'}</span>
        <Button variant="ghost" size="icon" onClick={handleCopy} className="h-6 w-6 text-white hover:bg-gray-700 hover:text-white">
          {copied ? <Check size={16} /> : <Clipboard size={16} />}
          <span className="sr-only">Copy code</span>
        </Button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code>{code.trim()}</code>
      </pre>
    </div>
  );
}
