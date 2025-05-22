"use client";

import type { FC } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquareText } from 'lucide-react'; // Changed from MessageCircle for better representation of text message

interface WhatsAppButtonProps {
  phoneNumber: string;
  message: string;
  buttonText?: string;
  className?: string;
}

const WhatsAppButton: FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message,
  buttonText = "Contactar por WhatsApp",
  className,
}) => {
  const handleWhatsAppRedirect = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppRedirect}
      className={className}
      size="lg"
      aria-label={buttonText}
    >
      <MessageSquareText className="mr-2 h-5 w-5" />
      {buttonText}
    </Button>
  );
};

export default WhatsAppButton;
