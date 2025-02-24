import { useAccount, useWaitForTransactionReceipt } from 'wagmi';
import { useUserId } from './contracts/useUserId';
import { useUserInfo } from './contracts/useUserInfo';
import { usePurchase } from './contracts/usePurchase';
import { useEffect, useState } from 'react';
import { parseEther } from 'viem';
import { useUsersIncome } from './contracts/useUsersIncome';
import { useUsersIncomeToClaim } from './contracts/useUsersIncomeToClaim';
import { useClaimContract } from "./contracts/useClaimContract"
// import { parseEther } from 'viem';
import { useToast } from "../hooks/use-toast";
import { useTeamBiz } from './contracts/useTotalTeamBiz';

export function useContract(purchaseAmount: string) {
    const { address } = useAccount();
    const { toast } = useToast();
    const { data: userId } = useUserId(address);
    const { data: userInfo } = useUserInfo(userId);
    const { data: usersIncome } = useUsersIncome(userId as bigint);
    const { teamsBiz, totalTeams, totalTeamsBiz, teamsCnt } = useTeamBiz(userId as bigint, userInfo?.[2] as bigint);
    const { claimLevel, claimROI, claimSalary, claimRoyalty, isFetched, data } = useClaimContract();
    const { data: usersIncomeToClaim } = useUsersIncomeToClaim(userId as bigint);
    const [isPurchasing, setIsPurchasing] = useState(false);
    const { approve, buy, approveTxHash, buyTxHash, isApprovePending, approveStatus } = usePurchase();
    const { isFetched: approveWaitForTransactionReceipt } = useWaitForTransactionReceipt({
        hash: approveTxHash,
    })

    const { isFetched: buyWaitForTransactionReceipt } = useWaitForTransactionReceipt({
        hash: buyTxHash,
    })

    useEffect(() => {
        if (approveWaitForTransactionReceipt && !isApprovePending && (approveStatus === "success")) {
            buy(parseEther(purchaseAmount));
        }
    }, [approveWaitForTransactionReceipt])
    useEffect(() => {
        if (approveWaitForTransactionReceipt && !isApprovePending && (approveStatus === "success")) {
            setIsPurchasing(true);
        } else {
            setIsPurchasing(false);
        }
    }, [approveWaitForTransactionReceipt, buyWaitForTransactionReceipt])
    console.log(approveWaitForTransactionReceipt, isApprovePending, approveStatus)

    const handleClaim = async (type: string) => {
        try {
            toast({
                title: "Processing Claim",
                description: `Claiming ${type} income...`,
            });

            switch (type) {
                case 'ROI':
                    await claimROI();
                    break;
                case 'Level':
                    await claimLevel();
                    break;
                case 'Salary':
                    await claimSalary();
                    break;
                case 'Royalty':
                    await claimRoyalty();
                    break;
            }

            toast({
                title: "Success",
                description: `Successfully claimed ${type} income`,
            });
        } catch (error) {
            toast({
                title: "Error",
                description: `Failed to claim ${type} income`,
                variant: "destructive",
            });
        }
    };

    const handlePurchase = () => {
        // const parsePurchaseAmount = (parseInt(amount));
        approve(parseEther(String(Number(purchaseAmount) + 1) || "0"));
    }

    return { userId, userInfo, address, handlePurchase, isPurchasing, usersIncome, usersIncomeToClaim, handleClaim, isFetched, data, teamsBiz, totalTeams, totalTeamsBiz, teamsCnt }
}
