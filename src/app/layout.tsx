import type { Metadata } from 'next';
import { Inter as Geist } from 'next/font/google'; // Using Inter as a similar modern sans-serif
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { APP_NAME } from '@/lib/constants';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

// const geistMono = Geist_Mono({ // Removed as only one font is needed for body
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

// Define HOME_PAGE_CONTENT before using it in metadata
const HOME_PAGE_CONTENT = {
  subtitle: "Uniendo corazones, transformando vidas.",
};

export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  description: `Conexión Solidaria: ${HOME_PAGE_CONTENT.subtitle}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} antialiased flex flex-col min-h-screen bg-background text-foreground`}>
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
