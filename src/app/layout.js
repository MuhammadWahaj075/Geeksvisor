import "./globals.css";
import { Inter, Unbounded } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import BottomToTopBtn from "@/components/BottomToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
  display: "swap",
});
const unbound = Unbounded({
  subsets: ["latin"],
  variable: "--unbound",
  display: "swap",
});

export const metadata = {
  title: "Geeksvisor",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" class="!scroll-smooth">
      <body className={`${inter.variable} ${unbound.variable}`}>
        <Header />
        {children}
        <BottomToTopBtn />
        <Footer />
      </body>
    </html>
  );
}
