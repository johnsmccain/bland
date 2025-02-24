import { Badge } from './ui/badge';
// import { IconNode } from 'lucide-react';
import { formatNumber } from '../utils/utils';
interface IClaimCardWrapper {
    children: React.ReactNode;
    icon: any;
    name: string;
    royalty: bigint;
    royaltyIncomeUSDT: bigint;
    status?: boolean
}

const ClaimCardWrapper = ({children, icon, name, royalty, royaltyIncomeUSDT, status=false}: IClaimCardWrapper) => {
    const Icon = icon;
  return (
    <div className="income-type">
    <h3 className="flex item-center gap-5 text-xl"><Icon className="h-5 w-5 text-primary" /> {name} Income</h3>
    <div className="income-details">
      {status && <div className="income-row flex justify-between mb-1">
        <span>Status</span>
        <Badge variant={Number(royalty) > 0 ? "default" : "destructive"}>
          {Number(royalty) > 0 ? 'Eligible' : 'Not Eligible'}
        </Badge>
      </div>}
      <div className="income-row flex justify-between mb-1">
        <span>Total {name}</span>
        <span>${formatNumber(Number(royaltyIncomeUSDT || 0))}</span>
      </div>
      <div className="income-row flex justify-between mb-1">
        <span>Available {name}</span>
        <span>${formatNumber(Number(royalty || 0))}</span>
      </div>
    </div>
    {children}
  </div>
  )
}

export default ClaimCardWrapper
