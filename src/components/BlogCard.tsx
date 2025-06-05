
import React from 'react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, image, date, slug }) => {
  return (
    <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6">
        <div className="mb-3">
          <time className="font-open-sans text-sm text-text-secondary">
            {date}
          </time>
        </div>
        
        <h3 className="font-montserrat font-semibold text-xl text-text-primary mb-3 hover:text-pink-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="font-open-sans text-text-secondary mb-6 leading-relaxed">
          {excerpt}
        </p>
        
        <a 
          href={`/blog/${slug}`}
          className="inline-flex items-center text-pink-primary font-montserrat font-semibold hover:text-pink-primary/80 transition-colors duration-300"
        >
          Leer más 
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </article>
  );
};

export default BlogCard;
