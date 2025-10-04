"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap, Trophy, Sparkles } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const [text, setText] = useState("");
  const fullText = "Gran Rifa & Torneo eSports – VIII Ciclo";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-transparent to-gamer-cyan/10 animate-gradient" />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-64 h-64 bg-neon-purple/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-gamer-cyan/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <motion.span
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(165, 120, 255, 0.3)",
                      "0 0 40px rgba(165, 120, 255, 0.5)",
                      "0 0 20px rgba(165, 120, 255, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neon-purple/20 border-2 border-neon-purple/60 text-neon-purple text-sm font-bold backdrop-blur-sm"
                >
                  <Zap className="w-4 h-4 animate-pulse-glow" />
                  Evento Estudiantil 2025
                  <Sparkles className="w-4 h-4 animate-pulse-glow" />
                </motion.span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight">
                <span className="text-white drop-shadow-[0_0_15px_rgba(120,200,255,0.9)] drop-shadow-[0_0_30px_rgba(165,120,255,0.6)] inline-block break-words">
                  {text}
                  {showCursor && (
                    <span className="animate-pulse text-neon-purple drop-shadow-[0_0_10px_rgba(165,120,255,1)]">
                      |
                    </span>
                  )}
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/90 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed"
              >
                Participa en nuestra rifa de{" "}
                <span className="text-gamer-cyan font-bold">
                  premios tecnológicos
                </span>{" "}
                y demuestra tus habilidades en los{" "}
                <span className="text-neon-purple font-bold">
                  torneos eSports
                </span>{" "}
                más emocionantes
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-neon hover:opacity-90 text-white font-bold text-base sm:text-lg px-6 sm:px-10 py-6 sm:py-7 glow-purple shadow-2xl relative overflow-hidden group"
                  onClick={() =>
                    document
                      .getElementById("premios")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <Trophy className="w-5 h-5 sm:w-6 sm:h-6 mr-2 relative z-10 animate-pulse-glow" />
                  <span className="relative z-10">Ver Premios</span>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-gamer-cyan text-gamer-cyan hover:bg-gamer-cyan/20 font-bold text-base sm:text-lg px-6 sm:px-10 py-6 sm:py-7 bg-transparent backdrop-blur-sm glow-cyan shadow-2xl"
                  onClick={() =>
                    document
                      .getElementById("torneos")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Inscribirme al Torneo
                </Button>
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-xs sm:text-sm text-foreground/70 italic border-l-2 border-neon-purple/50 pl-4 max-w-2xl mx-auto lg:mx-0"
            >
              * Iniciativa estudiantil autogestionada del VIII Ciclo de
              Ingeniería de Sistemas – UNDC
              <br />
              No es parte de la programación oficial de la Semana Sistémica UNDC
            </motion.p>
          </motion.div>

          {/* Right side - QR Code with enhanced glow effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mt-8 lg:mt-0"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="relative w-full max-w-sm lg:max-w-none"
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-neon-purple/40 rounded-3xl blur-3xl"
              />
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute inset-0 bg-gamer-cyan/30 rounded-3xl blur-2xl"
              />
              <div className="relative bg-card/80 backdrop-blur-xl border-2 border-neon-purple/60 rounded-3xl p-4 sm:p-6 lg:p-8 glow-purple shadow-2xl">
                <div className="space-y-4 sm:space-y-6">
                  <div className="text-center space-y-2">
                    <motion.h3
                      animate={{
                        textShadow: [
                          "0 0 10px rgba(120, 200, 255, 0.8)",
                          "0 0 20px rgba(120, 200, 255, 1)",
                          "0 0 10px rgba(120, 200, 255, 0.8)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className="text-2xl sm:text-3xl font-black text-gamer-cyan"
                    >
                      Escanea y Participa
                    </motion.h3>
                    <p className="text-sm sm:text-base text-foreground/80 font-medium">
                      Paga con Yape y asegura tu ticket
                    </p>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-white p-4 sm:p-6 rounded-2xl shadow-xl mx-auto max-w-[280px] sm:max-w-none"
                  >
                    <Image
                      src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=Rifa%20VIII%20Ciclo%20-%20UNDC"
                      alt="QR Code Yape"
                      width={300}
                      height={300}
                      className="w-full h-auto"
                    />
                  </motion.div>

                  <div className="space-y-2 sm:space-y-3 text-center">
                    <p className="text-xs sm:text-sm text-muted-foreground font-semibold">
                      Referencia:
                    </p>
                    <p className="text-xl sm:text-2xl font-black text-action-green text-glow-green">
                      &quot;Rifa VIII Ciclo&quot;
                    </p>
                    <motion.p
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className="text-4xl sm:text-5xl font-black text-neon-purple text-glow-purple"
                    >
                      S/ 3.00
                    </motion.p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
