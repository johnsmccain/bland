
import { useReadContract } from 'wagmi';
import { bitlandConfig } from '../../abi';

export function useGetUserDetail(userId: `0x${string}` | undefined) {
    return useReadContract({
        address: bitlandConfig.address as `0x${string}`,
        abi: bitlandConfig.abi,
        functionName: 'getUserDetail',
        args: userId ? [userId] : undefined,
    });
}
