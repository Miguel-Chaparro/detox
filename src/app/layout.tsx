import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout, FixedPlugin } from "@/components"; 

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Detox Drinks | Batidos Naturales para una Vida Saludable",
  description: "Descubre Detox Drinks, tu fuente de batidos naturales listos para preparar. Mejora tu alimentación y complementa tu rutina de ejercicio con nuestras deliciosas y saludables recetas.",
  keywords: "batidos naturales, detox, vida saludable, alimentación sana, recetas de batidos, ejercicio y nutrición",
  authors: [{ name: "Erica Huertas", url: "https://www.instagram.com/erica.huertas/" }],
  creator: "Erica Huertas",
  publisher: "Erica Huertas",
  metadataBase: new URL("https://www.detoxdrinks.com.co/"),
  openGraph: {
    title: "Detox Drinks | Batidos Naturales para una Vida Saludable",
    description: "Descubre Detox Drinks, tu fuente de batidos naturales listos para preparar. Mejora tu alimentación y complementa tu rutina de ejercicio con nuestras deliciosas y saludables recetas.",
    url: "https://www.detoxdrinks.com.co/",
    siteName: "Detox Drinks",
    images: [
      {
        url: "https://www.detoxdrinks.com.co/detox/DetoxTransparent.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://www.detoxdrinks.com.co/detox/DetoxTransparent.png",
        width: 1800,
        height: 1600,
        alt: "Og Image Alt Second",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Detox Drinks | Batidos Naturales para una Vida Saludable",
    description: "Descubre Detox Drinks, tu fuente de batidos naturales listos para preparar. Mejora tu alimentación y complementa tu rutina de ejercicio con nuestras deliciosas y saludables recetas.",
    images: [
      "https://www.detoxdrinks.com.co/detox/DetoxTransparent.png",
      "https://www.detoxdrinks.com.co/detox/DetoxTransparent.png",
    ],
    creator: "@ericahuertas_",
  },
  icons: {
    icon: "/detox/DetoxRedesCircular.png",
    shortcut: "/detox/DetoxRedesCircular.png",
    apple: "/detox/DetoxRedesCircular.png",
  },
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <head>
        <script
          defer
          data-site="https://www.detoxdrinks.com.co/"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link href='https://fonts.googleapis.com/css?family=Shrikhand' rel='stylesheet' />
      </head>
      <body className={roboto.className}>
        <Layout>
          {children}
          <FixedPlugin />
        </Layout>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </body>
    </html>
  );
}