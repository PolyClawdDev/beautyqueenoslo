export type GalleryCategory =
  | "all"
  | "nails"
  | "brows"
  | "lashes"
  | "pmu"
  | "salon"
  | "training";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "all">;
  featured?: boolean;
  span?: "wide" | "tall" | "normal";
}

export const galleryImages: GalleryImage[] = [
  { id: "g1", src: "/nails-1.jpg", alt: "Luksuriøse negler – Beauty Queen Oslo", category: "nails", featured: true, span: "wide" },
  { id: "g2", src: "/nails-2.jpg", alt: "Nail art Oslo", category: "nails", span: "tall" },
  { id: "g3", src: "/brows-1.jpg", alt: "Perfekte øyenbryn Oslo", category: "brows", featured: true, span: "wide" },
  { id: "g4", src: "/lashes-1.jpg", alt: "Vippeextensions Oslo", category: "lashes", featured: true },
  { id: "g5", src: "/salon-1.jpg", alt: "Beauty Queen Oslo salong", category: "salon", span: "tall" },
  { id: "g6", src: "/training-1.jpg", alt: "Beauty training Oslo", category: "training" },
  { id: "g7", src: "/gallery-1.jpg", alt: "Galleri Beauty Queen Oslo", category: "nails" },
  { id: "g8", src: "/gallery-2.jpg", alt: "PMU behandling Oslo", category: "pmu", featured: true, span: "wide" },
  { id: "g9", src: "/gallery-3.jpg", alt: "Brow lamination Oslo", category: "brows" },
  { id: "g10", src: "/gallery-4.jpg", alt: "Lash lift Oslo", category: "lashes" },
  { id: "g11", src: "/gallery-5.jpg", alt: "Negler nail art Oslo", category: "nails", span: "tall" },
  { id: "g12", src: "/gallery-6.jpg", alt: "Salong interiør", category: "salon", span: "wide" },
];

export const galleryCategories: { id: GalleryCategory; label: string }[] = [
  { id: "all", label: "Alle" },
  { id: "nails", label: "Negler" },
  { id: "brows", label: "Brows" },
  { id: "lashes", label: "Lashes" },
  { id: "pmu", label: "PMU" },
  { id: "salon", label: "Salong" },
  { id: "training", label: "Kurs" },
];
