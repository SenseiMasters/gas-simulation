import { PublicClient, SimulateContractReturnType, WalletClient } from "viem";

export const requestSorting = async (
  sender: WalletClient,
  provider: PublicClient,
  { request }: SimulateContractReturnType
) => {
  const hash = await sender.writeContract(request);
  return await provider.waitForTransactionReceipt({ hash });
};
