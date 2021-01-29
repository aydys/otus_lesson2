import { ParsedLineType } from "./parser";
import { isNumber } from "./helpers";
import {
  mathPriorities,
  mathOperators,
  mathOperatorsPriorities,
} from "./mathOperators";

const { FIRST, SECOND } = mathPriorities;

export const firstPrioritiesCalc = (stack: ParsedLineType): ParsedLineType => {
  const result = stack.reduce((accum, _val, index, arr) => {
    const prevItem = accum[accum.length - 2];
    const item = accum[accum.length - 1];
    const nextItem = arr[index];

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === FIRST) {
      accum = [
        ...accum.slice(0, -2),
        mathOperators[item](Number(prevItem), Number(nextItem)),
      ];
    } else {
      accum.push(nextItem);
    }
    return accum;
  }, [] as ParsedLineType);

  return result;
};

export const secondPrioritiesCalc = (stack: ParsedLineType): number => {
  const result = stack.reduce((accum: number, _val, index, arr) => {
    if (index === 0) accum = Number(arr[index]);

    const prevItem = accum;
    const item = arr[index - 1];
    const nextItem = arr[index];

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === SECOND) {
      accum = mathOperators[item](Number(prevItem), Number(nextItem));
    }

    return accum;
  }, 0);

  return result;
};
