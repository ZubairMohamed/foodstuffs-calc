import { expect, test } from "vitest";
import {
  sumTwoNumbers,
  convertCurrencyToNumber,
  calculateTaxRate,
} from "./common.js";

test("1 + 2 is equal to 3", () => {
  expect(sumTwoNumbers(1, 2)).toBe(3);
});

test("$1,234.56 converted to a number is 1234.56", () => {
  expect(convertCurrencyToNumber("$1,234.56")).toBe(1234.56);
});

test("$99,123,123.56 converted to a number is 99123123.56", () => {
  expect(convertCurrencyToNumber("$99,123,123.56")).toBe(99123123.56);
});

test("10% taxes of $30 is $3", () => {
  expect(
    calculateTaxRate({ quantity: 10, pricePerItems: 3, taxRate: 10 }),
  ).toBe(3);
});
