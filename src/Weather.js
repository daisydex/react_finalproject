import React from "react";
import "./Weather.css";

export default function Weather (){
    return (
        <div className="Weather"> 
        <div className="col-9">
            <form>
           <input type="search" placeholder="Enter a city" className="form-control"/>
        <input type="submit" value="search" className="btn btn-primary w-100"/>
         </form>
        </div>
        
        <h1>New York</h1>
        <ul className="info">
            <li>Sunday 12:00</li>
            <li>Sunny</li>
        </ul>
        <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" 
            alt="sunny"
            className="float-left"/>
            </div>
            <div className="float-left">
            <span className="temperature">6</span> <span className="units">°C</span>
            </div>
            </div>
            
            <div className="col-6">
                <ul className="conditions">
                    <li> Precipitation: 15% </li>
                    <li> Humidity: 72% </li>
                    <li> Wind: 13 km/h </li>
                </ul>
            </div>
             </div>
            
           

    </div>
    )
}