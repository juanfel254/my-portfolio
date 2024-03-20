import { inter } from "@/utils/fonts";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Juan Felipe Parra Runceria",
  description:
    "Desarrollador Web, Emprendedor, Futuro Ingeniero Mecánico y Representante Estudiantil de la Facultad de Ingeniería en la UNAL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${inter.className} flex justify-between flex-col bg-black text-white bg-flow-2`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
