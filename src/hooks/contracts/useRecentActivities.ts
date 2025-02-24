
import { useReadContract } from 'wagmi';
import { bitlandConfig } from '../../abi';

export function useGetRecentActivities(userId: bigint | undefined, pageNumber: bigint | undefined) {
    return useReadContract({
        address: bitlandConfig.address as `0x${string}`,
        abi: bitlandConfig.abi,
        functionName: 'getRecentActivities',
        args: userId && pageNumber ? [userId, pageNumber] : undefined,
    });
}
