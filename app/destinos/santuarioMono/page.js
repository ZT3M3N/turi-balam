import Image from "next/image";
import santuarioMono from "@/public/images/santuarioMono.jpg";
import { Oswald } from "next/font/google";
import { Montserrat } from "next/font/google";
import ScrollListener from "@/components/scrollListener";
import RevealOnScroll from "@/components/scroll";

const oswald = Oswald({ weight: "700", subsets: ["latin"] });

const montserrat = Montserrat({ weight: "700", subsets: ["latin"] });

const SantuarioMono = () => {
  return (
    <section>
      <article>

        <h1 className="py-3 text-5xl font-bold mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-black text-center">
          Santuario del
        </h1>

        <h1 className="py-3 text-5xl font-bold mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-black text-center">
          Mono Saraguato
        </h1>

        <RevealOnScroll>
          <Image
            className="wrapper rounded-xl w-[60%] h-[50%]items-center justify-between"
            src={santuarioMono}
            alt="Santuario del Mono Saraguato"
          />
        </RevealOnScroll>

        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-justify text-base/loose font-bold`}
        >
          En lo profundo de la exuberante selva tropical, entre la sinfonía de
          cantos de aves y el susurro de las hojas, se encuentra nuestro
          santuario: un rincón mágico donde la naturaleza y la vida silvestre se
          entrelazan en una danza eterna. Te damos la bienvenida al Santuario
          del Mono Saraguato, un santuario dedicado a proteger y preservar una
          de las especies más fascinantes de la selva: el mono saraguato.
        </p>
      </article>
    </section>
  );
};

export default SantuarioMono;
