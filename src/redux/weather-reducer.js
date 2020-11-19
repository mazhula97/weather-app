import { weatherAPI } from "../api/api";


const ADD_CARD = "ADD-CARD"
const ADD_CARD_SUCCESS = "ADD-CARD-SUCCESS"
const ADD_CARD_ERROR = "ADD-CARD-ERROR"
const DELETE_CARD = "DELETE-CARD"
const GET_CARD = "GET-CARD"
const GET_DETAILS = "GET-DETAILS"
// const SAVE_CARDS = "SAVE-CARDS"

const cities = localStorage.getItem("cities")

let initialState = {
    cities: cities ? JSON.parse(cities) : [],
    detailPage: null,
    newCityName: "",
    loading: false
}

export const weatherReducer = (state = initialState, action) => {
  console.log(state, action)
    switch (action.type) {
        case ADD_CARD:
            return {
                ...state,
                 loading: true
            }   
        case ADD_CARD_SUCCESS:
            return{
                    ...state,
                    cities: [...state.cities, action.payload],
                    loading: false,
                    newCityName: ""
                }
        case DELETE_CARD:
            return {
                    ...state,
                    cities: state.cities.filter(c => c.name !== action.payload)
     }       
     
        case GET_CARD: 
          const index = state.cities.findIndex((c) => c.name === action.payload.name )    
            return {
                    ...state,
                     cities: [...state.cities.slice(0, index), action.payload, ...state.cities.slice(index + 1, cities.length - 1)]      
     }
        case GET_DETAILS:
            return {
               ...state,
               detailPage: action.payload
            }
        default:
             return state;
      }

}

export const addCardActionCreator = (newCityName) => {
    return { type: ADD_CARD, payload: newCityName }
}

export const addCardSuccessActionCreator = (cities) => {
    return { type: ADD_CARD_SUCCESS, payload: cities }
}
export const addCardErrorActionCreator = () => {
    return { type: ADD_CARD_ERROR }
}
export const deleteCard = (cityName) => {
    return { type: DELETE_CARD, payload: cityName }
}
export const getCard = (cityName) => {
    return { type: GET_CARD, payload: cityName }
}
export const getDetails = (detailPage) => {
    return { type: GET_DETAILS, payload: detailPage}
}


export const getWeatherThunkCreator = (newCityName) => async (dispatch) => {
   
    dispatch(addCardActionCreator(newCityName))
    try{
        let response = await weatherAPI.getWeather(newCityName)
        dispatch(addCardSuccessActionCreator(response.data))

    } catch(e) {
        dispatch(addCardErrorActionCreator)
    } 
}

export const getCardThunkCreator = (cityName) => async (dispatch) => {

    try{
        let response = await weatherAPI.getWeather(cityName)
        dispatch(getCard(response.data))
    } catch(e) {
        dispatch(addCardErrorActionCreator)
    } 
}
export const getDetailsThunkCreator = (cityName) => async (dispatch) => {

    try{
        let response = await weatherAPI.getWeather(cityName)
        dispatch(getDetails(response.data))
    } catch(e) {
        dispatch(addCardErrorActionCreator)
    } 
}



export default weatherReducer;