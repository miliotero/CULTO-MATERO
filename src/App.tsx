/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  MessageCircle, 
  Instagram, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Star,
  ArrowRight
} from "lucide-react";
import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "5491125396319"; // Placeholder number

const combos = [
  {
    id: "combo-clasico",
    name: "Combo Clásico",
    price: "$24.000",
    description: "Mate camionero algarrobo + Bombilla de acero + 500g de yerba Ril Store o Grapia Milenaria + Presentación lista para regalo",
    image: "/combo_clasico.png",
  },
  {
    id: "regalo-especial",
    name: "Combo Ritual",
    price: "$62.000",
    description: "Mate torpedo fleje cincelado + Bombillón alpaca pico bronce + 1kg de yerba Baldo o Canarias + Presentación lista para regalo",
    image: "/combo_ritual.png",
  },
  {
    id: "combo-premium",
    name: "Combo Culto (premium)",
    price: "$99.000",
    description: "Mate imperial fleje bronce cincelado + Bombillón alpaca pico bronce + 1kg de yerba Baldo o Canarias + Matera cuero reforzada + Presentación premium lista para regalo",
    image: "/combo_culto.png",
  },
];

const CATALOG_URL = "https://www.instagram.com/culto.matero/";

const categories = [
  { 
    name: "Yerbas", 
    desc: "Selección orgánica y premium", 
    price: "$3.300", 
    image: "/productos_yerba.png",
    link: "https://canva.link/7j4lzq4lnb22djs",
    buttonText: "ver yerbas"
  },
  { 
    name: "Mates", 
    desc: "Trabajados artesanalmente", 
    price: "$15.000", 
    image: "/productos_mates.png",
    link: "https://canva.link/ihwk6izxj8ob0w0",
    buttonText: "ver mates"
  },
  { 
    name: "Bombillas", 
    desc: "Acero y alpaca", 
    price: "$7.000", 
    image: "/productos_bombilla.png",
    link: "https://canva.link/4irkozew267jqz4",
    buttonText: "ver bombillas"
  },
  { 
    name: "Materas", 
    desc: "Diseño minimalista en cuero", 
    price: "$15.000", 
    image: "/productos_matera.png",
    link: "https://canva.link/wcy7pztk5i5glhs",
    buttonText: "er materas"
  },
];

const testimonials = [
  { quote: "La presentación es impecable. Fue el regalo perfecto para mi papá.", name: "Sofía R.", location: "Recoleta, BA" },
  { quote: "Calidad superior en cada detalle. El mate imperial es una obra de arte.", name: "Marcos G.", location: "Córdoba" },
  { quote: "Atención personalizada y envío rapidísimo. Muy recomendados.", name: "Lucía M.", location: "Rosario" },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openWhatsApp = (productName?: string) => {
    const message = productName 
      ? `Hola! Me interesa el ${productName}. ¿Me podés dar más info?`
      : "Hola! Me interesa conocer más sobre sus productos. ¿Me podrían asesorar?";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen selection:bg-forest-900 selection:text-beige-50">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-forest-900/90 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-8"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-white">
          <div className="flex flex-col">
            <span className="font-serif text-3xl tracking-tight leading-none">Culto</span>
            <span className="text-[10px] uppercase tracking-[0.2em] mt-1 font-sans">MATES Y OTRAS YERBAS</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            <a href="#combos" className="text-sm font-medium hover:opacity-70 transition-opacity">Combos</a>
            <a href="#productos" className="text-sm font-medium hover:opacity-70 transition-opacity">Productos</a>
            <a href="#contacto" className="text-sm font-medium hover:opacity-70 transition-opacity">Contacto</a>
            
            <button 
              onClick={() => openWhatsApp()}
              className="bg-white text-forest-900 px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-beige-100 transition-all shadow-xl"
            >
              <MessageCircle size={18} /> WhatsApp
            </button>
          </div>

          {/* Mobile WhatsApp Icon */}
          <button 
            onClick={() => openWhatsApp()}
            className="md:hidden w-10 h-10 bg-white text-forest-900 rounded-full flex items-center justify-center shadow-lg"
          >
            <MessageCircle size={20} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero_mate.png" 
            alt="Culto Mate Ritual" 
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-7xl lg:text-8xl text-beige-50 leading-[0.9] mb-6">
              Regalos materos <br />
              <span className="italic font-light">listos para sorprender</span>
            </h1>
            <p className="text-beige-50/80 text-lg md:text-xl font-light mb-10 max-w-xl mx-auto">
              Elegí en minutos el regalo perfecto. Calidad artesanal pensada para perdurar.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => openWhatsApp()} className="btn-primary w-full sm:w-auto bg-beige-50 text-forest-900 hover:bg-beige-200">
                <MessageCircle size={18} /> Hablar por WhatsApp
              </button>
              <a href="#combos" className="btn-primary w-full sm:w-auto bg-white text-forest-900 hover:bg-beige-100">
                Ver regalos
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Combos */}
      <section id="combos" className="section-padding bg-beige-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xs uppercase tracking-[0.3em] text-forest-700 font-semibold mb-4 block"
            >
              Productos Exclusivos
            </motion.span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl mb-6">Regalos especiales para cada ocasión</h2>
            <p className="text-forest-900/60 max-w-2xl mx-auto text-lg font-light">
              Selecciones pensadas para sorprender. Cada combo incluye productos de calidad premium listos para regalar.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {combos.map((combo, idx) => (
              <motion.div
                key={combo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col h-full"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl md:rounded-2xl mb-3 md:mb-6 shadow-sm">
                  <img 
                    src={combo.image} 
                    alt={combo.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-lg md:text-2xl mb-1 md:mb-2">{combo.name}</h3>
                <p className="text-forest-900/60 text-xs md:text-base mb-3 md:mb-6">{combo.description}</p>
                
                <div className="mt-auto pt-2 md:pt-4">
                  <span className="text-xs md:text-sm font-semibold opacity-60 block mb-2 md:mb-3">{combo.price}</span>
                  <div className="w-full border-b border-forest-900/20" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="productos" className="section-padding bg-beige-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl mb-4">Nuestros Esenciales</h2>
              <p className="text-forest-900/60">Piezas individuales seleccionadas por su diseño y funcionalidad.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-beige-50 p-3 md:p-4 rounded-2xl md:rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
              >
                <div className="aspect-square overflow-hidden rounded-xl md:rounded-2xl mb-3 md:mb-4">
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="px-1 md:px-2 flex flex-col flex-grow">
                  <h4 className="text-base md:text-xl mb-1">{cat.name}</h4>
                  <p className="text-[11px] md:text-sm text-forest-900/50 mb-3 md:mb-4">{cat.desc}</p>
                  
                  <div className="mt-auto pt-2 md:pt-4">
                    <span className="text-[11px] md:text-xs font-semibold opacity-50 block mb-1 md:mb-2">Desde {cat.price}</span>
                    <a 
                      href={(cat as any).link || CATALOG_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] md:text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:text-forest-700 transition-colors"
                    >
                      {(cat as any).buttonText || "Ver el catálogo"} <ArrowRight size={10} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Assisted Selling Section */}
      <section id="contacto" className="section-padding bg-forest-900 text-beige-50 overflow-hidden relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-6xl mb-8">¿No sabés qué elegir?</h2>
            <p className="text-beige-50/70 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto">
              Te ayudamos a encontrar el regalo perfecto según tu presupuesto y la ocasión. Respondemos al instante con asesoramiento personalizado.
            </p>
            <button 
              onClick={() => openWhatsApp()}
              className="bg-beige-50 text-forest-900 px-10 py-4 rounded-full font-semibold text-lg hover:bg-beige-200 transition-all flex items-center gap-3 mx-auto"
            >
              <MessageCircle size={24} /> Escribinos por WhatsApp
            </button>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-padding bg-beige-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-4">Lo que dicen nuestros clientes</h2>
            <div className="flex justify-center gap-1 text-forest-700">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <span className="text-4xl md:text-6xl font-serif absolute -top-6 -left-2 md:-top-8 md:-left-4 opacity-10">"</span>
                <p className="text-sm md:text-lg italic font-serif mb-4 md:mb-6 relative z-10 line-clamp-4 md:line-clamp-none">
                  {t.quote}
                </p>
                <div>
                  <p className="font-bold text-[10px] md:text-sm">{t.name}</p>
                  <p className="text-[8px] md:text-xs opacity-50">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="section-padding bg-forest-900 bg-gradient-to-b from-forest-900 to-[#0a1a14] text-beige-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-7xl font-light tracking-tight mb-6"
            >
              Retirá tu pedido
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl font-light text-beige-50/60 max-w-2xl mx-auto leading-relaxed"
            >
              Realizá tu pedido por WhatsApp y coordinamos la entrega
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] border border-white/10"
          >
            <iframe
              src="https://maps.google.com/maps?q=Aguero%201440,%20Buenos%20Aires&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale invert opacity-70 hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-1000 ease-in-out"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-[2.5rem]"></div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-beige-200 pt-20 pb-10 px-6 md:px-12 lg:px-24 border-t border-forest-900/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-20">
            <div className="col-span-2 md:col-span-1">
              <div className="flex flex-col mb-4 md:mb-6">
                <span className="font-serif text-2xl md:text-3xl tracking-tight leading-none">Culto</span>
                <span className="text-[8px] md:text-xs uppercase tracking-[0.2em] opacity-70 mt-1">mates y otras yerbas</span>
              </div>
              <p className="text-forest-900/60 max-w-xs text-[10px] md:text-sm leading-relaxed">
                El arte de regalar la tradición del mate con elegancia y calidad. Curaduría de piezas únicas para momentos especiales.
              </p>
            </div>

            <div className="col-span-2 md:col-span-1 grid grid-cols-2 gap-4 md:block md:space-y-8">
              <div>
                <h4 className="text-[10px] md:text-xs uppercase tracking-widest font-bold mb-3 md:mb-4 flex items-center gap-2">
                  <MapPin size={12} /> Ubicación
                </h4>
                <p className="text-[10px] md:text-sm text-forest-900/70">Agüero 1440, Buenos Aires, Argentina</p>
              </div>
              <div>
                <h4 className="text-[10px] md:text-xs uppercase tracking-widest font-bold mb-3 md:mb-4 flex items-center gap-2">
                  <MessageCircle size={12} /> Atención personalizada
                </h4>
                <p className="text-[10px] md:text-sm text-forest-900/70 leading-relaxed">
                  Cada pedido se coordina de forma directa por WhatsApp para asegurar una mejor experiencia.
                </p>
              </div>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="text-[10px] md:text-xs uppercase tracking-widest font-bold mb-3 md:mb-4">Contacto</h4>
              <div className="flex md:flex-col gap-4 md:gap-4">
                <button 
                  onClick={() => openWhatsApp()}
                  className="flex items-center gap-2 md:gap-3 text-[10px] md:text-sm hover:text-forest-700 transition-colors"
                >
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-forest-900/5 flex items-center justify-center">
                    <MessageCircle size={14} />
                  </div>
                  WhatsApp
                </button>
                <a 
                  href="https://www.instagram.com/matesyotrasyerbas_ba?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 md:gap-3 text-[10px] md:text-sm hover:text-forest-700 transition-colors"
                >
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-forest-900/5 flex items-center justify-center">
                    <Instagram size={14} />
                  </div>
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-forest-900/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest opacity-40 font-bold">
            <p>© 2026 Culto. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:opacity-100">Privacidad</a>
              <a href="#" className="hover:opacity-100">Términos</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => openWhatsApp()}
        className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
      >
        <MessageCircle size={28} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 whitespace-nowrap font-medium">
          ¿En qué podemos ayudarte?
        </span>
      </motion.button>
    </div>
  );
}
