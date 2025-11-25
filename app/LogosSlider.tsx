"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { src: "/logos/iso27001.png", alt: "ISO 27001" },
  { src: "/logos/iso22301.png", alt: "ISO 22301" },
  { src: "/logos/owasp.png", alt: "OWASP" },
  { src: "/logos/cis.png", alt: "CIS Controls" },
];

export default function LogosSlider() {
  return (
    <div className="relative overflow-hidden py-8 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 w-full">
      <motion.div
        className="flex gap-16"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ width: "200%" }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex items-center justify-center min-w-[180px]">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={160}
              height={80}
              className="opacity-70 hover:opacity-100 transition"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
