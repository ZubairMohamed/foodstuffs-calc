import React, { Fragment, useState, useEffect } from "react";

import rates from "../../data/tax-rates-by-region.json";
import {
  calculateTaxRate,
  getApplicableDiscount,
  sortDiscountsByOrderValue,
} from "../../shared/common/common.js";

export default function Calculator() {
  const [quantity, setQuantity] = useState(1);

  const [pricePerItems, setPricePerItems] = useState(1);

  // by default the first tax rate should be used coming in from the rates sorted alphabetically by Region
  const [taxRateRegionCode, setTaxRateRegionCode] = useState({
    Region: 0,
    TaxRate: 0,
  });

  useEffect(() => {
    if (rates !== undefined && rates.length > 1) {
      let first = rates.sort((a, b) => a.Region.localeCompare(b.Region))[0];
      setTaxRateRegionCode({
        Region: first.Region,
        TaxRate: parseFloat(first.TaxRate.replace("%", "")),
      });
    }
  }, [rates]);
  // by default the first tax rate should be used coming in from the rates sorted alphabetically by Region

  const handleQuantityUpdate = (event) => {
    let numOfItemsFromInput = event.target.value;
    if (numOfItemsFromInput == undefined || numOfItemsFromInput <= 1) {
      setQuantity(1);
    } else {
      setQuantity(numOfItemsFromInput);
    }
  };

  const handlePricePerItemUpdate = (event) => {
    let quantityFromInput = event.target.value;
    if (quantityFromInput == undefined || quantityFromInput <= 1) {
      setPricePerItems(1);
    } else {
      setPricePerItems(quantityFromInput);
    }
  };

  const handleTaxRateChange = (event) => {
    let newTaxRate = event.target.value;
    let newRegionCode =
      event.target.selectedOptions[0].dataset.region_code_selected;

    setTaxRateRegionCode({
      Region: newRegionCode,
      TaxRate: parseFloat(newTaxRate),
    });
  };

  getApplicableDiscount({
    sortedArrayByOrderValue: sortDiscountsByOrderValue(),
    totalPricePaidByCustomer: 60000,
  });

  return (
    <>
      <div>
        {/* input: number - how many items */}
        <label htmlFor="quantity">Quantity of Items </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          onChange={handleQuantityUpdate}
          value={quantity}
        ></input>
        {/* input: number - how many items */}

        <br />
        <br />

        {/* input: number - price per item */}
        <label htmlFor="pricePerItem">Price per Item in $</label>
        <input
          type="number"
          id="pricePerItem"
          name="pricePerItem"
          min="1"
          onChange={handlePricePerItemUpdate}
          value={pricePerItems}
        ></input>
        {/* input: number - price per item */}

        <br />
        <br />

        {/* dropdown - 3 letter region code */}
        <label htmlFor="threeLetterRegionCode">
          Select Tax Rate For Your Region
        </label>

        {/* only render this is rates is not empty and has content */}
        {rates !== undefined && rates.length >= 1 && (
          <select
            name="threeLetterRegionCode"
            id="threeLetterRegionCode"
            onChange={handleTaxRateChange}
          >
            {rates
              .sort((a, b) => a.Region.localeCompare(b.Region))
              .map((value, index) => {
                return (
                  <Fragment key={index}>
                    <option
                      value={value.TaxRate.replace("%", "")}
                      data-region_code_selected={value.Region.toUpperCase()}
                    >
                      {value.Region.toUpperCase()}: {value.TaxRate}
                    </option>
                  </Fragment>
                );
              })}
          </select>
        )}
        {/* only render this is rates is not empty and has content */}
        {/* dropdown - 3 letter region code */}

        {/*  show the total before discount and taxes */}
        <div>
          <p>
            Subtotal Price Before Taxes and Discount: $
            {quantity * pricePerItems}
          </p>
        </div>
        {/*  show the total before discount and taxes */}

        {/*  show the discounted price */}
        <div>
          <p>Discounted Price: ${quantity * pricePerItems}</p>
        </div>
        {/*  show the discounted price */}

        {/*  Tax Price */}
        <div>
          <p>
            Tax $
            {calculateTaxRate({
              quantity: quantity,
              pricePerItems: pricePerItems,
              taxRate: taxRateRegionCode.TaxRate,
            }) || 0}
          </p>
        </div>
        {/*  Tax price */}
      </div>
    </>
  );
}
