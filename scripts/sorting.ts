import hre from "hardhat";
import {
  TransactionReceipt,
  SimulateContractParameters,
  EstimateContractGasParameters,
} from "viem";

import { timing } from "../utils/timing";
import { requestSorting } from "../utils/write-contract";
import { generateArrayOfBigints } from "../utils/inputs";

export async function sorting(
  contractName: string,
  requestsNum: number,
  inputsSize: number
) {
  const [sender] = await hre.viem.getWalletClients();
  const provider = await hre.viem.getPublicClient();
  const contract = await hre.viem.deployContract(contractName);
  const inputs = generateArrayOfBigints(inputsSize);
  const data: SimulateContractParameters = {
    address: contract.address,
    abi: contract.abi,
    functionName: "sort",
    args: [inputs],
    account: sender.account,
  };
  const gas = await provider.estimateContractGas(
    data as EstimateContractGasParameters
  );
  const simulation = await provider.simulateContract(data);
  const transactions: Array<Promise<TransactionReceipt>> = [];
  for (let i = 0; i < requestsNum; i++) {
    transactions.push(requestSorting(sender, provider, simulation));
  }
  await timing(provider, transactions, gas, `${contractName} sort duration`);
}
