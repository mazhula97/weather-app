import React, { useEffect, useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./Weather.module.css";
import WeatherItem from "./WeatherItem/WeatherItem";

const Weather = (props) => {
  
  const [newCityName, setNewCityName] = useState("");

  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(props.cities));
  }, [props.cities]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !props.cities ||
      props.cities.length === 0 ||
      props.cities.some((c) => c.name !== newCityName)
    ) {
      props.getWeather(newCityName);
    } else {
      alert("The city has already been determined");
    }
  };
  const onCityChange = (e) => {
    setNewCityName(e.currentTarget.value)
  };
  return (
    <div className={s.weather}>
      <div className={s.createForm}>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="City"
            type="text"
            name="city"
            onChange={onCityChange}
          />
          <button>Create card</button>
        </form>
      </div>
      <div className={s.weatherItemBlock}>
        {props.cities.length === 0 ? (
          <div className={s.cover}>FIND YOUR CITY!</div>
        ) : props.loading ? (
          <Preloader />
        ) : (
          props.cities.map((c) => (
            <WeatherItem
              key={c.id}
              name={c.name}
              temp={c.main.temp}
              weather={c.weather}
              minTemp={c.main.temp_min}
              maxTemp={c.main.temp_max}
              country={c.sys.country}
              deleteCard={props.deleteCard}
              getCard={props.getCard}
            />
          ))
        )}
      </div>
    </div>
  );
};
export default Weather;
