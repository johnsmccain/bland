
import { useWriteContract } from 'wagmi';
import { bitlandConfig } from '../../abi';

export function useClaimLevelDividend() {
    const { writeContract, data } = useWriteContract();

    const claimLevelIncome = async () => {
        await writeContract({
            address: bitlandConfig.address as `0x${string}`,
            abi: bitlandConfig.abi,
            functionName: 'claimLevelIncome',
        });
    };

    return { claimLevelIncome, data };
}
