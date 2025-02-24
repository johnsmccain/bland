import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { formatNumber } from "../utils/utils";
import { Award, Briefcase, ChartLine, Crown } from "lucide-react";
import { Button } from "./ui/button";

import ClaimCardWrapper from "./ClaimCardWrapper";
import { useContract } from "../hooks/useContract";



export const IncomeSection = () => {
  const { usersIncome, usersIncomeToClaim, handleClaim} = useContract("1");

  const totalIncome = Number(usersIncome?.[4] || 0);
  const availableIncome = usersIncomeToClaim ?
    Number(usersIncomeToClaim?.[0]) +
    Number(usersIncomeToClaim?.[1]) +
    Number(usersIncomeToClaim?.[2]) +
    Number(usersIncomeToClaim?.[3]) : 0n;

  return (
    <Card className=" border-border/10">
      <CardHeader>
        <CardTitle>Income Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Total Income</h3>
            <p className="text-2xl">${formatNumber(totalIncome)}</p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Available Income</h3>
            <p className="text-2xl">${formatNumber(availableIncome||0)}</p>
          </div>
        </div>

        {/* ROI Income */}

        <ClaimCardWrapper icon={ChartLine} name="ROI" royalty={usersIncomeToClaim?.[1] || 0n} royaltyIncomeUSDT={usersIncome?.[1]||0n}>
          <Button
            onClick={() => handleClaim('ROI')}
            disabled={!Number(usersIncomeToClaim?.[1])}
            className="mt-4"
          >
            Claim ROI
          </Button>
        </ClaimCardWrapper>

        {/* Level Income */}
        <ClaimCardWrapper icon={Award} name="Level" royalty={usersIncomeToClaim?.[0]||0n} royaltyIncomeUSDT={usersIncome?.[0]||0n}>
          <Button
            onClick={() => handleClaim('Level')}
            disabled={!Number(usersIncomeToClaim?.[0])}
            className="mt-4"
          >
            Claim Level Income
          </Button>
        </ClaimCardWrapper>

        {/* Salary Income */}
        <ClaimCardWrapper icon={Crown} name="Salary" royalty={usersIncomeToClaim?.[2]||0n} royaltyIncomeUSDT={usersIncome?.[2]||0n} status={true}>
          <Button
            onClick={() => handleClaim('Salary')}
            disabled={!Number(usersIncomeToClaim?.[2])}
            className="mt-4"
          >
            Claim Salary
          </Button>
        </ClaimCardWrapper>

        {/* Royalty Income */}
        <ClaimCardWrapper icon={Briefcase} name="Royalty" royalty={usersIncomeToClaim?.[3]||0n} royaltyIncomeUSDT={usersIncome?.[3]||0n} status={true}>
          <Button
            onClick={() => handleClaim('Royalty')}
            disabled={!Number(usersIncomeToClaim?.[3])}
            className="mt-4"
          >
            Claim Royalty
          </Button>
          </ClaimCardWrapper>
      </CardContent>
    </Card>
  );
};
