import React from "react";
import { connect } from "react-redux";
import { getCard, getCardThunkCreator, getDetailsThunkCreator } from "../../redux/weather-reducer";
import Details from "./Details";

const mapStateToProps = (state) => {
  return {
    cities: state.weatherPage.cities,
    detailPage: state.weatherPage.ddetailPage
  };
};

export default connect(mapStateToProps, {
  getDetail: getDetailsThunkCreator,
})(Details);
