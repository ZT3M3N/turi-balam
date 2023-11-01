import Image from "next/image";
import Link from "next/link";
import { Oswald } from "next/font/google";
import { Montserrat } from "next/font/google";
import RevealOnScroll from "@/components/scroll";
import ScrollListener from "@/components/scrollListener";
import queso_poro from "@/public/images/queso_poro.jpg";

const oswald = Oswald({ weight: "700", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "700", subsets: ["latin"] });

const QuesoPoro = () => {
  return (
    <section>
      <article>
        <h1 className="py-3 text-5xl font-bold mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-black text-center">
          Queso Poro
        </h1>
        <RevealOnScroll>
          <Image
            src={queso_poro}
            className="wrapper rounded-xl w-[60%] h-[50%]items-center justify-between"
            alt="Queso Poro"
          />
        </RevealOnScroll>
        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >
          El queso de Poro es un queso artesanal originario de los municipios de Balancán y Tenosique, en la región de los ríos de Tabasco. Es un queso tradicional elaborado con leche obtenida de rebaños de vacas, cruce de cebú-pardo suiza criadas por pequeños productores y diseñado hace aproximadamente cien años con el fin de darle una vida de anaquel lo suficientemente larga para permitir su comercialización en la ciudad de Villahermosa.
        </p>

        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >
          El queso es fresco o ligeramente madurado (unos 12 días) y tiene una textura que va desde húmeda con apariencia de separación en capas, cuando es de reciente producción, hasta un poco seca y friable conforme aumenta el tiempo de almacenamiento antes de la venta. La pasta cuando se deja madurar se desmorona fácilmente, es decir, es muy porosa, característica de la que proviene su nombre. El queso desarrolla en el interior de la pasta pequeños hoyos o poros atribuidos a la producción y acumulación de gas generado por microorganismos autóctonos, en gran medida provenientes de la leche y del suero utilizados en su fabricación.
        </p>

        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >
         El queso se vende cubierto con parafina y con papel celofán amarillo para evitar que se deshidrate y prolifere el moho. Es un producto lácteo 100% natural que se produce a mano en pequeños lotes utilizando la mecanización mínima.
        </p>
      </article>
    </section>
  )
}

export default QuesoPoro