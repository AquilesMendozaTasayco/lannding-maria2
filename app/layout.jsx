import "./globals.css";
import Script from "next/script";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "María Auxiliadora II | Roden Constructores",
  description: "Proyecto inmobiliario en Trujillo - Roden Constructores",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-B1V4FE4BM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B1V4FE4BM');
          `}
        </Script>
      </head>
      <body className="font-[Poppins] antialiased bg-[#F5F7FA] text-[#0F172A]">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
