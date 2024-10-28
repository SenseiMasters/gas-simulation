import { sorting } from "./soring";

async function main() {
  const inputsSize = 30;
  const requestsSize = 100;
  console.log("=================== BubbleSort ==================");
  await sorting("BubbleSort", requestsSize, inputsSize);
  console.log("=================== MergeSort ==================");
  await sorting("MergeSort", requestsSize, inputsSize);
  console.log("=================== QuickSort ==================");
  await sorting("QuickSort", requestsSize, inputsSize);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
