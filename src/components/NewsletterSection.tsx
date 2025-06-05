
import React, { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Newsletter subscription:', email);
    setEmail('');
    alert('¡Gracias por suscribirte! Pronto recibirás nuestras novedades.');
  };

  return (
    <section className="py-20 bg-pink-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-text-primary mb-4">
            Suscríbete y recibe nuestras novedades
          </h2>
          
          <p className="font-open-sans text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Sé el primero en enterarte de nuevos sabores, promociones exclusivas y 
            recetas especiales directo en tu bandeja de entrada.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingresa tu email"
                className="flex-1 px-6 py-4 border-2 border-pink-primary rounded-lg font-open-sans text-lg focus:outline-none focus:ring-2 focus:ring-pink-primary/50 transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="bg-pink-primary hover:bg-pink-primary/90 text-white font-montserrat font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
              >
                Suscribirme
              </button>
            </div>
          </form>

          <p className="font-open-sans text-sm text-text-secondary mt-4">
            No enviamos spam. Puedes darte de baja en cualquier momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
