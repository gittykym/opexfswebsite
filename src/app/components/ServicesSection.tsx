import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Tree Removal',
    description: 'Safe and controlled removal of unwanted trees and debris cleanup.',
    image: 'https://images.unsplash.com/photo-1754321860056-ca7254d5e7ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwcmVtb3ZhbCUyMHNlcnZpY2V8ZW58MXx8fHwxNzcxOTQ5ODE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Residential Demolition',
    description: 'Selective or full teardown with careful site protection and haul-off.',
    image: 'https://images.unsplash.com/photo-1768406938495-b72600c52cbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW1vbGl0aW9uJTIwc2l0ZSUyMGV4Y2F2YXRvciUyMGFjdGlvbnxlbnwxfHx8fDE3NzE5NDk4MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Commercial Demolition',
    description: 'Efficient demolition for commercial structures with jobsite coordination.',
    image: 'https://images.unsplash.com/photo-1727193137566-65244ca8f209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBkZW1vbGl0aW9ufGVufDF8fHx8MTc3MTk0OTgxNXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Concrete Demolition',
    description: 'Breaking and removal of slabs, driveways, foundations, and concrete structures.',
    image: 'https://images.unsplash.com/photo-1767385945350-a5099d8f949f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGRlbW9saXRpb24lMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzcxOTQ5ODE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Land Clearing',
    description: 'Clearing vegetation, brush, and obstacles to prep land for projects.',
    image: 'https://images.unsplash.com/photo-1763478515327-3f745b2d0463?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaXRlJTIwY2xlYXJpbmclMjBjb25zdHJ1Y3Rpb24lMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzcxOTQ5ODE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Site Clearing',
    description: 'Jobsite cleanup, debris removal, and prep for construction or rebuild.',
    image: 'https://images.unsplash.com/photo-1760045788252-d8d386ea1d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzYW5kJTIwZGVsaXZlcnklMjBtYXRlcmlhbHN8ZW58MXx8fHwxNzcxOTQ5ODE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#1C1C1C] py-16 md:py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <h2 className="uppercase text-3xl md:text-4xl lg:text-5xl tracking-tight" style={{ fontFamily: 'var(--font-family-heading)' }}>
            <span className="text-white font-bold">OUR </span>
            <span className="text-[#5E2D91] font-bold">SERVICES</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#111111] border border-[#2A2A2A] hover:border-[#5E2D91] transition-all duration-300 hover:shadow-lg hover:shadow-[#5E2D91]/10 group rounded-md overflow-hidden"
            >
              {/* Service Image */}
              <div className="w-full h-48 md:h-56 lg:h-64 overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Service Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-white uppercase tracking-wide mb-3 md:mb-4" style={{ fontSize: '18px', fontWeight: 700 }}>
                  {service.title}
                </h3>
                <p className="text-[#CCCCCC] mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
                <a
                  href={`#${service.title.toLowerCase().replace(' ', '-')}`}
                  className="text-[#5E2D91] hover:text-[#3E1F63] uppercase tracking-wider text-xs md:text-sm font-semibold flex items-center gap-2 transition-colors duration-200"
                >
                  LEARN MORE
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}