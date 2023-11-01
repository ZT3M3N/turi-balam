import Image from "next/image";
import Link from "next/link";
import { Oswald } from "next/font/google";
import { Montserrat } from "next/font/google";
import RevealOnScroll from "@/components/scroll";
import ScrollListener from "@/components/scrollListener";
import dulce_nance from "@/public/images/dulce_nance.jpg";

const oswald = Oswald({ weight: "700", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "700", subsets: ["latin"] });

const Dulces = () => {
  return (
    <section>
      <article>
        <h1 className="py-3 text-5xl font-bold mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-black text-center">
          Dulces Naturales
        </h1>
        <RevealOnScroll>
          <Image
            src={dulce_nance}
            className="wrapper rounded-xl w-[60%] h-[50%]items-center justify-between"
            alt="Dulces"
          />
        </RevealOnScroll>
        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-center text-base/loose font-bold`}
        >
          Balancán es conocido por su rica variedad de deliciosos dulces naturales. Algunos de los dulces más populares de la región son:
        </p>
        <h2 className={`py-5 text-5xl text-center ${oswald.className}`}>
          Joloches
        </h2>
        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >
          Son dulces típicos de Jahuacapa, localidad tabasqueña del municipio de Jalapa. Los hay principalmente de camote con guanábana y camote con piña, pero todos tienen en común que son envueltos en hojas secas de la mazorca de maíz.
        </p>

        <h2 className={`py-5 text-5xl text-center ${oswald.className}`}>
          Dulce de Melocotón
        </h2>
        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >
          Es un dulce hecho a base de melocotón y azúcar. Es muy popular en la región y se puede encontrar en diferentes presentaciones.
        </p>

        <h2 className={`py-5 text-5xl text-center ${oswald.className}`}>
          Dulce de Nance
        </h2>
        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >
          Es un dulce hecho a base de nance, una fruta pequeña y amarilla que crece en los árboles. El dulce se prepara con azúcar y canela y es muy popular en la región.
        </p>

        <h2 className={`py-5 text-5xl text-center ${oswald.className}`}>
          Tortillas de coco
        </h2>
        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >
          Son tortillas hechas a base de coco rallado y azúcar. Se pueden encontrar en diferentes presentaciones, como rellenas de cajeta o con leche condensada.
        </p>
      </article>
    </section>
  )
}

export default Dulces