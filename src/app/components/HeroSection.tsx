import { ArrowRight } from 'lucide-react';
export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 md:pt-24">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/whenaherocomesalong.png')"
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8 py-16 md:py-32 w-full">
        <div className="max-w-3xl">
          {/* Founded Label */}
          <div className="inline-block mb-4 md:mb-6">
            <span className="text-[#A78BCA] text-xs md:text-sm tracking-[0.2em] font-semibold uppercase">
              FOUNDED IN 2014
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-white mb-4 md:mb-6 uppercase tracking-tight leading-[1.1] text-4xl md:text-6xl lg:text-7xl font-bold" style={{ fontFamily: 'var(--font-family-heading)' }}>
            TRANSFORMING SPACES WITH PRECISION SERVICES
          </h1>

          {/* Subheadline */}
          <p className="text-[#CCCCCC] mb-8 md:mb-12 leading-relaxed max-w-2xl text-sm md:text-base">Professional demolition, land clearing, and tree removal services throughout Shreveport and surrounding areas.</p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-[#5E2D91] text-white px-6 md:px-8 py-3 md:py-4 uppercase tracking-wide font-bold hover:bg-[#3E1F63] transition-colors duration-200 inline-flex items-center justify-center gap-2 rounded-md text-sm md:text-base"
            >
              REQUEST A FREE ESTIMATE
              <ArrowRight size={20} />
            </a>
            <a
              href="#services"
              className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 uppercase tracking-wide font-bold hover:bg-white hover:text-[#111111] transition-all duration-200 rounded-md text-center text-sm md:text-base"
            >
              VIEW SERVICES
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
