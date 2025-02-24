
// import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
// import { Badge } from "@/components/ui/badge";
// import { INVESTMENT_CONTRACT } from "@/config/contracts";
// import { formatNumber } from "@/lib/utils";
interface IUserProfile {
  userId?: bigint;
  address?: string;
  isActive?: boolean;
  salaryRank?: bigint;
}
export const UserProfile = ({ userId, address, isActive, salaryRank }: IUserProfile) => {

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-muted p-4">
            <User className="h-8 w-8" />
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">ID: <span>{userId?.toString() || '-'}</span></p>
            <p className="text-sm text-muted-foreground">Address: <span>{address && address?.slice(0, 6)}...{address && address?.slice(-4) || '-'}</span></p>
            <div className="flex items-center gap-2">
              <p className="text-sm text-muted-foreground">Status:</p>
              <Badge variant={isActive ? "default" : "destructive"}>
                {isActive ? 'Active' : 'Inactive'}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">Rank: <span>{salaryRank?.toString() || '-'}</span></p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
