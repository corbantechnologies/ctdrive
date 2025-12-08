import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface WhatsAppFloatingButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
}

export function WhatsAppFloatingButton({
  phoneNumber,
  message = "Hi CT Drive! 🎄 I'd like to book a car in Mombasa for the festive season. Please send available cars and prices.",
  className,
}: WhatsAppFloatingButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Button
      asChild
      size="lg"
      className={cn(
        "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 p-0 shadow-2xl transition-all hover:scale-110 hover:bg-green-700 hover:shadow-3xl md:h-16 md:w-16",
        "animate-bounce-slow",
        className
      )}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="h-8 w-8 text-white md:h-9 md:w-9" />
        <span className="sr-only">WhatsApp Us</span>

        {/* Optional pulse ring animation */}
        <span className="absolute inset-0 rounded-full bg-green-600 opacity-75 animate-ping"></span>
      </a>
    </Button>
  );
}
