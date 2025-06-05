
import React, { useState } from 'react';
import { ShoppingCart, User, Menu, X, Facebook, Instagram } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Productos', href: '#productos' },
    { name: 'Nuestra historia', href: '#historia' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contacto', href: '#contacto' }
  ];

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-border-light">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="font-montserrat font-bold text-2xl text-text-primary">
              Pink Goat Alfajores
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-montserrat font-medium text-text-primary hover:text-pink-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Icons & Social */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <a href="#" className="text-text-primary hover:text-pink-primary transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-text-primary hover:text-pink-primary transition-colors duration-300">
                <Instagram size={20} />
              </a>
            </div>
            <div className="w-px h-6 bg-border-light"></div>
            <button className="text-text-primary hover:text-pink-primary transition-colors duration-300">
              <User size={24} />
            </button>
            <button className="relative text-text-primary hover:text-pink-primary transition-colors duration-300">
              <ShoppingCart size={24} />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-montserrat font-semibold">
                  {cartItems}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-text-primary hover:text-pink-primary transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border-light">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-montserrat font-medium text-text-primary hover:text-pink-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-border-light">
                <a href="#" className="text-text-primary hover:text-pink-primary transition-colors duration-300">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-text-primary hover:text-pink-primary transition-colors duration-300">
                  <Instagram size={20} />
                </a>
                <button className="text-text-primary hover:text-pink-primary transition-colors duration-300">
                  <User size={24} />
                </button>
                <button className="relative text-text-primary hover:text-pink-primary transition-colors duration-300">
                  <ShoppingCart size={24} />
                  {cartItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-pink-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-montserrat font-semibold">
                      {cartItems}
                    </span>
                  )}
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
