"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { galleryImages, galleryCategories, type GalleryCategory } from "@/lib/data/gallery";

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [filteredImages, setFilteredImages] = useState(galleryImages);

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter((img) => img.category === activeCategory));
    }
  }, [activeCategory]);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : 0));
  const nextImage = () => setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredImages.length : 0));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [filteredImages]);

  return (
    <section id="galleri" className="bg-[#0B0B0D] section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <SectionLabel light className="justify-center mb-6">
            Galleri
          </SectionLabel>
          <h2 className="heading-lg text-white mb-4">
            Kunst møter skjønnhet
          </h2>
          <p className="text-[#D8B7A6] font-sans max-w-xl mx-auto leading-relaxed">
            Hvert bilde forteller historien om presisjon, lidenskap og luksus.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`label-luxury text-[10px] tracking-[0.2em] px-5 py-2.5 transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-[#B76E79] text-white"
                  : "bg-transparent border border-[#2A2A2A] text-[#D8B7A6] hover:border-[#B76E79] hover:text-[#B76E79]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="columns-2 md:columns-3 lg:columns-4 gap-3 lg:gap-4 space-y-3 lg:space-y-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, i) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden"
                onClick={() => openLightbox(i)}
              >
                <div
                  className={`relative overflow-hidden bg-[#1a1a1f] ${
                    image.span === "tall" ? "aspect-[3/4]" : image.span === "wide" ? "aspect-[4/3]" : "aspect-square"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                        <ZoomIn className="w-5 h-5 text-white" />
                      </div>
                    </motion.div>
                  </div>
                  {/* Category badge */}
                  <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="label-luxury text-[8px] text-white bg-black/50 backdrop-blur-sm px-2 py-1 uppercase tracking-wider">
                      {image.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-16 text-center"
        >
          <a
            href="https://instagram.com/beautyqueenoslo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#C9A27E]/20 to-[#B76E79]/20 border border-[#C9A27E]/30 text-[#C9A27E] px-8 py-4 hover:from-[#C9A27E]/30 hover:to-[#B76E79]/30 transition-all duration-300 group"
          >
            <InstagramIcon className="w-5 h-5" />
            <span className="label-luxury text-[10px] tracking-[0.2em]">
              Følg @beautyqueenoslo på Instagram
            </span>
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Nav arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 lg:left-8 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 lg:right-8 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[85vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>

            {/* Caption */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <p className="text-[#D8B7A6] text-sm">{filteredImages[lightboxIndex].alt}</p>
              <p className="label-luxury text-[#C9A27E] text-[9px] mt-1">
                {lightboxIndex + 1} / {filteredImages.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
