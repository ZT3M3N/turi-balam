import Image from "next/image";
import iglesia_señorTila from "@/public/images/iglesia_señorTila.jpg";
import malecon from "@/public/images/malecon.jpg";
import museo from "@/public/images/museo.jpg";
import rioSanPedro from "@/public/images/rioSanPedro.jpg";
import santuario_girasoles from "@/public/images/santuario_girasoles.jpg";
import santuatioGarzas from "@/public/images/santuarioGarzas.jpg";
import santuarioMono from "@/public/images/santuarioMono.jpg";
import popalillo from "@/public/images/popalillo1.jpeg";
import Link from "next/link";
import { Oswald } from "next/font/google";
import { Montserrat } from "next/font/google";
import RevealOnScroll from "@/components/scroll";
import ScrollListener from "@/components/scrollListener";

const oswald = Oswald({weight: "700", subsets: ["latin"]});

const montserrat = Montserrat({ weight: "700", subsets: ["latin"] });

export const metadata = {
  title: 'DESTINOS - TURI-BALAM',
}

const Destinos = () => {
  return (
    <main>
      <RevealOnScroll>
        <h1 className="py-3 text-5xl/loose font-bold mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-black text-center">
          Destinos para visitar y disfrutar en Balancán, Tabasco
        </h1>
      </RevealOnScroll>

      <p className={`${montserrat.className} px-4 py-6 md:w-9/12 w-11/12 mx-auto text-justify text-base/loose font-bold`}>
      Explora los tesoros escondidos de Balancán, un rincón mágico en el corazón de la naturaleza. Situada en la exuberante región de Tabasco, esta tierra encantada te invita a descubrir paisajes impresionantes, ríos serpenteantes y una rica herencia cultural. Desde las majestuosas cascadas de Tapijulapa hasta las antiguas ruinas mayas en Reforma Agraria, cada rincón de Balancán cuenta una historia única. Sumérgete en la calidez de su gente, saborea la deliciosa gastronomía local y déjate cautivar por la magia de este destino. Prepárate para una aventura inolvidable en Balancán, donde la naturaleza y la cultura se entrelazan para ofrecerte experiencias inigualables. ¡Embarca en un viaje que despertará tus sentidos y llenará tu alma de recuerdos inolvidables!</p>

      <ScrollListener>
        <div className="mx-auto py-10 justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:px-5">
          {/* First Image */}
          <div className=" mx-auto">
          <div className="group h-80 w-80">
            <div className="reveal ">
              <div className="absolute inset-0">
                <Image
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                  src={iglesia_señorTila}
                  alt="iglesia"
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className={`text-4xl ${oswald.className}`}>
                    Iglesia del Señor de Tila
                  </h1>
                  <button className="mt-2 rounded-md bg-neutral-800 py-1 px-5 text-sm hover:bg-neutral-900">
                    <Link href="/destinos/iglesia">Leer más</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Second Image */}
          <div className=" mx-auto">
          <div className="group h-80 w-80">
            <div className="reveal">
              <div className="absolute inset-0">
                <Image
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                  src={malecon}
                  alt="malecon"
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className={`text-4xl ${oswald.className}`}>El Malecón</h1>
                  <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                    <Link href="/destinos/malecon">Leer más</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Thrid Image */}
          <div className=" mx-auto">
          <div className="group h-80 w-80">
            <div className="reveal">
              <div className="absolute inset-0">
                <Image
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                  src={museo}
                  alt="museo"
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className={`text-4xl ${oswald.className}`}>
                    Museo "Dr. José Gómez Panaco"
                  </h1>
                  <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                    <Link href="/destinos/museo">Leer más</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Fourth Image */}
          <div className=" mx-auto">
          <div className="group h-80 w-80">
            <div className="reveal">
              <div className="absolute inset-0">
                <Image
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                  src={popalillo}
                  alt="popalillo"
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className={`text-4xl ${oswald.className}`}>Lago "El Popalillo"</h1>
                  <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                    <Link href="/destinos/popalillo">Leer más</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </ScrollListener>

      <ScrollListener>
        <div className="mx-auto justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:px-5">
          {/* Fifth Image */}
          <div className=" mx-auto">
          <div className="group h-80 w-80">
            <div className="reveal">
              <div className="absolute inset-0">
                <Image
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                  src={santuario_girasoles}
                  alt="santuario de los girasoles"
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className={`text-4xl ${oswald.className}`}>
                    El Santuario de los Girasoles
                  </h1>
                  <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                    <Link href="/destinos/santuarioGirasoles">Leer más</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Sixth Image */}
          <div className=" mx-auto">
          <div className="group h-80 w-80">
            <div className="reveal">
              <div className="absolute inset-0">
                <Image
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                  src={santuatioGarzas}
                  alt="santuario de garzas"
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className={`text-4xl ${oswald.className}`}>
                    El Santuario de las Garzas
                  </h1>
                  <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                    <Link href="/destinos/santuarioGarzas">Leer más</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Seventh Image */}
          <div className=" mx-auto">
          <div className="group h-80 w-80">
            <div className="reveal">
              <div className="absolute inset-0">
                <Image
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                  src={santuarioMono}
                  alt="santuario del mono"
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className={`text-4xl ${oswald.className}`}>
                    El Santuario del Mono Saraguato
                  </h1>
                  <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                    <Link href="/destinos/santuarioMono">Leer más</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Eigth Image */}
          <div className="my-10 mx-auto">
          <div className="group h-80 w-80">
            <div className="reveal">
              <div className="absolute inset-0">
                <Image
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                  src={rioSanPedro}
                  alt="rio san pedro"
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className={`text-4xl ${oswald.className}`}>Río "San Pedro"</h1>
                  <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                    <Link href="/destinos/rioSanPedro">Leer más</Link>
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

export default Destinos;
