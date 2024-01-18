import React from "react";

const CarouselBoxComponent = () => {
  const items = [
    "More than 20 years of experience",
    "1 USD to EUR - Convert US Dollars to Euros",
    "Exchange your dollars with us",
  ];
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide cs-carouselbox container"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {items.map((item, i) => (
            <div
              className={i == 0 ? "carousel-item active" : "carousel-item"}
              key={i.toString()}
            >
              <div className="carousel-caption ">
                <h2>{item}</h2>
                <p></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CarouselBoxComponent;
