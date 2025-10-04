import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./clientLayout";

export const metadata: Metadata = {
  title:
    "Gran Rifa Tecnológica & Torneo eSports - VIII Ciclo Ing. Sistemas UNDC",
  description:
    "Participa en nuestra rifa de premios tecnológicos y torneos eSports. Organizado por el VIII Ciclo de Ingeniería de Sistemas - UNDC",
  generator: "v0.app",
  openGraph: {
    title: "Gran Rifa Tecnológica & Torneo eSports - VIII Ciclo",
    description:
      "Participa en nuestra rifa de premios tecnológicos y torneos eSports",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ClientLayout>{children}</ClientLayout>;
}
