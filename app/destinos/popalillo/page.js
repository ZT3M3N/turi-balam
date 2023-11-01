import Image from "next/image";
import popalillo1 from "@/public/images/popalillo1.jpeg";
import { Oswald } from "next/font/google";
import { Montserrat } from "next/font/google";
import RevealOnScroll from "@/components/scroll";
import ScrollListener from "@/components/scrollListener";

const oswald = Oswald({ weight: "700", subsets: ["latin"] });

const montserrat = Montserrat({ weight: "700", subsets: ["latin"] });

const Popalillo = () => {
  return (
    <section>
      <article>
        <h1 className="py-3 text-5xl font-bold mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-black text-center">
          Lago
        </h1>

        <h1 className="text-5xl font-bold mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-black text-center">
          "El Popalillo"
        </h1>

        <RevealOnScroll>
          <Image
            className="wrapper rounded-xl w-[60%] h-[50%]items-center justify-between"
            src={popalillo1}
            alt="Popalillo"
          />
        </RevealOnScroll>

        <div className="container mx-auto text-center">

        <p
            className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
          >
          El Lago Popalillo es un lago artificial situado en Balancán, Tabasco,
          México. Fue creado como un proyecto de desarrollo agrícola y de
          generación de electricidad en la década de 1970. 
          </p>
          <p
            className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
          >
          El lago es conocido
          por su belleza natural y es un popular destino turístico y recreativo
          para las personas de la región. Hay muchas actividades disponibles en
          y alrededor del lago, como pesca, natación, esquí acuático, y paseos
          en bote. Además, existen áreas de picnic y senderos para caminar, lo
          que lo convierte en un lugar ideal para una escapada al aire libre.
          </p>

          <p
            className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
          >
          Este lago es una de las lagunas más grandes de la región y es un lugar
          popular para la pesca y la recreación. El lago es alimentado por
          varios arroyos y ríos, incluyendo el río Usumacinta. La laguna es un
          lugar ideal para observar la flora y fauna local, incluyendo aves
          acuáticas, iguanas, cocodrilos y más. Además, el lago es un lugar
          popular para la pesca de especies como el robalo, la mojarra y el
          bagre. Si te gusta la pesca o simplemente disfrutar de la naturaleza,
          el Lago "El Popalillo" es un lugar que no te puedes perder.
        </p>
        </div>
      </article>
    </section>
  );
};

export default Popalillo;
