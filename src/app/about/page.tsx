import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ABOUT_US_CONTENT, APP_NAME } from '@/lib/constants';
import { CheckCircle2, Target, Eye } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Sobre ${APP_NAME}`,
  description: ABOUT_US_CONTENT.mission.text,
};

export default function AboutPage() {
  return (
    <div className="space-y-12 md:space-y-16">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          {ABOUT_US_CONTENT.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Conoce más sobre nuestra organización, nuestros objetivos y el impacto que buscamos generar.
        </p>
      </header>

      {/* Mission Section */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1 space-y-4">
          <div className="flex items-center gap-3">
            <Target className="h-10 w-10 text-accent" />
            <h2 className="text-3xl font-semibold text-foreground">{ABOUT_US_CONTENT.mission.title}</h2>
          </div>
          <p className="text-lg leading-relaxed text-foreground/80">
            {ABOUT_US_CONTENT.mission.text}
          </p>
        </div>
        <div className="order-1 md:order-2">
          <Image
            src={ABOUT_US_CONTENT.mission.image}
            alt={ABOUT_US_CONTENT.mission.title}
            width={600}
            height={400}
            className="rounded-xl shadow-lg object-cover"
            data-ai-hint={ABOUT_US_CONTENT.mission.imageHint}
          />
        </div>
      </section>

      {/* Vision Section */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
           <div className="flex items-center gap-3">
            <Eye className="h-10 w-10 text-accent" />
            <h2 className="text-3xl font-semibold text-foreground">{ABOUT_US_CONTENT.vision.title}</h2>
          </div>
          <p className="text-lg leading-relaxed text-foreground/80">
            {ABOUT_US_CONTENT.vision.text}
          </p>
        </div>
        <div>
          <Image
            src={ABOUT_US_CONTENT.vision.image}
            alt={ABOUT_US_CONTENT.vision.title}
            width={600}
            height={400}
            className="rounded-xl shadow-lg object-cover"
            data-ai-hint={ABOUT_US_CONTENT.vision.imageHint}
          />
        </div>
      </section>

      {/* Values Section */}
      <section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">Nuestros Valores</h2>
          <p className="mt-3 text-lg text-muted-foreground">Los principios que guían cada una de nuestras acciones.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ABOUT_US_CONTENT.values.map((value) => (
            <Card key={value.name} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
              <CardHeader className="pb-3">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-3">
                  <CheckCircle2 className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">{value.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
