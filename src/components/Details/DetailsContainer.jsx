import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Preloader from "../../common/Preloader/Preloader";
import { getDetailsThunkCreator } from "../../redux/weather-reducer";
import Details from "./Details";

class DetailsContainer extends React.Component {
  componentDidMount() {
    let cityName = this.props.match.params.cityName;
    this.props.getDetail(cityName);
  }

  render() {
    return !this.props.detailPage ? (
      <Preloader />
    ) : (
      <Details {...this.props} detailPage={this.props.detailPage} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    detailPage: state.weatherPage.detailPage,
  };
};

let withUrlData = withRouter(DetailsContainer);

export default connect(mapStateToProps, {
  getDetail: getDetailsThunkCreator,
})(withUrlData);
