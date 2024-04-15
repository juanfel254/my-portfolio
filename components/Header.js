import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@radix-ui/react-separator";
import SocialIcons from "./ui/SocialIcons";
import Footer from "./Footer";

export default function Header() {
  const siteSections = [
    {
      name: "Sobre Mi",
      url: "/",
    },
    {
      name: "Habilidades",
      url: "/",
    },
    {
      name: "Proyectos",
      url: "/",
    },
    {
      name: "Contacto",
      url: "/",
    },
  ];

  return (
    <header className="w-full flex justify-between items-center sticky top-0 bg-black bg-opacity-50 backdrop-blur text-white px-10 py-7 z-10">
      <Link
        href="/"
        className="font-semi-bold text-xl md:text-base transition hover:transition hover:animate-pulse hover:underline"
      >
        <h1>juanfe.site</h1>
      </Link>

      <Sheet>
        <SheetTrigger className="md:hidden">Menu</SheetTrigger>
        <SheetContent className="bg-black flex flex-col justify-between">
          <div className="flex flex-col gap-8">
            {siteSections.map((section, index) => (
              <Link
                key={index}
                href="#footer"
                className="transition duration-500 rounded px-2 py-3 underline text-xl hover:box hover:bg-white hover:text-black"
              >
                <SheetClose>
                  <li>{section.name}</li>
                </SheetClose>
              </Link>
            ))}
          </div>
          <SheetFooter className="w-100 m-0 p-0">
            <Footer className="p-0" />
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <nav className="hidden md:flex flex-row gap-7 items-center">
        {siteSections.map((section, index) => (
          <Link
            key={index}
            href={section.url}
            className="text-base transition duration-500 rounded py-2 px-3 hover:box hover:bg-white hover:text-black"
          >
            <li>{section.name}</li>
          </Link>
        ))}
      </nav>
    </header>
  );
}
