
import thunkMiddleware from "redux-thunk"
import weatherReducer from "./weather-reducer";
// import { reducer as formReducer } from 'redux-form'


const { createStore, combineReducers, applyMiddleware, compose } = require("redux");

let reducers = combineReducers({
  weatherPage: weatherReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)
));
// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

// window.__store__ = store;
export default store;