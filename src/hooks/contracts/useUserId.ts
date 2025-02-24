
import { useReadContract } from 'wagmi';
import { bitlandConfig } from '../../abi';

export function useUserId(userAddress: `0x${string}` | undefined) {
    return useReadContract({
        address: bitlandConfig.address as `0x${string}`,
        abi: bitlandConfig.abi,
        functionName: 'id',
        args: userAddress ? [userAddress] : undefined,
    });
}
