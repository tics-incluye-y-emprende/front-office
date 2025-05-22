
import Image from 'next/image';
import { APOYA_PAGE_CONTENT, WHATSAPP_PHONE_NUMBER, APP_NAME } from '@/lib/constants';
import PiggyBankProgress from '@/components/piggy-bank-progress';
import WhatsAppButton from '@/components/whatsapp-button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Sparkles, ShoppingBag } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Apoyar Emprendimientos | ${APP_NAME}`,
  description: APOYA_PAGE_CONTENT.emprendimiento.description,
};

export default function EmprendimientoPage() {
  const { emprendimiento, savings } = APOYA_PAGE_CONTENT;

  return (
    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
      {/* Left Scrollable Section: Catalog */}
      <div className="md:col-span-2 space-y-8">
        <header className="space-y-2">
          <div className="flex items-center gap-3 text-primary">
            <ShoppingBag className="h-10 w-10" />
            <h2 className="text-3xl font-semibold">{emprendimiento.title}</h2>
          </div>
          <p className="text-lg text-muted-foreground">
            {emprendimiento.description}
          </p>
        </header>

        <div className="space-y-6 overflow-y-auto md:max-h-[calc(100vh-300px)] pr-2 pb-6">
          {emprendimiento.catalog.length > 0 ? (
            emprendimiento.catalog.map((item) => {
              const progress = item.goal > 0 ? (item.raised / item.goal) * 100 : 0;
              return (
              <Card key={item.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
                <div className="grid md:grid-cols-5 gap-4">
                  <div className="md:col-span-2 relative h-48 md:h-full w-full">
                    <Image
                      src={item.image}
                      alt={item.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-l-lg"
                      data-ai-hint={item.imageHint}
                    />
                  </div>
                  <div className="md:col-span-3 p-4 md:p-6 flex flex-col justify-between">
                    <div>
                      <CardTitle className="text-xl font-semibold text-foreground mb-1">{item.name}</CardTitle>
                      <CardDescription className="text-sm text-muted-foreground mb-3">{item.description}</CardDescription>
                      
                      <div className="my-3 space-y-1">
                        <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Recaudado: ${item.raised.toLocaleString()}</span>
                            <span>Meta: ${item.goal.toLocaleString()}</span>
                        </div>
                        <Progress value={progress} className="h-2" />
                        <p className="text-xs text-primary text-right">{progress.toFixed(0)}%</p>
                      </div>
                    </div>
                    <CardFooter className="p-0 mt-3">
                       <WhatsAppButton
                        phoneNumber={WHATSAPP_PHONE_NUMBER}
                        message={item.whatsappMessage}
                        buttonText="Apoyar este Emprendimiento"
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                      />
                    </CardFooter>
                  </div>
                </div>
              </Card>
            )})
          ) : (
            <p className="text-muted-foreground">No hay emprendimientos en el catálogo por el momento. ¡Vuelve pronto!</p>
          )}
        </div>
      </div>

      {/* Right Sticky Section: Piggy Bank */}
      <aside className="md:col-span-1">
        <PiggyBankProgress
          currentAmount={savings.current}
          goalAmount={savings.goal}
          currencySymbol={APOYA_PAGE_CONTENT.donaciones.currencySymbol}
        />
      </aside>
    </div>
  );
}

    