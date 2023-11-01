import Image from "next/image";
import Link from "next/link";
import guadalupana from "@/public/images/guadalupana.jpg";
import carnaval from "@/public/images/carnaval.jpg";
import feria_eltriunfo from "@/public/images/feria_eltriunfo.jpg";
import feriaSM from "@/public/images/feriaSM.jpeg";
import feriaMunicipal from "@/public/images/feriaMunicipal.jpg";
import diaMuertos from "@/public/images/diaMuertos.jpg";
import RevealOnScroll from "@/components/scroll";
import ScrollListener from "@/components/scrollListener";
import { Montserrat } from "next/font/google";
import { Oswald } from "next/font/google";

const oswald = Oswald({ weight: "700", subsets: ["latin"] });

const montserrat = Montserrat({ weight: "700", subsets: ["latin"] });

export const metadata = {
  title: "CULTURA Y TRADICIONES - TURI-BALAM",
};

const Tradiciones = () => {
  return (
    <main>
      <RevealOnScroll>
        <h1 className="py-3 text-5xl/loose font-bold mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-black text-center">
          ¡Disfruta de los eventos, la cultura y las tradiciones que se celebran
          en Balancán, Tabasco!
        </h1>
      </RevealOnScroll>

      <p
        className={`${montserrat.className} px-4 py-6 md:w-9/12 w-11/12 mx-auto text-justify text-base/loose font-bold`}
      >
        Bienvenido a nuestra sección de Tradiciones, donde te invitamos a
        sumergirte en el corazón cultural de nuestra tierra. Aquí en
        Balancán,Tabasco, valoramos profundamente nuestras raíces y celebramos
        las tradiciones que nos han dado forma a lo largo de los siglos. Desde
        festivales coloridos hasta prácticas artesanales centenarias, estas
        costumbres locales te ofrecen una visión auténtica de nuestra comunidad.
      </p>

      <ScrollListener>
        <div className="mx-auto py-10 justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:px-5">
          {/* First Image */}
          <div className=" mx-auto">
            <div className="group h-80 w-80">
              <div className="reveal ">
                <div className="absolute inset-0">
                  <Image
                    className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                    src={guadalupana}
                    alt="Día de la Guadalupana"
                  />
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className={`text-4xl ${oswald.className}`}>
                      Día de la Guadalupana
                    </h1>
                    <button className="mt-2 rounded-md bg-neutral-800 py-1 px-5 text-sm hover:bg-neutral-900">
                      <Link href="/tradiciones/guadalupana">Leer más</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2 Image */}
          <div className=" mx-auto">
            <div className="group h-80 w-80">
              <div className="reveal">
                <div className="absolute inset-0">
                  <Image
                    className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                    src={carnaval}
                    alt="Carnaval"
                  />
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className={`text-4xl ${oswald.className}`}>
                      El Carnaval
                    </h1>
                    <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                      <Link href="/tradiciones/carnaval">Leer más</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Image */}
          <div className=" mx-auto">
            <div className="group h-80 w-80">
              <div className="reveal">
                <div className="absolute inset-0">
                  <Image
                    className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                    src={feria_eltriunfo}
                    alt="museo"
                  />
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className={`text-4xl ${oswald.className}`}>
                      Feria en Villa "El Triunfo"
                    </h1>
                    <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                      <Link href="/tradiciones/feria_el_triunfo">Leer más</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>

          <div className="mx-auto justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:px-5">
            {/* 4 Image */}
            <div className=" mx-auto">
              <div className="group h-80 w-80">
                <div className="reveal ">
                  <div className="absolute inset-0">
                    <Image
                      className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                      src={feriaSM}
                      alt="Feria San Marcos"
                    />
                  </div>
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col items-center justify-center">
                      <h1 className="text-3xl font-bold">
                        Feria en Celebración a San Marcos
                      </h1>
                      <button className="mt-2 rounded-md bg-neutral-800 py-1 px-5 text-sm hover:bg-neutral-900">
                        <Link href="/tradiciones/san_marcos">Leer más</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 5 Image */}
            <div className=" mx-auto">
              <div className="group h-80 w-80">
                <div className="reveal">
                  <div className="absolute inset-0">
                    <Image
                      className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                      src={feriaMunicipal}
                      alt="Feria Municipal"
                    />
                  </div>
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col items-center justify-center">
                      <h1 className="text-3xl font-bold">Feria Municipal</h1>
                      <button className="mt-2 rounded-md bg-neutral-800 py-1 px-5 text-sm hover:bg-neutral-900">
                        <Link href="/tradiciones/feria_municipal">
                          Leer más
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          

          {/* 6 Image */}
          <div className="my-10 mx-auto">
            <div className="group h-80 w-80">
              <div className="reveal ">
                <div className="absolute inset-0">
                  <Image
                    className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                    src={diaMuertos}
                    alt="Día de Muertos"
                  />
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Día de Muertos</h1>
                    <button className="mt-2 rounded-md bg-neutral-800 py-1 px-5 text-sm hover:bg-neutral-900">
                      <Link href="/tradiciones/dia_de_muertos">Leer más</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        
      </ScrollListener>
    </main>
  );
};

export default Tradiciones;
