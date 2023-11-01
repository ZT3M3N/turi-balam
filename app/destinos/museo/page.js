import Image from "next/image";
import museo from "@/public/images/museo.jpg";
import RevealOnScroll from "@/components/scroll";
import ScrollListener from "@/components/scrollListener";
import { Oswald } from "next/font/google";
import { Montserrat } from "next/font/google";

const oswald = Oswald({ weight: "700", subsets: ["latin"] });

const montserrat = Montserrat({ weight: "700", subsets: ["latin"] });

const Museo = () => {
  return (
    <main>
      <div className="container mx-auto text-center">
      
        <h1 className="py-3 text-5xl font-bold mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-black text-center">
          Museo "Dr. José Gómez Panaco"
        </h1>

        <RevealOnScroll>
          <Image
            className="wrapper rounded-xl w-[60%] h-[50%]items-center justify-between"
            src={museo}
            alt="Museo"
          />
        </RevealOnScroll>

        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12 w-11/12 mx-auto text-justify text-base/loose font-bold`}>
          Este recinto, ubicado en la única casa de dos pisos de la época, lleva
          el nombre del Dr. José Gómez Panaco, médico y fotógrafo cubano que
          radicó en Balancán, como reconocimiento a su labor y dedicación al
          rescate del patrimonio arqueológico de la entidad. El Dr. Panaco
          organizó el museo a partir de la colección arqueológica y de la
          donación de la población, abriendo sus puertas al público el 17 de
          agosto de 1979 bajo la figura de museo/biblioteca.
        </p>
        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >
          En 1985, el recinto fue remodelado a fin de exhibir un mayor número de
          objetos arqueológicos procedentes de los diversos asentamientos
          prehispánicos de la región, correspondiendo los de mayor antigüedad a
          la cultura olmeca, y posteriormente, a los asentamientos de la cultura
          maya.
        </p>
        <h2 className={`py-5 text-5xl ${oswald.className}`}>Servicios:</h2>
        <p
          className={`px-10 py-2 text-base/loose font-bold text-center ${montserrat.className}`}
        >
          Exposiciones permanentes | Visitas guiadas
        </p>
        <h2 className={`py-5 text-5xl text-center ${oswald.className}`}>Horarios:</h2>
        <p
          className={`px-10 py-2 ita text-center text-base/loose font-bold ${montserrat.className}`}
        >
          Jueves a martes de 09:00 a 16:00 horas
        </p>
        <h2 className={`py-5 text-5xl ${oswald.className}`}>Costos:</h2>
        <p
          className={`px-10 py-2 ita text-center text-base/loose font-bold ${montserrat.className}`}
        >
          Acceso gratuito
        </p>
        <h2 className={`py-5 text-5xl ${oswald.className}`}>Dirección:</h2>
        <p
          className={`px-10 py-2 ita text-center text-base/loose font-bold ${montserrat.className}`}
        >
          Calle José Narciso Rovirosa, esq. Gral. Ignacio Zaragoza, Col. Centro,
          Balancán.
        </p>
      </div>
    </main>
  );
};

export default Museo;
