"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cómo compro un ticket para la rifa?",
    answer:
      'Escanea el código QR con tu app de Yape, envía S/ 5.00 con la referencia "Rifa VIII Ciclo" y guarda tu comprobante. Ese será tu ticket de participación.',
  },
  {
    question: "¿Cuándo y dónde será el sorteo?",
    answer:
      "El sorteo se realizará el 14 de octubre a las 5:00 p.m. en el Auditorio UNDC. También será transmitido en vivo por Facebook e Instagram.",
  },
  {
    question: "¿Puedo participar en varios torneos?",
    answer:
      "Sí, puedes inscribirte en todos los torneos que desees. Cada torneo tiene su propia inscripción y premio.",
  },
  {
    question: "¿Los torneos son solo para estudiantes de UNDC?",
    answer:
      "Tienen prioridad los estudiantes de UNDC, pero si quedan cupos disponibles, pueden participar personas externas.",
  },
  {
    question: "¿Cómo sabré si gané en la rifa?",
    answer:
      "Los ganadores serán anunciados durante el sorteo en vivo y también se publicarán en esta página web y en nuestras redes sociales.",
  },
  {
    question: "¿Para qué se usarán los fondos recaudados?",
    answer:
      "Los fondos se destinarán a la compra de camisetas del VIII Ciclo, organización de la comparsa, premios de los torneos y logística general del evento.",
  },
];

export function FAQ() {
  return (
    <section className="relative py-20 px-4 bg-gradient-gamer">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-glow-purple">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Resolvemos tus dudas sobre la rifa y los torneos
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 hover:border-neon-purple/50 transition-all"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-neon-purple">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
