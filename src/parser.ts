import { mathOperators } from "./mathOperators";
import { isNumber } from "./helpers";

export type ParsedLineType = Array<number | string>;

export const parser = (line: string): ParsedLineType | null => {
  const stack = line.split(" ");

  const result = stack.reduce((accum, _val, ind, arr) => {
    const prevItem = arr[ind - 1];
    const item = arr[ind];

    const isValidNumberPush = !isNumber(prevItem) && isNumber(item);
    const isValidOperatorPush =
      isNumber(prevItem) &&
      !isNumber(item) &&
      mathOperators.hasOwnProperty(item);

    if (isValidNumberPush) {
      accum.push(Number(item));
    } else if (isValidOperatorPush) {
      accum.push(item);
    } else {
      throw new TypeError("Unexpected string");
    }
    return accum;
  }, [] as (string | number)[]);

  return result;
};
