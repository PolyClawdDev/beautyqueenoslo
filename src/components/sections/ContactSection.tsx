"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Send, CheckCircle } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { SectionLabel } from "@/components/ui/SectionLabel";

const contactInfo = [
  {
    icon: MapPin,
    label: "Adresse",
    value: "Trondheimsveien 170, 0570 Oslo",
    href: "https://maps.google.com/?q=Trondheimsveien+170,+0570+Oslo",
  },
  {
    icon: Clock,
    label: "Åpningstider",
    value: "Man–Fre: 11–19",
    sub: "Lørdag: 11–17 · Søndag: Stengt",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+47 94 44 70 80",
    href: "tel:+4794447080",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: "@beautyqueenoslo",
    href: "https://instagram.com/beautyqueenoslo",
  },
];

const serviceInterests = [
  "PMU", "Brows", "Lashes", "Negler", "Kurs & Training", "Annet",
];

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="kontakt" className="bg-[#FAF6F2] section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <SectionLabel className="justify-center mb-6">Kontakt Oss</SectionLabel>
          <h2 className="heading-lg text-[#0B0B0D] mb-4">
            Vi hjelper deg gjerne
          </h2>
          <p className="text-[#666] font-sans max-w-lg mx-auto leading-relaxed text-sm">
            Har du spørsmål om tjenester, booking eller kurs? Ikke nøl med å ta kontakt –
            vi svarer raskt og profesjonelt.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6 mb-10">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-white border border-[#E8D9D2] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4.5 h-4.5 text-[#B76E79]" />
                    </div>
                    <div>
                      <p className="label-luxury text-[9px] tracking-[0.2em] text-[#C9A27E] mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-[#0B0B0D] font-medium hover:text-[#B76E79] transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-[#0B0B0D] font-medium">{item.value}</p>
                      )}
                      {item.sub && (
                        <p className="text-[#999] text-xs mt-0.5">{item.sub}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Google Map embed */}
            <div className="relative h-56 overflow-hidden border border-[#E8D9D2]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.6764802345428!2d10.796!3d59.9285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e8b3d1c5b7d%3A0x123456789abcdef!2sTrondheimsveien%20170%2C%200570%20Oslo!5e0!3m2!1sno!2sno!4v1680000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(20%) contrast(1.05) saturate(0.9)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Beauty Queen Oslo – Trondheimsveien 170"
              />
              {/* Address overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-[#E8D9D2] px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#B76E79] flex-shrink-0" />
                  <span className="text-[#0B0B0D] text-xs font-medium">Trondheimsveien 170, 0570 Oslo</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Trondheimsveien+170,+0570+Oslo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-luxury text-[9px] tracking-[0.15em] text-[#B76E79] hover:text-[#9B5560] transition-colors whitespace-nowrap"
                >
                  Åpne i Maps →
                </a>
              </div>
            </div>

            {/* Quick book CTA */}
            <div className="mt-8 bg-gradient-to-r from-[#B76E79] to-[#C9A27E] p-6">
              <p className="text-white font-serif text-lg mb-2">Klar til å booke?</p>
              <p className="text-white/80 text-sm mb-4">
                Bruk vår online bookingmodul for en sømløs opplevelse.
              </p>
              <button
                onClick={() => {
                  const el = document.querySelector("#booking");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-white text-[#B76E79] label-luxury text-[10px] tracking-[0.2em] px-6 py-3 hover:bg-[#FAF6F2] transition-colors"
              >
                Book Nå
              </button>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white border border-[#E8D9D2] p-12 text-center h-full flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F3E6E8] to-[#E8D9D2] flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-[#B76E79]" />
                </div>
                <h3 className="font-serif text-2xl text-[#0B0B0D] mb-3">Meldingen er sendt!</h3>
                <p className="text-[#999] text-sm leading-relaxed mb-6">
                  Takk for henvendelsen. Vi kommer tilbake til deg innen kort tid.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="label-luxury text-[10px] tracking-[0.2em] text-[#B76E79] border-b border-[#B76E79] pb-0.5"
                >
                  Send ny melding
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-[#E8D9D2] p-5 sm:p-8 lg:p-10"
              >
                <h3 className="font-serif text-xl text-[#0B0B0D] mb-6">Send oss en melding</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="label-luxury text-[9px] tracking-[0.2em] text-[#999] block mb-2">
                      Navn *
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-[#FAF6F2] border border-[#E8D9D2] text-[#0B0B0D] px-4 py-3.5 text-base min-h-[50px] focus:outline-none focus:border-[#B76E79] transition-colors"
                      placeholder="Ditt fulle navn"
                    />
                  </div>
                  <div>
                    <label className="label-luxury text-[9px] tracking-[0.2em] text-[#999] block mb-2">
                      E-post *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[#FAF6F2] border border-[#E8D9D2] text-[#0B0B0D] px-4 py-3.5 text-base min-h-[50px] focus:outline-none focus:border-[#B76E79] transition-colors"
                      placeholder="din@epost.no"
                    />
                  </div>
                  <div>
                    <label className="label-luxury text-[9px] tracking-[0.2em] text-[#999] block mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-[#FAF6F2] border border-[#E8D9D2] text-[#0B0B0D] px-4 py-3.5 text-base min-h-[50px] focus:outline-none focus:border-[#B76E79] transition-colors"
                      placeholder="+47 000 00 000"
                    />
                  </div>
                  <div>
                    <label className="label-luxury text-[9px] tracking-[0.2em] text-[#999] block mb-2">
                      Interessert i
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full bg-[#FAF6F2] border border-[#E8D9D2] text-[#0B0B0D] px-4 py-3.5 text-base min-h-[50px] focus:outline-none focus:border-[#B76E79] transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Velg tjeneste</option>
                      {serviceInterests.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="label-luxury text-[9px] tracking-[0.2em] text-[#999] block mb-2">
                    Melding *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[#FAF6F2] border border-[#E8D9D2] text-[#0B0B0D] px-4 py-3.5 text-base focus:outline-none focus:border-[#B76E79] transition-colors resize-none"
                    placeholder="Skriv din melding her..."
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center gap-2 bg-[#0B0B0D] text-[#F7F2EE] font-sans font-medium text-xs tracking-[0.2em] uppercase px-8 py-4 min-h-[52px] hover:bg-[#2A2A2A] transition-colors w-full justify-center touch-manipulation"
                >
                  Send Melding
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
