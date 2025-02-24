import { useReadContract } from 'wagmi';
import { bitlandConfig } from '../../abi';

export function useGetSalaryRank(userId: bigint | undefined) {
    return useReadContract({
        address: bitlandConfig.address as `0x${string}`,
        abi: bitlandConfig.abi,
        functionName: 'getSalaryRank',
        args: userId  ? [userId] : undefined,
    });
}
