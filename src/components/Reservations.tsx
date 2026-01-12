import { useState } from 'react';
import {
  Calendar,
  Clock,
  Users,
  Phone,
  Mail,
  User,
  MessageSquare,
  CheckCircle,
  Gift
} from 'lucide-react';

export default function Reservations() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const timeSlots = [
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
  ];

  const occasions = [
    'Ninguna en especial',
    'Cumpleaños',
    'Aniversario',
    'Reunión de negocios',
    'Cita romántica',
    'Celebración familiar',
    'Otro'
  ];

  if (isSubmitted) {
    return (
      <section id="reservas" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="font-display text-3xl font-bold text-secondary-900 mb-4">
              ¡Reserva Confirmada!
            </h2>
            <p className="text-secondary-600 mb-8">
              Gracias {formData.name}. Hemos recibido tu reserva para {formData.guests} personas
              el día {formData.date} a las {formData.time}. Te enviaremos un correo de confirmación.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ name: '', email: '', phone: '', date: '', time: '', guests: '2', occasion: '', notes: '' });
              }}
              className="btn-primary"
            >
              Hacer otra reserva
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="reservas" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-50 to-transparent -z-10" />

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div>
            <div className="section-decorator justify-start">
              <span className="text-primary-600 font-medium uppercase tracking-wider text-sm">
                Reservaciones
              </span>
            </div>
            <h2 className="section-title mb-6">
              Reserva tu <span className="text-gradient">experiencia</span>
            </h2>
            <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
              Asegura tu mesa y vive una experiencia gastronómica única.
              Para grupos mayores a 10 personas o eventos especiales,
              contáctanos directamente.
            </p>

            {/* Quick Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary-900">Horario de atención</h4>
                  <p className="text-secondary-600">Mar - Dom: 12pm - 4pm / 7pm - 11pm</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary-900">Reservas por teléfono</h4>
                  <a href="tel:+51912345678" className="text-primary-600 hover:underline">912-345-678</a>
                </div>
              </div>
            </div>

            {/* Special Note */}
            <div className="p-6 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl border border-primary-100">
              <div className="flex items-start gap-3">
                <Gift className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-secondary-900 mb-1">¿Ocasión especial?</h4>
                  <p className="text-sm text-secondary-600">
                    Cuéntanos y prepararemos algo especial para ti.
                    Decoraciones, tortas personalizadas y más.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-secondary-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                    Nombre completo *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="input-field pl-12"
                      placeholder="Tu nombre"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                    Teléfono *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="input-field pl-12"
                      placeholder="999 999 999"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="md:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                    Correo electrónico *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="input-field pl-12"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-secondary-700 mb-2">
                    Fecha *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="input-field pl-12"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>

                {/* Time */}
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-secondary-700 mb-2">
                    Hora *
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
                    <select
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="input-field pl-12"
                    >
                      <option value="">Seleccionar hora</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Guests */}
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-secondary-700 mb-2">
                    Número de personas *
                  </label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
                    <select
                      id="guests"
                      name="guests"
                      required
                      value={formData.guests}
                      onChange={handleChange}
                      className="input-field pl-12"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'persona' : 'personas'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Occasion */}
                <div>
                  <label htmlFor="occasion" className="block text-sm font-medium text-secondary-700 mb-2">
                    Ocasión especial
                  </label>
                  <select
                    id="occasion"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    className="input-field"
                  >
                    {occasions.map(occ => (
                      <option key={occ} value={occ}>{occ}</option>
                    ))}
                  </select>
                </div>

                {/* Notes */}
                <div className="md:col-span-2">
                  <label htmlFor="notes" className="block text-sm font-medium text-secondary-700 mb-2">
                    Notas adicionales
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-secondary-400" />
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      className="input-field pl-12 resize-none"
                      placeholder="Alergias, preferencias, solicitudes especiales..."
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Reservando...
                  </span>
                ) : (
                  'Confirmar Reserva'
                )}
              </button>

              <p className="text-xs text-secondary-500 text-center">
                Al reservar aceptas nuestros términos y condiciones.
                Recibirás una confirmación por correo.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
