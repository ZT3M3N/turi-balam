import Image from "next/image";
import rioSanPedro from "@/public/images/rioSanPedro.jpg";
import { Oswald } from "next/font/google";
import { Montserrat } from "next/font/google";
import RevealOnScroll from "@/components/scroll";
import ScrollListener from "@/components/scrollListener";

const oswald = Oswald({ weight: "700", subsets: ["latin"] });

const montserrat = Montserrat({ weight: "700", subsets: ["latin"] });

const RioSanPedro = () => {
  return (
    <section>
    <article>

      <h1 className="py-3 text-5xl font-bold mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-black text-center">Río "San Pedro"</h1>

      <RevealOnScroll>
            <Image
              className="wrapper rounded-xl w-[60%] h-[50%]items-center justify-between"
              src={rioSanPedro}
              alt="Río San Pedro"
            />
          </RevealOnScroll>

          <div className="container mx-auto text-center">
          <p
            className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
          >
          El río San Pedro es un río en el norte de Guatemala, y el sureste de
          México, donde es conocido como río San Pedro Mártir. El río nace en el
          departamento guatemalteco El Petén en las coordenadas 17.134803,
          -89.902668. Tiene una longitud de 186 km en Guatemala, y fluye hacia
          el oeste hasta cruzar la frontera mexicana para entrar en el estado de
          Tabasco en las coordenadas 17.279636, -90.987697. Desde la frontera
          continúa con el nombre de río San Pedro Mártir hacia el noroeste para
          finalmente unirse al río Usumacinta. La parte guatemalteca de la
          cuenca del río San Pedro tiene una superficie de 14.335 km²
        </p>
        </div>
    </article>
      
    </section>
    
  );
};

export default RioSanPedro;
