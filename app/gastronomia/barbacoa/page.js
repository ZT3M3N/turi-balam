import Image from "next/image";
import Link from "next/link";
import { Oswald } from "next/font/google";
import { Montserrat } from "next/font/google";
import RevealOnScroll from "@/components/scroll";
import ScrollListener from "@/components/scrollListener";
import barbacoa from "@/public/images/barbacoa.jpg";

const oswald = Oswald({ weight: "700", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "700", subsets: ["latin"] });

const Barbacoa = () => {
  return (
    <section>
      <article>
        <h1 className="py-3 text-5xl font-bold mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-black text-center">
          Barbacoa de Res
        </h1>
        <RevealOnScroll>
          <Image
            src={barbacoa}
            className="wrapper rounded-xl w-[60%] h-[50%]items-center justify-between"
            alt="Barbacoa"
          />
        </RevealOnScroll>
        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >
          En México, la barbacoa es un platillo muy popular y se puede encontrar en muchos lugares. 
        </p>
        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >En Tabasco, la barbacoa es un platillo típico y se prepara con carne de res o borrego. Una receta popular de barbacoa tabasqueña incluye carne de res marinada en una mezcla de chiles y especias, que le da un sabor auténtico e inigualable.</p>
      </article>
    </section>
  )
}

export default Barbacoa