import Image from "next/image";
import { Oswald } from "next/font/google";
import { Montserrat } from "next/font/google";
import RevealOnScroll from "@/components/scroll";
import ScrollListener from "@/components/scrollListener";
import carnaval from "@/public/images/carnaval.jpg";

const oswald = Oswald({ weight: "700", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "700", subsets: ["latin"] });

const Carnaval = () => {
  return (
    <section>
      <article>
        <h1 className="py-3 text-5xl font-bold mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-black text-center">
          Carnaval Anual
        </h1>

        <RevealOnScroll>
          <Image
            src={carnaval}
            className="wrapper rounded-xl w-[60%] h-[50%]items-center justify-between"
            alt="Carnaval"
          />
        </RevealOnScroll>
        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >
          El carnaval es una festividad que se celebra anualmente en el municipio de
          Balancán, Tabasco, México. Por lo general, el carnaval comienza el penúltimo día Lunes del mes de enero y termina el Miércoles de Ceniza (3 días de duración).
        </p>

        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >
          Durante el carnaval, los habitantes de Balancán se disfrazan con
          trajes coloridos y máscaras para participar en desfiles y bailes.
          También se llevan a cabo concursos de disfraces y bailes.
        </p>
        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >
          El carnaval es una celebración muy importante para la comunidad de
          Balancán, ya que es una oportunidad para reunirse y celebrar juntos.
        </p>
      </article>
    </section>
  );
};

export default Carnaval;
