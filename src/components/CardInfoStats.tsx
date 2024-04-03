import { ArrowUp, ArrowDown } from "lucide-react";
import React, { ReactNode } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

interface CardInfoStatsProps {
  title: string;
  value: string;
  description: string;
  children: ReactNode;
}

const CardInfoStats: React.FC<CardInfoStatsProps> = ({
  title,
  value,
  description,
  children,
}) => {
  return (
    <Card className="border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {children}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-muted-foreground text-xs">{description}</p>
      </CardContent>
    </Card>
  );
};

export default CardInfoStats;
