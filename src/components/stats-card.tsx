
import { Typography, Card } from "@material-tailwind/react";
interface StatsCardProps {
  count: string;
  title: string;
}

export function StatsCard({ count, title, ...rest }: StatsCardProps & React.ComponentProps<typeof Card>) {
  return (
    <Card color="transparent" shadow={false} {...rest}>
      <Typography
        variant="h1"
        className="font-bold"
        color="blue-gray"
        placeholder=""
        onResizeCapture={() => {}}
        onResize={() => {}}
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        {count}
      </Typography>
      <Typography
        variant="h6"
        color="blue-gray"
        className="mt-1 font-medium"
        placeholder=""
        onResizeCapture={() => {}}
        onResize={() => {}}
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        {title}
      </Typography>
    </Card>
  );
}


export default StatsCard;
