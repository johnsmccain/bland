export interface UserAccount {
    address: string; // Ethereum address
    ref: string; // uint256
    id: string; // uint256
    totalDepositUSDT: string; // uint256
    ceilingLimit: string; // uint256
    startedAt: string; // uint256 (timestamp)
    salaryStartedAt: string; // uint256 (timestamp)
    salaryRank: string; // uint256
    salaryLastCheckDate: string; // uint256 (timestamp)
    roiLastCheckDate: string; // uint256 (timestamp)
    rewardRank: string; // uint256
    salaryNo: string; // uint256
    roiNo: string; // uint256
}
import { useReadContract } from 'wagmi';
import { bitlandConfig } from '../../abi';

export function useUserInfo(id: bigint | undefined) {
    return useReadContract({
        address: bitlandConfig.address as `0x${string}`,
        abi: bitlandConfig.abi,
        functionName: 'usersInfo',
        args: id ? [id] : undefined,
    }) ;
}
