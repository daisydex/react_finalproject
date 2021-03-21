import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

export default function Weather(props){

    const [weatherData, setWeatherData]= useState({ready: false});
    
    function handleResponse(response){
        console.log(response.data);

        setWeatherData({
         ready: true,
         temperature: response.data.main.temp,
         city:response.data.name,
         wind:response.data.wind.speed,
         humidity:response.data.main.humidity,
         description:response.data.weather[0].description,
         iconURL:'https://ssl.gstatic.com/onebox/weather/64/sunny.png'
           
        });
       

    }

    if (weatherData.ready) {
        return (
        <div className="Weather"> 
        <div className="col-9">
            <form>
        <input type="search" placeholder="Enter a city" className="form-control"/>
        <br />
        <input type="submit" value="Search" className="btn btn-outline-info w-100"/>
         </form>
        </div>
        
        <h1>{weatherData.city}</h1>
        <ul className="info">
            <li>{weatherData.iconURL}</li>
            <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
        <div className="col-4">
          <div className="clearfix">
            <img src={weatherData.iconURL}
            alt={weatherData.description}
            className="float-left"/>
            </div>
            <div className="clearfix">
            <div className="float-left">
            <span className="temperature"> {Math.round(weatherData.temperature)} </span> 
            <span className="units">°C </span>
            </div>
           </div>
            </div>
            
            <div className="col-6">
                <ul className="conditions">

                    <li> Humidity: {weatherData.humidity}% </li>
                    <li> Wind: {weatherData.wind} km/h </li>
                </ul>
            </div>
             </div>
            
    </div>
    );
    } else {
    const apiKey="cc3c1c3a90bf11d5dba4d1d793f72cde";
    let apiURL= `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);

    return "Loading...";
}
    
    
}