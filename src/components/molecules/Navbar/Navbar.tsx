import Button from "@/components/atoms/Button/Button";
import Link from "@/components/atoms/Link/Link";

interface NavbarProps {
  mainLogo?: string;
  items?: string[];
}

const Navbar: React.FC<NavbarProps> = ({ mainLogo, items }) => {
  return (
    <nav className="mx-auto flex max-w-screen-xl items-center justify-between">
      <Link href="/" className="text-2xl font-semibold">
        {mainLogo}
      </Link>
      <div className="flex gap-4">
        <Link href="#about" target="_self">
          <Button onClick={() => console.log('siuu')} variant="ghost">About</Button>
        </Link>
        <Link href="#services" target="_self">
          <Button variant="ghost">Services</Button>
        </Link>
        <Link href="#contact" target="_self">
          <Button>Contact</Button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
