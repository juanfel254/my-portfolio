import Button from "@/components/atoms/Button/Button";
import Link from "@/components/atoms/Link/Link";

interface NavbarProps {
  selectedPage?: string;
  mainLogo?: string;
  items?: string[];
}

const Navbar: React.FC<NavbarProps> = ({ mainLogo, items }) => {
  return (
    <nav className="mx-auto w-fit flex lg:gap-4 max-w-screen-xl items-center justify-center border-2 p-2 rounded-full bg-neutral-50 shadow-xl">
      <Link href="#" target="_top">
        <Button variant="ghost" className="border-none ">JFPR</Button>
      </Link>
      <Link href="#about" target="_self">
        <Button variant="ghost">About</Button>
      </Link>
      <Link href="#services" target="_self">
        <Button variant="ghost">Services</Button>
      </Link>
      <Link href="#contact" target="_self">
        <Button variant="primary">Contact</Button>
      </Link>
    </nav>
  );
}

export default Navbar;
