import { useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User } from "lucide-react";
import { useAccount, useContractRead } from 'wagmi';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { formatNumber, shortenAddress } from "../utils/utils";
// import { formatNumber, shortenAddress } from "@/lib/utils";

const CONTRACT_ADDRESS = "YOUR_CONTRACT_ADDRESS"; // Replace with actual address

export const TeamLevels = () => {
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const { address } = useAccount();

  const { data: teamMembers = [] } = useContractRead({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: [], // Add your contract ABI here
    functionName: 'teams',
    args: [address, selectedLevel],
    query: {
      enabled: !!address && !!selectedLevel,
    },
  });

  const levels = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Levels</CardTitle>
      </CardHeader>
      <CardContent>
        <Select value={selectedLevel} onValueChange={setSelectedLevel}>
          <SelectTrigger className="w-full mb-4">
            <SelectValue placeholder="Select Level" />
          </SelectTrigger>
          <SelectContent>
            {levels.map((level) => (
              <SelectItem key={level} value={level.toString()}>
                Level {level}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        {!selectedLevel ? (
          <div className="text-center py-8">
            <User className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">Select a level to view team members</p>
          </div>
        ) : teamMembers?.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No team members found in this level</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {teamMembers?.map((member: any) => (
              <div key={member.id} className="border rounded-lg p-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-muted p-3">
                    <User className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">ID: {member.id}</p>
                    <p className="text-sm text-muted-foreground">
                      {shortenAddress(member.address)}
                    </p>
                    <p className="text-sm">
                      Investment: ${formatNumber(member.investment)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
