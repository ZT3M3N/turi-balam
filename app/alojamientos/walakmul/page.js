import Image from "next/image";
import { Oswald } from "next/font/google";
import { Montserrat } from "next/font/google";
import RevealOnScroll from "@/components/scroll";
import ScrollListener from "@/components/scrollListener";
import hotel2 from "@/public/images/hotel2.jpg";

const oswald = Oswald({ weight: "700", subsets: ["latin"] });

const montserrat = Montserrat({ weight: "700", subsets: ["latin"] });

const Walakmul = () => {
  return (
    <section>
      <article>
        <h1 className="py-3 text-5xl font-bold mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-black text-center">
          Hotel
        </h1>

        <h1 className="text-5xl font-bold mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-black text-center">
          "Walakmul"
        </h1>

        <RevealOnScroll>
          <Image
            src={hotel2}
            className="wrapper rounded-xl w-[60%] h-[50%]items-center justify-between"
            alt="Hotel Walakmul"
          />
        </RevealOnScroll>

        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >
          El House Hotel Walakmul es un alojamiento ubicado en Calle a Uquina y
          la Loma 12, Balancán, Tabasco. Este hotel cuenta con habitaciones
          cómodas y modernas para los huéspedes.
        </p>

        <h2 className={`py-5 text-5xl text-center ${oswald.className}`}>Dirección:</h2>

        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-center text-base/loose font-bold`}
        >
          Calle a Uquina y la Loma 12, Balancán, Tabasco
        </p>

        <h2 className={`py-5 text-5xl text-center ${oswald.className}`}>Teléfono:</h2>

        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12 lg
        w-11/12 mx-auto text-center text-base/loose font-bold`}
        >
          934 122 6138
        </p>

        <h2 className={`py-5 text-5xl text-center ${oswald.className}`}>Correo Electrónico:</h2>

        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12 lg
        w-11/12 mx-auto text-center text-base/loose font-bold`}
        >
          hotelwalakmul@gmail.com
        </p>
      </article>
    </section>
  );
};

export default Walakmul;
