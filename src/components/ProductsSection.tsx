
import React from 'react';
import ProductCard from './ProductCard';

const ProductsSection = () => {
  const products = [
    {
      name: "Alfajor Triple Chocolate",
      price: "$5.00",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Deliciosas galletitas de chocolate rellenas con dulce de leche y bañadas en chocolate."
    },
    {
      name: "Alfajor Clásico",
      price: "$4.50",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "El alfajor tradicional argentino con galletitas suaves y abundante dulce de leche."
    },
    {
      name: "Alfajor de Maicena",
      price: "$4.75",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Tiernas galletitas de maicena con dulce de leche casero y coco rallado."
    },
    {
      name: "Alfajor Negro",
      price: "$5.25",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Galletitas de chocolate negro con dulce de leche y cobertura de chocolate amargo."
    },
    {
      name: "Alfajor de Frutas",
      price: "$4.75",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Galletitas con dulce de leche y mermelada de frutas naturales."
    },
    {
      name: "Alfajor Gigante",
      price: "$8.00",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Nuestro alfajor más grande, perfecto para compartir o para los más golosos."
    }
  ];

  return (
    <section id="productos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-semibold text-4xl md:text-5xl text-text-primary mb-4">
            Nuestros Productos
          </h2>
          <p className="font-open-sans text-lg text-text-secondary max-w-2xl mx-auto">
            Cada alfajor es elaborado artesanalmente con ingredientes de la más alta calidad, 
            siguiendo recetas tradicionales argentinas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white border-2 border-pink-primary text-pink-primary hover:bg-pink-primary hover:text-white font-montserrat font-semibold px-8 py-4 rounded-lg transition-all duration-300">
            Ver todos los productos
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
