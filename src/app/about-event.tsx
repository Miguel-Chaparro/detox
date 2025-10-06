"use client";

import { Typography } from "@material-tailwind/react";
import AboutCard from "@/components/about-card";

const EVENT_INFO = [
  {
    title: "Cuidadosamente empacados!",
    description: "Empacamos cada producto con esmero para garantizar que llegue en perfectas condiciones a tus manos.",
    subTitle: "Nuestra presentación",
    img: "/image/Detox1.jpeg",
  },
  {
    title: "Ingredientes cuidadosamente seleccionados",
    description:
      "Seleccionamos solo los mejores ingredientes naturales para garantizar la máxima calidad y frescura en cada producto.",
    subTitle: "Productos 100% Naturales y Frescos",
    img: "/image/Detox2.jpeg",
  },
];

export function AboutEvent() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">
      <h6 className="text-center mb-2" style={{ color: "orange" }}>
       Nuestros Productos
      </h6>
      <h3 className="text-center !text-blue-gray-700">
        Porque Elegir Detox?
      </h3>
      <p
        className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-500"
      >
        En Detox, nos dedicamos a ofrecer productos de alta calidad que promueven un estilo de vida saludable y equilibrado. Nuestros productos están diseñados para ayudarte a sentirte revitalizado, mejorar tu bienestar general y apoyar tus objetivos de salud. Ya sea que busques suplementos naturales, bebidas detoxificantes o productos para el cuidado personal, en Detox encontrarás opciones confiables y efectivas que se adaptan a tus necesidades.
      </p>
      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {EVENT_INFO.map((props, idx) => (
          <AboutCard key={idx} {...props} />
        ))}
        <div className="md:col-span-2">
          <AboutCard
            title="Prepara tu vida saludable con nosotros!"
            subTitle="Abre, licua y disfruta"
            description="Con nuestros productos, puedes crear deliciosos batidos y jugos que te ayudarán a sentirte mejor y más saludable."
            img="/image/Detox3.jpeg"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutEvent;
