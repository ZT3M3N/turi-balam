import Image from "next/image";
import { Oswald } from "next/font/google";
import { Montserrat } from "next/font/google";
import RevealOnScroll from "@/components/scroll";
import ScrollListener from "@/components/scrollListener";
import malecon from "@/public/images/malecon.jpg";

const oswald = Oswald({ weight: "700", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "700", subsets: ["latin"] });

const Malecon = () => {
  return (
    <section>
      <article>

        <h1 className="py-3 text-5xl font-bold mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-black text-center">
          El Malecón
        </h1>

        <RevealOnScroll>
              <Image
                className="wrapper rounded-xl w-[60%] h-[50%]items-center justify-between"
                src={malecon}
                alt="El malecón"
              />
            </RevealOnScroll>

         <div className="container mx-auto text-center">
          <p
            className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
          >
            Hace años, el río Usumacinta solía desbordarse con frecuencia
            y causar inundaciones en la ciudad de Balancán. Los habitantes de la
            ciudad estaban cansados de sufrir las consecuencias de las
            inundaciones y decidieron construir un muro de contención para
            proteger la ciudad. El muro fue construido con piedras y tierra y se
            extendía a lo largo del río. Con el tiempo, el muro se convirtió en
            un lugar popular para pasear y disfrutar del paisaje del río. Los
            habitantes comenzaron a llamar al lugar “el malecón” y se convirtió
            en un lugar muy querido por todos. Con el tiempo, el muro original
            fue reemplazado por una estructura más moderna y segura, pero el
            nombre “el malecón” se mantuvo.
          </p>
          <p
            className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
          >Hoy en día, el malecón es un lugar
            muy popular entre los habitantes locales y los turistas.</p>
        </div>
      </article>
    </section>
  );
};

export default Malecon;
