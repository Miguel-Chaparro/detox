import Image from "next/image";
import {
  Card,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

interface AboutCardProp {
  title: string;
  subTitle: string;
  description: string;
  img?: string;
}

export function AboutCard({ title, description, subTitle, img }: AboutCardProp) {
  return (
    <Card
      shadow={false}
      className="relative overflow-hidden"
      placeholder={undefined}
      onResize={undefined}
      onResizeCapture={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      {/* background image */}
      {img && (
        <div className="absolute inset-0 z-0">
          <Image
            src={img}
            alt={title || subTitle || "background"}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>
      )}

      <CardBody
        className="relative z-10 h-[453px] p-5 flex flex-col justify-center items-center rounded-2xl bg-gray-900/60"
        placeholder={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Typography
          variant="h6"
          className="mb-4 text-center"
          color="white"
          placeholder={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {subTitle}
        </Typography>
        <Typography
          variant="h4"
          className="text-center"
          color="white"
          placeholder={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {title}
        </Typography>
        <Typography
          color="white"
          className="mt-2 mb-10 text-base w-full lg:w-8/12 text-center font-normal"
          placeholder={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {description}
        </Typography>
        <Button
          color="white"
          size="sm"
          placeholder={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          view details
        </Button>
      </CardBody>
    </Card>
  );
}


export default AboutCard;
