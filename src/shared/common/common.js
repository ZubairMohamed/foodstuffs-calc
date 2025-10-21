import discountRates from "../../data/discounts-rates.json";

/**
 * This is a dummy function used for testing
 * @param a
 * @param b
 * @returns {*}
 */
export function sumTwoNumbers(a, b) {
  return a + b;
}

/**
 * Function to handle calculating taxes based on a quantity, price per items and taxrate
 * @param {*} param0
 * @returns
 */
export function calculateTaxRate({
  quantity: quantity,
  pricePerItems: pricePerItems,
  taxRate: taxRate,
}) {
  console.log("quantity", quantity);
  console.log("priceperitems", pricePerItems);
  console.log("taxrate", taxRate);
  if (taxRate === undefined) {
    return;
  }
  return quantity * pricePerItems * (taxRate / 100);
}

export function getApplicableDiscount(
  sortedArrayByOrderValue,
  totalPricePaidByCustomer,
) {
  if (
    sortedArrayByOrderValue === undefined ||
    sortedArrayByOrderValue === null ||
    sortedArrayByOrderValue.length === 0
  ) {
    return;
  }

  for (let i = 0; i < sortedArrayByOrderValue.length; i++) {
    console.log(
      "what not",
      sortDiscountsByOrderValue,
      totalPricePaidByCustomer,
    );
  }
}

/**
 * This function takes in a dollar amount and converts it back to a number
 * example input $1,2345.67 should return $1234.67
 * @param currencyAmount
 */
export function convertCurrencyToNumber(currencyAmount) {
  return parseFloat(currencyAmount.replace(/[^0-9\.]+/g, ""));
}

/**
 * This function uses the data contained in the tax rates by region json file and sorts the data based on the order value
 */
export function sortDiscountsByOrderValue() {
  console.log(
    "sorted values: ",
    discountRates.sort((a, b) => {
      const convertedValue = (val) =>
        typeof val === "number" ? val : parseFloat(val);

      return convertedValue(a.OrderValue) - convertedValue(b.OrderValue);
    }),
  );
}
