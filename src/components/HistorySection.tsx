
import React from 'react';

const HistorySection = () => {
  return (
    <section id="historia" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Mariana Cioffi, fundadora de Pink Goat Alfajores"
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="font-montserrat font-semibold text-4xl md:text-5xl text-text-primary">
              Nuestra Historia
            </h2>
            
            <div className="space-y-4">
              <p className="font-open-sans text-lg text-text-secondary leading-relaxed">
                <strong className="text-text-primary">Mariana Cioffi</strong>, pastelera argentina graduada de MAUSI SEBESS, 
                llegó a Miami en 2012 con el anhelo de compartir los sabores de su infancia.
              </p>
              
              <p className="font-open-sans text-lg text-text-secondary leading-relaxed">
                Tras fundar "Cakes Maker Miami" y consolidarse en el mundo de la repostería, 
                decidió reinventar su pasión: crear <strong className="text-pink-primary">Pink Goat Alfajores</strong>, 
                rescatando la auténtica tradición de nuestros alfajores artesanales.
              </p>
              
              <p className="font-open-sans text-lg text-text-secondary leading-relaxed">
                Cada cookie es elaborada a mano, con ingredientes de la más alta calidad, 
                combinando dedicación y tradición en cada bocado.
              </p>
            </div>

            <blockquote className="border-l-4 border-pink-primary pl-6 my-8">
              <p className="font-playfair italic text-xl text-text-primary">
                "Cada alfajor lleva un pedacito de mi corazón argentino y el amor por las tradiciones de mi tierra."
              </p>
              <footer className="font-montserrat font-semibold text-text-secondary mt-2">
                — Mariana Cioffi, Fundadora
              </footer>
            </blockquote>

            <a 
              href="#blog"
              className="inline-block bg-white border-2 border-pink-primary text-pink-primary hover:bg-pink-primary hover:text-white font-montserrat font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Leer más sobre nuestra historia
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
