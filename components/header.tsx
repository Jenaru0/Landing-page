"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Trophy,
  Gamepad2,
  Calendar,
  DollarSign,
  HelpCircle,
} from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const headerBlur = useTransform(scrollY, [0, 100], [0, 10]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Premios", icon: Trophy, href: "#premios" },
    { name: "Torneos", icon: Gamepad2, href: "#torneos" },
    { name: "Cronograma", icon: Calendar, href: "#cronograma" },
    { name: "Fondos", icon: DollarSign, href: "#fondos" },
    { name: "FAQ", icon: HelpCircle, href: "#faq" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.header
        style={{
          opacity: headerOpacity,
          backdropFilter: useTransform(
            headerBlur,
            (value) => `blur(${value}px)`
          ),
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-neon-purple/30 rounded-lg blur-lg animate-pulse-glow" />
                <div className="relative bg-gradient-neon p-2 rounded-lg">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="hidden md:block">
                <h2 className="text-lg font-bold text-gamer-cyan drop-shadow-[0_0_8px_rgba(120,200,255,0.8)]">
                  VIII Ciclo
                </h2>
                <p className="text-xs text-foreground/70">Ing. Sistemas UNDC</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Button
                    variant="ghost"
                    className="text-foreground hover:text-neon-purple hover:bg-neon-purple/10 transition-all duration-300 group"
                    onClick={() => scrollToSection(item.href)}
                  >
                    <item.icon className="w-4 h-4 mr-2 group-hover:animate-pulse-glow text-neon-purple" />
                    {item.name}
                  </Button>
                </motion.div>
              ))}
            </nav>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden lg:block"
            >
              <Button
                className="bg-gradient-neon hover:opacity-90 text-white font-semibold glow-purple"
                onClick={() => scrollToSection("#premios")}
              >
                Participar Ahora
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-foreground hover:text-neon-purple"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : -20,
          pointerEvents: isOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-16 left-0 right-0 z-40 lg:hidden bg-background/95 backdrop-blur-xl border-b border-border/50"
      >
        <nav className="container mx-auto px-4 py-6 space-y-2">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              className="w-full justify-start text-foreground hover:text-neon-purple hover:bg-neon-purple/10 transition-all duration-300"
              onClick={() => scrollToSection(item.href)}
            >
              <item.icon className="w-5 h-5 mr-3 text-neon-purple" />
              {item.name}
            </Button>
          ))}
          <Button
            className="w-full bg-gradient-neon hover:opacity-90 text-white font-semibold glow-purple mt-4"
            onClick={() => {
              scrollToSection("#premios");
              setIsOpen(false);
            }}
          >
            Participar Ahora
          </Button>
        </nav>
      </motion.div>
    </>
  );
}
