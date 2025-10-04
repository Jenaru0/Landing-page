"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Watch, Headphones, Keyboard, Gift, Smartphone } from "lucide-react";
import Image from "next/image";

const prizes = [
  {
    name: "Smartwatch Premium",
    icon: Watch,
    image:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&h=500&fit=crop",
  },
  {
    name: "Audífonos Gamer RGB",
    icon: Headphones,
    image:
      "https://images.unsplash.com/photo-1599669454699-248893623440?w=500&h=500&fit=crop",
  },
  {
    name: "Teclado Mecánico RGB",
    icon: Keyboard,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop",
  },
  {
    name: "Gift Cards",
    icon: Gift,
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=500&h=500&fit=crop",
  },
  {
    name: "Accesorios Tech",
    icon: Smartphone,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
  },
];

export function RaffleSection() {
  return (
    <section id="premios" className="relative py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-glow-cyan">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gamer-cyan to-neon-purple">
              Premios Tecnológicos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Increíbles premios tech esperando por ti. ¡Cada ticket es una
            oportunidad de ganar!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="group"
            >
              <Card className="relative overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-border hover:border-neon-purple transition-all duration-500 hover:shadow-[0_0_30px_rgba(165,120,255,0.5)] h-full">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={prize.image || "/placeholder.svg"}
                    alt={prize.name}
                    fill
                    className="object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent group-hover:from-neon-purple/20 transition-colors duration-500" />
                  <div className="absolute inset-0 bg-neon-purple/0 group-hover:bg-neon-purple/10 transition-colors duration-500" />
                </div>
                <div className="p-6 space-y-2 relative">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <prize.icon className="w-8 h-8 text-neon-purple mb-2 drop-shadow-[0_0_8px_rgba(165,120,255,0.8)]" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white group-hover:text-neon-purple transition-colors duration-300">
                    {prize.name}
                  </h3>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-8 space-y-6"
        >
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Precio del Ticket</p>
              <p className="text-3xl font-bold text-action-green">S/ 3.00</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Fecha del Sorteo</p>
              <p className="text-2xl font-bold text-gamer-cyan">
                14 de Octubre
              </p>
              <p className="text-sm text-muted-foreground">
                5:00 p.m. - Auditorio UNDC
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Transmisión en Vivo
              </p>
              <p className="text-lg font-semibold text-neon-purple">
                Facebook & Instagram Live
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
