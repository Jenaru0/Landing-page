"use client";

import { Facebook, Instagram, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative py-16 px-4 border-t border-border/50 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gamer-cyan drop-shadow-[0_0_10px_rgba(120,200,255,0.8)]">
              VIII Ciclo
            </h3>
            <p className="text-sm text-foreground/70">
              Ingeniería de Sistemas - UNDC
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-lg text-white">Contacto</h4>
            <div className="space-y-2 text-sm text-foreground/80">
              <p>WhatsApp: +51 XXX XXX XXX</p>
              <p>Email: viii.ciclo@undc.edu.pe</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-lg text-white">Síguenos</h4>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-12 h-12 rounded-full bg-card/50 backdrop-blur-sm border-2 border-border/50 flex items-center justify-center hover:border-neon-purple hover:bg-neon-purple/10 transition-all duration-300 shadow-lg"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-foreground hover:text-neon-purple" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-12 h-12 rounded-full bg-card/50 backdrop-blur-sm border-2 border-border/50 flex items-center justify-center hover:border-gamer-cyan hover:bg-gamer-cyan/10 transition-all duration-300 shadow-lg"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-foreground hover:text-gamer-cyan" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-12 h-12 rounded-full bg-card/50 backdrop-blur-sm border-2 border-border/50 flex items-center justify-center hover:border-action-green hover:bg-action-green/10 transition-all duration-300 shadow-lg"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-foreground hover:text-action-green" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border/30 text-center space-y-2"
        >
          <p className="text-sm text-foreground/70">
            © 2025 VIII Ciclo - Ingeniería de Sistemas UNDC. Todos los derechos
            reservados.
          </p>
          <p className="text-xs text-foreground/50 italic">
            Iniciativa estudiantil autogestionada - No oficial UNDC
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
