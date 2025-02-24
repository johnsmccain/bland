
import { useReadContract } from 'wagmi';
import { bitlandConfig } from '../../abi';

export function useGetRewardRank(userId: bigint | undefined) {
    return useReadContract({
        address: bitlandConfig.address as `0x${string}`,
        abi: bitlandConfig.abi,
        functionName: 'getRewardRank',
        args: userId  ? [userId] : undefined,
    });
}
