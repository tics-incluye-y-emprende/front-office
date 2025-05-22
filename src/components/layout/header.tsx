
"use client";

import type { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HeartHandshake, Home, Info, Menu, X, UserPlus, HandHelping } from 'lucide-react'; // Added UserPlus, HandHelping
import { Button } from '@/components/ui/button';
import { APP_NAME } from '@/lib/constants';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';

interface NavItem {
  href: string;
  label: string;
  icon: FC<React.ComponentProps<typeof Home>>;
  baseRoute?: string;
}

const navItems: NavItem[] = [
  { href: '/', label: 'Inicio', icon: Home, baseRoute: '/' },
  { href: '/about', label: 'Nosotros', icon: Info, baseRoute: '/about' },
  { href: '/unete/voluntario', label: 'Únete', icon: UserPlus, baseRoute: '/unete' },
  { href: '/apoya/donaciones', label: 'Apoya', icon: HandHelping, baseRoute: '/apoya' }, // Changed from Donar to Apoya
];

const Header: FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);


  const NavLinks: FC<{ isMobile?: boolean }> = ({ isMobile = false }) => (
    <nav className={`flex ${isMobile ? 'flex-col space-y-2 p-4' : 'space-x-1 md:space-x-2 items-center'}`}>
      {navItems.map((item) => {
        let isActive = false;
        if (item.baseRoute) {
          if (item.baseRoute === '/') { 
            isActive = pathname === '/';
          } else {
            isActive = pathname.startsWith(item.baseRoute);
          }
        } else { 
          isActive = pathname === item.href;
        }
        
        return (
          <Button
            key={item.href}
            variant={isActive ? 'default' : 'ghost'}
            asChild
            size="sm"
            className={`text-xs sm:text-sm font-medium transition-colors hover:text-primary ${isMobile ? 'w-full justify-start' : ''}`}
            onClick={() => isMobile && setIsMobileMenuOpen(false)}
          >
            <Link href={item.href} className="flex items-center gap-1 sm:gap-2">
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
            <span className="text-foreground hidden sm:inline-block">{APP_NAME}</span>
             <span className="text-foreground sm:hidden">CS</span> {/* Short name for mobile */}
          </Link>
          <div className="h-8 w-24 animate-pulse rounded-md bg-muted/50 md:hidden"></div> {/* Placeholder for menu button */}
          <div className="hidden md:flex space-x-2">
             <div className="h-8 w-16 animate-pulse rounded-md bg-muted/50"></div> {/* Placeholder for nav links */}
             <div className="h-8 w-16 animate-pulse rounded-md bg-muted/50"></div>
             <div className="h-8 w-16 animate-pulse rounded-md bg-muted/50"></div>
             <div className="h-8 w-16 animate-pulse rounded-md bg-muted/50"></div>
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
           <span className="text-foreground hidden sm:inline-block">{APP_NAME}</span>
           <span className="text-foreground sm:hidden">CS</span> {/* Short name for mobile */}
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

    