
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  date: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, date }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
      <div className="mb-6">
        <svg className="w-8 h-8 text-pink-primary mb-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L18.497 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003z"/>
        </svg>
      </div>
      
      <p className="font-playfair italic text-lg text-text-primary mb-6 leading-relaxed">
        "{quote}"
      </p>
      
      <div className="border-t border-border-light pt-4">
        <p className="font-montserrat font-semibold text-text-primary">
          {author}
        </p>
        <p className="font-open-sans text-sm text-text-secondary">
          {date}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
