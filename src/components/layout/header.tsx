
"use client";

import type { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HeartHandshake, Home, Info, Gift, Menu, X, UserPlus } from 'lucide-react'; // Added UserPlus
import { Button } from '@/components/ui/button';
import { APP_NAME } from '@/lib/constants';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';

interface NavItem {
  href: string;
  label: string;
  icon: FC<React.ComponentProps<typeof Home>>;
  baseRoute?: string; // Added for more specific active state checking
}

const navItems: NavItem[] = [
  { href: '/', label: 'Inicio', icon: Home, baseRoute: '/' },
  { href: '/about', label: 'Nosotros', icon: Info, baseRoute: '/about' },
  { href: '/unete/voluntario', label: 'Únete', icon: UserPlus, baseRoute: '/unete' }, // Default to voluntario, base is /unete
  { href: '/donate', label: 'Donar', icon: Gift, baseRoute: '/donate' },
];

const Header: FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);


  const NavLinks: FC<{ isMobile?: boolean }> = ({ isMobile = false }) => (
    <nav className={`flex ${isMobile ? 'flex-col space-y-2 p-4' : 'space-x-2 md:space-x-4 items-center'}`}>
      {navItems.map((item) => {
        let isActive = false;
        if (item.baseRoute) {
          if (item.baseRoute === '/') { // Special case for home
            isActive = pathname === '/';
          } else {
            isActive = pathname.startsWith(item.baseRoute);
          }
        } else { // Fallback if baseRoute is not defined
          isActive = pathname === item.href;
        }
        
        return (
          <Button
            key={item.href}
            variant={isActive ? 'default' : 'ghost'}
            asChild
            className={`text-sm font-medium transition-colors hover:text-primary ${isMobile ? 'w-full justify-start' : ''}`}
            onClick={() => isMobile && setIsMobileMenuOpen(false)}
          >
            <Link href={item.href} className="flex items-center gap-2">
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          </Button>
        );
      })}
    </nav>
  );
  
  if (!isMounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <HeartHandshake className="h-7 w-7 text-primary" />
            <span className="text-foreground">{APP_NAME}</span>
          </Link>
          <div className="h-8 w-24 animate-pulse rounded-md bg-muted/50 md:hidden"></div> {/* Placeholder for menu button */}
          <div className="hidden md:flex space-x-4">
             <div className="h-8 w-20 animate-pulse rounded-md bg-muted/50"></div> {/* Placeholder for nav links */}
             <div className="h-8 w-20 animate-pulse rounded-md bg-muted/50"></div>
             <div className="h-8 w-20 animate-pulse rounded-md bg-muted/50"></div>
             <div className="h-8 w-20 animate-pulse rounded-md bg-muted/50"></div>
          </div>
        </div>
      </header>
    );
  }


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
          <HeartHandshake className="h-7 w-7 text-primary" />
          <span className="text-foreground">{APP_NAME}</span>
        </Link>

        <div className="hidden md:flex">
          <NavLinks />
        </div>
        
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] p-0">
                <div className="flex justify-between items-center p-4 border-b">
                     <Link href="/" className="flex items-center gap-2 text-lg font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
                        <HeartHandshake className="h-7 w-7 text-primary" />
                        <span className="text-foreground">{APP_NAME}</span>
                    </Link>
                    <SheetClose asChild>
                        <Button variant="ghost" size="icon">
                            <X className="h-6 w-6" />
                            <span className="sr-only">Cerrar menú</span>
                        </Button>
                    </SheetClose>
                </div>
              <NavLinks isMobile />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
