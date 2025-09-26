"use client";

import { IconButton, Button, Typography } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/solid";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/event.png')] bg-cover bg-no-repeat">
    <div className="absolute inset-0 h-full w-full " />
    <div className="grid min-h-screen px-8">
      <div className="container relative z-10 my-auto mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <img
            src="/detox/DetoxTransparent.png"
            alt="Detox Drinks Logo"
            className="w-full lg:w-3/4"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left md:pl-12">
          <h3 className="mb-2 text-black font-shrikhand">
            Erica Huertas
          </h3>
          <h1 className="lg:max-w-3xl text-black font-shrikhand">
            Pulpa 100% Natural, Lista Para Preparar
          </h1>
          <p
              className="mt-1 mb-4 md:mb-12 w-full md:max-w-full lg:max-w-2xl text-gray-900 font-shrikhand"
          >
            Frescura natural que te ayuda a eliminar toxinas, sentirte más ligero y cuidar de tu cuerpo día a día.
          </p>
          <div className="flex items-center gap-5 justify-center md:justify-start">
            <Button
              variant="gradient"
              color="white"
              type="button"
              placeholder=""
              onResizeCapture={() => {}}
              onResize={() => {}}
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Mira los productos
            </Button>
            <IconButton
              type="button"
              className="rounded-full bg-white p-6"
              placeholder=""
              onResizeCapture={() => {}}
              onResize={() => {}}
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              <PlayIcon className="h-4 w-4 text-gray-900" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Hero;
