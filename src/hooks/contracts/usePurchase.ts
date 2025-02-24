import { useAccount, useWriteContract } from 'wagmi';
import { bitlandConfig, tokenConfig } from '../../abi';
export const usePurchase = () => {
    const { writeContract: writeBuy, data: buyTxHash} = useWriteContract()
    const { writeContract: writeApprove, data: approveTxHash, isPending: isApprovePending, status: approveStatus} = useWriteContract()
    const {address} = useAccount()
    // useWaitForTransactionReceipt()
    
    const approve = async ( amt: bigint) => {
        
        console.log(BigInt(String(Number(amt) + 0.1) || "0"))
        console.log(amt)
        writeApprove({
            address: tokenConfig.address as `0x${string}`,
            abi: tokenConfig.abi,
            functionName: "approve",
            args: [bitlandConfig.address as `0x${string}`, BigInt(String(Number(amt) + 0.1) || "0")],
        });
    };
    const buy = async ( amt: bigint, ref_id: bigint = 1000n) => {
        
        writeBuy({
            address: bitlandConfig.address as `0x${string}`,
            abi: bitlandConfig.abi,
            functionName: "buy",
            args: [address as `0x${string}`, ref_id, amt],
            value: 0n
        });
    };

    return { buy, approve, buyTxHash, approveTxHash, isApprovePending, approveStatus};
};