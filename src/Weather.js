import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast";

import WeatherInfo from "./WeatherInfo";

export default function Weather(props){

    const [weatherData, setWeatherData]= useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response){


        setWeatherData({
         ready: true,
         date: new Date (response.data.dt *1000),
         temperature: response.data.main.temp,
         city:response.data.name,
         wind:response.data.wind.speed,
         humidity:response.data.main.humidity,
         description:response.data.weather[0].description,
         icon:response.data.weather[0].icon
           
        });
       

    }
function search(){

const apiKey="cc3c1c3a90bf11d5dba4d1d793f72cde";
    let apiURL= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
}

    function handleSubmit(event){
    event.preventDefault();
    search(city);
}

function handleCityChange(event){
setCity(event.target.value);
}

    if (weatherData.ready) {
        return (
        <div className="Weather"> 
        <div className="col-10">
            <form onSubmit={handleSubmit}>
        <input 
        type="search" 
        placeholder="Enter a city" 
        className="form-control"
        autoFocus="on"
        onChange={handleCityChange}
        />
        <br />
        <input 
        type="submit" 
        value="Search" 
        className="btn btn-outline-light w-100"
        />
         </form>
         
        </div>
        <WeatherInfo data={weatherData}/>
        <WeatherForecast city={weatherData.city}/>
            
    </div>
    );
    } else {
    search();
    return "Loading...";
}
    
    
}