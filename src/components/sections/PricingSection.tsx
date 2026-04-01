"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { pricingData } from "@/lib/data/pricing";

function formatDisplayPrice(price: number | string): string {
  if (typeof price === "string") return `${price} kr`;
  return new Intl.NumberFormat("nb-NO").format(price) + " kr";
}

export function PricingSection() {
  const [activeTab, setActiveTab] = useState("nails");

  const activeCategory = pricingData.find((c) => c.id === activeTab);

  const scrollToBooking = () => {
    const el = document.querySelector("#booking");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="priser" className="bg-[#0B0B0D] section-padding">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <SectionLabel light className="justify-center mb-6">
            Prisliste
          </SectionLabel>
          <h2 className="heading-lg text-white mb-4">
            Transparent prissetting
          </h2>
          <p className="text-[#D8B7A6] font-sans max-w-lg mx-auto leading-relaxed text-sm">
            Klare priser, ingen skjulte kostnader.
            Alle priser er inkl. mva.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="flex justify-center gap-3 mb-10 sm:mb-14 flex-wrap"
        >
          {pricingData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`relative flex items-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 transition-all duration-300 font-sans font-medium text-[10px] sm:text-[11px] tracking-[0.18em] uppercase min-h-[48px] touch-manipulation ${
                activeTab === cat.id
                  ? "bg-[#C9A27E] text-[#0B0B0D]"
                  : "border border-[#2A2A2A] text-[#888] hover:border-[#C9A27E]/40 hover:text-[#C9A27E]"
              }`}
            >
              <span className="text-base leading-none">{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Grouped pricing */}
        <AnimatePresence mode="wait">
          {activeCategory && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="space-y-10"
            >
              {activeCategory.groups.map((group, gi) => (
                <motion.div
                  key={group.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: gi * 0.1, duration: 0.5 }}
                >
                  {/* Group header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div>
                      <span className="font-serif text-white text-xl leading-none">
                        {group.label}
                      </span>
                      {group.sublabel && (
                        <span className="ml-3 label-luxury text-[9px] tracking-[0.22em] text-[#C9A27E]">
                          {group.sublabel}
                        </span>
                      )}
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-[#2A2A2A] to-transparent" />
                  </div>

                  {/* Items */}
                  <div className="space-y-0 divide-y divide-[#1e1e22]">
                    {group.items.map((item, ii) => (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: gi * 0.1 + ii * 0.05, duration: 0.4 }}
                        onClick={scrollToBooking}
                        className={`w-full flex items-center justify-between py-4 px-4 lg:px-5 text-left group transition-all duration-200 ${
                          item.popular
                            ? "bg-gradient-to-r from-[#C9A27E]/8 to-transparent hover:from-[#C9A27E]/14"
                            : item.addon
                            ? "hover:bg-[#1a1a1f]/60"
                            : "hover:bg-[#1a1a1f]/60"
                        }`}
                      >
                        {/* Left */}
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          {item.popular && (
                            <div className="w-1 h-8 bg-[#C9A27E] flex-shrink-0 rounded-full" />
                          )}
                          {item.addon && (
                            <div className="w-1 h-8 bg-[#B76E79]/40 flex-shrink-0 rounded-full" />
                          )}
                          {!item.popular && !item.addon && (
                            <div className="w-1 h-8 bg-[#2A2A2A] flex-shrink-0 rounded-full group-hover:bg-[#3a3a3a] transition-colors" />
                          )}
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <span
                                className={`font-sans font-medium ${
                                  item.addon
                                    ? "text-[#888] italic text-sm"
                                    : "text-white text-sm lg:text-base"
                                }`}
                              >
                                {item.name}
                              </span>
                              {item.popular && (
                                <span className="inline-flex items-center gap-1 label-luxury text-[8px] tracking-[0.15em] bg-[#C9A27E]/15 text-[#C9A27E] border border-[#C9A27E]/25 px-2 py-0.5 rounded-full">
                                  <Sparkles className="w-2 h-2" />
                                  Populær
                                </span>
                              )}
                            </div>
                            {item.description && (
                              <p className="text-[#555] text-xs mt-0.5 font-sans">
                                {item.description}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Right: price */}
                        <div className="flex items-center gap-2 sm:gap-4 ml-3 sm:ml-4 flex-shrink-0">
                          <span
                            className={`font-sans font-medium text-right ${
                              item.addon
                                ? "text-[#B76E79] text-sm"
                                : item.popular
                                ? "text-[#C9A27E] text-base lg:text-lg"
                                : "text-[#D8B7A6] text-base"
                            }`}
                          >
                            {typeof item.price === "string"
                              ? `${item.price} kr`
                              : new Intl.NumberFormat("nb-NO").format(item.price) + " kr"}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#333] group-hover:text-[#C9A27E] group-hover:translate-x-0.5 transition-all duration-200" />
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 pt-10 border-t border-[#1e1e22] flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <p className="text-[#555] text-xs leading-relaxed">
              Alle priser er inkl. mva. · Gavekort tilgjengelig · Pakketilbud på forespørsel
            </p>
          </div>
          <button
            onClick={scrollToBooking}
            className="bg-[#B76E79] text-white label-luxury text-[10px] tracking-[0.2em] px-10 py-4 hover:bg-[#9B5560] transition-colors whitespace-nowrap shadow-lg shadow-[#B76E79]/25 hover:shadow-[#B76E79]/40"
          >
            Book Time Nå
          </button>
        </motion.div>
      </div>
    </section>
  );
}
