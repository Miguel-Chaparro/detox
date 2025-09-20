import Image from "next/image";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Avatar,
} from "@material-tailwind/react";

interface EventContentCardProps {
  title: string;
  des: string;
  name: string;
  position: string;
  panel: string;
  img: string;
}
export function EventContentCard({
  title,
  des,
  name,
  position,
  panel,
  img,
}: EventContentCardProps) {
  return (
    <Card
      color="transparent"
      shadow={false}
      placeholder={undefined}
      onResize={undefined}
      onResizeCapture={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      className="lg:!flex-row mb-10 lg:items-end"
    >
      <CardHeader
        floated={false}
        shadow={false}
        placeholder={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        className="h-[32rem] max-w-[28rem] shrink-0"
      >
        <Image
          width={768}
          height={768}
          src={img}
          alt="testimonial image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody
        className="col-span-full lg:col-span-3"
        placeholder={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <h6 className="mb-4 text-blue-gray-700">
          {panel}
        </h6>
        <h2 className="mb-4 font-medium text-blue-gray-700 text-3xl">
          {title}
        </h2>
        <p className="mb-12 md:w-8/12 font-medium text-gray-500">
          {des}
        </p>
        <div className="flex items-center gap-4">
          <img
            src="/logos/spotify-logo.png"
            alt="spotify"
            className="rounded-full w-16 h-16"
          />
          <div>
            <h6 className="mb-0.5 text-blue-gray-700 text-lg font-semibold">
              {name}
            </h6>
            <span className="font-normal text-gray-500 text-sm">
              {position}
            </span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default EventContentCard;
