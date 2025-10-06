import Image from "next/image";
import { Typography, Button, IconButton } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = ["Company", "About Us", "Team", "Products", "Blog"];

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10" >
      <div className="container flex flex-col mx-auto">
        <div className="flex !w-full py-10 mb-5 md:mb-20 flex-col justify-center !items-center max-w-6xl mx-auto rounded-2xl p-5 relative overflow-hidden">
          {/* background image only for this inner container */}
          <div className="absolute inset-0 -z-10">
            <Image src="/image/Detox1.jpeg" alt="footer background" fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative z-10 w-full flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl text-center font-bold text-white">
              Obten tu paquete detox hoy mismo
            </h2>
            <h2 className="text-2xl md:text-3xl text-center font-bold text-white">
              y comienza tu viaje hacia una vida más saludable y equilibrada.
            </h2>
            <p className="w-11/12 md:w-7/12 text-center my-3 !text-base text-white">
              No esperes más para cuidar de ti mismo. Haz clic en el botón de
              abajo para adquirir tu paquete detox y dar el primer paso hacia un
              bienestar renovado.
            </p>
            <p className="w-11/12 md:w-7/12 text-center my-3 !text-base text-white">
              ¡Tu cuerpo y mente te lo agradecerán!
            </p>
            <div className="flex justify-center w-full mt-6">
              <button 
                className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-medium transform transition-all hover:scale-105 shadow-lg"
                type="button" 
                onClick={() => window.location.href = 'https://wa.me/12139623041?text=Hola,%20estoy%20interesado%20en%20comprar%20un%20paquete%20detox'}
              >
                Comprar paquete
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <a
            href="https://www.detoxdrinks.com.co"
            target="_blank"
            className="text-gray-900 text-lg font-semibold"
          >
            Detox Drinks
          </a>
          <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {LINKS.map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors text-base"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex w-fit justify-center gap-2">
            <button className="p-2 rounded-full bg-gray-100" type="button" onClick={() => window.open('https://www.facebook.com/profile.php?id=61581107631177', '_blank')}>
              <i className="fa-brands fa-facebook text-lg" />
            </button>
            <button className="p-2 rounded-full bg-gray-100" type="button" onClick={() => window.open('https://www.instagram.com/detoxcalifornia/', '_blank')}>
              <i className="fa-brands fa-instagram text-lg" />
            </button>
            <button className="p-2 rounded-full bg-gray-100" type="button" onClick={() => window.open('https://www.tiktok.com/@detox.drinks', '_blank')}>
              <i className="fa-brands fa-tiktok text-lg" />
            </button>
            <button className="p-2 rounded-full bg-gray-100" type="button" onClick={() => window.open('https://www.youtube.com/@DetoxDrinksLA', '_blank')}>
              <i className="fa-brands fa-youtube text-lg" />
            </button>
          </div>
        </div>
        <p className="text-center mt-12 font-normal text-gray-700">
          &copy; {CURRENT_YEAR} Made with{' '}
          <a href="https://www.detoxdrinks.com.co" target="_blank" className="underline">Detox Drinks</a>{' '}
          by{' '}
          <a href="https://www.detoxdrinks.com.co" target="_blank" className="underline">Erica Huertas</a>.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
