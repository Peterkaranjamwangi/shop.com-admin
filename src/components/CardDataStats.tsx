import { ArrowUp, ArrowDown } from "lucide-react";
import React, { ReactNode } from "react";

interface CardDataStatsProps {
  title: string;
  total: string;
  rate: string;
  levelUp?: boolean;
  levelDown?: boolean;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  rate,
  levelUp,
  levelDown,
  children,
}) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        {children}
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {total}
          </h4>
          <span className="text-sm font-medium">{title}</span>
        </div>

        <span
          className={`flex items-center gap-1 text-sm font-medium ${
            levelUp && "text-meta-3"
          } ${levelDown && "text-meta-5"} `}
        >
          {rate}

          {levelUp && (
            <ArrowUp className="fill-meta-3" size={24} />
          )}
          {levelDown && (
            <ArrowDown className="fill-meta-5" size={24} />
          )}
        </span>
      </div>
    </div>
  );
};

export default CardDataStats;

// export default function CardDataStatse() {
//   return (
//     <div>
//        <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
//             <DollarSign className="text-muted-foreground h-4 w-4" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">$45,231.89</div>
//             <p className="text-muted-foreground text-xs">
//               +20.1% from last month
//             </p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
//             <Users className="text-muted-foreground h-4 w-4" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">+2350</div>
//             <p className="text-muted-foreground text-xs">
//               +180.1% from last month
//             </p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">Sales</CardTitle>
//             <CreditCard className="text-muted-foreground h-4 w-4" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">+12,234</div>
//             <p className="text-muted-foreground text-xs">
//               +19% from last month
//             </p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">Active Now</CardTitle>
//             <Activity className="text-muted-foreground h-4 w-4" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">+573</div>
//             <p className="text-muted-foreground text-xs">
//               +201 since last hour
//             </p>
//           </CardContent>
//         </Card>
//     </div>
//   )
// }
