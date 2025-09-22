"use client";

import { IconButton, Button, Typography } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/solid";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/event.png')] bg-cover bg-no-repeat">
    <div className="absolute inset-0 h-full w-full " />
    <div className="grid min-h-screen px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
        <h3 className="mb-2 text-black">
          Erica Huertas
        </h3>
        <h1 className="lg:max-w-3xl text-black">
          Detox Drinks - Healthy Beverages for a Better You
        </h1>
        <p
            className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl text-gray-900"
        >
          Conoce nuestros productos y beneficios
        </p>
        <div className="flex items-center gap-4">
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
  );
}

export default Hero;
