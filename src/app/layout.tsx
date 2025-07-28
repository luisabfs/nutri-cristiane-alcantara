import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Cristiane Alcântara - Nutricionista Funcional | Método Sozo",
  description: "Saúde integral com o Método Sozo. Nutricionista clínica e funcional Cristiane Alcântara. Resgate sua saúde de forma leve e possível.",
  keywords: "nutricionista, nutricionista aracaju, nutricionista unimed, nutricionista em aracaju, nutrição funcional, método sozo, saúde integral, alimentação saudável",
  authors: [{ name: "Cristiane Alcântara" }],
  openGraph: {
    title: "Cristiane Alcântara - Nutricionista Funcional",
    description: "Saúde integral com o Método Sozo",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
