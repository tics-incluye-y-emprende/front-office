
import Image from 'next/image';
import { APOYA_PAGE_CONTENT, WHATSAPP_PHONE_NUMBER, APP_NAME } from '@/lib/constants';
import PiggyBankProgress from '@/components/piggy-bank-progress';
import WhatsAppButton from '@/components/whatsapp-button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift, MessageCircle, Sparkles, DollarSign } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Hacer una Donación | ${APP_NAME}`,
  description: APOYA_PAGE_CONTENT.donaciones.description,
};

export default function DonacionesPage() {
  const { donaciones, savings } = APOYA_PAGE_CONTENT;

  return (
    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
      {/* Left Scrollable Section: Donation Options */}
      <div className="md:col-span-2 space-y-8">
        <header className="space-y-2">
            <div className="flex items-center gap-3 text-primary">
                <Gift className="h-10 w-10" />
                <h2 className="text-3xl font-semibold">{donaciones.title}</h2>
            </div>
          <p className="text-lg text-muted-foreground">
            {donaciones.description}
          </p>
        </header>
        
        <div className="space-y-10 overflow-y-auto md:max-h-[calc(100vh-300px)] pr-2 pb-6">
            <Card className="shadow-lg rounded-lg">
                <CardHeader>
                    <div className="flex items-center gap-2">
                        <DollarSign className="h-6 w-6 text-primary" />
                        <CardTitle className="text-xl font-semibold">Elige un Monto Fijo</CardTitle>
                    </div>
                    <CardDescription>Selecciona una de las opciones predefinidas para donar.</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {donaciones.fixedAmounts.map(({ amount, label }) => (
                        <WhatsAppButton
                        key={amount}
                        phoneNumber={WHATSAPP_PHONE_NUMBER}
                        message={donaciones.whatsappMessageFixed(amount, donaciones.currencySymbol)}
                        buttonText={`${donaciones.currencySymbol}${label}`}
                        className="w-full text-lg py-6"
                        />
                    ))}
                </CardContent>
            </Card>

            <Card className="shadow-lg rounded-lg">
                <CardHeader>
                     <div className="flex items-center gap-2">
                        <Sparkles className="h-6 w-6 text-accent" />
                        <CardTitle className="text-xl font-semibold">Donación Personalizada</CardTitle>
                    </div>
                    <CardDescription>Si prefieres donar otro monto, contáctanos.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        Haz clic en el botón para solicitar un enlace de pago con el monto que desees aportar.
                    </p>
                    <WhatsAppButton
                        phoneNumber={WHATSAPP_PHONE_NUMBER}
                        message={donaciones.whatsappMessageCustom}
                        buttonText={donaciones.customAmountText}
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6"
                    />
                </CardContent>
            </Card>
        </div>
      </div>

      {/* Right Sticky Section: Piggy Bank */}
      <aside className="md:col-span-1">
        <PiggyBankProgress
          currentAmount={savings.current}
          goalAmount={savings.goal}
          currencySymbol={donaciones.currencySymbol}
        />
      </aside>
    </div>
  );
}

    