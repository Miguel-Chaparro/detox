"use client";

import { IconButton, Button, Typography } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/solid";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/event.jpeg')] bg-cover bg-no-repeat">
    <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
    <div className="grid min-h-screen px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
        <h3 className="mb-2 text-white">
          29-31 August @ New York
        </h3>
        <h1 className="lg:max-w-3xl text-white">
          AI Conference 2023: Unlocking the Future
        </h1>
        <p
            className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl text-white"
        >
          Join us for the most anticipated event of the year - the AI
          Conference 2023!
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
            Get started
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
