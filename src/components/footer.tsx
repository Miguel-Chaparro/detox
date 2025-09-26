import { Typography, Button, IconButton } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = ["Company", "About Us", "Team", "Products", "Blog"];

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        <div className="flex !w-full py-10 mb-5 md:mb-20 flex-col justify-center !items-center bg-gray-900 max-w-6xl mx-auto rounded-2xl p-5 ">
          <h2 className="text-2xl md:text-3xl text-center font-bold text-white">
            Join now and get 30% OFF!
          </h2>
          <p className="md:w-7/12 text-center my-3 !text-base text-white">
            Don&apos;t miss out on this exclusive offer that will end soon.
          </p>
          <div className="flex w-full md:w-fit gap-3 mt-2 flex-col md:flex-row">
            <button className="bg-white text-gray-900 px-4 py-2 rounded-md font-medium" type="button">
              buy ticket
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <a
            href="https://www.detoxdrinks.com.co"
            target="_blank"
            className="text-gray-900 text-lg font-semibold"
          >
            Material Tailwind
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
            <button className="p-2 rounded-full bg-gray-100" type="button">
              <i className="fa-brands fa-twitter text-lg" />
            </button>
            <button className="p-2 rounded-full bg-gray-100" type="button">
              <i className="fa-brands fa-youtube text-lg" />
            </button>
            <button className="p-2 rounded-full bg-gray-100" type="button">
              <i className="fa-brands fa-instagram text-lg" />
            </button>
            <button className="p-2 rounded-full bg-gray-100" type="button">
              <i className="fa-brands fa-github text-lg" />
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
