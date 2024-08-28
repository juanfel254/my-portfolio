import Button from "@/components/atoms/Button/Button";
import Link from "@/components/atoms/Link/Link";

interface NavbarProps {
  selectedPage?: string;
  mainLogo?: string;
  items?: string[];
}

const Navbar: React.FC<NavbarProps> = ({ mainLogo, items }) => {
  return (
    <nav className="mx-auto w-fit flex gap-4 max-w-screen-xl items-center justify-center border-2 p-2 rounded-full bg-neutral-50 shadow-xl">
      <Link href="#" target="_top" className="  font-semibold w-fit flex px-4">
        JFPR
      </Link>
      <Link href="#about" target="_self">
        <Button onClick={() => console.log('siuu')} variant="ghost">About</Button>
      </Link>
      <Link href="#services" target="_self">
        <Button variant="ghost">Services</Button>
      </Link>
      <Link href="#contact" target="_self">
        <Button>Contact</Button>
      </Link>
    </nav>
  );
}

export default Navbar;
