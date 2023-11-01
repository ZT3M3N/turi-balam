import Image from "next/image";
import santuario_girasoles from "./santuario_girasoles.jpg";
import { Oswald } from "next/font/google";
import { Montserrat } from "next/font/google";
import ScrollListener from "@/components/scrollListener";
import RevealOnScroll from "@/components/scroll";

const oswald = Oswald({ weight: "700", subsets: ["latin"] });

const montserrat = Montserrat({ weight: "700", subsets: ["latin"] });

const SantuarioGirasoles = () => {
  return (
    <section>
      <article>
        <h1 className="py-3 text-5xl font-bold mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-black text-center">
          El Santuario de los Girasoles
        </h1>

        <RevealOnScroll>
          <Image
            className="wrapper rounded-xl w-[60%] h-[50%]items-center justify-between"
            src={santuario_girasoles}
            alt="santuario de los girasoles"
          />
        </RevealOnScroll>

        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >
          El Santuario de los Girasoles es un lugar turístico y un parque
          ecológico que se ha vuelto muy popular por su belleza natural y por
          los campos de girasoles que se extienden por la zona.
        </p>
        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >
          Este santuario es conocido por sus impresionantes vistas de los campos
          de girasoles en flor, lo que lo convierte en un lugar popular para la
          fotografía y el turismo. Además de los girasoles, el parque también
          ofrece senderos para caminar, áreas de picnic y una gran variedad de
          flora y fauna local, incluyendo aves y mariposas. También se puede
          disfrutar de actividades como el cabalgue y el senderismo, así como de
          la tranquilidad del campo.
        </p>
        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >
          Si estás interesado en visitar el Santuario de los Girasoles en
          Balancan, Tabasco, es importante tener en cuenta que la mejor época
          para ver los girasoles en flor es de julio a agosto. Sin embargo, es
          posible que la experiencia varíe según la época del año y el clima.
        </p>
      </article>
    </section>
  );
};

export default SantuarioGirasoles;
