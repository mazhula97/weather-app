import * as axios from "axios";

let API_KEY = "16cc9f6b27a98cce64e2b6870013a68b";

export const weatherAPI = {
   
   async getWeather(newCityName) {
       return await axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${newCityName}&appid=${API_KEY}`)
    
}
} 

