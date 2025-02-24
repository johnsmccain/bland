
import { useWriteContract } from 'wagmi';
import { useState } from 'react';
import { bitlandConfig } from '../../abi';

export function useDistributeDividend() {
    const { writeContract, isSuccess, isError } = useWriteContract();
    const [isLoading, setIsLoading] = useState(false);

    const distributeDividend = async () => {
        setIsLoading(true);
        await writeContract({
            address: bitlandConfig.address as `0x${string}`,
            abi: bitlandConfig.abi,
            functionName: 'distributeDividend' as any,
        });
        setIsLoading(false);
    };

    return { distributeDividend, isLoading, isSuccess, isError };
}
