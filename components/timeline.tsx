"use client";

import { motion } from "framer-motion";
import { Calendar, Trophy, Ticket } from "lucide-react";

const events = [
  {
    date: "03 - 13 Oct",
    title: "Venta de Rifas",
    description: "Adquiere tus tickets para participar",
    icon: Ticket,
    color: "bg-neon-purple",
  },
  {
    date: "14 Oct - 5:00 PM",
    title: "Sorteo en Vivo",
    description: "Auditorio UNDC - Transmisión en redes",
    icon: Trophy,
    color: "bg-gamer-cyan",
  },
  {
    date: "13 - 17 Oct",
    title: "Torneos eSports",
    description: "Competencias de todos los juegos",
    icon: Calendar,
    color: "bg-action-green",
  },
];

export function Timeline() {
  return (
    <section className="relative py-20 px-4 bg-gradient-gamer">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-glow-purple">
            Fechas Clave
          </h2>
          <p className="text-xl text-muted-foreground">
            Marca tu calendario y no te pierdas ningún evento
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-neon-purple/50 transition-all hover:glow-purple">
                    <p className="text-sm text-muted-foreground mb-2">
                      {event.date}
                    </p>
                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 rounded-full ${event.color} flex items-center justify-center z-10 shrink-0`}
                >
                  <event.icon className="w-8 h-8 text-white" />
                </motion.div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
