"use client";

import { Typography } from "@material-tailwind/react";
import StatsCard from "@/components/stats-card";

const STATS = [
  {
    count: "750+",
    title: "Vendidas",
  },
  {
    count: "50",
    title: "Nuestros Clientes",
  },
  {
    count: "20+",
    title: "Paquetes",
  },
  {
    count: "6",
    title: "Resultados en 6 días",
  },
];

export function OurStats() {
  return (
    <section className="container mx-auto grid gap-10 px-8 py-44 lg:grid-cols-1 lg:gap-20 xl:grid-cols-2 xl:place-items-center">
      <div>
        <h6 className="mb-6 font-medium" style={{ color: 'orange' }}>
          Nuestros Clientes
        </h6>
        <h2
          className="text-5xl font-bold leading-tight lg:w-3/4 text-blue-gray-700"
        >
          Los mejores productos para una vida saludable y equilibrada.
        </h2>
        <p
          className="mt-3 w-full !text-gray-500 lg:w-9/12 text-blue-gray-700"
        >
          En Detox, nos enorgullece ofrecer productos de alta calidad que promueven un estilo de vida saludable y equilibrado. Nuestros productos están diseñados para ayudarte a sentirte revitalizado, mejorar tu bienestar general y apoyar tus objetivos de salud. Ya sea que busques suplementos naturales, bebidas detoxificantes o productos para el cuidado personal, en Detox encontrarás opciones confiables y efectivas que se adaptan a tus necesidades.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-8 gap-x-28">
          {STATS.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurStats;
