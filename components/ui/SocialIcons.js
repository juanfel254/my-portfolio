import Image from "next/image";
import Link from "next/link";

export default function SocialIcons() {
  const socialNetworks = [
    {
      name: "Github",
      url: "https://github.com/juanfel254",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/juanfel254/",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/juan-felipe-parra-runceria-419208210/",
    },
  ];
  return (
    <div className="flex flex-col justify-between items-center md:items-end gap-4">
      <div className="flex flex-row gap-5">
        {socialNetworks.map((item, index) => (
          <Link key={index} href={item.url} target="_blank">
            <Image
              src={`./icons/${item.name.toLowerCase()}.svg`}
              alt={`${item.name} link`}
              width={35}
              height={35}
            />
          </Link>
        ))}
      </div>
      <h3 className="">Juan Felipe Parra Runceria</h3>
    </div>
  );
}
