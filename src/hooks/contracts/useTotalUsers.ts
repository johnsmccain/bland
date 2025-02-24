
import { useReadContract } from 'wagmi';
import { bitlandConfig } from '../../abi';

export function useGetTotalUsers() {
    return useReadContract({
        address: bitlandConfig.address as `0x${string}`,
        abi: bitlandConfig.abi,
        functionName: 'totalUsers',
    });
}
