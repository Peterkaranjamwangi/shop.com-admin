"use client";
import React from "react";
import ChartOne from "../Charts/ChartOne";
import ChartThree from "../Charts/ChartThree";
import ChartTwo from "../Charts/ChartTwo";
import ChatCard from "../Chat/ChatCard";
import CardDataStats from "../CardDataStats";
import TableOne from "../Tables/TableOne";
import {
  DollarSign,
  Users,
  CreditCard,
  Activity,
  Eye,
  ShoppingCart,
  ShoppingBag,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import CardInfoStats from "../CardInfoStats";

const ECommerce: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Total views" total="$3.456K" rate="0.43%" levelUp>
          <Eye className="text-blue-600" size={22} />
        </CardDataStats>
        <CardDataStats title="Total Profit" total="$45,2K" rate="4.35%" levelUp>
          <ShoppingCart className="text-blue-600" size={22} />
        </CardDataStats>
        <CardDataStats title="Total Product" total="2.450" rate="2.59%" levelUp>
          <ShoppingBag className="text-blue-600" size={22} />
        </CardDataStats>
        <CardDataStats title="Total Users" total="3.456" rate="0.95%" levelDown>
          <Users className="text-blue-600" size={22} />
        </CardDataStats>
        <CardInfoStats
          title="Total Revenue"
          description=" +201 since last hour"
          value="+573"
        >
          <Users className="text-blue-600" size={22} />
        </CardInfoStats>
        <CardInfoStats
          title="Sales"
          description=" +40% from last month"
          value="+12,234"
        >
          <Users className="text-blue-600" size={22} />
        </CardInfoStats>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div>
    </>
  );
};

export default ECommerce;
