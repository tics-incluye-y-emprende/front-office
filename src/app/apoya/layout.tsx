
'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { APOYA_PAGE_CONTENT } from '@/lib/constants';
import { HandHelping } from 'lucide-react';

export default function ApoyaLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="space-y-10">
      <header className="text-center py-8 border-b mb-8 rounded-xl shadow-sm bg-card">
        <div className="inline-flex items-center gap-3 mb-2 text-primary">
           <HandHelping className="h-12 w-12" /> 
           <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
             {APOYA_PAGE_CONTENT.title}
           </h1>
        </div>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">{APOYA_PAGE_CONTENT.slogan}</p>
      </header>

      <nav className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
        {APOYA_PAGE_CONTENT.navLinks.map((link) => (
          <Button 
            key={link.href} 
            variant={pathname === link.href ? 'default' : 'outline'} 
            asChild 
            size="lg"
            className="w-full sm:w-auto min-w-[220px] shadow-md hover:shadow-lg transition-shadow"
          >
            <Link href={link.href}>{link.name}</Link>
          </Button>
        ))}
      </nav>
      
      <main className="mt-8">{children}</main>
    </div>
  );
}

    