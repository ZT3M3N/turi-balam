import Image from "next/image";
import Link from "next/link";
import { Oswald } from "next/font/google";
import { Montserrat } from "next/font/google";
import RevealOnScroll from "@/components/scroll";
import ScrollListener from "@/components/scrollListener";
import tostadas from "@/public/images/tostadas.jpg";

const oswald = Oswald({ weight: "700", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "700", subsets: ["latin"] });

const Tostadas = () => {
  return (
    <section>
      <article>
        <h1 className="py-3 text-5xl font-bold mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-black text-center">
          Tostadas de Pozol
        </h1>
        <RevealOnScroll>
          <Image
            src={tostadas}
            className="wrapper rounded-xl w-[60%] h-[50%]items-center justify-between"
            alt="Tostadas de Pozol"
          />
        </RevealOnScroll>
        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >
          Las tostadas de pozol son un platillo típico de la región de los ríos de Tabasco, en particular del municipio de Balancán. El pozol es una bebida tradicional hecha a base de maíz y cacao, y las tostadas se preparan con una masa hecha a base de pozol y se fríen en aceite caliente.
        </p>

        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >
          Las tostadas de pozol se sirven con una variedad de ingredientes, como carne deshebrada, frijoles refritos, queso fresco, aguacate, cebolla y salsa picante. Es un platillo muy popular en la región y se puede encontrar en varios restaurantes y puestos callejeros.
        </p>
      </article>
    </section>
  )
}

export default Tostadas