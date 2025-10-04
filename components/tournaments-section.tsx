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
      "https://http2.mlstatic.com/D_NQ_NP_711998-MLA70176897050_062023-O.webp",
  },
  {
    game: "FIFA PS4",
    inscription: 5,
    prize: 30,
    players: 16,
    date: "21 de Octubre",
    color: "from-blue-600 to-indigo-700",
    image: "https://gamescenter.pe/wp-content/uploads/2024/08/FIFA-22-PS4.jpg",
  },
  {
    game: "Clash Royale",
    inscription: 3,
    prize: 30,
    players: 32,
    date: "21 de Octubre",
    color: "from-blue-500 to-cyan-600",
    image:
      "https://assetsio.gnwcdn.com/eurogamer-x8sbgo.jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
  },
  {
    game: "Dragon Ball BT3",
    inscription: 5,
    prize: 20,
    players: 8,
    date: "21 de Octubre",
    color: "from-orange-500 to-red-600",
    image:
      "https://archive.org/services/img/dragon-ball-z-budokai-tenkaichi-3-au-eu-jp-us-2007-versus-fighting-iso-ps-2",
  },
  {
    game: "UNO",
    inscription: 3,
    prize: 30,
    players: 30,
    date: "21 de Octubre",
    color: "from-red-500 to-pink-600",
    image: "https://m.media-amazon.com/images/I/71MrrNB7jCL._AC_SL1500_.jpg",
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
              <Card
                key={index}
                className="overflow-hidden bg-gradient-to-br from-gamer-dark/50 to-gamer-dark/30 border-gamer-purple/30 hover:border-gamer-purple transition-all duration-300 group"
              >
                <div className={`h-2 bg-gradient-to-r ${tournament.color}`} />

                {/* Tournament Image */}
                <div className="relative w-full h-48 overflow-hidden bg-gamer-dark/80">
                  <Image
                    src={tournament.image}
                    alt={tournament.game}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gamer-dark via-gamer-dark/50 to-transparent opacity-60" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Trophy className="w-8 h-8 text-gamer-purple" />
                    <span className="text-sm text-gamer-cyan font-semibold">
                      Cupos limitados
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                    {tournament.game}
                  </h3>

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
