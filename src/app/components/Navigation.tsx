import { Phone, Menu, X } from 'lucide-react';
import logoImage from 'figma:asset/39f5b53ea7a9b9cb6b710974e8b56ac2269c1836.png';
import { useState } from 'react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#111111]/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-[#2A2A2A]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-4 md:py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logoImage} alt="OpExcellence Facility Services" className="h-16 md:h-20 lg:h-24" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#services" className="nav-link">
            Services
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#service-areas" className="nav-link">
            Service Areas
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
          
          {/* Phone */}
          <a 
            href="tel:318-333-6115" 
            className="flex items-center gap-2 text-white hover:text-[#5E2D91] transition-colors duration-200 font-medium ml-4 text-base"
          >
            <Phone size={18} />
            <span>318-333-6115</span>
          </a>
        </div>

        {/* Mobile Menu Button & Phone */}
        <div className="flex items-center gap-4 lg:hidden">
          <a 
            href="tel:318-333-6115" 
            className="text-white hover:text-[#5E2D91] transition-colors duration-200"
          >
            <Phone size={20} />
          </a>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:text-[#5E2D91] transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111111] border-t border-[#2A2A2A]">
          <div className="px-4 py-6 space-y-4">
            <a 
              href="#home" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-white hover:text-[#5E2D91] transition-colors duration-200 font-medium py-2"
            >
              Home
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-white hover:text-[#5E2D91] transition-colors duration-200 font-medium py-2"
            >
              Services
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-white hover:text-[#5E2D91] transition-colors duration-200 font-medium py-2"
            >
              About
            </a>
            <a 
              href="#service-areas" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-white hover:text-[#5E2D91] transition-colors duration-200 font-medium py-2"
            >
              Service Areas
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-white hover:text-[#5E2D91] transition-colors duration-200 font-medium py-2"
            >
              Contact
            </a>
            <a 
              href="tel:318-333-6115" 
              className="flex items-center gap-2 text-white hover:text-[#5E2D91] transition-colors duration-200 font-medium py-2"
            >
              <Phone size={18} />
              <span>318-333-6115</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}