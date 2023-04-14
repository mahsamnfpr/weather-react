import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

// export default function Weather() {
//   let weatherData = {
//     city: "New York",
//     date: "Tuesday 10:00",
//     description: "Cloudy",
//     humidity: 80,
//     wind: 10,
//     temp: 19,
//     imgUrl:
//       "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAg5JREFUeNrt2tGRgyAQBmBLoARLSAmUkBIsISVYgiVYgiVQgq//myXQAfdwS4bJqRFuCWjWmZ3JaGYin8AumMY513xzNAIgAAIgAAIgAAIgAAIgAALwe4LhANACGADMANxLzHStbQoc2QGoce5g9JcBAKA2nvi7mAGoUwP8o/FPhOoBAGgAIwBD0ftxHNntiw6HJICdBiqa8BxD2E9MjNEAAO4bNzwxPn0fA/WsbNkjBWDZuNkHXZ8ZAQ5DfQQAwG3nJjR9xxWKpOwRC6D3AGgOcGdCYAMI0p8rHEMWAGq82Zit++B7roJoWQEAdBs/NPouR/PDUAnAwAaw0+27YKEzVdLw6EryCIDZabymIeBqC06AP93+QEa4LMASlLv2GwF81zc1N54bwJe29kA1WHMY/wBjAe4vY388KUBYLbY5FkNniudSOwXAXSTmlLWAKtRl/a4T91K7qxlgXKvpKQVzzUOmxiFgg70FBeBBu0I9fVacVWiNk6AOFmB2A6gLUrIO9wAoa5mcADnT4Phm9blWlClC0B6Pzve5AHIWQm1EmW1pSNiVcv129GGlboubXGmJGsWS56l37GFOqQA5FkMmputGDKeRLQ1+4mAEWKp4OxzR6KXEirA4QOZ9RPPuHWNRAMb3iMmbpKUBdOkNktIAt+oB5F9iAiAAAiAAAiAAAiAAAiAAAiAAAiAAl48fFVnRpiVnD+AAAAAASUVORK5CYII="

export default function Weather() {
    const [city, setCity] = useState("");
    const [loaded, setloaded] = useState(false);
    const [weather, setWeather] = useState({});
  
    function displayWeather(response) {
      setloaded(true);
      setWeather({
        temperature: response.data.main.temp,
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity,
        description: response.data.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      });
    }

function submit(event) {
    event.preventDefault();
    let apiKey = "203fa770242fcd2b9555d832a88ea567";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(displayWeather);
}

function updateCity(event) {
    setCity(event.target.value);
  }


let form = (
    <form className="search-form" onSubmit={submit}>
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              placeholder="Type a city ..."
              autofocus="on"
              autocomplete="off"
              class="form-control shadow-sm"
              onChange={updateCity} 
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
      
)

if (loaded){
    return(
        <div className="weather">
            {form}
            <h1>{city}</h1>
            <ul>
          <li>Temperature: {Math.round(weather.temperature)} °C</li>
          
            <li>Description: {weather.description}</li>
            <li>
                Humidity: {weather.humidity}%
          </li>
          <li>Wind: {Math.round(weather.wind)}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
        <br/>
        <br/>
        </div>
        
    );
}else{
    return form;
}
  
 
}
