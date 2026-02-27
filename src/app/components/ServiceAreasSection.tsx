import { MapPin } from 'lucide-react';

const serviceAreas = [
  'Shreveport, LA',
  'Bossier City, LA',
  'Barksdale Air Force Base, LA',
  'Benton, LA',
  'Minden, LA',
  'Haughton, LA',
  'Greenwood, LA',
  'Blanchard, LA',
  'Stonewall, LA',
  'Keithville, LA',
  'Vivian, LA',
  'Bethany, LA',
  'Plain Dealing, LA',
  'Elm Grove, LA',
  'Spring Ridge, LA',
  'Grand Cane, LA',
  'Waskom, TX',
  'Marshall, TX',
];

export function ServiceAreasSection() {
  return (
    <section id="service-areas" className="bg-[#1C1C1C] py-16 md:py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-white uppercase tracking-tight mb-3 md:mb-4 text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: 'var(--font-family-heading)' }}>
            REACHING EVERY CORNER
          </h2>
          <p className="text-white mb-2 text-lg md:text-xl" style={{ fontFamily: 'var(--font-family-heading)' }}>
            Discover Our Service Areas
          </p>
          <p className="text-[#AAAAAA] max-w-2xl mx-auto leading-relaxed text-sm md:text-base px-4">
            Find out how we bring our unmatched expertise to Shreveport, LA, and the surrounding areas.
          </p>
        </div>

        {/* Areas Title */}
        <div className="mb-8 md:mb-10">
          <h3 className="text-white uppercase tracking-wider inline-block pb-2 border-b-2 border-[#5E2D91] text-sm md:text-base">
            ARKANSAS, LOUISIANA, AND TEXAS REGION AREAS WE SERVE
          </h3>
        </div>

        {/* Service Areas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {serviceAreas.map((area, index) => (
            <div
              key={index}
              className="bg-[#111111] border border-[#2A2A2A] px-4 md:px-6 py-4 md:py-5 rounded-md hover:border-[#5E2D91] hover:bg-[#5E2D91]/5 transition-all duration-200 group"
            >
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-[#5E2D91] flex-shrink-0" />
                <span className="text-white group-hover:text-[#5E2D91] transition-colors duration-200 font-medium text-sm md:text-base">
                  {area}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}