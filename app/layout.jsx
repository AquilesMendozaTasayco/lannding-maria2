import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "María Auxiliadora II | Roden Constructores",
  description: "Proyecto inmobiliario en Trujillo - Roden Constructores",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="font-[Poppins] antialiased bg-[#F5F7FA] text-[#0F172A]">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
