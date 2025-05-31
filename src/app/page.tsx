import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HOME_PAGE_CONTENT, APP_NAME } from "@/lib/constants";
import { ArrowRight, Users, Heart, Handshake } from "lucide-react";
import type { FC } from "react";

const iconMap: { [key: string]: FC<React.ComponentProps<typeof Users>> } = {
  Users,
  Heart,
  Handshake,
};

export default function HomePage() {
  return (
    <div className="space-y-12 md:space-y-16">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20 bg-gradient-to-br from-primary/10 via-background to-background rounded-xl shadow-lg">
        <div className="container mx-auto px-8">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
            {HOME_PAGE_CONTENT.title}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-foreground/80 sm:text-xl">
            {HOME_PAGE_CONTENT.subtitle}
          </p>
          <p className="mt-4 max-w-xl mx-auto text-md text-muted-foreground">
            {HOME_PAGE_CONTENT.description}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="shadow-md hover:shadow-lg transition-shadow"
            >
              <Link href="/unete/asociado">
                {HOME_PAGE_CONTENT.cta.join}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="shadow-md hover:shadow-lg transition-shadow"
            >
              <Link href="/apoya/emprendimiento">
                {HOME_PAGE_CONTENT.cta.support}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            ¿Cómo Ayudamos?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Descubre las formas en que generamos un impacto positivo.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {HOME_PAGE_CONTENT.features.map((feature) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <Card
                key={feature.title}
                className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={feature.imageHint}
                  />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    {IconComponent && (
                      <IconComponent className="h-8 w-8 text-primary" />
                    )}
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-12 md:py-16 bg-secondary/50 rounded-xl shadow-md">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Únete a Nuestra Causa
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
            Juntos podemos construir un futuro mejor. Tu apoyo es fundamental.
          </p>
          <Button
            size="lg"
            asChild
            className="mt-8 shadow-md hover:shadow-lg transition-shadow"
          >
            <Link href="/donate">
              Contribuir Ahora
              <Heart className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
