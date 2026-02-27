import { Phone, Mail, MapPin } from 'lucide-react';
import logoImage from 'figma:asset/c9e85d4b26e747fd601c6fbf907ccadd2b172e11.png';

export function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Service Areas', href: '#service-areas' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#0F0F0F] py-12 md:py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16 mb-12 md:mb-16">
          {/* Column 1: Company Info */}
          <div>
            <div className="mb-4 md:mb-6">
              <img src={logoImage} alt="OpExcellence Facility Services" className="h-16 md:h-20" />
            </div>
            <p className="text-[#888888] leading-relaxed text-sm md:text-base">
              Leading provider of professional demolition, site clearing, tree removal, and material delivery services. Transforming spaces with precision and safety.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white uppercase tracking-wider mb-4 md:mb-6 font-bold text-sm md:text-base">
              Quick Links
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#888888] hover:text-[#5E2D91] transition-colors duration-200 text-sm md:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-white uppercase tracking-wider mb-4 md:mb-6 font-bold text-sm md:text-base">
              Contact Info
            </h3>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <a
                  href="tel:318-333-6115"
                  className="flex items-start gap-3 text-white hover:text-[#5E2D91] transition-colors duration-200 text-sm md:text-base"
                >
                  <Phone size={20} className="mt-0.5 flex-shrink-0" />
                  <span>318-333-6115</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@opexcellencefs.com"
                  className="flex items-start gap-3 text-white hover:text-[#5E2D91] transition-colors duration-200 text-sm md:text-base break-all"
                >
                  <Mail size={20} className="mt-0.5 flex-shrink-0" />
                  <span>info@opexcellencefs.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white text-sm md:text-base">
                <MapPin size={20} className="mt-0.5 flex-shrink-0" />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=4316+Emory+St+Shreveport+LA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#5E2D91] transition-colors duration-200"
                >
                  4316 Emory St
                  <br />
                  Shreveport, LA
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 md:pt-8 border-t border-[#2A2A2A]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#888888] text-xs md:text-sm text-center md:text-left">
              © 2026 OpExcellence Facility Services. All rights reserved.
            </p>
            <div className="flex gap-6 md:gap-8">
              <a href="#privacy" className="text-[#888888] hover:text-[#5E2D91] text-xs md:text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#terms" className="text-[#888888] hover:text-[#5E2D91] text-xs md:text-sm transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}