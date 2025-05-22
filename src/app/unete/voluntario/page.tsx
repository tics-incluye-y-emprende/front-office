
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UNETE_PAGE_CONTENT, WHATSAPP_PHONE_NUMBER, APP_NAME } from '@/lib/constants';
import WhatsAppButton from '@/components/whatsapp-button';
import { HandHeart, Sparkles } from 'lucide-react';
import type { Metadata } from 'next';
import { getVoluntariadoRoles } from '@/services/voluntariadoService'; // Import the service
import type { VoluntarioRole } from '@/lib/types'; // Import the type

export const metadata: Metadata = {
  title: `${UNETE_PAGE_CONTENT.voluntario.title} | ${APP_NAME}`,
  description: UNETE_PAGE_CONTENT.voluntario.description,
};

export default async function VoluntarioPage() {
  const { voluntario } = UNETE_PAGE_CONTENT;
  const roles = await getVoluntariadoRoles(); // Fetch data using the service

  return (
    <div className="space-y-12">
      <section className="grid md:grid-cols-2 gap-10 items-center p-6 bg-secondary/30 rounded-xl shadow-md">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-primary">
            <HandHeart className="h-10 w-10" />
            <h2 className="text-3xl font-semibold">{voluntario.pageTitle}</h2>
          </div>
          <p className="text-lg text-foreground/80">
            {voluntario.description}
          </p>
        </div>
        <div>
          <Image
            src={voluntario.image}
            alt={voluntario.title}
            width={500}
            height={350}
            className="rounded-xl shadow-lg object-cover aspect-[5/3.5]"
            data-ai-hint={voluntario.imageHint}
          />
        </div>
      </section>
      
      <section>
        <div className="text-center mb-10">
           <h3 className="text-2xl font-semibold text-foreground sm:text-3xl">Explora Oportunidades de Voluntariado</h3>
           <p className="mt-3 text-md text-muted-foreground">Encuentra el rol que mejor se adapte a tus habilidades e intereses.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role: VoluntarioRole, index: number) => ( // Use the VoluntarioRole type
            <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
              <div className="relative h-52 w-full">
                 <Image src={role.image} alt={role.title} layout="fill" objectFit="cover" data-ai-hint={role.imageHint} />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold text-primary">{role.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{role.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center py-10 bg-primary/10 rounded-xl shadow-md">
        <Sparkles className="h-12 w-12 text-accent mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-foreground mb-4">¿Listo para Unirte?</h3>
        <WhatsAppButton
          phoneNumber={WHATSAPP_PHONE_NUMBER}
          message={voluntario.cta.whatsappMessage}
          buttonText={voluntario.cta.text}
          className="bg-accent hover:bg-accent/90 text-accent-foreground"
        />
        <p className="mt-4 text-sm text-muted-foreground">
          ¡Contáctanos para empezar tu viaje como voluntario y marcar la diferencia!
        </p>
      </section>
    </div>
  );
}
