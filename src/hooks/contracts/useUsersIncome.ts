
import { useReadContract } from 'wagmi';
import { bitlandConfig } from '../../abi';

export function useUsersIncome(_num: bigint) {
    return useReadContract({
        address: bitlandConfig.address as `0x${string}`,
        abi: bitlandConfig.abi,
        functionName: 'usersIncome',
        args: [_num],
    });
}
