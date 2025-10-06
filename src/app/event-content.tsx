"use client";

import {
  Tab,
  Tabs,
  TabsHeader,
} from "@material-tailwind/react";

import EventContentCard from "@/components/event-content-card";


const EVENT_CONTENT = [
  {
    title: "Cambia tu vida con Detox Drinks",
    des: "Debes combinar nuestros productos con una dieta equilibrada y ejercicio regular para obtener los mejores resultados. Consulta siempre con un profesional de la salud antes de comenzar cualquier programa de desintoxicación.",
    name: "Erica Huertas",
    position: "Chief Executive, Detox Drinks",
    panel: "Combina Detox con ejercicio y alimentación saludable",
    img: "/image/DetoxErica.jpeg",
  }
];

export function EventContent() {
  return (
    <section className="py-8 px-8 lg:py-20">
      
      <div className="mx-auto container">
        {EVENT_CONTENT.map((props, idx) => (
          <EventContentCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default EventContent;
