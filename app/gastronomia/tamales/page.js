import Image from "next/image";
import Link from "next/link";
import { Oswald } from "next/font/google";
import { Montserrat } from "next/font/google";
import RevealOnScroll from "@/components/scroll";
import ScrollListener from "@/components/scrollListener";
import tamales from "@/public/images/tamales.jpg";

const oswald = Oswald({ weight: "700", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "700", subsets: ["latin"] });

const Tamales = () => {
  return (
    <section>
      <article>
        <h1 className="py-3 text-5xl font-bold mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-black text-center">
          Tamales
        </h1>
        <RevealOnScroll>
          <Image
            src={tamales}
            className="wrapper rounded-xl w-[60%] h-[50%]items-center justify-between"
            alt="Tamales"
          />
        </RevealOnScroll>
        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >
          Los tamales son un platillo muy popular en México y Balancán, Tabasco no es la excepción. En esta región, se pueden encontrar varios tipos de tamales, cada uno con su propia receta y sabor característico.
        </p>

        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >
          Uno de los tamales más populares en Balancán es el tamal de chipilín. El chipilín es una hierba comestible que se utiliza en la cocina mexicana y centroamericana. El tamal de chipilín es un tamal grande preparado con masa, tomate, cebolla, cilantro, perejil, chile picante y chile dulce, más carne deshebrada de res, pollo o puerco. La masa del maíz cocido con cal se bate con manteca de cerdo y un sofrito hecho con los ingredientes vegetales.
        </p>

        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >
         Otro tipo de tamal que se puede encontrar en Balancán es el tamal de bola. Este tamal se prepara con masa de maíz rellena de carne de cerdo adobada y envuelta en hojas de plátano.
        </p>
      </article>
    </section>
  )
}

export default Tamales