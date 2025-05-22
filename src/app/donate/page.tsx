import Image from 'next/image';
import WhatsAppButton from '@/components/whatsapp-button';
import { DONATE_PAGE_CONTENT, WHATSAPP_PHONE_NUMBER, DONATION_PREFILLED_MESSAGE, APP_NAME } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Gift } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Donar a ${APP_NAME}`,
  description: DONATE_PAGE_CONTENT.description,
};

export default function DonatePage() {
  return (
    <div className="space-y-12 md:space-y-16">
      <header className="text-center py-8">
        <Gift className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          {DONATE_PAGE_CONTENT.title}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          {DONATE_PAGE_CONTENT.description}
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Card className="shadow-lg rounded-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground">¿Cómo Donar?</CardTitle>
              <CardDescription className="text-md">
                Sigue estos sencillos pasos para apoyar nuestra causa.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg leading-relaxed text-foreground/80">
                {DONATE_PAGE_CONTENT.instructions}
              </p>
              <div className="border-t pt-6">
                <WhatsAppButton
                  phoneNumber={WHATSAPP_PHONE_NUMBER}
                  message={DONATION_PREFILLED_MESSAGE}
                  buttonText="Contactar para Donar"
                  className="w-full sm:w-auto"
                />
                <p className="mt-3 text-sm text-muted-foreground">
                  Serás redirigido a WhatsApp para completar tu donación de forma segura.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-accent/10 border-accent/30 shadow-lg rounded-lg">
             <CardHeader>
                <CardTitle className="text-xl font-semibold text-accent">¡Tu Ayuda Transforma Vidas!</CardTitle>
             </CardHeader>
             <CardContent>
                <p className="text-md text-accent/90">
                    Cada contribución nos acerca más a nuestros objetivos y nos permite seguir apoyando a quienes más lo necesitan. Gracias por tu generosidad.
                </p>
             </CardContent>
          </Card>
        </div>
        
        <div>
          <Image
            src={DONATE_PAGE_CONTENT.image}
            alt="Impacto de las donaciones"
            width={800}
            height={500}
            className="rounded-xl shadow-xl object-cover aspect-[4/3]"
            data-ai-hint={DONATE_PAGE_CONTENT.imageHint}
          />
        </div>
      </section>
    </div>
  );
}
