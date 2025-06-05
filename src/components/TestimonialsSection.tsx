
import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Los mejores alfajores que he probado. ¡Se sienten caseros y con mucho dulce de leche!",
      author: "Ana Cecilia Noronha",
      date: "07/04/2024"
    },
    {
      quote: "Cada vez que tengo invitados, ordeno alfajores de Pink Goat. Siempre son un éxito total.",
      author: "Carlos Mendoza",
      date: "15/03/2024"
    },
    {
      quote: "Me transportan directo a Buenos Aires. La calidad y el sabor son excepcionales.",
      author: "María José Fernández",
      date: "28/02/2024"
    }
  ];

  return (
    <section className="py-20 bg-pink-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-semibold text-4xl md:text-5xl text-text-primary mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="font-open-sans text-lg text-text-secondary max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mayor recompensa. 
            Cada reseña nos motiva a seguir creando los mejores alfajores artesanales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-open-sans text-text-secondary mb-4">
            ¿Ya probaste nuestros alfajores?
          </p>
          <button className="bg-pink-primary hover:bg-pink-primary/90 text-white font-montserrat font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
            Déjanos tu reseña
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
