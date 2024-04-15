import Image from "next/image";

export default function HomeBanner() {
  return (
    <section className="-my-44 md:-my-36 flex flex-col w-full h-screen items-center justify-center text-center gap-5 md:gap-7">
      <h1 className="font-extrabold text-4xl md:text-6xl">
        Juan <span className="text-sky-400">Felipe Parra</span> Runceria
      </h1>
      <div className="flex flex-col-reverse md:flex-col gap-2">
        <div>
          <h2 className="text-sm md:text-xl">
            Representante Estudiantil de la Facultad de Ingeniería{" "}
            <span className="font-black text-lg md:text-xl">UNAL</span>
          </h2>
        </div>
        <div className="flex w-full justify-center items-center gap-2">
          <Image
            width={100}
            height={100}
            src="/icons/tigui.svg"
            alt="Tigüi S.A.S"
            className="-mb-1 size-12 md:size-14 h-auto"
          />
          <h2 className="text-sm md:text-xl">
            Software CTO & Desarrollador Web
          </h2>
        </div>
      </div>
    </section>
  );
}
