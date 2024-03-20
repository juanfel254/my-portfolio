import Image from "next/image";

export default function HomeBanner() {
  return (
    <section className="-my-60 md:-my-36 flex flex-col w-full h-screen items-center justify-center text-center gap-7">
      <h1 className="font-extrabold text-5xl lg:text-8xl">
        Juan <span className="text-sky-400">Felipe Parra</span> Runceria
      </h1>
      <div className="flex gap-3 items-center">
        <h2 className="text-lg md:text-3xl">
          Representante Estudiantil de la Facultad de Ingeniería
        </h2>
        <h2 className="font-black text-lg md:text-4xl">UNAL</h2>
      </div>
      <div className="flex gap-4 items-center">
        <Image
          width={100}
          height={100}
          src="/icons/tigui.svg"
          alt="Tigüi S.A.S"
          className="-mb-1"
        />
        <h2 className="text-lg md:text-3xl">
          Software CTO & Desarrollador Web
        </h2>
      </div>
    </section>
  );
}
