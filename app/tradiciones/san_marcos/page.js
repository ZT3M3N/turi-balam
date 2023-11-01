import Image from "next/image";
import { Oswald } from "next/font/google";
import { Montserrat } from "next/font/google";
import RevealOnScroll from "@/components/scroll";
import ScrollListener from "@/components/scrollListener";
import feriaSM from "@/public/images/feriaSM.jpeg";

const oswald = Oswald({ weight: "700", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "700", subsets: ["latin"] });

const SanMarcos = () => {
  return (
    <section>
      <article>
        <h1 className="py-3 text-5xl font-bold mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-black text-center">
          Feria de "San Marcos"
        </h1>

        <RevealOnScroll>
          <Image
            src={feriaSM}
            className="wrapper rounded-xl w-[60%] h-[50%]items-center justify-between"
            alt="Carnaval"
          />
        </RevealOnScroll>
        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >
          La Feria de San Marcos es una festividad que se celebra anualmente en el municipio de Balancán, Tabasco, México. La feria se lleva a cabo en honor a San Marcos Evangelista, el santo patrono del municipio.
        </p>

        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >San Marcos Evangelista es el santo patrono de los abogados, notarios, cautivos, prisioneros, vidrieros y hacedores de vitrales.</p>
        
      </article>
    </section>
  )
}

export default SanMarcos