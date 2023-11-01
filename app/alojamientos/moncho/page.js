import Image from "next/image";
import { Oswald } from "next/font/google";
import { Montserrat } from "next/font/google";
import RevealOnScroll from "@/components/scroll";
import ScrollListener from "@/components/scrollListener";
import moncho from "@/public/images/moncho.jpg";

const oswald = Oswald({ weight: "700", subsets: ["latin"] });

const montserrat = Montserrat({ weight: "700", subsets: ["latin"] });

const Moncho = () => {
  return (
    <section>
      <article>
        <h1 className="py-3 text-5xl font-bold mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-black text-center">
          Hotel
        </h1>

        <h1 className="text-5xl font-bold mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-black text-center">
          "Moncho"
        </h1>

        <RevealOnScroll>
          <Image
            src={moncho}
            className="wrapper rounded-xl w-[60%] h-[50%]items-center justify-between"
            alt="Iglesia del Señor de Tila"
          />
        </RevealOnScroll>

        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >
          El Hotel Moncho es un alojamiento en Balancán de Domínguez, Tabasco.
          Ofrece habitaciones equipadas con TV de pantalla plana, aire
          acondicionado y baño privado 1. Además, el hotel cuenta con WiFi y
          aparcamiento privado gratuitos.
        </p>

        <h2 className={`py-5 text-5xl text-center ${oswald.className}`}>Dirección:</h2>

        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-center text-base/loose font-bold`}
        >
          Calle Eusebio Castillo 322, 86930 Balancán de Domínguez, Tabasco
        </p>

        <h2 className={`py-5 text-5xl text-center ${oswald.className}`}>Teléfono:</h2>

        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12 lg
        w-11/12 mx-auto text-center text-base/loose font-bold`}
        >
          934 344 0676
        </p>
      </article>
    </section>
  );
};

export default Moncho;
