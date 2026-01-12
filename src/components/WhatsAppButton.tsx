import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '51912345678';
  const message = encodeURIComponent('Hola, me gustaría hacer una reserva en Bistro Sabores');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-4 py-2 bg-secondary-900 text-white text-sm font-medium rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
        ¿Necesitas ayuda?
        <span className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-secondary-900" />
      </span>

      {/* Button */}
      <div className="relative">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
        
        {/* Main button */}
        <div className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/40 hover:shadow-xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
      </div>
    </a>
  );
}
