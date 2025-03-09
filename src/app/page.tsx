"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Nav } from "@/components/core/nav";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-black text-white font-inter flex flex-col">
      {/* Top Text with Glow */}
      <Nav />

      {/* Center Content */}
      <div className="flex-1 flex items-center justify-center relative overflow-hidden">
        {/* Logo Background */}
        <motion.div
          className="absolute"
          animate={{ rotate: 360 }}
          transition={{
            duration: 120,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <Image
            src="/logo.png"
            alt="Axicov Logo"
            width={800}
            height={800}
            className="opacity-40"
          />
        </motion.div>

        {/* Main Text with Dim Effect and Glow */}
        <div className="relative z-10">
          <div className="absolute inset-0 bg-black opacity-30 blur-md"></div>
          <h1 className="text-[120px] font-bold tracking-wider relative z-20 glow-text-large">
            AXICOV
          </h1>
        </div>
      </div>
    </div>
  );
}
