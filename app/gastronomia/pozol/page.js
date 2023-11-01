import Image from "next/image";
import Link from "next/link";
import { Oswald } from "next/font/google";
import { Montserrat } from "next/font/google";
import RevealOnScroll from "@/components/scroll";
import ScrollListener from "@/components/scrollListener";
import pozol from "@/public/images/pozol.jpg";

const oswald = Oswald({ weight: "700", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "700", subsets: ["latin"] });

const Pozol = () => {
  return (
    <section>
      <article>
        <h1 className="py-3 text-5xl font-bold mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-black text-center">
          Pozol Blanco y de Cacao
        </h1>
        <RevealOnScroll>
          <Image
            src={pozol}
            className="wrapper rounded-xl w-[60%] h-[50%]items-center justify-between"
            alt="Pozol"
          />
        </RevealOnScroll>
        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >
          El pozol es una bebida ancestral de origen mesoamericano que se consume en diferentes regiones de México, especialmente en los estados de Tabasco y Chiapas. El pozol blanco es una variedad de pozol que se prepara con masa de maíz, agua y sal. Por otro lado, el pozol de cacao es una variante que se prepara con masa de maíz, cacao y agua.
        </p>

        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >
          El pozol con cacao es una bebida espesa de color café que ayuda a mitigar la sed y es muy popular en Tabasco. La receta original incluye ingredientes como el cacao y el maíz, que se mezclan mediante un proceso artesanal para generar una bebida espesa y cremosa.
        </p>
      </article>
    </section>
  )
}

export default Pozol