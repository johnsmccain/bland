import { useReadContract } from 'wagmi';
import { bitlandConfig } from '../../abi';

export function useGetUserActivitiesLength(userId: bigint | undefined) {
    return useReadContract({
        address: bitlandConfig.address as `0x${string}`,
        abi: bitlandConfig.abi,
        functionName: 'getUserActivitiesLength',
        args: userId  ? [userId] : undefined,
    });
}
