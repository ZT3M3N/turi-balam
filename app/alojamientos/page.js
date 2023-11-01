import Image from "next/image";
import Link from "next/link";
import hotelmoncho from "@/public/images/moncho.jpg";
import hotel2 from "@/public/images/hotel2.jpg";
import { Oswald } from "next/font/google";
import { Montserrat } from "next/font/google";
import ScrollListener from "@/components/scrollListener";
import RevealOnScroll from "@/components/scroll";

const oswald = Oswald({ weight: "700", subsets: ["latin"] });

const montserrat = Montserrat({ weight: "700", subsets: ["latin"] });

export const metadata = {
  title: 'ALOJAMIENTOS - TURI-BALAM',
}

const Alojamientos = () => {
  return (
    <main>
      <RevealOnScroll>
      <h1 className="py-3 text-5xl/loose font-bold mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-black text-center">
          Alojamientos disponibles en Balancán, Tabasco
        </h1>
      </RevealOnScroll>

      <RevealOnScroll>
      <div className="mx-auto py-10 justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:px-5">
          {/* First Image */}
          <div className=" mx-auto">
          <div className="group h-80 w-80">
            <div className="reveal ">
              <div className="absolute inset-0">
                <Image
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                  src={hotelmoncho}
                  alt="Hotel Moncho"
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className={`text-4xl ${oswald.className}`}>
                    Hotel "Moncho"
                  </h1>
                  <button className="mt-2 rounded-md bg-neutral-800 py-1 px-5 text-sm hover:bg-neutral-900">
                    <Link href="/alojamientos/moncho">Leer más</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* First Image */}
          <div className=" mx-auto">
          <div className="group h-80 w-80">
            <div className="reveal ">
              <div className="absolute inset-0">
                <Image
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                  src={hotel2}
                  alt="Hotel Walakmul"
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className={`text-4xl ${oswald.className}`}>
                    Hotel Walakmul
                  </h1>
                  <button className="mt-2 rounded-md bg-neutral-800 py-1 px-5 text-sm hover:bg-neutral-900">
                    <Link href="/alojamientos/walakmul">Leer más</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </RevealOnScroll>
    </main>
  )
}

export default Alojamientos