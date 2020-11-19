
import thunkMiddleware from "redux-thunk"
import weatherReducer from "./weather-reducer";



const { createStore, combineReducers, applyMiddleware, compose } = require("redux");

let reducers = combineReducers({
  weatherPage: weatherReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)
));

export default store;