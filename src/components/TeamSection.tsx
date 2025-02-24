
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, DollarSign } from "lucide-react";
// import { useAccount, useContractRead } from 'wagmi';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { formatNumber } from "../utils/utils";
import { useContract } from "../hooks/useContract";
// import { formatNumber } from "@/lib/utils";

// const CONTRACT_ADDRESS = "YOUR_CONTRACT_ADDRESS"; // Replace with actual address

export const TeamSection = () => {
  // const { address } = useAccount();
  const {teamsBiz, totalTeams, totalTeamsBiz, teamsCnt}: any = useContract("1")
// console.log(teamsBiz, totalTeams, totalTeamsBiz, teamsCnt)
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Team</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-muted p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-5 w-5" />
              <h3 className="font-semibold">Direct Team</h3>
            </div>
            <p className="text-2xl">{teamsCnt || 0}</p>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="h-5 w-5" />
              <h3 className="font-semibold">Direct Business</h3>
            </div>
            <p className="text-2xl">${formatNumber(teamsBiz || 0n)}</p>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-5 w-5" />
              <h3 className="font-semibold">Total Team</h3>
            </div>
            <p className="text-2xl">{totalTeams|| 0}</p>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="h-5 w-5" />
              <h3 className="font-semibold">Total Business</h3>
            </div>
            <p className="text-2xl">${formatNumber(totalTeamsBiz || 0n)}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
