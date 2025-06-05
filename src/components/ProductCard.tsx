
import React from 'react';

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  description?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image, description }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="font-montserrat font-semibold text-xl text-text-primary mb-2">
          {name}
        </h3>
        {description && (
          <p className="font-open-sans text-text-secondary text-sm mb-4">
            {description}
          </p>
        )}
        <div className="flex items-center justify-between">
          <span className="font-montserrat font-bold text-2xl text-pink-primary">
            {price}
          </span>
          <button className="bg-pink-primary hover:bg-pink-primary/90 text-white font-montserrat font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
