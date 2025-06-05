
import React from 'react';
import BlogCard from './BlogCard';

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Dulce de Leche: Corazón de nuestros alfajores",
      excerpt: "El dulce de leche es uno de los productos más emblemáticos de Sudamérica. En este artículo, exploramos su historia, técnicas de elaboración y por qué es el alma de nuestros alfajores.",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "5 de Enero, 2025",
      slug: "dulce-de-leche-corazon-alfajores"
    },
    {
      title: "La tradición argentina llega a Miami",
      excerpt: "Descubre cómo los alfajores argentinos conquistaron el paladar miamense y se convirtieron en el postre favorito de la comunidad latina.",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "2 de Enero, 2025",
      slug: "tradicion-argentina-miami"
    },
    {
      title: "Secretos de la repostería artesanal",
      excerpt: "Te compartimos algunos de los secretos mejor guardados de la repostería artesanal argentina y cómo aplicamos estas técnicas en cada alfajor.",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "28 de Diciembre, 2024",
      slug: "secretos-reposteria-artesanal"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-semibold text-4xl md:text-5xl text-text-primary mb-4">
            Blog & Recetas
          </h2>
          <p className="font-open-sans text-lg text-text-secondary max-w-2xl mx-auto">
            Descubre los secretos de la repostería argentina, recetas tradicionales y 
            todo sobre el mundo de los alfajores artesanales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <BlogCard {...post} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white border-2 border-pink-primary text-pink-primary hover:bg-pink-primary hover:text-white font-montserrat font-semibold px-8 py-4 rounded-lg transition-all duration-300">
            Ver todos los artículos
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
