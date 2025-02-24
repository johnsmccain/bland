import { useWaitForTransactionReceipt, useWriteContract } from 'wagmi';
import { bitlandConfig } from '../../abi';

export function useClaimContract() {
    const { writeContract, data } = useWriteContract();


    const  claimROI = async () => {
        await writeContract({
            address: bitlandConfig.address as `0x${string}`,
            abi: bitlandConfig.abi,
            functionName: 'claimROIIncome',
        });
    }

    const { isFetched } = useWaitForTransactionReceipt({
      hash: data,
    });
    const claimLevel = async () => {
        await writeContract({
            address: bitlandConfig.address as `0x${string}`,
            abi: bitlandConfig.abi,
            functionName: 'claimLevelIncome',
        });
    }

    const claimSalary = async () => {
        await writeContract({
            address: bitlandConfig.address as `0x${string}`,
            abi: bitlandConfig.abi,
            functionName: 'claimSalaryIncome',
        });
    }

    const claimRoyalty = async () => {
        await writeContract({
            address: bitlandConfig.address as `0x${string}`,
            abi: bitlandConfig.abi,
            functionName: 'claimRoyaltyIncome',
        });
    }
    const claimLevelIncome = async () => {
        await writeContract({
            address: bitlandConfig.address as `0x${string}`,
            abi: bitlandConfig.abi,
            functionName: 'claimLevelIncome',
        });
    };

    return { claimLevelIncome, data, isFetched, claimROI, claimLevel, claimSalary, claimRoyalty };
}
