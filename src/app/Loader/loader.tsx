"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

export default function LiquidVoidLoader({ onComplete }: { onComplete?: () => void }) {
  const { progress } = useProgress();
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsFinished(true);
        onComplete?.();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden"
          exit={{ 
            opacity: 0,
            scale: 1.1,
            filter: "blur(20px)",
            transition: { duration: 1, ease: [0.7, 0, 0.3, 1] } 
          }}
        >
          <div className="relative w-64 h-64 flex items-center justify-center">
            <svg className="absolute w-0 h-0">
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="goo" />
              </filter>
            </svg>

            <motion.div 
              style={{ filter: "url(#goo)" }}
              className="relative flex items-center justify-center"
            >
              <motion.div
                animate={{
                  borderRadius: [
                    "42% 58% 70% 30% / 45% 45% 55% 55%",
                    "58% 42% 38% 62% / 45% 45% 55% 55%",
                    "42% 58% 70% 30% / 45% 45% 55% 55%"
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-32 h-32 bg-[#ff0055] blur-[2px] shadow-[0_0_50px_#ff005533]"
              />

              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    x: [Math.sin(i) * 50, Math.cos(i) * 80, Math.sin(i) * 50],
                    y: [Math.cos(i) * 80, Math.sin(i) * 50, Math.cos(i) * 80],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute w-8 h-8 bg-[#ff0055] rounded-full"
                />
              ))}
            </motion.div>

            <motion.span 
              className="absolute inset-0 flex items-center justify-center font-mono text-white text-xs tracking-[0.5em] font-bold z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {Math.round(progress)}%
            </motion.span>
          </div>

          <div className="mt-12 overflow-hidden px-4">
            <motion.h2
              initial={{ y: "100%", letterSpacing: "2em" }}
              animate={{ y: 0, letterSpacing: "1em" }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-white text-sm font-black uppercase opacity-60 ml-[1em]"
            >
              LIQUID_VOID
            </motion.h2>
          </div>

          <div className="absolute bottom-20 w-full max-w-[200px] flex flex-col gap-2">
            <div className="h-[1px] w-full bg-white/5 relative overflow-hidden">
              <motion.div 
                className="absolute inset-y-0 left-0 bg-[#ff0055]"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: progress / 100 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="flex justify-between font-mono text-[8px] text-white/30 tracking-widest">
              <span>SYNCING_VOIDS</span>
              <span>EST_001</span>
            </div>
          </div>

          <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}