import { ChefHat, Instagram, Facebook, Mail, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-display text-2xl font-bold">Bistro</span>
                <span className="font-display text-2xl font-bold text-primary-400"> Sabores</span>
              </div>
            </div>
            <p className="text-secondary-400 leading-relaxed mb-6">
              Donde la tradición peruana se encuentra con la innovación culinaria. 
              Una experiencia gastronómica que despierta los sentidos.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a 
                href="https://instagram.com/bistrosabores"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com/bistrosabores"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {[
                { label: 'Inicio', href: '#inicio' },
                { label: 'Nosotros', href: '#nosotros' },
                { label: 'Menú', href: '#menu' },
                { label: 'Especialidades', href: '#especialidades' },
                { label: 'Reservaciones', href: '#reservas' },
                { label: 'Contacto', href: '#contacto' },
              ].map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-secondary-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-secondary-400">
                  Av. Larco 1234<br />
                  Miraflores, Lima, Perú
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="tel:+51912345678" className="text-secondary-400 hover:text-primary-400 transition-colors">
                  912-345-678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:hola@bistrosabores.demo" className="text-secondary-400 hover:text-primary-400 transition-colors">
                  hola@bistrosabores.demo
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Horarios</h4>
            <ul className="space-y-3 text-secondary-400">
              <li className="flex justify-between">
                <span>Lunes</span>
                <span className="text-secondary-500">Cerrado</span>
              </li>
              <li className="flex justify-between">
                <span>Martes - Viernes</span>
                <span>12pm - 11pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado - Domingo</span>
                <span>12pm - 12am</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-primary-600/20 rounded-xl border border-primary-500/30">
              <p className="text-sm text-primary-300">
                🎉 Eventos privados disponibles. ¡Contáctanos para más información!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-800">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-500 text-sm text-center md:text-left">
            © {currentYear} Bistro Sabores. Todos los derechos reservados.
          </p>
          <p className="text-secondary-500 text-sm flex items-center gap-1">
            Hecho con <Heart className="w-4 h-4 text-red-500 fill-red-500" /> en Lima, Perú
          </p>
        </div>
      </div>
    </footer>
  );
}
