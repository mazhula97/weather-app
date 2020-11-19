import { connect } from "react-redux";
import {
  deleteCard,
  getCardThunkCreator,
  getWeatherThunkCreator,
} from "../../redux/weather-reducer";
import Weather from "./Weather";

let mapStateToProps = (state) => {
  return {
    cities: state.weatherPage.cities,
    newCityName: state.weatherPage.newCityName,
    loading: state.weatherPage.loading,
  };
};

export default connect(mapStateToProps, {
  getWeather: getWeatherThunkCreator,
  getCard: getCardThunkCreator,
  deleteCard,
})(Weather);
