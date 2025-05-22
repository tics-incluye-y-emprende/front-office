"use client";

import type { FC } from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { FOOTER_CONTENT } from '@/lib/constants';

const iconComponents: { [key: string]: FC<React.ComponentProps<typeof Facebook>> } = {
  Facebook,
  Instagram,
  Twitter,
};

const Footer: FC = () => {
  return (
    <footer className="border-t bg-background/80">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            {FOOTER_CONTENT.copyright}
          </p>
          <div className="flex space-x-4">
            {FOOTER_CONTENT.socialLinks.map((link) => {
              const IconComponent = iconComponents[link.icon];
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  {IconComponent && <IconComponent className="h-5 w-5" />}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
