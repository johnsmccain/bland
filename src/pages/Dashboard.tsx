import { useAccount } from "wagmi"

import { useState } from "react";

import { UserProfile } from "../components/UserProfile";
import { CeilingLimit } from "../components/CeilingLimit";
import { Packages } from "../components/Packages";
import { PackageModal } from "../components/PackageModal";
import { IncomeSection } from "../components/IncomeSection";
import { TeamSection } from "../components/TeamSection";
import { TeamLevels } from "../components/TeamLevels";
import { Activities } from "../components/Activities";
import { useGetSalaryRank } from "../hooks/contracts/useSalaryRank";
import { useContract } from "../hooks/useContract";
// import { useClaimLevelIncome } from "../hooks/contracts/useClaimDividend";

const Dashboard = () => {

  const { address } = useAccount()


  const {userInfo, userId} = useContract("1");
  const [isPackageModalOpen, setIsPackageModalOpen] = useState(false);
  const {data: salaryRank} = useGetSalaryRank(userId);
  console.log(userInfo)
  const isActive = userInfo?.[5] || 0n > 0n;
  
  return (
    <div className="">
      <div className="px-3 md:px-28 py-20 flex flex-col mx-auto space-y-8  pt-20">
        <UserProfile  userId={userId} address={address} isActive={isActive as any} salaryRank={salaryRank} />
        <CeilingLimit ceilingLimit={userInfo?.[4]}/>
        <Packages onBuyClick={() => setIsPackageModalOpen(true)} />
        <IncomeSection />
        <TeamSection />
        <TeamLevels />
        <Activities />
        <PackageModal
          isOpen={isPackageModalOpen}
          onClose={() => setIsPackageModalOpen(false)}
        />
      

      </div>
    </div>

  )
}

export default Dashboard