"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Users, Award, Sparkles, Heart } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const achievements = [
  {
    icon: Trophy,
    value: "3.",
    unit: "Plass",
    label: "Verdensmester OMC",
    description: "Anerkjent på verdensscenen for eksepsjonell beauty-artistry.",
    color: "#C9A27E",
  },
  {
    icon: Users,
    value: "14.1k",
    unit: "+",
    label: "Følgere på Instagram",
    description: "Et voksende fellesskap av beauty-elskere som stoler på oss.",
    color: "#B76E79",
  },
  {
    icon: Star,
    value: "500+",
    unit: "",
    label: "Fornøyde klienter",
    description: "Hundrevis av fornøyde klienter som kommer tilbake gang på gang.",
    color: "#C9A27E",
  },
  {
    icon: Award,
    value: "8+",
    unit: "år",
    label: "Erfaring i bransjen",
    description: "Åtte år med dedikasjon til premium beauty-behandlinger.",
    color: "#B76E79",
  },
  {
    icon: Sparkles,
    value: "5",
    unit: "★",
    label: "Gjennomsnittlig vurdering",
    description: "Konsekvent toppvurdering fra klienter for service og resultater.",
    color: "#C9A27E",
  },
  {
    icon: Heart,
    value: "100+",
    unit: "",
    label: "Kursdeltagere utdannet",
    description: "Beauty-profesjonelle utdannet gjennom våre eksklusive masterclasses.",
    color: "#B76E79",
  },
];

export function CredentialsSection() {
  return (
    <section className="bg-[#F7F2EE] section-padding relative overflow-hidden">
      {/* Decorative background text */}
      <div
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-serif text-[20vw] font-bold text-[#E8D9D2]/40 whitespace-nowrap"
          style={{ letterSpacing: "-0.04em" }}
        >
          QUEEN
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <SectionLabel className="justify-center mb-6">
            Prestisje & Erfaring
          </SectionLabel>
          <h2 className="heading-lg text-[#0B0B0D] mb-6">
            Verdens-anerkjent
            <br />
            <span className="text-gradient-gold">beauty ekspertise</span>
          </h2>
          <p className="text-[#666] font-sans max-w-2xl mx-auto leading-relaxed">
            Beauty Queen Oslo er mer enn en salong – det er et sted der verdensklasse-teknikk møter
            individuell omsorg og luksus. Stiftet av en prisbelønnet beauty-artist.
          </p>
        </motion.div>

        {/* Featured award */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 mx-auto max-w-2xl"
        >
          <div className="relative bg-gradient-to-br from-[#0B0B0D] to-[#1a1a1f] p-8 lg:p-12 text-center overflow-hidden">
            {/* Gold corner decorations */}
            <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[#C9A27E]" />
            <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-[#C9A27E]" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-[#C9A27E]" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[#C9A27E]" />

            <Trophy className="w-12 h-12 text-[#C9A27E] mx-auto mb-4" />
            <div className="label-luxury text-[#C9A27E] tracking-[0.3em] text-[10px] mb-3">
              Internasjonalt anerkjent
            </div>
            <h3 className="font-serif text-3xl lg:text-4xl text-white mb-3">
              3. Plass Verdensmester
            </h3>
            <p className="label-luxury text-[#E2C89A] text-[11px] tracking-[0.25em] mb-4">
              OMC WORLD CHAMPIONSHIP
            </p>
            <p className="text-[#D8B7A6] text-sm leading-relaxed max-w-md mx-auto">
              En ekstraordinær prestasjon som bekrefter Beauty Queen Oslo sin posisjon
              blant verdens fremste beauty-artister.
            </p>
          </div>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group bg-white p-8 hover:bg-[#FAF6F2] transition-colors duration-300 card-shadow hover:luxury-shadow-hover border border-transparent hover:border-[#E8D9D2]"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <Icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-serif text-4xl text-[#0B0B0D]">{item.value}</span>
                  <span className="font-serif text-xl text-[#C9A27E]">{item.unit}</span>
                </div>
                <h4 className="label-luxury text-[#0B0B0D] text-[10px] tracking-[0.18em] mb-3">
                  {item.label}
                </h4>
                <p className="text-[#999] text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
