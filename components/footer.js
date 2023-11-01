import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-lg mb-2">Explora el Maravilloso Mundo de Balancán</p>
        <div className="flex space-x-4">
          <Link href="/destinos" className="hover:text-gray-400">Destinos</Link>
          <Link href="/alojamientos" className="hover:text-gray-400">Alojamientos</Link>
          <Link href="/gastronomia" className="hover:text-gray-400">Gastronomia</Link>
          <Link href="/tradiciones" className="hover:text-gray-400">Cultura y Tradiciones</Link>
          <Link href="/educacion" className="hover:text-gray-400">Educación</Link>
        </div>
        <div className="mt-4">
          <p>&copy; 2023 Turi-Balam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
