import React from "react";
import usdflag from "../assets/images/usdflag.png";
import euroflag from "../assets/images/euroflag.png";

const InfoComponent = () => {
  const infoTools = [
    {
      icon: "fas fa-globe",
      title: "International Money Transfer",
      description:
        "Send money online fast, secure and easy. Live tracking and notifications + flexible delivery and payment options.",
      btnName: "Send money",
    },
    {
      icon: "fas fa-chart-line",
      title: "Currency Charts",
      description:
        "Create a chart for any currency pair in the world to see their currency history. These currency charts use live mid-market rates, are easy to use, and are very reliable.",
      btnName: "View charts",
    },
    {
      icon: "fas fa-bell",
      title: "Rate Alerts",
      description:
        "Need to know when a currency hits a specific rate? The Xe Rate Alerts will let you know when the rate you need is triggered on your selected currency pairs.",
      btnName: "Create alert",
    },
  ];
  return (
    <>
      <div className="container py-5 cs-info">
        <div className="cs-info__title">Currency Information</div>
        <div className="cs-info__title-separator"></div>

        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card animate__animated animate__fadeInTopLeft">
              <div className="card-body">
                <div className="card-title">
                  <img src={usdflag} className="flag" /> USD - US Dollar
                </div>
                <p className="card-text">
                  Our currency rankings show that the most popular US Dollar
                  exchange rate is the USD to USD rate. The currency code for US
                  Dollars is USD. The currency symbol is $.
                </p>
                <a href="#" className="btn btn-primary card-button">
                  More US Dollar Info <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card animate__animated animate__fadeInTopRight">
              <div className="card-body">
                <div className="card-title">
                  <img src={euroflag} className="flag" /> EUR - Euro
                </div>
                <p className="card-text">
                  Our currency rankings show that the most popular Euro exchange
                  rate is the EUR to USD rate. The currency code for Euros is
                  EUR. The currency symbol is €.
                </p>
                <a href="#" className="btn btn-primary card-button">
                  More Euro Info <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 cs-infotools">
        <div className="cs-infotools__title">
          The world's most popular currency tools
        </div>
        <div className="cs-infotools__cards container">
          <div className="row">
            {infoTools.map((it, index) => (
              <div className="col-md-4 py-3" key={index.toString()}>
                <div className="card text-center">
                  <div className="card-header">
                    <i className={it.icon}></i>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{it.title}</h5>
                    <p className="card-text">{it.description}</p>
                    <a href="#" className="btn btn-primary">
                      {it.btnName}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoComponent;
