import React, { useEffect } from "react";
import { getCard } from "../../redux/weather-reducer";
import s from "./Details.module.css";
const Details = (props) => {
 
  let dw = props.detailPage;
  
  return (
    <div className={s.detailBlock}>
      <div className={s.nameImageCountry}>
        <div>
          {dw.name}, {dw.sys.country}
        </div>
        <div className={s.temp}>{`${Math.round(dw.main.temp - 273.15)}°`}</div>
      </div>
      <div className={s.weatherDescription}>
        <div className={s.clouds}>
          <img
            src={`http://openweathermap.org/img/w/${dw.weather[0].icon}.png`}
            alt=""
          />
          <p>{dw.weather[0].description}</p>
        </div>
        <div className={s.mainInfo}>
          <div>{`Temp: ${Math.round(dw.main.temp - 273.15)}°`}</div>
          <div>{`Feels like: ${Math.round(dw.main.feels_like - 273.15)}°`}</div>
          <div>{`Temp min: ${Math.round(dw.main.temp_min - 273.15)}°`}</div>
          <div>{`Temp max: ${Math.round(dw.main.temp_max - 273.15)}°`}</div>
          <div>{`Pressure: ${dw.main.pressure} mm`}</div>
          <div>{`Humidity: ${dw.main.humidity} %`}</div>
        </div>
      </div>
      <div className={s.suncycle}>
        <div className={s.sunrise}>
          <h1>Sunrise:</h1>
          {` ${new Date(dw.sys.sunrise * 1000)}`}
        </div>
        <div className={s.sunset}>
          <h1>Sunset:</h1>
          {` ${new Date(dw.sys.sunset * 1000)}`}
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default Details;
{
}
