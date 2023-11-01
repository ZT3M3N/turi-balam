import Image from "next/image";
import balancan from "@/public/images/balancan.png";
import RevealOnScroll from "@/components/scroll";
import ScrollListener from "@/components/scrollListener";
import { Oswald } from "next/font/google";
import { Montserrat } from "next/font/google";
import dynamic from "next/dynamic";

const oswald = Oswald({ weight: "700", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "700", subsets: ["latin"] });
const MapView = dynamic(() => import("@/components/maps/MapView"), { ssr: false });

export default function Home() {
  return (
    <main className=" bg-slate-200">
      <div className="container mx-auto text-center">
        
          <h1 className="text-7xl font-bold mb-5 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-yellow-300">
            Bienvenido a Balancán
          </h1>
          <RevealOnScroll>
          <h1 className="text-7xl font-bold mb-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-yellow-300">
            Tierra de Oportunidades
          </h1>
          </RevealOnScroll>

        <RevealOnScroll>
          <Image
            src={balancan}
            alt="Balancan"
            className="wrapper rounded-xl w-[100%] h-[50%]items-center justify-between"
          />
        </RevealOnScroll>

        <ScrollListener>

        <p className={`${montserrat.className} px-4 py-6 md:w-9/12 w-11/12 mx-auto text-justify text-base/loose font-bold`}>
        La palabra Balancán proviene de los vocablos mayas Balam: tigre y Kan: culebra, que significa "Lugar de tigres y serpientes".
        </p>

        <h2 className={`py-5 text-5xl ${oswald.className}`}>
          Reseña histórica
        </h2>

        <p className={`px-10 py-2 ita text-justify text-base/loose font-bold ${montserrat.className}`}>
          El territorio de este municipio fue ocupado por olmecas y
          mayas, quienes dejaron testimonios de su cultura en lugares que hoy
          constituyen sitios arqueológicos de importancia como Moral-Reforma, El
          Arenal, Santa Elena, Tierra Blanca, Multé y Tiradero. Esta población
          se asienta en los márgenes del río Usumacinta, en donde convergen
          otros ríos más pequeños que, junto con las lagunas, son un lugar ideal
          para quienes gustan de la pesca, pues en sus aguas se encuentran
          especies como el robalo, la mojarra, el pejelagarto y el bobo. El
          territorio del municipio se caracteriza por ser hábitat de una rica
          fauna silvestre. Aquí encontramos venado, conejo, puerco de monte,
          jabalí, cereque, tortuga, pochitoque, loro, lagarto, perico,
          chachalaca, pijije y varias clases de culebras.
        </p>
        </ScrollListener>

        <ScrollListener>
        <h2 className={`py-5 text-5xl ${oswald.className}`}>
          Extensión territorial
        </h2>
        <p className={`px-10 py-2 ita text-justify text-base/loose font-bold ${montserrat.className}`}>
          El municipio de Balancán se localiza en la
          región conocida como Usumacinta en el estado de Tabasco. Se encuentra
          entre las coordenadas 17° 48' latitud norte y entre 91° 32' longitud
          oeste. Colinda en la parte norte con estado de Campeche, en la zona
          sur con los municipios de Tenosique y Emiliano Zapata, en la parte
          este nuevamente con el estado de Campeche y la República de Guatemala
          y al oeste colinda con el municipio de Emiliano Zapata y con el estado
          de Campeche. Territorialmente el municipio de Balancán está formado
          por una extensión de unos 3,626.10 kilómetros cuadrados y debido a la
          gran variación de elevaciones que tiene, se encuentra a una altura
          promedio de 30 metros sobre el nivel del mar (msnm). En datos
          estadísticos, es preciso saber que el Instituto Nacional de
          Estadística y Geográfica señaló que los resultados del conteo de
          población del 2010 en el municipio de Balancán fueron que cuenta con
          una población total de 56,739. Su división territorial está conformada
          por: una ciudad, 2 villas, 6 pueblos, 3 colonias agrícolas y
          ganaderas, 48 ejidos y 38 rancherías; en el municipio se ubican 10
          centros de desarrollo regional en los que se desarrollan la mayoría de
          las actividades económicas y sociales, éstos son: El Triunfo,
          Quetzalcóatl, San Pedro, Multé, Mactún, El Arenal, El Pípila,
          Netzahualcóyotl, La Hulería y El Águila. En la zona fronteriza con el
          municipio de Tenosique y la república de Guatemala se ubica el polo de
          desarrollo agropecuario denominado: Plan Balancán-Tenosique.
        </p>
        </ScrollListener>

        <ScrollListener>
        <h2 className={`py-5 text-5xl ${oswald.className}`}>
        Hidrografía
        </h2>
        <p className={`px-10 py-2 ita text-justify text-base/loose font-bold ${montserrat.className}`}>
          El municipio se encuentra regado por los ríos Usumacinta y
          San Pedro Mártir, éste último se une al Usumacinta frente a la
          ranchería Bajo Netzahualcóyotl. El Usumacinta durante su curso por el
          municipio forma pequeñas islas como las de: Misicab, Frente Unico,
          Multé y Netzahualcóyotl. En la colindancia con el estado de Campeche
          corren los ríos Salsipuedes, Chumpán, San Joaquín y Pejelagarto.
        </p>
        </ScrollListener>

        <ScrollListener>
        <h2 className={`py-5 text-5xl ${oswald.className}`}>
          Clima
        </h2>
        <p className={`px-10 py-2 ita text-justify text-base/loose font-bold ${montserrat.className}`}>
          El clima es cálido-húmedo con abundantes lluvias en verano;
          tiene una temperatura media anual de 32°C y la mínima absoluta alcanza
          los 20°C. El régimen de precipitaciones se caracteriza por un total de
          caída de agua de 1,500 milimetros en el mes de septiembre y las
          mínimas en el mes de abril. La humedad relativa se estima en un máximo
          de 90% en los meses de septiembre y octubre, un mínimo de 74% en abril
          y mayo. En la región noroeste, limitando con el estado de Campeche y
          la república de Guatemala, el municipio tiene un clima
          cálido-subhúmedo, con lluvias en verano. Esta zona es la menos húmeda
          de la entidad, con un régimen de precipitación no mayor de 1,865.8 mm.
          Su temperatura media anual es de 26°C, según datos de la Comisión
          Nacional del Agua publicados por el Instituto Nacional de Estadística,
          Geografía e Informática (INEGI), en el Cuaderno Estadístico Municipal
          1998, Balancán.
        </p>
        </ScrollListener>

      </div>
      <ScrollListener>
      <MapView />
      </ScrollListener>
    </main>
  );
}
