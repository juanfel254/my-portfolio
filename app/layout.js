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
    <html lang="en">
      <body
        className={`${inter.className} bg-black text-white -mt-20 px-7 md:px-10`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
