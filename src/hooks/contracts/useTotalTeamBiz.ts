
import { useReadContract } from 'wagmi';
import { bitlandConfig } from '../../abi';


export function useTeamBiz(userId: bigint, level: bigint) {
    const { data: teamsBiz } = useReadContract({
        address: bitlandConfig.address as `0x${string}`,
        abi: bitlandConfig.abi,
        functionName: 'teamsBiz',
        args: [userId, level],
    });
    
        const { data: totalTeamsBiz } = useReadContract({
            address: bitlandConfig.address as `0x${string}`,
            abi: bitlandConfig.abi,
            functionName: 'totalTeamsBiz',
            args: [userId],
        });

    const { data: teamsCnt } = useReadContract({
        address: bitlandConfig.address as `0x${string}`,
        abi: bitlandConfig.abi,
        functionName: 'teamsCnt',
        args: [userId, level],
    });

    const { data: totalTeams } = useReadContract({
        address: bitlandConfig.address as `0x${string}`,
        abi: bitlandConfig.abi,
        functionName: 'totalTeams',
        args: [userId],
    });

    return {
        teamsBiz,
        totalTeamsBiz,
        teamsCnt,
        totalTeams
    }
}
