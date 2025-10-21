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
  if (taxRate === undefined) {
    return;
  }
  return quantity * pricePerItems * (taxRate / 100);
}

export function getApplicableDiscount({
  sortedArrayByOrderValue: sortedArrayByOrderValue,
  totalPricePaidByCustomer: totalPricePaidByCustomer,
}) {
  if (
    sortedArrayByOrderValue === undefined ||
    sortedArrayByOrderValue === null ||
    sortedArrayByOrderValue.length === 0
  ) {
    return;
  }

  //TODO
  return 1;

  
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
 * This function uses the data contained in the discount rates json file and sorts the data based on the order value
 */
export function sortDiscountsByOrderValue() {
  return discountRates.sort((a, b) => {
    const convertedValueA = convertCurrencyToNumber(a.OrderValue);
    const convertedValueB = convertCurrencyToNumber(b.OrderValue);
    
    return convertedValueA - convertedValueB;
  });
}
