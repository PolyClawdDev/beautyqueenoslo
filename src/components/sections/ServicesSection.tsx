"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Plus, Minus, Clock } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { services } from "@/lib/data/services";
import { formatPrice, formatDuration } from "@/lib/utils";


export function ServicesSection() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const scrollToBooking = () => {
    const el = document.querySelector("#booking");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="tjenester" className="bg-[#FAF6F2] section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <SectionLabel className="justify-center mb-6">Tjenester</SectionLabel>
          <h2 className="heading-lg text-[#0B0B0D] mb-6">
            Skjønnhet på høyeste nivå
          </h2>
          <p className="text-[#666] font-sans max-w-xl mx-auto leading-relaxed">
            Hvert behandling er en luksusopplevelse skreddersydd til deg.
            Fra PMU til negler – vi leverer resultater som overgår forventninger.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className={`group relative bg-white overflow-hidden card-shadow hover:luxury-shadow-hover transition-all duration-500 ${
                i === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Category label */}
                <div className="absolute top-4 left-4">
                  <span
                    className="label-luxury text-[9px] tracking-[0.2em] px-3 py-1.5 text-white"
                    style={{ backgroundColor: `${service.accentColor}CC`, backdropFilter: "blur(8px)" }}
                  >
                    {service.subtitle}
                  </span>
                </div>

                {/* Title overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-serif text-2xl text-white mb-1">{service.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-[#666] text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Sub-services toggle */}
                <button
                  onClick={() =>
                    setExpandedService(
                      expandedService === service.id ? null : service.id
                    )
                  }
                  className="flex items-center justify-between w-full py-3 border-t border-[#E8D9D2] text-[#0B0B0D] hover:text-[#B76E79] transition-colors duration-200"
                >
                  <span className="label-luxury text-[10px] tracking-[0.15em]">
                    Behandlinger
                  </span>
                  {expandedService === service.id ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </button>

                <AnimatePresence>
                  {expandedService === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 space-y-3">
                        {service.subServices.map((sub) => (
                          <div
                            key={sub.id}
                            className="flex items-start justify-between gap-4 py-3 border-b border-[#F3E6E8] last:border-0"
                          >
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <p className="text-[#0B0B0D] text-sm font-medium">{sub.name}</p>
                                {sub.popular && (
                                  <span className="label-luxury text-[8px] tracking-wider bg-[#F3E6E8] text-[#B76E79] px-2 py-0.5 rounded-full">
                                    Populær
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center gap-1 text-[#999] text-xs">
                                <Clock className="w-3 h-3" />
                                <span>{formatDuration(sub.duration)}</span>
                              </div>
                            </div>
                            <div className="text-right flex-shrink-0">
                              <p className="text-[#B76E79] text-sm font-medium">
                                Fra {formatPrice(sub.priceFrom)}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* CTA */}
                <div className="mt-5 flex items-center gap-3">
                  <button
                    onClick={scrollToBooking}
                    className="flex-1 bg-[#0B0B0D] text-[#F7F2EE] label-luxury text-[10px] tracking-[0.2em] py-3 hover:bg-[#2A2A2A] transition-colors duration-200 text-center"
                  >
                    Book Nå
                  </button>
                  <button
                    onClick={() =>
                      setExpandedService(
                        expandedService === service.id ? null : service.id
                      )
                    }
                    className="p-3 border border-[#E8D9D2] hover:border-[#B76E79] hover:text-[#B76E79] transition-colors duration-200"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="text-[#999] text-sm mb-4">
            Alle behandlinger inkluderer en personlig konsultasjon
          </p>
          <button
            onClick={scrollToBooking}
            className="inline-flex items-center gap-2 text-[#B76E79] hover:text-[#9B5560] label-luxury text-[11px] tracking-[0.2em] transition-colors duration-200 border-b border-[#B76E79] pb-0.5"
          >
            Se alle priser
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
