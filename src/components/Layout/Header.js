import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-[#E62E2D] bg-white py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <a aria-current="page" className="flex items-center" href="/">
              <img 
                className="h-7 w-auto" 
                src="images/Elaan-logo.png" 
                alt="Logo" 
              />
              <p className="sr-only">House OF Elaan</p>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <a href="/" className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100">
              Home
            </a>
            <a href="#aboutus" className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100">
              About Us
            </a>
            <a href="#our-mission" className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100">
              Our Mission
            </a>
            <a href="#our-vision" className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100">
              Our Vision
            </a>
            <a href="#our-core-value" className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100">
              Core Value
            </a>
            <a href="#our-companies" className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100">
              Our Companies
            </a>
            <a href="#contact-us" className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-900 focus:outline-none"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-white shadow-lg">
            <div className="flex flex-col px-4 py-4 space-y-2">
              <a href="#aboutus" className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100">
                About Us
              </a>
              <a href="#our-mission" className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100">
                Our Mission
              </a>
              <a href="#our-vision" className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100">
                Our Vision
              </a>
              <a href="#contact-us" className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100">
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
