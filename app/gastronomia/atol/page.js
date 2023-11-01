import Image from "next/image";
import { Oswald } from "next/font/google";
import { Montserrat } from "next/font/google";
import RevealOnScroll from "@/components/scroll";
import ScrollListener from "@/components/scrollListener";
import atol from "@/public/images/atol.jpg";

const oswald = Oswald({ weight: "700", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "700", subsets: ["latin"] });

const Atol = () => {
  return (
    <section>
      <article>
        <h1 className="py-3 text-5xl font-bold mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-black text-center">
          Atol de Maíz
        </h1>
        <RevealOnScroll>
          <Image
            src={atol}
            className="wrapper rounded-xl w-[60%] h-[50%]items-center justify-between"
            alt="Atoil de Maíz"
          />
        </RevealOnScroll>
        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >
          El atol de maíz es una bebida caliente y espesa que se prepara con masa de maíz, agua, leche y azúcar. Es una bebida tradicional en muchos países de América Latina, incluyendo México. El atole de maíz es una bebida muy versátil y se puede preparar con diferentes ingredientes, como canela, vainilla, chocolate, frutas y más.
        </p>

        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >
          En particular, el atole de maíz de Balancán Tabasco es conocido por su sabor dulce y cremoso. La receta original incluye ingredientes como canela, vainilla, piloncillo y leche.
        </p>
      </article>
    </section>
  )
}

export default Atol