import Image from "next/image";
import { Oswald } from "next/font/google";
import { Montserrat } from "next/font/google";
import RevealOnScroll from "@/components/scroll";
import ScrollListener from "@/components/scrollListener";
import iglesia_señorTila from "@/public/images/iglesia_señorTila.jpg";

const oswald = Oswald({ weight: "700", subsets: ["latin"] });

const montserrat = Montserrat({ weight: "700", subsets: ["latin"] });

const Iglesia = () => {
  return (
    <section>
      <article>
        <h1 className="py-3 text-5xl font-bold mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-black text-center">
          Iglesia del
        </h1>

        <h1 className="text-5xl font-bold mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-black text-center">
          Señor de Tila
        </h1>

        <RevealOnScroll>
          <Image
            src={iglesia_señorTila}
            className="wrapper rounded-xl w-[60%] h-[50%]items-center justify-between"
            alt="Iglesia del Señor de Tila"
          />
        </RevealOnScroll>

        
          <p
            className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
          >
            En Balancán, Tabasco, existe una maravilla que muy pocos conocen,
            pero que maravilla a los viajeros mexicanos y extranjeros. Se trata
            de la Iglesia del Señor de Tila, ubicada en el Ejido Leona Vicario,
            un pequeño pueblo que entre otras cosas, se dedica a la siembra y
            comercialización de girasoles.
          </p>

          <p
            className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
          >
            Lo que hace especial a este templo es el colorido de sus muros
            exteriores, mismos que simbolizan el amor de los pobladores por el
            Señor de Tila, a quien atribuyen numerosos milagros. A diario, este
            templo es visitado por gente de la comunidad y de poblaciones
            vecinas como Multe, Laguna Coronada y Arenal, quienes describen el
            lugar como pacífico.
          </p>

          <p
            className={`${montserrat.className} px-4 py-6 md:w-9/12 lg
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
          >
            El templo está ubicado en el Ejido Leona Vicario, un pequeño pueblo
            que entre otros cosas, se dedica a la siembra y comercialización de
            girasoles. Lo que hace especial a este templo es el colorido de sus
            muros exteriores, mismos que simbolizan el amor de los pobladores
            por el Señor de Tila, a quien atribuyen numerosos milagros. A
            diario, este templo es visitado por gente de la comunidad y de
            poblaciones vecinas como Multe, Laguna Coronada y Arenal, quienes
            describen el lugar como pacífico.
          </p>
          <p
            className={`${montserrat.className} px-4 py-6 md:w-9/12 lg
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
          >
            Justo frente al templo se encuentra ubicada una pequeña laguna, cuyo
            reflejo inunda de color el paisaje. En un juego de colores con la
            vegetación, la Iglesia del Señor de Tila es el lugar perfecto para
            un momento de serenidad al atardecer o para tomar algunas
            fotografías. El interior de la Iglesia del Señor de Tila es
            sencillo, su iconostasio está tallado a mano en madera y su piso
            también es vistoso.
          </p>
          <p
            className={`${montserrat.className} px-4 py-6 md:w-9/12 lg
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
          >
            El templo es de origen reciente, se construyó gracias a los
            esfuerzos de la comunidad, quienes vendían tamales y atole, e
            hicieron colectas para poder honrar a su patrono y benefactor. De
            acuerdo a la gente de Balancán, el Cristo de Tila tuvo una primera
            iglesia en 1996, el cual llenó con sus bondades milagrosas a los
            ejidatarios.
          </p>
       
      </article>
    </section>
  );
};

export default Iglesia;
