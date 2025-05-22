
"use client";

import type { FC } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { APOYA_PAGE_CONTENT } from '@/lib/constants'; // Assuming savings data is here
import { PiggyBank, Target, PartyPopper } from 'lucide-react';

interface PiggyBankProgressProps {
  currentAmount: number;
  goalAmount: number;
  currencySymbol?: string;
}

const PiggyBankProgress: FC<PiggyBankProgressProps> = ({ 
  currentAmount, 
  goalAmount,
  currencySymbol = APOYA_PAGE_CONTENT.donaciones.currencySymbol 
}) => {
  const { savings } = APOYA_PAGE_CONTENT;
  const progressPercentage = goalAmount > 0 ? Math.min((currentAmount / goalAmount) * 100, 100) : 0;
  const isGoalReached = currentAmount >= goalAmount;

  return (
    <Card className="shadow-xl rounded-lg sticky top-24"> {/* Sticky for visibility while scrolling left */}
      <CardHeader className="text-center">
        <div className="flex justify-center items-center gap-2 text-primary mb-2">
          <PiggyBank className="h-10 w-10" />
          <CardTitle className="text-2xl font-semibold">{savings.title}</CardTitle>
        </div>
        <CardDescription className="text-md">
          {isGoalReached ? savings.successMessage : savings.goalMessage}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="relative w-full max-w-xs mx-auto aspect-square">
           <Image
            src={savings.piggyImage}
            alt="Alcancía comunitaria"
            layout="fill"
            objectFit="contain"
            className="rounded-md"
            data-ai-hint={savings.piggyImageHint}
          />
          {isGoalReached && (
            <PartyPopper className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 text-accent animate-ping" />
          )}
        </div>

        <div className="space-y-2 text-center">
          <p className="text-sm font-medium text-muted-foreground">Progreso Actual</p>
          <Progress value={progressPercentage} className="w-full h-4 rounded-full" />
          <p className="text-xl font-bold text-primary">
            {Math.round(progressPercentage)}%
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Hemos Ahorrado</p>
            <p className="text-lg font-semibold text-foreground">
              {currencySymbol}{currentAmount.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Nuestra Meta</p>
            <p className="text-lg font-semibold text-foreground">
              {currencySymbol}{goalAmount.toLocaleString()}
            </p>
          </div>
        </div>
        
        {isGoalReached && (
          <div className="text-center p-4 bg-green-100 dark:bg-green-900/30 rounded-md">
            <PartyPopper className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
            <p className="font-semibold text-green-700 dark:text-green-300">¡Hemos alcanzado la meta!</p>
            <p className="text-sm text-green-600 dark:text-green-400">Gracias por tu increíble apoyo.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PiggyBankProgress;

    