import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fredoka = Fredoka({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "English Everyday – Inglês do Dia a Dia",
  description:
    "Plataforma interativa e gamificada para aprender inglês focando em cenários da vida real e do cotidiano. Vocabulário, flashcards e quizzes.",
  authors: [{ name: "English Everyday" }],
  keywords: [
    "aprender inglês",
    "inglês do dia a dia",
    "English everyday",
    "vocabulário inglês",
    "quiz inglês",
    "flashcards inglês",
  ],
  openGraph: {
    title: "English Everyday – Inglês do Dia a Dia",
    description:
      "Aprenda inglês com cenários reais: família, supermercado, hobbies e muito mais.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "English Everyday – Inglês do Dia a Dia",
    description:
      "Aprenda inglês com cenários reais: família, supermercado, hobbies e muito mais.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={fredoka.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
