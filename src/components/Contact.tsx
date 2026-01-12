import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="section-padding bg-secondary-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="section-decorator">
            <span className="text-primary-600 font-medium uppercase tracking-wider text-sm">
              Encuéntranos
            </span>
          </div>
          <h2 className="section-title mb-4">
            <span className="text-gradient">Visítanos</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Estamos ubicados en el corazón de Miraflores, esperándote con los mejores sabores
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-xl h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.1567507361793!2d-77.0303!3d-12.1219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c82952e44c65%3A0x0!2sMiraflores%2C%20Lima!5e0!3m2!1ses!2spe!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Bistro Sabores"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-bold text-secondary-900 mb-2">Dirección</h3>
                <p className="text-secondary-600">
                  Av. Larco 1234<br />
                  Miraflores, Lima<br />
                  Perú
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-bold text-secondary-900 mb-2">Horarios</h3>
                <p className="text-secondary-600">
                  Martes - Domingo<br />
                  Almuerzo: 12pm - 4pm<br />
                  Cena: 7pm - 11pm
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-bold text-secondary-900 mb-2">Teléfono</h3>
                <a 
                  href="tel:+51912345678" 
                  className="text-primary-600 hover:underline block"
                >
                  912-345-678
                </a>
                <p className="text-secondary-500 text-sm mt-1">
                  Reservas y consultas
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-bold text-secondary-900 mb-2">Email</h3>
                <a 
                  href="mailto:hola@bistrosabores.demo" 
                  className="text-primary-600 hover:underline block"
                >
                  hola@bistrosabores.demo
                </a>
                <p className="text-secondary-500 text-sm mt-1">
                  Eventos y catering
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-4">Síguenos en redes</h3>
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com/bistrosabores" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="https://facebook.com/bistrosabores" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
              <p className="text-white/80 text-sm mt-4">
                Comparte tu experiencia con #BistroSabores
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
