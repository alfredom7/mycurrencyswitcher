import "./assets/css/scss/styles.css";
import "animate.css";
import NavbarComponent from "./components/NavbarComponent";
import MainBoxComponent from "./components/MainBoxComponent";
import ExchangeComponent from "./components/ExchangeComponent";
import InfoComponent from "./components/InfoComponent";
import FooterComponent from "./components/FooterComponent";

function myCsApp() {
  return (
    <>
      <NavbarComponent />
      <div className="main-container animate__animated animate__fadeIn">
        <div className="main-container__bg">
          <MainBoxComponent />
          <div className="container">
            <ExchangeComponent />
          </div>
        </div>
        <InfoComponent />
        <FooterComponent />
      </div>
    </>
  );
}

export default myCsApp;
