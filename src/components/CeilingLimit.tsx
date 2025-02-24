
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Progress } from "@/components/ui/progress";
import { Progress } from './ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';


export const CeilingLimit = ({ceilingLimit}: any) => {

console.log(ceilingLimit)
  const totalLimit = Number(9);
  const availableLimit = Number(ceilingLimit || 0);
  const progress = totalLimit > 0 ? (availableLimit / totalLimit) * 100 : 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ceiling Limit</CardTitle>
      </CardHeader>
      <CardContent>
        <Progress value={progress} className="h-2" />
        <p className="mt-2 text-sm text-muted-foreground">
          Available: {availableLimit} / {totalLimit}
        </p>
      </CardContent>
    </Card>
  );
};
