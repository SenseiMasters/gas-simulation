import { formatEther, TransactionReceipt } from "viem";

export const timing = async (
  transactions: Array<Promise<TransactionReceipt>>,
  gas: bigint,
  timingLabel = "sort"
) => {
  console.time(timingLabel);
  const transactionsResult = (await Promise.all(
    transactions
  )) as Array<TransactionReceipt>;
  console.timeEnd(timingLabel);
  const totalGas =
    transactionsResult.reduce(
      (prev, current) => prev + Number(current.effectiveGasPrice),
      0
    ) * Number(gas);
  console.log("Gas (WEI)", totalGas);
  console.log("Gas (ETH)", formatEther(BigInt(totalGas), "wei"));
  console.log(
    "Blocks",
    new Set(transactionsResult.map((el) => el.blockNumber))
  );
};
