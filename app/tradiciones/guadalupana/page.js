import Image from "next/image";
import { Oswald } from "next/font/google";
import { Montserrat } from "next/font/google";
import RevealOnScroll from "@/components/scroll";
import ScrollListener from "@/components/scrollListener";
import guadalupana from "@/public/images/guadalupana.jpg";

const oswald = Oswald({ weight: "700", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "700", subsets: ["latin"] });

const Guadalupana = () => {
  return (
    <section>
      <article>
        <h1 className="py-3 text-5xl font-bold mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-black text-center">
          Día de Celebración a
        </h1>

        <h1 className="py-3 text-5xl font-bold mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-black text-center">
          la Virgen de Guadalupe
        </h1>

        <RevealOnScroll>
          <Image
            src={guadalupana}
            className="wrapper rounded-xl w-[60%] h-[50%]items-center justify-between"
            alt="Atoil de Maíz"
          />
        </RevealOnScroll>
        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >
          El día de la Guadalupana es una celebración religiosa que se lleva a
          cabo en México el 12 de diciembre de cada año. Esta fecha conmemora la
          aparición de la Virgen de Guadalupe ante Juan Diego en el cerro del
          Tepeyac en 1531.
        </p>

        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >
          En Balancán, Tabasco, esta festividad es muy importante y se celebra
          con gran entusiasmo. Durante este día, los habitantes de Balancán se
          reúnen en la iglesia para honrar a la Virgen de Guadalupe con cantos,
          oraciones y ofrendas. También se realizan procesiones y
          peregrinaciones en honor a la Virgen.
          </p>
          <p
            className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
          >
            La celebración del día de la Guadalupana es una manifestación
            cultural y religiosa que año con año se expande en México y fuera de
            sus fronteras.
        </p>
      </article>
    </section>
  );
};

export default Guadalupana;
