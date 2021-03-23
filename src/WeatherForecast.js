import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";

import WeatherForecastPreview from "./WeatherForecastPreview";

export default function WeatherForecast(props){
    const [loaded, setLoaded] = useState(false);
const [forecast, setForecast]= useState(null);

    function handleForecastResponse(response){
setForecast(response.data);
setLoaded(true);

    }
    if (loaded && props.city === forecast.city.name) {
        return (
         
     <div className="Weatherforecast row">
    
    <WeatherForecastPreview data={forecast.list[0]}/>
     <WeatherForecastPreview data={forecast.list[1]}/>
      <WeatherForecastPreview data={forecast.list[2]}/>
       <WeatherForecastPreview data={forecast.list[3]}/>
        <WeatherForecastPreview data={forecast.list[4]}/>
         <WeatherForecastPreview data={forecast.list[5]}/>
    
     </div>       
        );
    }else{
    let apiKey="cc3c1c3a90bf11d5dba4d1d793f72cde";
    let url= `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(url).then(handleForecastResponse);
    return null;
}
}