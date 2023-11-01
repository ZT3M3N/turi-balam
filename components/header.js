import Link from "next/link";
import Image from "next/image";
import girasol from "../public/images/girasol.jpg";

const Header = () => {
  return (
    <header>
      <nav className="h-[80px] flex items-center justify-between bg-gradient-to-r from-red-600 to-yellow-300">
        <Link href="/" className="flex items-center">
        <div className="flex items-center"></div>
          <Image src={girasol} alt="Balancan Logo" className="w-[80px] h-[80px] mx-1" />
          <span className="px-5 mr-2 text-white font-bold text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
          Bienvenido a Balancán
          </span> 
        </Link>
        

        <input type="checkbox" id="menu" className="peer hidden"></input>

        <label htmlFor="menu" className="bg-open-menu w-6 h-5 bg-cover bg-center cursor-pointer peer-checked:bg-close-menu transition-all z-50 md:hidden"></label>

        <div className="fixed inset-0 bg-gradient-to-b from-white/70 to-black/70 translate-x-full peer-checked:translate-x-0 transition-transform md:static md:translate-x-0 md:bg-none">

          <ul className="absolute inset-x-0 top-24 p-12 bg-white w-[90%] mx-auto rounded-md h-max text-center grid gap-6 font-bold shadow-2xl md:w-max md:bg-transparent md:p-0 md:grid-flow-col md:static">
            <li>
              <Link href="/destinos" className="hover text-xl">Destinos</Link>
            </li>
            <li>
              <Link href="/alojamientos" className="hover text-xl">Alojamientos</Link>
            </li>
            <li>
              <Link href="/gastronomia" className="hover text-xl">Gastronomía</Link>
            </li>
            <li>
              <Link href="/tradiciones" className="hover text-xl">Cultura y tradiciones</Link>
            </li>
            <li>
              <Link href="/educacion" className="hover mx-2 text-xl">Educación</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
