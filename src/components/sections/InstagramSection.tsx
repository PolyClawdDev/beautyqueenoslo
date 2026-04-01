"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, ExternalLink } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { InstagramIcon } from "@/components/ui/Icons";

const instagramPosts = [
  { id: "i1", src: "/gallery-1.jpg", likes: 312, alt: "Beauty Queen Oslo" },
  { id: "i2", src: "/nails-1.jpg", likes: 489, alt: "Negler Oslo" },
  { id: "i3", src: "/brows-1.jpg", likes: 567, alt: "Brows Oslo" },
  { id: "i4", src: "/lashes-1.jpg", likes: 392, alt: "Lashes Oslo" },
  { id: "i5", src: "/nails-2.jpg", likes: 441, alt: "Nail art Oslo" },
  { id: "i6", src: "/salon-1.jpg", likes: 523, alt: "Beauty Queen salong" },
];

export function InstagramSection() {
  return (
    <section className="bg-[#0B0B0D] section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <SectionLabel light className="justify-center mb-6">Instagram</SectionLabel>
          <h2 className="heading-lg text-white mb-4">Følg vår skjønnhetsverden</h2>

          {/* Profile info */}
          <div className="inline-flex items-center gap-6 mt-6 bg-white/5 border border-white/10 px-8 py-4">
            <div className="text-center">
              <div className="font-serif text-2xl text-white">14.1k</div>
              <div className="label-luxury text-[9px] text-[#C9A27E] tracking-[0.2em]">Følgere</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <div className="font-serif text-2xl text-white">380+</div>
              <div className="label-luxury text-[9px] text-[#C9A27E] tracking-[0.2em]">Innlegg</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="flex items-center gap-2 text-white">
              <InstagramIcon className="w-5 h-5 text-[#C9A27E]" />
              <span className="font-sans text-sm">@beautyqueenoslo</span>
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-3">
          {instagramPosts.map((post, i) => (
            <motion.a
              key={post.id}
              href="https://instagram.com/beautyqueenoslo"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="relative aspect-square overflow-hidden group cursor-pointer"
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 33vw, 16vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-1">
                  <Heart className="w-6 h-6 text-white fill-white" />
                  <span className="text-white text-xs font-medium">{post.likes}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-10 text-center"
        >
          <a
            href="https://instagram.com/beautyqueenoslo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#C9A27E] to-[#B76E79] text-white label-luxury text-[10px] tracking-[0.2em] px-10 py-4 hover:opacity-90 transition-opacity"
          >
            <InstagramIcon className="w-4 h-4" />
            Følg @beautyqueenoslo
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
