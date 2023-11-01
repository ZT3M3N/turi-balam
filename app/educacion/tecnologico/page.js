import Image from "next/image";
import Link from "next/link";
import ITSR from "@/public/images/ITSR.jpg";
import { Oswald } from "next/font/google";
import { Montserrat } from "next/font/google";
import RevealOnScroll from "@/components/scroll";
import ScrollListener from "@/components/scrollListener";

const oswald = Oswald({ weight: "700", subsets: ["latin"] });

const montserrat = Montserrat({ weight: "700", subsets: ["latin"] });

const Tecnologico = () => {
  return (
    <section>
      <article>
        <h1 className="py-3 text-5xl font-bold mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-black text-center">
          Instituto Tecnológico Superior
        </h1>

        <h1 className="text-5xl font-bold mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-black text-center">
          de los Ríos
        </h1>

        <RevealOnScroll>
          <Image
            src={ITSR}
            className="wrapper rounded-xl w-[60%] h-[50%]items-center justify-between"
            alt="ITSR"
          />
        </RevealOnScroll>

        
          <p
            className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
          >
            El Instituto Tecnológico Superior de Los Ríos es una institución educativa de nivel superior ubicada en Balancán, Tabasco. Fue fundado en 1996 y es un instituto público descentralizado del Estado de Tabasco, adscrito a la Subsecretaría de Educación e Investigaciones Tecnológicas, SEIT, de la SEP.
          </p>

          <p
            className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
          >
            El instituto ofrece programas educativos en diversas áreas, incluyendo ingeniería civil, ingeniería industrial, ingeniería en sistemas computacionales, entre otros. El campus cuenta con instalaciones modernas y equipadas para el aprendizaje y la investigación.
          </p>
      </article>
    </section>
  )
}

export default Tecnologico