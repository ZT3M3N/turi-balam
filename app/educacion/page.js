import Image from "next/image";
import Link from "next/link";
import { Oswald } from "next/font/google";
import { Montserrat } from "next/font/google";
import ITSR from "@/public/images/ITSR.jpg";
import normal from "@/public/images/normal.jpg";
import RevealOnScroll from "@/components/scroll";
import ScrollListener from "@/components/scrollListener";

const oswald = Oswald({ weight: "700", subsets: ["latin"] });

const montserrat = Montserrat({ weight: "700", subsets: ["latin"] });

export const metadata = {
  title: 'EDUCACIÓN - TURI-BALAM',
}

const Educacion = () => {
  return (
    <main>
      <RevealOnScroll>
      <h1 className="py-3 text-5xl/loose font-bold mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-black text-center">
          Educación y escuelas en Balancán, Tabasco
        </h1>
      </RevealOnScroll>

      <p
        className={`${montserrat.className} px-4 py-6 md:w-9/12 w-11/12 mx-auto text-justify text-base/loose font-bold`}
      >
        La educación en Balancán, Tabasco es proporcionada por varias
        instituciones educativas. La Escuela Normal Urbana de Balancán y el
        Instituto Tecnológico Superior de los Ríos (ITSR) son las instituciones
        educativas más importantes en la ciudad. Estas instituciones ofrecen
        programas de formación docente para el nivel medio superior y superior.
        Además, el municipio cuenta con una serie de escuelas primarias y
        secundarias públicas y privadas. La Secretaría de Educación de Tabasco
        es la encargada de supervisar y regular la educación en el estado.
      </p>

      <RevealOnScroll>
      <div className="mx-auto py-10 justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:px-5">
          {/* First Image */}
          <div className=" mx-auto">
          <div className="group h-80 w-80">
            <div className="reveal ">
              <div className="absolute inset-0">
                <Image
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                  src={ITSR}
                  alt="Tecnológico de Balancán"
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className={`text-4xl ${oswald.className}`}>
                    Instituto Tecnológico Superior de los Ríos
                  </h1>
                  <button className="mt-2 rounded-md bg-neutral-800 py-1 px-5 text-sm hover:bg-neutral-900">
                    <Link href="/educacion/tecnologico">Leer más</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* First Image */}
          <div className=" mx-auto">
          <div className="group h-80 w-80">
            <div className="reveal ">
              <div className="absolute inset-0">
                <Image
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                  src={normal}
                  alt="Escuela Normal Urbana"
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className={`text-4xl ${oswald.className}`}>
                    Escuela Normal Urbana
                  </h1>
                  <button className="mt-2 rounded-md bg-neutral-800 py-1 px-5 text-sm hover:bg-neutral-900">
                    <Link href="/educacion/normal">Leer más</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </RevealOnScroll>
    </main>
  );
};

export default Educacion;
