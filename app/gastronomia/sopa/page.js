import Image from "next/image";
import Link from "next/link";
import { Oswald } from "next/font/google";
import { Montserrat } from "next/font/google";
import RevealOnScroll from "@/components/scroll";
import ScrollListener from "@/components/scrollListener";
import sopaborracha from "@/public/images/sopaborracha.jpg";

const oswald = Oswald({ weight: "700", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "700", subsets: ["latin"] });

const Sopa = () => {
  return (
    <section>
      <article>
        <h1 className="py-3 text-5xl font-bold mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-black text-center">
          Sopa Borracha
        </h1>
        <RevealOnScroll>
          <Image
            src={sopaborracha}
            className="wrapper rounded-xl w-[60%] h-[50%]items-center justify-between"
            alt="Sopa Borracha"
          />
        </RevealOnScroll>
        <p
          className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-base/loose font-bold`}
        >
          La sopa borracha es un platillo típico de la región de Balancán, Tabasco. Es una sopa que se prepara con carne de res, chile ancho, jitomate, cebolla, ajo, epazote y masa de maíz. El nombre de la sopa se debe a que se le agrega un poco de bebida alcohólica para darle un sabor especial.
        </p>

        <p className={`${montserrat.className} px-4 py-6 md:w-9/12
        w-11/12 mx-auto text-base/loose font-bold`}>
        La receta original incluye ingredientes como el chile ancho, que le da un sabor picante y ahumado a la sopa, y la masa de maíz, que le da una textura espesa y cremosa. La carne se cocina en agua con sal hasta que esté suave y se desmenuza. Luego se fríe con cebolla, ajo y jitomate. Se agrega el chile ancho molido y se cocina por unos minutos. Se agrega la masa de maíz disuelta en agua y se mezcla bien. Finalmente, se agrega el epazote y la bebida alcohólica1.</p>
        
      </article>
    </section>
  )
}

export default Sopa