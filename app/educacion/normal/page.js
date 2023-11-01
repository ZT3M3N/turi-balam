import Image from "next/image";
import Link from "next/link";
import normal from "@/public/images/normal.jpg";
import { Oswald } from "next/font/google";
import { Montserrat } from "next/font/google";
import RevealOnScroll from "@/components/scroll";
import ScrollListener from "@/components/scrollListener";

const oswald = Oswald({ weight: "700", subsets: ["latin"] });

const montserrat = Montserrat({ weight: "700", subsets: ["latin"] });

const Normal = () => {
  return (
    <section>
      <article>
        <h1 className="py-3 text-5xl font-bold mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-black text-center">
          Escuela Normal Urbana
        </h1>

        <h1 className="text-5xl font-bold mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-black text-center">
          de Balancán
        </h1>

        <RevealOnScroll>
          <Image
            src={normal}
            className="wrapper rounded-xl w-[60%] h-[50%]items-center justify-between"
            alt="ITSR"
          />
        </RevealOnScroll>

        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >
          La Escuela Normal Urbana de Balancán es una institución educativa que
          se dedica a la formación docente para el nivel medio superior y
          superior. Se encuentra ubicada en Balancán, Tabasco.
        </p>

        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >
          La escuela ofrece programas de formación docente en diversas áreas,
          incluyendo educación preescolar, educación primaria, educación
          secundaria y educación media superior. Además, cuenta con una serie de
          talleres y actividades extracurriculares para complementar la
          formación de los estudiantes.
        </p>

        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >
          La Escuela Normal Urbana de Balancán es una institución importante en
          la ciudad y ha contribuido significativamente a la formación de
          docentes en la región.
        </p>
      </article>
    </section>
  );
};

export default Normal;
