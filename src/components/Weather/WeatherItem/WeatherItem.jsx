import s from "./WeatherItem.module.css";
import "antd/dist/antd.css";
import { Card } from "antd";
import { DeleteOutlined, UndoOutlined } from "@ant-design/icons";
import { Link, NavLink } from "react-router-dom";
const WeatherItem = (props) => {
  // const icon = {props.weather.icon};
  const { Meta } = Card;

  const onDeleteClick = (cityName) => {
    props.deleteCard(cityName);
  };
  const onUpdateClick = (cityName) => {
    props.getCard(cityName);
  };
  return (
    <div className={s.weatherItem}>
      <Card
        className={s.weatherCard}
        style={{ width: 300 }}
        cover={
          <Link
            to={{
              pathname: `/cities/${props.name}`,
            }}
          >
            <div className={s.temperature} title={"Detail weather"}>
              {`${Math.round(props.temp - 273.15)}°`}
            </div>
          </Link>
        }
        actions={[
          <UndoOutlined
            key="refresh"
            onClick={() => {
              onUpdateClick(props.name);
            }}
          />,
          <DeleteOutlined
            key="ellipsis"
            onClick={() => {
              onDeleteClick(props.name);
            }}
          />,
        ]}
      >
        <Meta
          avatar={
            <img
              src={`http://openweathermap.org/img/w/${props.weather[0].icon}.png`}
            />
          }
          title={<div className={s.title}>{props.name}</div>}
          description={
            <div className={s.shortDescription}>
              <div>{`Temp min: ${Math.round(props.minTemp - 273.15)}°`}</div>
              <div>{`Temp max: ${Math.round(props.maxTemp - 273.15)}°`}</div>
              <div className={s.countryName}>{`Country:  ${props.country}`}</div>
            </div>
          }
        />
      </Card>
    </div>
  );
};
export default WeatherItem;
