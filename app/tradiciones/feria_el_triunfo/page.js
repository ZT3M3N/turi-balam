import Image from "next/image";
import { Oswald } from "next/font/google";
import { Montserrat } from "next/font/google";
import RevealOnScroll from "@/components/scroll";
import ScrollListener from "@/components/scrollListener";
import feria_eltriunfo from "@/public/images/feria_eltriunfo.jpg";

const oswald = Oswald({ weight: "700", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "700", subsets: ["latin"] });

const FerialTriunfo = () => {
  return (
    <section>
      <article>
        <h1 className="py-3 text-5xl font-bold mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-black text-center">
          Feria de Villa "El triunfo"
        </h1>

        <RevealOnScroll>
          <Image
            src={feria_eltriunfo}
            className="wrapper rounded-xl w-[60%] h-[50%]items-center justify-between"
            alt="Carnaval"
          />
        </RevealOnScroll>
        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >
          La feria en Villa El Triunfo es una festividad que se celebra
          anualmente en el municipio de Balancán, Tabasco, México. La feria se
          lleva a cabo del 9 al 12 de diciembre.
        </p>

        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >
          Durante la feria, los habitantes del pueblo y los visitantes,
          disfrutan de una variedad de actividades, incluyendo juegos mecánicos,
          concursos, espectáculos en vivo y comida.
        </p>
      </article>
    </section>
  );
};

export default FerialTriunfo;
