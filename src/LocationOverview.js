import React from "react";
import "./styles.css";

export default function LocationOverview() {
  return (
    <div className="overview">
      <h1>
        <span className="city">Baguio</span>
      </h1>
      <ul>
        <li>
          <span className="time">Tuesday 5:00 AM</span>
        </li>
        <li>
          <span id="description">Cloudy</span>
        </li>
      </ul>
    </div>
  );
}
