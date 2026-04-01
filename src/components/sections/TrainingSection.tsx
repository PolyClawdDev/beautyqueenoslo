"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Trophy, Users, Clock, Award, CheckCircle, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { formatPrice, formatDuration } from "@/lib/utils";

const courses = [
  {
    id: "brow",
    title: "Brow Masterclass",
    subtitle: "1-dags intensivkurs",
    description:
      "Lær alt om øyenbryn – fra ansiktsanalyse og formgiving til avansert lamination og farging. Perfekt for beauty-profesjonelle som ønsker å spesialisere seg.",
    duration: 480,
    price: 8500,
    image: "/brows-1.jpg",
    highlights: [
      "Ansiktsanalyse og brow-mapping",
      "Lamination teknikker",
      "Farging og tinting",
      "Shaping og design",
      "Diplom og sertifikat",
      "Startpakke inkludert",
    ],
    capacity: "Maks 4 deltagere",
    level: "Alle nivåer",
  },
  {
    id: "lash",
    title: "Lash Training",
    subtitle: "Komplett vippekurs",
    description:
      "Bli sertifisert lash-artist. Fra Classic til Mega Volume – vi dekker alle teknikker, sikkerhet og kundehåndtering for en profesjonell karriere.",
    duration: 480,
    price: 7500,
    image: "/lashes-1.jpg",
    highlights: [
      "Classic, Volume og Mega Volume",
      "Valg av vippe-materiell",
      "Sikkerhet og hygieneprotokoll",
      "Klientkommunikasjon",
      "Diplom og sertifikat",
      "Startpakke inkludert",
    ],
    capacity: "Maks 4 deltagere",
    level: "Nybegynner til viderekommet",
  },
  {
    id: "pmu",
    title: "PMU Grunnkurs",
    subtitle: "2-dagers PMU opplæring",
    description:
      "Komplett introduksjon til permanent makeup. Lær maskinteknikk, fargelære og behandling av brows, lepper og eyeliner under veiledning av en verdensmester.",
    duration: 960,
    price: 15000,
    image: "/training-1.jpg",
    highlights: [
      "Maskinteknikk og utstyr",
      "Fargelære og pigmentvalg",
      "Powder brows og lip blush",
      "Sikkerhet og kontraindikasjoner",
      "Diplom og sertifikat",
      "Komplett PMU-startpakke",
    ],
    capacity: "Maks 3 deltagere",
    level: "Nybegynner",
  },
];

const whyUs = [
  {
    icon: Trophy,
    title: "Lær av en verdensmester",
    description: "Din instruktør er tredjeplass verdensmester i OMC.",
  },
  {
    icon: Users,
    title: "Små grupper",
    description: "Maksimalt 4 deltagere per kurs for personlig oppfølging.",
  },
  {
    icon: Award,
    title: "Anerkjente sertifikater",
    description: "Motta internasjonalt anerkjente diplomer og sertifikater.",
  },
  {
    icon: CheckCircle,
    title: "Oppfølging etter kurs",
    description: "Vi er tilgjengelige for spørsmål og støtte etter kurset.",
  },
];

export function TrainingSection() {
  const scrollToContact = () => {
    const el = document.querySelector("#kontakt");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="kurs" className="bg-[#F7F2EE] section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <SectionLabel className="justify-center mb-6">Kurs & Masterclasses</SectionLabel>
          <h2 className="heading-lg text-[#0B0B0D] mb-6">
            Løft karrieren din med
            <br />
            <span className="text-gradient-gold">ekspertopplæring</span>
          </h2>
          <p className="text-[#666] font-sans max-w-2xl mx-auto leading-relaxed">
            Lær av en prisbelønnet beauty-artist. Våre kurs er designet for ambisiøse
            fagpersoner som ønsker å nå toppen av bransjen.
          </p>
        </motion.div>

        {/* Why us */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {whyUs.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#F3E6E8] to-[#E8D9D2] flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-[#B76E79]" />
                </div>
                <h4 className="font-medium text-[#0B0B0D] text-sm mb-1">{item.title}</h4>
                <p className="text-[#999] text-xs leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Course cards */}
        <div className="space-y-6 lg:space-y-12">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.7 }}
              className="grid md:grid-cols-2 gap-0 overflow-hidden bg-white card-shadow group"
            >
              {/* Image — always top on mobile */}
              <div className="relative h-52 sm:h-64 md:h-auto md:min-h-[300px] overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="label-luxury text-[9px] bg-[#B76E79]/90 backdrop-blur-sm text-white px-3 py-1.5 tracking-[0.2em]">
                    {course.level}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="label-luxury text-[9px] tracking-[0.2em] text-[#C9A27E] mb-3">
                  {course.subtitle}
                </div>
                <h3 className="font-serif text-2xl lg:text-3xl text-[#0B0B0D] mb-3">
                  {course.title}
                </h3>
                <p className="text-[#666] text-sm leading-relaxed mb-6">
                  {course.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {course.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-xs text-[#555]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#B76E79] flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 mb-6 py-4 border-y border-[#E8D9D2]">
                  <div className="flex items-center gap-1.5 text-sm">
                    <Clock className="w-4 h-4 text-[#C9A27E]" />
                    <span className="text-[#666]">{formatDuration(course.duration)}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm">
                    <Users className="w-4 h-4 text-[#C9A27E]" />
                    <span className="text-[#666]">{course.capacity}</span>
                  </div>
                  <div className="ml-auto">
                    <span className="font-serif text-2xl text-[#B76E79]">{formatPrice(course.price)}</span>
                  </div>
                </div>

                <button
                  onClick={scrollToContact}
                  className="flex items-center justify-center gap-2 w-full sm:w-auto bg-[#0B0B0D] text-[#F7F2EE] font-sans font-medium text-xs tracking-[0.2em] uppercase px-6 py-4 min-h-[48px] hover:bg-[#2A2A2A] transition-colors touch-manipulation"
                >
                  Forespør kursplass
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
