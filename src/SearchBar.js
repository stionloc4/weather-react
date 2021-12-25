import React from "react";
import "./styles.css";

export default function SearchBar() {
  return (
    <div className="SearchBar">
      <form id="search-form" className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city.."
              className="form-control"
              id="city-input"
              autocomplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
              id="searchCity"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
