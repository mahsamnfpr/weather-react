import React from "react";
import "./Weather.css";

export default function Weather() {
//   let weatherData = {
//     city: "New York",
//     date: "Tuesday 10:00",
//     description: "Cloudy",
//     humidity: 80,
//     wind: 10,
//     temp: 19,
//     imgUrl:
//       "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAg5JREFUeNrt2tGRgyAQBmBLoARLSAmUkBIsISVYgiVYgiVQgq//myXQAfdwS4bJqRFuCWjWmZ3JaGYin8AumMY513xzNAIgAAIgAAIgAAIgAAIgAALwe4LhANACGADMANxLzHStbQoc2QGoce5g9JcBAKA2nvi7mAGoUwP8o/FPhOoBAGgAIwBD0ftxHNntiw6HJICdBiqa8BxD2E9MjNEAAO4bNzwxPn0fA/WsbNkjBWDZuNkHXZ8ZAQ5DfQQAwG3nJjR9xxWKpOwRC6D3AGgOcGdCYAMI0p8rHEMWAGq82Zit++B7roJoWQEAdBs/NPouR/PDUAnAwAaw0+27YKEzVdLw6EryCIDZabymIeBqC06AP93+QEa4LMASlLv2GwF81zc1N54bwJe29kA1WHMY/wBjAe4vY388KUBYLbY5FkNniudSOwXAXSTmlLWAKtRl/a4T91K7qxlgXKvpKQVzzUOmxiFgg70FBeBBu0I9fVacVWiNk6AOFmB2A6gLUrIO9wAoa5mcADnT4Phm9blWlClC0B6Pzve5AHIWQm1EmW1pSNiVcv129GGlboubXGmJGsWS56l37GFOqQA5FkMmputGDKeRLQ1+4mAEWKp4OxzR6KXEirA4QOZ9RPPuHWNRAMb3iMmbpKUBdOkNktIAt+oB5F9iAiAAAiAAAiAAAiAAAiAAAiAAAiAAl48fFVnRpiVnD+AAAAAASUVORK5CYII="





  };
  return (
    <div className="weather">
      <form className="search-form" id="search-form">
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              placeholder="Type a city ..."
              autofocus="on"
              autocomplete="off"
              class="form-control shadow-sm"
            />
          </div>
          <div className="col-4">
            <input
              type="submit"
              value="Search"
              className="form-control btn btn-primary shadow-sm"
            />
          </div>
        </div>
      </form>
      <h1>{weatherData.city}</h1>
      <ul>
        <li>{weatherData.date}</li>
        <li></li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src={weatherData.imgUrl}
            alt={weatherData.description}
            className="weather-icon"
          />
          <span className="temperature">{weatherData.temp} </span>
          <span className="unit">°C </span>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity: <span></span>
            </li>
            <li>
              Wind: <span></span> km/h
            </li>
          </ul>
        </div>
      </div>
      <div className="weather-forcast"></div>
    </div>
  );
}
