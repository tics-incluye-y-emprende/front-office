
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { UNETE_PAGE_CONTENT, WHATSAPP_PHONE_NUMBER, APP_NAME } from '@/lib/constants';
import WhatsAppButton from '@/components/whatsapp-button';
import { CheckCircle, Users2, Award, Sparkles } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${UNETE_PAGE_CONTENT.asociado.title} | ${APP_NAME}`,
  description: UNETE_PAGE_CONTENT.asociado.description,
};

export default function AsociadoPage() {
  const { asociado } = UNETE_PAGE_CONTENT;
  return (
    <div className="space-y-12">
      <section className="grid md:grid-cols-2 gap-10 items-center p-6 bg-secondary/30 rounded-xl shadow-md">
         <div className="space-y-4">
            <div className="flex items-center gap-3 text-primary">
                <Users2 className="h-10 w-10"/>
                <h2 className="text-3xl font-semibold">{asociado.pageTitle}</h2>
            </div>
            <p className="text-lg text-foreground/80">
              {asociado.description}
            </p>
         </div>
         <div>
            <Image
                src={asociado.image}
                alt={asociado.title}
                width={500}
                height={350}
                className="rounded-xl shadow-lg object-cover aspect-[5/3.5]"
                data-ai-hint={asociado.imageHint}
            />
         </div>
      </section>
      
      <section>
        <Card className="shadow-lg rounded-lg overflow-hidden">
            <CardHeader className="bg-primary/5">
                <CardTitle className="flex items-center gap-3 text-2xl font-semibold text-primary">
                    <Award className="h-8 w-8"/>
                    Beneficios de Ser Asociado
                </CardTitle>
                <CardDescription>Al unirte como asociado, obtienes acceso a ventajas exclusivas y participas activamente en nuestra comunidad.</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
                <ul className="space-y-4">
                  {asociado.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-md text-foreground/90">{benefit}</span>
                    </li>
                  ))}
                </ul>
            </CardContent>
        </Card>
      </section>

      <section className="text-center py-10 bg-primary/10 rounded-xl shadow-md">
        <Sparkles className="h-12 w-12 text-accent mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-foreground mb-4">¿Te Interesa Ser Asociado?</h3>
        <WhatsAppButton
          phoneNumber={WHATSAPP_PHONE_NUMBER}
          message={asociado.cta.whatsappMessage}
          buttonText={asociado.cta.text}
          className="bg-accent hover:bg-accent/90 text-accent-foreground"
        />
        <p className="mt-4 text-sm text-muted-foreground">
          ¡Forma parte de nuestra red de asociados y ayúdanos a crecer!
        </p>
      </section>
    </div>
  );
}
