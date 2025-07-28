import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Cristiane Alcântara - Nutricionista Funcional | Método Sozo",
  description: "Saúde integral com o Método Sozo. Resgate sua saúde de forma leve e possível com a nutricionista funcional Cristiane Alcântara.",
  keywords: "nutricionista funcional, método sozo, saúde integral, reeducação alimentar, aracaju, consulta nutricional",
  authors: [{ name: "Cristiane Alcântara" }],
  robots: "index, follow",
  openGraph: {
    title: "Cristiane Alcântara - Nutricionista Funcional | Método Sozo",
    description: "Saúde integral com o Método Sozo. Resgate sua saúde de forma leve e possível com estratégias personalizadas de nutrição funcional.",
    type: "website",
    url: "https://nutri-cristiane-alcantara.vercel.app",
    siteName: "Cristiane Alcântara - Nutricionista Funcional",
    locale: "pt_BR",
    images: [
      {
        url: "https://nutri-cristiane-alcantara.vercel.app/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Cristiane Alcântara - Nutricionista Funcional | Método Sozo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cristiane Alcântara - Nutricionista Funcional | Método Sozo",
    description: "Saúde integral com o Método Sozo. Resgate sua saúde de forma leve e possível.",
    images: ["https://nutri-cristiane-alcantara.vercel.app/og-cover.png"],
    creator: "@cristianealcantara",
    site: "@cristianealcantara",
  },
  other: {
    "pinterest-rich-pin": "true",
    "pinterest:image": "https://nutri-cristiane-alcantara.vercel.app/pinterest-cover.jpg",
    "pinterest:description": "Saúde integral com o Método Sozo. Descubra como resgatar sua saúde de forma leve e possível.",
    "theme-color": "#8B5CF6",
    "msapplication-TileColor": "#8B5CF6",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Cristiane Alcântara",
  },
  alternates: {
    canonical: "https://nutri-cristiane-alcantara.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
