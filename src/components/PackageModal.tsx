import { useState } from 'react';
import { useToast } from '../hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useContract } from '../hooks/useContract';
// import { formatEther } from 'viem';
// import { usePurchase } from '../hooks/contracts/usePurchase';


interface PackageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PackageModal = ({ isOpen, onClose }: PackageModalProps) => {
  const [amount, setAmount] = useState("");
  const { toast } = useToast();
  const { handlePurchase: handleBuy, isPurchasing } = useContract(amount);

console.log(isPurchasing)
  const handleQuickAmount = (amt: number) => {
    const currentAmount = parseInt(amount) || 0;
    setAmount((currentAmount + amt).toString());
  };

  const handlePurchase = async () => {
    const purchaseAmount = parseInt(amount);
    if (!purchaseAmount || purchaseAmount < 50 || purchaseAmount % 50 !== 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid amount (minimum $50, in multiples of $50)",
        variant: "destructive",
      });
      return;
    }

    try {
      toast({
        title: "Processing",
        description: `Confirming your purchase..${purchaseAmount} DERB.`,
      });

      // Simulate API call
      await new Promise(() => handleBuy());
      // await new Promise(() => approve(BigInt(purchaseAmount)));
      // approve(BigInt(purchaseAmount))
      console.log(purchaseAmount)

      toast({
        title: "Success",
        description: "Package purchased successfully!",
      });
      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to purchase package. Please try again.",
        variant: "destructive",
      });
    }
  };

  const quickAmounts = [50, 100, 500, 1000];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-card border-border/10">
        <DialogHeader>
          <DialogTitle>Buy Investment Package</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Investment Amount (USDT)</label>
            <Input
              type="number"
              min="50"
              step="50"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {quickAmounts.map((amt) => (
              <Button
                key={amt}
                variant="outline"
                onClick={() => handleQuickAmount(amt)}
              >
                ${amt}
              </Button>
            ))}
          </div>
          <div className="space-y-2 bg-muted p-4 rounded-lg">
            <div className="flex justify-between text-sm">
              <span>Daily ROI:</span>
              <span>0.5%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Duration:</span>
              <span>200 Days</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Total Return:</span>
              <span>100%</span>
            </div>
          </div>
          <Button onClick={handlePurchase} className="w-full">
            {isPurchasing ? "Processing..." : "Buy Package"}
          {/* {isApprovePending || isRegisterPending || isUpgradePending || isAllowed ? <span className="animate-pulse transition-all ease-in-out text-white">Processing...</span> : maxLevel ? "Max Level" : `Approve ${purchaseAmount} USDT`} */}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
