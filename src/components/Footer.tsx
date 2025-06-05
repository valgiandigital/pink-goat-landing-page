
import React from 'react';
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-6">Enlaces rápidos</h3>
            <ul className="space-y-3">
              {['Home', 'Productos', 'Nuestra historia', 'Blog', 'Contacto'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="font-open-sans text-white/80 hover:text-pink-primary transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-6">Síguenos</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-white/80 hover:text-pink-primary transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="#" 
                className="text-white/80 hover:text-pink-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="#" 
                className="text-white/80 hover:text-pink-primary transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
            </div>
            <p className="font-open-sans text-white/60 text-sm mt-4">
              Comparte tus momentos con #PinkGoatAlfajores
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-6">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-pink-primary mt-1 flex-shrink-0" />
                <span className="font-open-sans text-white/80 text-sm">
                  Miami, Florida<br />Estados Unidos
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-pink-primary flex-shrink-0" />
                <span className="font-open-sans text-white/80 text-sm">
                  +1 (305) 555-0123
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-pink-primary flex-shrink-0" />
                <span className="font-open-sans text-white/80 text-sm">
                  info@pinkgoatalfajores.com
                </span>
              </li>
            </ul>
          </div>

          {/* Políticas */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-6">Información legal</h3>
            <ul className="space-y-3">
              {['Términos y Condiciones', 'Política de Privacidad', 'Envíos y Devoluciones', 'FAQ'].map((item) => (
                <li key={item}>
                  <a 
                    href="#"
                    className="font-open-sans text-white/80 hover:text-pink-primary transition-colors duration-300 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="font-montserrat font-bold text-xl text-white">
                Pink Goat Alfajores
              </h4>
              <p className="font-open-sans text-white/60 text-sm">
                Auténticos alfajores artesanales desde 2012
              </p>
            </div>
            <p className="font-open-sans text-white/60 text-sm text-center">
              © {currentYear} Pink Goat Alfajores. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
