export type ServiceCategory = "pmu" | "brows" | "lashes" | "nails" | "training";

export interface SubService {
  id: string;
  name: string;
  description: string;
  duration: number;
  priceFrom: number;
  popular?: boolean;
}

export interface Service {
  id: ServiceCategory;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  accentColor: string;
  subServices: SubService[];
}

export const services: Service[] = [
  {
    id: "pmu",
    title: "PMU",
    subtitle: "Permanent Makeup",
    description:
      "Opplev frihet med permanent makeup. Fra naturlige powder brows til presise eyelinere og fyldig lip blush – vi skaper det perfekte resultatet som varer.",
    image: "/brows-1.jpg",
    accentColor: "#B76E79",
    subServices: [
      {
        id: "powder-brows",
        name: "Powder Brows",
        description:
          "Myk, makeup-inspirert finish som gir naturlig og holdbar farge.",
        duration: 180,
        priceFrom: 3800,
        popular: true,
      },
      {
        id: "lip-blush",
        name: "Lip Blush",
        description:
          "Delikate lepper med naturlig farge og definert kontur som varer.",
        duration: 150,
        priceFrom: 3500,
      },
      {
        id: "eyeliner-pmu",
        name: "Eyeliner PMU",
        description:
          "Presise, holdbare eyelinere for et alltid polert blikk.",
        duration: 120,
        priceFrom: 3200,
      },
    ],
  },
  {
    id: "brows",
    title: "Brows",
    subtitle: "Øyenbryn-ekspertise",
    description:
      "Perfekte øyenbryn skreddersydd til ditt ansikt. Vi kombinerer teknikk og estetikk for resultater som transformerer.",
    image: "/brows-1.jpg",
    accentColor: "#C9A27E",
    subServices: [
      {
        id: "brow-lamination",
        name: "Brow Lamination",
        description:
          "Løft og form øyenbrynene for en tykk, polert og glamorøs look.",
        duration: 60,
        priceFrom: 890,
        popular: true,
      },
      {
        id: "brow-shaping",
        name: "Brow Shaping",
        description:
          "Presis forming og styling for perfekte øyenbryn som passer ditt ansikt.",
        duration: 45,
        priceFrom: 490,
      },
      {
        id: "brow-tint",
        name: "Brow Tint",
        description:
          "Intensiv farging for dypere, mer definerte og lengre holdbare brows.",
        duration: 30,
        priceFrom: 390,
      },
    ],
  },
  {
    id: "lashes",
    title: "Lashes",
    subtitle: "Vipper & Extensions",
    description:
      "Vakre, fyldige vipper som åpner blikket. Fra Classic til Mega Volume, Kim K og Liner Effect – vi skaper din perfekte lash look.",
    image: "/lashes-1.jpg",
    accentColor: "#D8B7A6",
    subServices: [
      {
        id: "lash-classic",
        name: "Classic",
        description: "Naturlig og elegant – én vippe per lash.",
        duration: 120,
        priceFrom: 1200,
      },
      {
        id: "lash-light-vol",
        name: "Light Volume",
        description: "Lett og fyldige vipper for en myk look.",
        duration: 135,
        priceFrom: 1400,
        popular: true,
      },
      {
        id: "lash-volume",
        name: "Volume",
        description: "Fyldige og dramatiske vipper med 2D–6D teknikk.",
        duration: 150,
        priceFrom: 1500,
      },
      {
        id: "lash-mega",
        name: "Mega Volume",
        description: "Maksimal volum og drama.",
        duration: 180,
        priceFrom: 1700,
      },
      {
        id: "lash-kimk",
        name: "Kim K Effect",
        description: "Glamourøs, stilig og iøynefallende look.",
        duration: 150,
        priceFrom: 1700,
        popular: true,
      },
      {
        id: "lash-wet",
        name: "Wet Lash Effect",
        description: "Spiky og wet-look vipper.",
        duration: 150,
        priceFrom: 1500,
      },
      {
        id: "lash-liner",
        name: "Liner Effect",
        description: "Intens og dramatisk liner-look.",
        duration: 150,
        priceFrom: 1700,
      },
    ],
  },
  {
    id: "nails",
    title: "Nails",
    subtitle: "Negler & Nail Art",
    description:
      "Fra klassisk eleganse til avansert nail art – vi leverer negler av høyeste kvalitet med premium produkter.",
    image: "/nails-1.jpg",
    accentColor: "#B76E79",
    subServices: [
      {
        id: "nails-new-1color",
        name: "Nytt sett – én farge",
        description: "Maks 2 cm. Langtidshold med perfekt finish.",
        duration: 90,
        priceFrom: 1200,
        popular: true,
      },
      {
        id: "nails-new-long",
        name: "Nytt sett – ekstra langt",
        description: "Én farge. Dramatisk og elegant lengde.",
        duration: 110,
        priceFrom: 1400,
      },
      {
        id: "nails-infill",
        name: "Infill – én farge",
        description: "Påfyll maks 4 uker. Maks 2 cm.",
        duration: 75,
        priceFrom: 1000,
      },
      {
        id: "nails-shellac",
        name: "Shellac",
        description: "Langtidshold shellac-lakk med glans.",
        duration: 60,
        priceFrom: 850,
      },
      {
        id: "nails-design",
        name: "Design på negler",
        description: "Kreativt nail art – pris avhenger av design.",
        duration: 30,
        priceFrom: 100,
      },
    ],
  },
  {
    id: "training",
    title: "Kurs & Training",
    subtitle: "Expert Training & Masterclasses",
    description:
      "Lær av en prisbelønnet beauty-ekspert. Våre kurs er designet for ambisiøse fagpersoner som ønsker å nå toppen.",
    image: "/training-1.jpg",
    accentColor: "#C9A27E",
    subServices: [
      {
        id: "brow-masterclass",
        name: "Brow Masterclass",
        description:
          "Avansert kurs i øyenbrynsteknikker, shaping og styling fra en verdensmester.",
        duration: 480,
        priceFrom: 8500,
        popular: true,
      },
      {
        id: "lash-training",
        name: "Lash Training",
        description:
          "Komplett vippeextensions-kurs for nybegynnere og viderekomne.",
        duration: 480,
        priceFrom: 7500,
      },
      {
        id: "pmu-course",
        name: "PMU Kurs",
        description:
          "Grunnleggende og avansert permanent makeup-opplæring.",
        duration: 960,
        priceFrom: 15000,
      },
    ],
  },
];

export const staffMembers = [
  {
    id: "dani",
    name: "Dani",
    title: "Grunnlegger & Head Artist",
    bio: "Tredjeplass verdensmester OMC. Over 8 år med erfaring innen premium beauty-tjenester.",
    image: "/salon-1.jpg",
    specialties: ["PMU", "Brows", "Lashes", "Nails"],
  },
  {
    id: "any",
    name: "Alle artister",
    title: "Beauty Queen Team",
    bio: "La oss velge den best egnede artisten for din behandling.",
    image: "/salon-1.jpg",
    specialties: ["PMU", "Brows", "Lashes", "Nails"],
  },
];
