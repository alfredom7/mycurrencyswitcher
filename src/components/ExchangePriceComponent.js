import React from "react";
import { DebounceInput } from "react-debounce-input";

const ExchangePriceComponent = ({
  price,
  currency,
  setPrice1,
  setPrice2,
  setCurrencyUpdated,
}) => {
  const onInputChange = ({ target }) => {
    if (currency === "USD") {
      setPrice1(target.value);
    } else if (currency === "EUR") {
      setPrice2(target.value);
    }
    setCurrencyUpdated(currency);
  };

  return (
    <div className="input-group input-group-lg cs-exchange__moneygroup__input">
      <span className="input-group-text" id="inputGroup-sizing-lg">
        {currency}
      </span>
      <DebounceInput
        className="form-control"
        minLength={1}
        debounceTimeout={600}
        onChange={onInputChange}
        value={price}
      />
    </div>
  );
};

export default ExchangePriceComponent;
