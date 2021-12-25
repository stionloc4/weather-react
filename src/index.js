import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import SearchBar from "./SearchBar";
import LocationOverview from "./LocationOverview";
import CurrentTemperatureDisplay from "./CurrentTemperatureDisplay";

import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <div class="container">
      <div class="weatherAppWrapper">
        <div class="weatherApp">
          <SearchBar />
          <LocationOverview />
          <CurrentTemperatureDisplay />
        </div>
      </div>
    </div>
  </StrictMode>,
  rootElement
);
