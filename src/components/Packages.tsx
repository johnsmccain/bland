

import { Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

interface PackagesProps {
  onBuyClick: () => void;
}

export const Packages = ({ onBuyClick }: PackagesProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Packages</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Active Packages</h3>
            <p className="text-2xl">0</p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Total Packages</h3>
            <p className="text-2xl">0</p>
          </div>
        </div>
        <Button onClick={onBuyClick} className="w-full">
          <Plus className="mr-2 h-4 w-4" /> Buy Package
        </Button>
      </CardContent>
    </Card>
  );
};
