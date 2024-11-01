import { formatEther, PublicClient, TransactionReceipt } from "viem";

export const timing = async (
  publicClient: PublicClient,
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
  const blocks = new Set(
    transactionsResult.map((el) => Number(el.blockNumber))
  );
  const blockSizes = await Promise.all(
    Array.from(blocks).map((blockNumber) => {
      return publicClient.getBlockTransactionCount({
        blockNumber: BigInt(blockNumber),
      });
    })
  );
  const transactionsCount = blockSizes.reduce(
    (prev, current) => prev + Number(current),
    0
  );
  const transactionGas = gas * (await publicClient.getGasPrice());
  console.log("Estimated Gas a transaction (WEI)", transactionGas);
  console.log(
    "Estimated Gas (WEI)",
    transactionGas * BigInt(transactionsCount)
  );
  console.log("Real Gas (WEI)", totalGas);
  console.log("Gas (ETH)", formatEther(BigInt(totalGas), "wei"));
  console.log(
    "Blocks",
    new Set(transactionsResult.map((el) => el.blockNumber))
  );
};
