import "./globals.css";
import { Inter, Unbounded } from "next/font/google";
import { BottomToTopBtn } from "@/components/BottomToTop";
import Script from "next/script";

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
  title: "GeeksVisor - Expert in building AWS Serverless Solutions",
  description: "Geeksvisor is a leading provider of scalable, cost-effective AWS serverless solutions and custom app development. With a focus on transparency, proactive communication, and innovative approaches, we deliver future-proof solutions tailored to your business needs. Our AWS certified team specializes in cloud architecture, serverless development, DevOps, AI & ML, and API integrations across various industries.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': 
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K4ZT7B3B');
          `,
        }}
      />

      <body className={`${inter.variable} ${unbound.variable}`}>
        {children}

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K4ZT7B3B"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          ></iframe>
        </noscript>

        <BottomToTopBtn />
      </body>
    </html>
  );
}
