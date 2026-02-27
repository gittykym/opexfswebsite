import { Phone, Mail, MapPin } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#111111] py-16 md:py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-white uppercase text-3xl md:text-4xl lg:text-5xl tracking-tight mb-3 md:mb-4" style={{ fontFamily: 'var(--font-family-heading)', fontWeight: 800 }}>
            REQUEST AN ESTIMATE
          </h2>
          <div className="w-20 md:w-32 h-1 bg-[#5E2D91]"></div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column: Contact Info Card */}
          <div className="bg-[#111111] border border-[#2A2A2A] rounded-md p-6 md:p-10">
            <h3 className="text-white uppercase tracking-wider mb-6 md:mb-8 text-lg md:text-xl font-bold">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-[#5E2D91]/10 p-3 rounded-md">
                  <Phone className="text-[#5E2D91]" size={24} />
                </div>
                <div>
                  <div className="text-[#888888] text-sm mb-1">Phone</div>
                  <a href="tel:318-333-6115" className="text-white text-lg md:text-xl font-semibold hover:text-[#5E2D91] transition-colors duration-200">
                    318-333-6115
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-[#5E2D91]/10 p-3 rounded-md">
                  <Mail className="text-[#5E2D91]" size={24} />
                </div>
                <div>
                  <div className="text-[#888888] text-sm mb-1">Email</div>
                  <a href="mailto:info@opexcellencefs.com" className="text-white text-base md:text-lg font-medium hover:text-[#5E2D91] transition-colors duration-200 break-all">
                    info@opexcellencefs.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="bg-[#5E2D91]/10 p-3 rounded-md">
                  <MapPin className="text-[#5E2D91]" size={24} />
                </div>
                <div>
                  <div className="text-[#888888] text-sm mb-1">Address</div>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=4316+Emory+St+Shreveport+LA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white font-medium leading-relaxed hover:text-[#5E2D91] transition-colors duration-200 block"
                  >
                    4316 Emory St<br />
                    Shreveport, LA
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-[#111111] border border-[#2A2A2A] rounded-md p-6 md:p-10">
            <form className="space-y-5 md:space-y-6">
              {/* First Name & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="text-white text-xs md:text-sm mb-2 block uppercase tracking-wide">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full bg-[#1C1C1C] border border-[#2A2A2A] text-white px-4 py-3 rounded-sm focus:outline-none focus:border-[#5E2D91] transition-colors duration-200 text-sm md:text-base"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="text-white text-xs md:text-sm mb-2 block uppercase tracking-wide">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full bg-[#1C1C1C] border border-[#2A2A2A] text-white px-4 py-3 rounded-sm focus:outline-none focus:border-[#5E2D91] transition-colors duration-200 text-sm md:text-base"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="text-white text-xs md:text-sm mb-2 block uppercase tracking-wide">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-[#1C1C1C] border border-[#2A2A2A] text-white px-4 py-3 rounded-sm focus:outline-none focus:border-[#5E2D91] transition-colors duration-200 text-sm md:text-base"
                  placeholder="john.doe@example.com"
                />
              </div>

              {/* Full Address */}
              <div>
                <label htmlFor="address" className="text-white text-xs md:text-sm mb-2 block uppercase tracking-wide">
                  Full Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="w-full bg-[#1C1C1C] border border-[#2A2A2A] text-white px-4 py-3 rounded-sm focus:outline-none focus:border-[#5E2D91] transition-colors duration-200 text-sm md:text-base"
                  placeholder="123 Main Street, City, State"
                />
              </div>

              {/* Phone Number & Zip Code */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="text-white text-xs md:text-sm mb-2 block uppercase tracking-wide">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-[#1C1C1C] border border-[#2A2A2A] text-white px-4 py-3 rounded-sm focus:outline-none focus:border-[#5E2D91] transition-colors duration-200 text-sm md:text-base"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="zipCode" className="text-white text-xs md:text-sm mb-2 block uppercase tracking-wide">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    className="w-full bg-[#1C1C1C] border border-[#2A2A2A] text-white px-4 py-3 rounded-sm focus:outline-none focus:border-[#5E2D91] transition-colors duration-200 text-sm md:text-base"
                    placeholder="71109"
                  />
                </div>
              </div>

              {/* Preferred Appointment Time */}
              <div>
                <label htmlFor="appointmentTime" className="text-white text-xs md:text-sm mb-2 block uppercase tracking-wide">
                  Preferred Appointment Time
                </label>
                <input
                  type="time"
                  id="appointmentTime"
                  className="w-full bg-[#1C1C1C] border border-[#2A2A2A] text-white px-4 py-3 rounded-sm focus:outline-none focus:border-[#5E2D91] transition-colors duration-200 text-sm md:text-base"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="text-white text-xs md:text-sm mb-2 block uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-[#1C1C1C] border border-[#2A2A2A] text-white px-4 py-3 rounded-sm focus:outline-none focus:border-[#5E2D91] transition-colors duration-200 resize-none text-sm md:text-base"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#5E2D91] hover:bg-[#3E1F63] text-white uppercase tracking-wide py-3 md:py-4 transition-colors duration-200 rounded-sm font-semibold text-sm md:text-base"
                >
                  SUBMIT REQUEST
                </button>
                <p className="text-[#888888] text-xs md:text-sm mt-3 text-center">
                  We'll contact you to confirm your preferred appointment time.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}