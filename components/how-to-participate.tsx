"use client";

import { motion } from "framer-motion";
import { QrCode, CreditCard, PartyPopper } from "lucide-react";

const steps = [
  {
    icon: QrCode,
    title: "Escanea el QR",
    description: "Usa tu app de Yape para escanear el código QR",
    color: "text-neon-purple",
  },
  {
    icon: CreditCard,
    title: "Realiza el Pago",
    description: 'Envía S/ 3.00 con la referencia "Rifa VIII Ciclo"',
    color: "text-gamer-cyan",
  },
  {
    icon: PartyPopper,
    title: "¡Listo para Ganar!",
    description: "Guarda tu comprobante y espera el sorteo",
    color: "text-action-green",
  },
];

export function HowToParticipate() {
  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-glow-cyan">
            ¿Cómo Participar?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tres simples pasos para asegurar tu oportunidad de ganar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="text-center space-y-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-card/80 backdrop-blur-sm border-2 border-current shadow-lg"
                  style={{ borderColor: step.color.replace("text-", "") }}
                >
                  <step.icon
                    className={`w-12 h-12 ${step.color} drop-shadow-[0_0_8px_currentColor]`}
                  />
                </motion.div>
                <div className="space-y-2">
                  <div className="text-8xl font-bold text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                    {step.title}
                  </h3>
                  <p className="text-foreground/80 text-base font-medium">
                    {step.description}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-border via-gamer-cyan/50 to-transparent -translate-x-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
