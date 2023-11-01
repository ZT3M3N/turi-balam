import Image from "next/image";
import { Oswald } from "next/font/google";
import { Montserrat } from "next/font/google";
import RevealOnScroll from "@/components/scroll";
import ScrollListener from "@/components/scrollListener";
import diaMuertos from "@/public/images/diaMuertos.jpg";

const oswald = Oswald({ weight: "700", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "700", subsets: ["latin"] });

const Difuntos = () => {
  return (
    <section>
      <article>
        <h1 className="py-3 text-5xl font-bold mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-black text-center">
          Día de Muertos
        </h1>

        <RevealOnScroll>
          <Image
            src={diaMuertos}
            className="wrapper rounded-xl w-[60%] h-[50%]items-center justify-between"
            alt="Carnaval"
          />
        </RevealOnScroll>

        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >El día de muertos es una festividad que se celebra el 1 y 2 de noviembre. Durante estos días, se cree que los espíritus de los difuntos regresan al mundo de los vivos para visitar a sus seres queridos. Las familias preparan altares con ofrendas que incluyen comida, bebida y objetos personales del difunto. También se colocan flores de cempasúchil y velas para guiar a los espíritus hacia el altar.</p>

        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >
          El Día de Muertos es una festividad muy importante en México, y Balancán, Tabasco, no es la excepción, pues se construyen altares para honrar a los fieles difuntos.
        </p>
        
      </article>
    </section>
  )
}

export default Difuntos