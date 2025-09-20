

interface StatsCardProps {
  count: string;
  title: string;
}

export function StatsCard({ count, title }: StatsCardProps) {
  return (
    <div className="bg-white bg-opacity-10 rounded-xl p-6 text-center shadow-md">
      <h1 className="font-bold text-3xl text-blue-gray-700">{count}</h1>
      <h6 className="mt-1 font-medium text-blue-gray-700">{title}</h6>
    </div>
  );
}

export default StatsCard;
