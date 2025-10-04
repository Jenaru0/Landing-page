"use client";

import { motion } from "framer-motion";
import { Shirt, Users, Trophy, Sparkles } from "lucide-react";

export function FundingGoals() {
  const currentAmount = 2140;
  const goalAmount = 3000;
  const percentage = (currentAmount / goalAmount) * 100;

  const uses = [
    {
      icon: Shirt,
      label: "Camisetas del VIII Ciclo",
      color: "text-neon-purple",
    },
    { icon: Users, label: "Comparsa y Logística", color: "text-gamer-cyan" },
    { icon: Trophy, label: "Premios de Torneos", color: "text-action-green" },
    {
      icon: Sparkles,
      label: "Materiales y Decoración",
      color: "text-neon-purple",
    },
  ];

  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-glow-cyan">
            Meta y Transparencia
          </h2>
          <p className="text-xl text-muted-foreground">
            Conoce cómo se utilizarán los fondos recaudados
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-8 space-y-8"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Recaudado</p>
                <p className="text-3xl font-bold text-action-green">
                  S/ {currentAmount.toLocaleString()}
                </p>
              </div>
              <div className="space-y-1 text-right">
                <p className="text-sm text-muted-foreground">Meta</p>
                <p className="text-3xl font-bold text-neon-purple">
                  S/ {goalAmount.toLocaleString()}
                </p>
              </div>
            </div>

            <div className="relative h-6 bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-action-green to-gamer-cyan glow-green"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-bold text-foreground drop-shadow-lg">
                  {percentage.toFixed(1)}%
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {uses.map((use, index) => (
              <motion.div
                key={use.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg"
              >
                <use.icon className={`w-6 h-6 ${use.color}`} />
                <span className="text-sm font-medium">{use.label}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Última actualización:{" "}
              <span className="font-semibold text-foreground">
                13 de Octubre, 2025
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
