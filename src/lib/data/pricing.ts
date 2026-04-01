export interface PricingItem {
  id: string;
  name: string;
  description?: string;
  price: number | string;
  priceValue: number;
  popular?: boolean;
  addon?: boolean;
}

export interface PricingGroup {
  id: string;
  label: string;
  sublabel?: string;
  items: PricingItem[];
}

export interface PricingCategory {
  id: string;
  label: string;
  emoji?: string;
  groups: PricingGroup[];
}

export const pricingData: PricingCategory[] = [
  {
    id: "nails",
    label: "Nails",
    emoji: "💅",
    groups: [
      {
        id: "nails-new",
        label: "Nytt sett",
        sublabel: "New Set",
        items: [
          {
            id: "n-new-1color",
            name: "Nytt sett – én farge",
            description: "Maks 2 cm",
            price: 1200,
            priceValue: 1200,
            popular: true,
          },
          {
            id: "n-new-long",
            name: "Nytt sett – ekstra langt",
            description: "Én farge",
            price: 1400,
            priceValue: 1400,
          },
          {
            id: "n-french",
            name: "French",
            description: "Tillegg til sett",
            price: "+200",
            priceValue: 200,
            addon: true,
          },
        ],
      },
      {
        id: "nails-infill",
        label: "Infill",
        sublabel: "Maks 4 uker",
        items: [
          {
            id: "n-infill-1color",
            name: "Infill – én farge",
            description: "Maks 2 cm",
            price: 1000,
            priceValue: 1000,
            popular: true,
          },
          {
            id: "n-infill-long",
            name: "Infill – ekstra langt",
            description: "Én farge",
            price: 1200,
            priceValue: 1200,
          },
          {
            id: "n-infill-other",
            name: "Infill – etter annen negletekniker",
            description: "Pris kan variere etter tilstand",
            price: 1500,
            priceValue: 1500,
          },
        ],
      },
      {
        id: "nails-other",
        label: "Annet",
        sublabel: "Others",
        items: [
          {
            id: "n-shellac",
            name: "Shellac",
            price: 850,
            priceValue: 850,
          },
          {
            id: "n-design",
            name: "Design på negler",
            description: "Per negl – avhenger av design",
            price: "100–300",
            priceValue: 100,
            addon: true,
          },
        ],
      },
    ],
  },
  {
    id: "lashes",
    label: "Lashes",
    emoji: "👁️",
    groups: [
      {
        id: "lashes-new",
        label: "Nytt sett",
        sublabel: "New Set",
        items: [
          {
            id: "l-classic",
            name: "Classic",
            description: "Naturlig og elegant – én vippe per lash",
            price: 1200,
            priceValue: 1200,
          },
          {
            id: "l-light-vol",
            name: "Light Volume",
            description: "Lett og fyldige vipper",
            price: 1400,
            priceValue: 1400,
            popular: true,
          },
          {
            id: "l-volume",
            name: "Volume",
            description: "Fyldige og dramatiske vipper",
            price: 1500,
            priceValue: 1500,
          },
          {
            id: "l-mega",
            name: "Mega Volume",
            description: "Maksimal volum og drama",
            price: 1700,
            priceValue: 1700,
          },
          {
            id: "l-kimk",
            name: "Kim K Effect",
            description: "Glamourøs, stilig og iøynefallende look",
            price: 1700,
            priceValue: 1700,
            popular: true,
          },
          {
            id: "l-wet",
            name: "Wet Lash Effect",
            description: "Spiky og wet-look vipper",
            price: 1500,
            priceValue: 1500,
          },
          {
            id: "l-liner",
            name: "Liner Effect",
            description: "Intens og dramatisk liner-look",
            price: 1700,
            priceValue: 1700,
          },
        ],
      },
      {
        id: "lashes-infill",
        label: "Infill",
        sublabel: "Maks 4 uker",
        items: [
          {
            id: "li-classic",
            name: "Classic",
            price: 1000,
            priceValue: 1000,
          },
          {
            id: "li-light-vol",
            name: "Light Volume",
            price: 1200,
            priceValue: 1200,
          },
          {
            id: "li-volume",
            name: "Volume",
            price: 1200,
            priceValue: 1200,
          },
          {
            id: "li-mega",
            name: "Mega Volume",
            price: 1300,
            priceValue: 1300,
          },
          {
            id: "li-kimk",
            name: "Kim K Effect",
            price: 1300,
            priceValue: 1300,
          },
          {
            id: "li-wet",
            name: "Wet Lash Effect",
            price: 1200,
            priceValue: 1200,
          },
          {
            id: "li-liner",
            name: "Liner Effect",
            price: 1300,
            priceValue: 1300,
          },
        ],
      },
      {
        id: "lashes-other",
        label: "Annet",
        sublabel: "Others",
        items: [
          {
            id: "l-takeoff",
            name: "Fjerning av vipper",
            description: "Skånsom og profesjonell fjerning",
            price: 200,
            priceValue: 200,
          },
        ],
      },
    ],
  },
];
