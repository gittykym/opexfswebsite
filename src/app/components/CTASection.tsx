export function CTASection() {
  return (
    <section className="bg-[#111111] py-32">
      <div className="max-w-[1440px] mx-auto px-8 text-center">
        {/* Headline */}
        <h2 className="text-white uppercase mb-12 tracking-tight" style={{ fontSize: '48px', fontWeight: 800, fontFamily: 'var(--font-family-heading)' }}>
          READY TO START YOUR NEXT PROJECT?
        </h2>

        {/* CTA Button */}
        <button className="bg-[#5E2D91] hover:bg-[#3E1F63] text-white uppercase tracking-wide px-12 py-6 transition-colors duration-200 rounded-sm font-semibold text-lg">
          REQUEST A FREE ESTIMATE
        </button>
      </div>
    </section>
  );
}