
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-4">
          Pink Goat Alfajores
        </h1>
        <h2 className="font-montserrat font-semibold text-2xl md:text-4xl lg:text-5xl text-white/90 mb-6">
          Auténticos alfajores artesanales en Miami
        </h2>
        <p className="font-playfair italic text-lg md:text-xl lg:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
          Cada bocado, un pedacito de Argentina
        </p>
        
        <a 
          href="#productos"
          className="inline-block bg-pink-primary hover:bg-pink-primary/90 text-white font-montserrat font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          ¡Ordena Ahora!
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
