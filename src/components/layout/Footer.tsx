"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";

const footerLinks = {
  tjenester: [
    { label: "PMU", href: "#tjenester" },
    { label: "Brows", href: "#tjenester" },
    { label: "Lashes", href: "#tjenester" },
    { label: "Negler", href: "#tjenester" },
    { label: "Kurs & Training", href: "#kurs" },
  ],
  salong: [
    { label: "Om Oss", href: "#om-oss" },
    { label: "Galleri", href: "#galleri" },
    { label: "Priser", href: "#priser" },
    { label: "Booking", href: "#booking" },
    { label: "Kontakt", href: "#kontakt" },
  ],
  legal: [
    { label: "Personvern", href: "#" },
    { label: "Vilkår", href: "#" },
    { label: "Cookiepolicy", href: "#" },
  ],
};

export function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0B0B0D] text-[#F7F2EE] pb-20 md:pb-0">
      {/* Main CTA strip */}
      <div className="border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="font-serif text-3xl lg:text-4xl text-white mb-2">
                Klar for en luksusopplevelse?
              </h2>
              <p className="text-[#D8B7A6] font-sans text-sm">
                Book din time hos Beauty Queen Oslo i dag
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="gold"
                size="lg"
                onClick={() => scrollTo("#booking")}
              >
                Book Nå
              </Button>
              <Button
                size="lg"
                onClick={() => scrollTo("#kontakt")}
                className="bg-transparent border border-[#C9A27E]/40 text-[#C9A27E] hover:bg-[#C9A27E]/10"
              >
                Ta Kontakt
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button onClick={() => scrollTo("#hjem")} className="block mb-6">
              <Image
                src="/LOGO1.png"
                alt="Beauty Queen Oslo"
                width={130}
                height={130}
                style={{ width: 130, height: 130 }}
                className="object-contain"
              />
            </button>
            <p className="text-[#D8B7A6] text-sm leading-relaxed mb-6">
              Oslos mest eksklusive skjønnhetssalong. Spesialist på PMU, brows, lashes og negler.
            </p>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9A27E]/20 to-[#B76E79]/20 border border-[#C9A27E]/30 flex items-center justify-center">
                <span className="text-[#C9A27E] text-xs font-bold">★</span>
              </div>
              <div>
                <p className="text-white text-xs font-medium">3. Plass Verdensmester</p>
                <p className="text-[#C9A27E] text-[10px] tracking-widest">OMC WORLD CHAMPION</p>
              </div>
            </div>
            <a
              href="https://instagram.com/beautyqueenoslo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#D8B7A6] hover:text-[#C9A27E] transition-colors group"
            >
              <InstagramIcon className="w-5 h-5" />
              <span className="text-sm">@beautyqueenoslo</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="label-luxury text-[#C9A27E] mb-6">Tjenester</h4>
            <ul className="space-y-3">
              {footerLinks.tjenester.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-[#D8B7A6] hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="label-luxury text-[#C9A27E] mb-6">Salong</h4>
            <ul className="space-y-3">
              {footerLinks.salong.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-[#D8B7A6] hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="label-luxury text-[#C9A27E] mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C9A27E] mt-0.5 flex-shrink-0" />
                <a
                  href="https://maps.google.com/?q=Trondheimsveien+170,+0570+Oslo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D8B7A6] hover:text-white text-sm transition-colors leading-snug"
                >
                  Trondheimsveien 170<br />0570 Oslo, Norge
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C9A27E] flex-shrink-0" />
                <a href="tel:+4794447080" className="text-[#D8B7A6] hover:text-white text-sm transition-colors">
                  +47 94 44 70 80
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C9A27E] flex-shrink-0" />
                <a href="mailto:booking@beautyqueenoslo.no" className="text-[#D8B7A6] hover:text-white text-sm transition-colors">
                  booking@beautyqueenoslo.no
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <h4 className="label-luxury text-[#C9A27E] mb-4">Åpningstider</h4>
              <div className="space-y-1.5 text-sm text-[#D8B7A6]">
                <div className="flex justify-between gap-6">
                  <span>Man – Fre</span>
                  <span className="text-white">11:00–19:00</span>
                </div>
                <div className="flex justify-between gap-6">
                  <span>Lørdag</span>
                  <span className="text-white">11:00–17:00</span>
                </div>
                <div className="flex justify-between gap-6">
                  <span>Søndag</span>
                  <span className="text-[#B76E79]">Stengt</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-12 border-t border-[#2A2A2A]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-white font-serif text-lg mb-1">Hold deg oppdatert</p>
              <p className="text-[#D8B7A6] text-sm">Motta nyheter, tilbud og inspirasjon fra Beauty Queen Oslo.</p>
            </div>
            <div className="flex w-full lg:w-auto gap-0">
              <input
                type="email"
                placeholder="Din e-postadresse"
                className="flex-1 lg:w-72 bg-[#1a1a1f] border border-[#2A2A2A] text-white placeholder-[#666] text-sm px-4 py-3.5 min-h-[50px] focus:outline-none focus:border-[#C9A27E] transition-colors"
              />
              <button className="bg-[#C9A27E] text-[#0B0B0D] px-5 py-3.5 min-h-[50px] text-xs font-medium tracking-[0.15em] uppercase hover:bg-[#E2C89A] transition-colors whitespace-nowrap touch-manipulation">
                Meld På
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#2A2A2A] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#666] text-xs">
            © {new Date().getFullYear()} Beauty Queen Oslo. Alle rettigheter forbeholdt.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#666] hover:text-[#D8B7A6] text-xs transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
