"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const SPONSORS = [
  "instagram",
  "facebook",
  "tiktok",
];

const SPONSORS_LINKS = [
  "https://www.instagram.com/detoxcalifornia/",
  "https://www.facebook.com/profile.php?id=61581107631177",
  "https://www.tiktok.com/@detox.drinks",
];

export function SponsoredBy() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto text-center">
        <h6 className="mb-8 text-blue-gray-700">
          Nuestras Redes
        </h6>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {SPONSORS.map((logo, key) => (
            <a
              key={key}
              href={SPONSORS_LINKS[key]}
              target="_blank"
            > 
            <Image
              width={256}
              height={256}
              key={key}
              src={`/logos/logo-${logo}.png`}
              alt={logo}
              className="w-40"
            />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SponsoredBy;
