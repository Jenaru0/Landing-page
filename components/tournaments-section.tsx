"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Users, Calendar, DollarSign } from "lucide-react";
import Image from "next/image";

const tournaments = [
  {
    game: "PES 2013",
    inscription: 5,
    prize: 30,
    players: 16,
    date: "21 de Octubre",
    color: "from-green-500 to-emerald-600",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500&h=300&fit=crop",
  },
  {
    game: "FIFA PS4",
    inscription: 5,
    prize: 30,
    players: 16,
    date: "21 de Octubre",
    color: "from-blue-600 to-indigo-700",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&h=300&fit=crop",
  },
  {
    game: "Clash Royale",
    inscription: 3,
    prize: 30,
    players: 32,
    date: "21 de Octubre",
    color: "from-blue-500 to-cyan-600",
    image:
      "https://images.unsplash.com/photo-1556438758-8d49568ce18e?w=500&h=300&fit=crop",
  },
  {
    game: "Dragon Ball BT3",
    inscription: 5,
    prize: 20,
    players: 8,
    date: "21 de Octubre",
    color: "from-orange-500 to-red-600",
    image:
      "https://images.unsplash.com/photo-1628277613967-6abca504d0ac?w=500&h=300&fit=crop",
  },
  {
    game: "UNO",
    inscription: 3,
    prize: 30,
    players: 30,
    date: "21 de Octubre",
    color: "from-red-500 to-pink-600",
    image:
      "https://images.unsplash.com/photo-1611371805429-8b5c1b2c34ba?w=500&h=300&fit=crop",
  },
];

export function TournamentsSection() {
  return (
    <section id="torneos" className="relative py-20 px-4 bg-gradient-gamer">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-glow-purple">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-action-green">
              Torneos eSports
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Demuestra tus habilidades y compite por premios increíbles
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tournaments.map((tournament, index) => (
            <motion.div
              key={tournament.game}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="relative overflow-hidden bg-card border-border hover:border-neon-purple/50 transition-all duration-300 hover:glow-purple h-full">
                <div className={`h-2 bg-gradient-to-r ${tournament.color}`} />
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <Trophy className="w-10 h-10 text-neon-purple" />
                    <h3 className="text-2xl font-bold">{tournament.game}</h3>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground flex items-center gap-2">
                        <DollarSign className="w-4 h-4" />
                        Inscripción
                      </span>
                      <span className="font-bold text-action-green">
                        S/ {tournament.inscription}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground flex items-center gap-2">
                        <Trophy className="w-4 h-4" />
                        Premio
                      </span>
                      <span className="font-bold text-neon-purple">
                        S/ {tournament.prize}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Cupos
                      </span>
                      <span className="font-bold">
                        {tournament.players} jugadores
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Fecha
                      </span>
                      <span className="font-bold text-gamer-cyan">
                        {tournament.date}
                      </span>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-neon hover:opacity-90 text-white font-semibold">
                    Inscribirme Ahora
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-gamer-cyan text-gamer-cyan hover:bg-gamer-cyan/10 bg-transparent"
          >
            Descargar Reglamento (PDF)
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
