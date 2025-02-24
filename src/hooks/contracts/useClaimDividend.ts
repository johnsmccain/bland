
import { useWriteContract } from 'wagmi';
import { bitlandConfig } from '../../abi';

export function useClaimDividend() {
    const { writeContract, data } = useWriteContract();

    const claimDividend = async (poolId: bigint) => {
        await writeContract({
            address: bitlandConfig.address as `0x${string}`,
            abi: bitlandConfig.abi,
            functionName: 'claimDividend' as any,
            args: [poolId],
        });
    };

    return { claimDividend, data };
}
