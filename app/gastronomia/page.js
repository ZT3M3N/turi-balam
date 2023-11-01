import Image from "next/image";
import Link from "next/link";
import queso_poro from "@/public/images/queso_poro.jpg";
import tostadas from "@/public/images/tostadas.jpg";
import atol from "@/public/images/atol.jpg";
import pozol from "@/public/images/pozol.jpg";
import dulce_nance from "@/public/images/dulce_nance.jpg";
import tamales from "@/public/images/tamales.jpg";
import sopaborracha from "@/public/images/sopaborracha.jpg";
import barbacoa from "@/public/images/barbacoa.jpg";
import RevealOnScroll from "@/components/scroll";
import ScrollListener from "@/components/scrollListener";
import { Montserrat } from "next/font/google";
import { Oswald } from "next/font/google";

const oswald = Oswald({ weight: "700", subsets: ["latin"] });

const montserrat = Montserrat({ weight: "700", subsets: ["latin"] });

export const metadata = {
  title: "GASTRONOMÍA - TURI-BALAM",
};

const Gastronomia = () => {
  return (
    <main>
      <RevealOnScroll>
        <h1 className="py-3 text-5xl/loose font-bold mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-black text-center">
          ¡Disfruta de la deliciosa y sensacional gastronomía con la que cuenta
          Balancán, Tabasco!
        </h1>
      </RevealOnScroll>

      <p
        className={`${montserrat.className} px-4 py-6 md:w-9/12 w-11/12 mx-auto text-justify text-base/loose font-bold`}
      >
        Sumérgete en el delicioso mundo de sabores y aromas que nuestra región
        tiene para ofrecer. En esta sección dedicada a la gastronomía, te
        invitamos a descubrir los tesoros culinarios que hacen de nuestro
        destino un paraíso para los amantes de la comida. Desde los auténticos
        platos tradicionales hasta las creaciones innovadoras de chefs
        apasionados, nuestra cocina es una fusión cautivadora de ingredientes
        frescos, técnicas expertas y una rica herencia cultural. Cada bocado es
        una aventura, cada comida una experiencia única que te llevará a través
        de los sabores de nuestra tierra.
      </p>

      <ScrollListener>
      <div className="mx-auto py-10 justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:px-5">
          {/* First Image */}
          <div className=" mx-auto">
          <div className="group h-80 w-80">
            <div className="reveal ">
              <div className="absolute inset-0">
                <Image
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                  src={queso_poro}
                  alt="Queso Poro"
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className="text-3xl font-bold">Queso Poro</h1>
                  <button className="mt-2 rounded-md bg-neutral-800 py-1 px-5 text-sm hover:bg-neutral-900">
                    <Link href="/gastronomia/queso_poro">Leer más</Link>
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
                  src={tostadas}
                  alt="Tostadas de pozol"
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className="text-3xl font-bold">Tostadas de Pozol</h1>
                  <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                    <Link href="/gastronomia/tostadas">Leer más</Link>
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
                  src={tamales}
                  alt="Tamales"
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className="text-3xl font-bold">Tamales</h1>
                  <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                    <Link href="/gastronomia/tamales">Leer más</Link>
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
                  src={barbacoa}
                  alt="Barbacoa de res"
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className="text-3xl font-bold">Barbacoa de Res</h1>
                  <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                    <Link href="/gastronomia/barbacoa">Leer más</Link>
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
                  src={atol}
                  alt="Atol de maíz"
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className="text-3xl font-bold">Atol de maíz</h1>
                  <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                    <Link href="/gastronomia/atol">Leer más</Link>
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
                  src={pozol}
                  alt="Pozol"
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className="text-3xl font-bold">Pozol</h1>
                  <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                    <Link href="/gastronomia/pozol">Leer más</Link>
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
                  src={dulce_nance}
                  alt="Dulces"
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className="text-3xl font-bold">Variedad de Dulces</h1>
                  <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                    <Link href="/gastronomia/dulces">Leer más</Link>
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
                  src={sopaborracha}
                  alt="Sopa borracha"
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className="text-3xl font-bold">Sopa Borracha</h1>
                  <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                    <Link href="/gastronomia/sopa">Leer más</Link>
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

export default Gastronomia;
