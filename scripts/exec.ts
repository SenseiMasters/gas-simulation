import { sorting } from "./sorting";

async function main() {
  const inputsSize = 10;
  const requestsSize = 10;
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
