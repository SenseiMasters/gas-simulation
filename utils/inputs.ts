import { faker } from "@faker-js/faker";

export const generateArrayOfBigints = (len: number): Array<bigint> => {
  const inputs: Array<bigint> = [];
  for (let index = 0; index < len; index++) {
    inputs.push(faker.number.bigInt());
  }
  return inputs;
};
