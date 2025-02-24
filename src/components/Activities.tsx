
import { useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useAccount, useContractRead } from 'wagmi';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { formatNumber, formatTimestamp, getActivityType } from "../utils/utils";
import { Button } from "./ui/button";

const CONTRACT_ADDRESS = "YOUR_CONTRACT_ADDRESS"; // Replace with actual address
const ITEMS_PER_PAGE = 10;

export const Activities = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { address } = useAccount();

  const { data: activities = [] } = useContractRead({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: [], // Add your contract ABI here
    functionName: 'getRecentActivities',
    args: [address],
    query: {
      enabled: !!address,
    },
  });

  const { data: totalActivities = 0 } = useContractRead({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: [], // Add your contract ABI here
    functionName: 'getUserActivitiesLength',
    args: [address],
    query: {
      enabled: !!address,
    },
  });

  const hasNextPage = currentPage * ITEMS_PER_PAGE < Number(totalActivities);
  const hasPrevPage = currentPage > 1;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        {!activities || activities.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            No recent activities
          </div>
        ) : (
          <div className="space-y-4 mb-4">
            {activities.map((activity: any) => (
              <div key={activity.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{getActivityType(activity.mode)}</h4>
                    <p className="text-sm text-muted-foreground">
                      Amount: ${formatNumber(activity.amount)}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {formatTimestamp(activity.timestamp)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="flex justify-center items-center gap-4 mt-4">
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => setCurrentPage(p => p - 1)}
            disabled={!hasPrevPage}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm">Page {currentPage}</span>
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => setCurrentPage(p => p + 1)}
            disabled={!hasNextPage}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
