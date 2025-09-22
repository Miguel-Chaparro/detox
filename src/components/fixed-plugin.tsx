"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

export function FixedPlugin() {
  return (
    <a href="https://www.instagram.com/detoxcalifornia/" target="_blank">
      <button
        type="button"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50 bg-white text-gray-900 px-3 py-2 rounded-md font-medium"
      >
        <Image
          width={128}
          height={128}
          className="w-5 h-5"
          alt="Erica Huertas Developer"
          src="https://www.material-tailwind.com/favicon.png"
        />{' '}
        Creado por Erica Huertas
      </button>
    </a>
  );
}
