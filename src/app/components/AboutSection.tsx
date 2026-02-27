export function AboutSection() {
  const stats = [
    { label: 'Founded', value: '2014' },
    { label: 'Service Area', value: 'Arkansas, Louisiana, and Texas Region' },
    { label: '5-Star Sister Company', value: 'OpExcellence Tree and Stump Pros' },
  ];

  return (
    <section id="about" className="bg-[#111111] py-16 md:py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20">
          {/* Left Column: About Text */}
          <div>
            <h2 className="text-white uppercase mb-6 md:mb-8 tracking-tight text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: 'var(--font-family-heading)' }}>
              ABOUT <span className="text-[#5E2D91]">OPEXcellence</span>
            </h2>
            <div className="space-y-4 md:space-y-6">
              <p className="text-[#CCCCCC] leading-relaxed text-sm md:text-base">
                OpExcellence Facility Services is a Shreveport, LA-based diversified essential services company primarily serving the ARK-LA-TEX region, albeit we readily expand our reach beyond the area when compelling client needs dictate that we do so. As a Service-Disabled Veteran-Owned Business, we bring military-grade precision and over 12 years of hands on tree service, demolition & excavation, and strategic sourcing and procurement expertise to every accepted job. Our licensed, insured, and bonded professionals are highly trained and skilled at providing exceptional services and products for a reasonable price.
              </p>
              <p className="text-[#CCCCCC] leading-relaxed text-sm md:text-base">
                We proudly serve our customers with integrity beyond reproach, professionalism, and respect for their property. Call us TODAY at <a href="tel:318-333-6115" className="text-[#5E2D91] hover:text-[#3E1F63] font-semibold transition-colors duration-200">318-333-6115</a> for your FREE onsite estimate. Whether its our ISA-Certified and ISA Tree Risk Assessment Qualified Arborist tending to your tree service needs, or our talent team of demolition experts assessing your demolition needs, you've found the RIGHT provider to get your project done. You can trust OpExcellence to deliver a safe, efficient, high-quality and affordable tree service and/or demolition outcome that meets or EXCEEDS your expectations. We are actively involved in our community and give back 5% Appreciation Discounts to Military, Government Employees, Educators, Healthcare Employees, Law Enforcement and First Responders.
              </p>
              <p className="text-[#CCCCCC] leading-relaxed text-sm md:text-base">
                We don't just trim/remove trees and knock down condemned houses. We IMPROVE LANDSCAPES and bring our customers the PEACE OF MIND they seek from their tree and/or demolition-related worries. So if you're ready to clear the way, call OpExcellence at <a href="tel:318-333-6115" className="text-[#5E2D91] hover:text-[#3E1F63] font-semibold transition-colors duration-200">318-333-6115</a> today or complete the contact us form! Trust the OpExcellence Team who values safety, operationally excellent service, and above all...YOUR SATISFACTION as our next delighted customer. We look forward to serving you and any of your referrals.
              </p>
            </div>
          </div>

          {/* Right Column: Stats Cards */}
          <div className="space-y-4 md:space-y-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#1C1C1C] border border-[#5E2D91] p-6 md:p-8 rounded-md hover:bg-[#5E2D91]/5 transition-all duration-300"
              >
                <div className="text-[#5E2D91] uppercase tracking-wider text-xs md:text-sm mb-2 md:mb-3 font-semibold">
                  {stat.label}
                </div>
                <div className="text-white font-bold text-base md:text-lg">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}