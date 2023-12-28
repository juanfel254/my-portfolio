import { Separator } from "@/components/ui/separator";

import SocialIcons from "./ui/SocialIcons";

export default function Footer() {
  return (
    <footer id="footer" className="my-4 flex flex-col py-7 gap-8">
      <Separator className="" />
      <div className="flex flex-col-reverse gap-4 justify-between items-center text-center md:flex-row md:text-left">
        <div>
          <p className="text-sm text-gray-400">
            Desarrollado y diseñado con pasión <br />
            Bogotá, Colombia <br />
            2023
          </p>
        </div>
        <SocialIcons />
      </div>
    </footer>
  );
}
