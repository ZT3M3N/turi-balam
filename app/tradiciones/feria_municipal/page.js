import Image from "next/image";
import { Oswald } from "next/font/google";
import { Montserrat } from "next/font/google";
import RevealOnScroll from "@/components/scroll";
import ScrollListener from "@/components/scrollListener";
import feriaMunicipal from "@/public/images/feriaMunicipal.jpg";

const oswald = Oswald({ weight: "700", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "700", subsets: ["latin"] });

const FeriaMunicipal = () => {
  return (
    <section>
      <article>
        <h1 className="py-3 text-5xl font-bold mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-black text-center">
          Feria Municipal
        </h1>

        <RevealOnScroll>
          <Image
            src={feriaMunicipal}
            className="wrapper rounded-xl w-[60%] h-[50%]items-center justify-between"
            alt="Carnaval"
          />
        </RevealOnScroll>
        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >
          La Feria Municipal de Balancán se lleva a cabo en la cabecera del municipio y generalmente se celebra a mediados de diciembre.
        </p>

        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >La Feria Municipal es una festividad muy importante para la comunidad de Balancán. Durante la feria, los habitantes de Balancán y los visitantes disfrutan de una variedad de actividades, incluyendo juegos mecánicos, concursos, espectáculos en vivo y comida.</p>
        
      </article>
    </section>
  )
}

export default FeriaMunicipal