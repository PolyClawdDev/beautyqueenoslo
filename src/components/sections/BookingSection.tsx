"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BookingWizard } from "@/components/booking/BookingWizard";
import { Clock, MapPin, Phone } from "lucide-react";

export function BookingSection() {
  return (
    <section id="booking" className="bg-[#F7F2EE] section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            <SectionLabel className="mb-6">Online Booking</SectionLabel>
            <h2 className="heading-md text-[#0B0B0D] mb-6">
              Book din
              <br />
              <em className="font-serif not-italic text-[#B76E79]">luksusopplevelse</em>
            </h2>
            <p className="text-[#666] text-sm leading-relaxed mb-8">
              En enkel og elegant bookingprosess for å sikre din plass hos
              Beauty Queen Oslo. Vi bekrefter din time innen kort tid.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F3E6E8] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-[#B76E79]" />
                </div>
                <div>
                  <p className="text-[#0B0B0D] font-medium text-sm">Åpningstider</p>
                  <p className="text-[#999] text-xs mt-0.5">Man–Fre: 11–19 · Lør: 11–17</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F3E6E8] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-[#B76E79]" />
                </div>
                <div>
                  <p className="text-[#0B0B0D] font-medium text-sm">Lokasjon</p>
                  <a
                    href="https://maps.google.com/?q=Trondheimsveien+170,+0570+Oslo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#999] text-xs mt-0.5 hover:text-[#B76E79] transition-colors block"
                  >
                    Trondheimsveien 170, 0570 Oslo
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F3E6E8] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-[#B76E79]" />
                </div>
                <div>
                  <p className="text-[#0B0B0D] font-medium text-sm">Telefon</p>
                  <a href="tel:+4794447080" className="text-[#999] text-xs mt-0.5 hover:text-[#B76E79] transition-colors block">
                    +47 94 44 70 80
                  </a>
                </div>
              </div>
            </div>

            {/* Policy note */}
            <div className="mt-8 bg-white border border-[#E8D9D2] p-5">
              <p className="label-luxury text-[9px] tracking-[0.2em] text-[#C9A27E] mb-2">
                Avbestillingspolicy
              </p>
              <p className="text-[#999] text-xs leading-relaxed">
                Avbestilling må gjøres senest 24 timer før avtalt tid.
                Ved sen avbestilling beholdes depositumet.
              </p>
            </div>
          </motion.div>

          {/* Right: Booking wizard */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white border border-[#E8D9D2] p-6 lg:p-10"
          >
            <BookingWizard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
