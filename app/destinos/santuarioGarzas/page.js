import Image from "next/image";
import santuarioGarzas from "@/public/images/santuarioGarzas.jpg";
import { Oswald } from "next/font/google";
import { Montserrat } from "next/font/google";
import RevealOnScroll from "@/components/scroll";
import ScrollListener from "@/components/scrollListener";

const oswald = Oswald({ weight: "700", subsets: ["latin"] });

const montserrat = Montserrat({ weight: "700", subsets: ["latin"] });

const SantuarioGarzas = () => {
  return (
    <section>
      <article>
        <h1 className="py-3 text-5xl font-bold mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-black text-center">
          Santuario de
        </h1>

        <h1 className="py-3 text-5xl font-bold mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-black text-center">
          las Garzas
        </h1>

        <RevealOnScroll>
          <Image
            className="wrapper rounded-xl w-[60%] h-[50%]items-center justify-between"
            src={santuarioGarzas}
            alt="Santuario de las Garzas"
          />
        </RevealOnScroll>

        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >
          El santuario de las Garzas es una reserva natural de aves migratorias
          de diversas especies que en los meses de abril y mayo empollan sus
          crías. El ruido es bullicioso, desde lejos se escucha y se ve
          revolotear en el cielo azul variedades de aves, tales como: garzas
          blancas y espátula rosada, albatros, cigüeña mexicana, paspaque,
          pijije, cuervo de agua, zopilotes, gaitanes, martin pescador, entre
          otras raras especies.
        </p>

        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >
          En el santuario se forman diversos ecosistemas que lo integran,
          aproximadamente de 1.5 hectáreas, donde se mantiene una cadena
          alimenticia entre las aves, peces y cocodrilos de río. Allí se pueden
          apreciar árboles como el pucté y zapote, además de maravillosas
          bromelias. El santuario es un lugar ideal para observar la flora y
          fauna local.
        </p>
      </article>
    </section>
  );
};

export default SantuarioGarzas;
