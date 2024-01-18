import React, { useState, useEffect } from "react";
import ExchangePriceComponent from "./ExchangePriceComponent";
import axios from "axios";

const ExchangeComponent = () => {
  const [price1, setPrice1] = useState(0);
  const [price2, setPrice2] = useState(0);
  const [currencyUpdated, setCurrencyUpdated] = useState("USD");
  const [loading, setLoading] = useState(false);
  const [exchangeText, setExchangeText] = useState(
    "Change the price to convert"
  );

  const [usdPrice, setUsdPrice] = useState(0);
  const [eurPrice, setEurPrice] = useState(0);

  useEffect(() => {
    getCurrency();
  }, [price1, price2]);

  const getCurrency = () => {
    setLoading(true);

    if (currencyUpdated == "USD" && price1 < 1) {
      setLoading(false);
      setPrice2(0);
      setExchangeText("Change the price to convert");
      return false;
    }
    if (currencyUpdated == "EUR" && price2 < 1) {
      setLoading(false);
      setPrice1(0);
      setExchangeText("Change the price to convert");
      return false;
    }

    axios
      .get(
        "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_uQIrxO4uv1869c5s4eJmGMPX6JrYxQsgOWeNECGv",
        {
          currencies: ["USD", "EUR"],
        }
      )
      .then(function (response) {
        const { data } = response.data;
        if (data) {
          setUsdPrice(data.USD);
          setEurPrice(data.EUR);
          if (currencyUpdated == "USD") {
            setPrice2(data.EUR * price1);
            setExchangeText(`You receive ${price2} Euros of ${price1} Dollars`);
          } else {
            setPrice1((1 - data.EUR + 1) * price2);
            setExchangeText(`You receive ${price1} Dollars of ${price2} Euros`);
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        setLoading(false);
      });
  };

  return (
    <div className="cs-exchange">
      <p className="cs-exchange__prices">{exchangeText}</p>

      <div className="cs-exchange__moneygroup">
        <div className="cs-exchange__moneygroup__left">
          <ExchangePriceComponent
            price={price1}
            currency={"USD"}
            setPrice1={setPrice1}
            setCurrencyUpdated={setCurrencyUpdated}
          />
        </div>
        <div className="cs-exchange__moneygroup__middle">
          <div className="cs-exchange__moneygroup__middle__symbol">
            {!loading ? (
              <i className="fas fa-exchange-alt"></i>
            ) : (
              <i className="fas fa-spinner"></i>
            )}
          </div>
        </div>
        <div className="cs-exchange__moneygroup__right">
          <ExchangePriceComponent
            price={price2}
            currency={"EUR"}
            setPrice2={setPrice2}
            setCurrencyUpdated={setCurrencyUpdated}
          />
        </div>
      </div>

      <div className="cs-exchange__quote">
        <div className="cs-exchange__quote__block">
          <i className="fas fa-exclamation-circle"></i> Our currency conversions
          are 100% precise
        </div>
      </div>
    </div>
  );
};

export default ExchangeComponent;
