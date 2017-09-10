import axios from 'axios';

const API_KEY = '91e2de6d110b3d5f606b18ded4fbd83f';
//const ROOT_ULR = `https://crossorigin.me/http://samples.openweathermap.org/data/2.5/weather`
const ROOT_ULR = `http://samples.openweathermap.org/data/2.5/weather`

export const FETCH_WEATHER = 'FETCH_WEATHER';



export function fetchWeather(city){

    const url = `${ROOT_ULR}?q=${city}&appid=${API_KEY}`;
    const request = axios.get(url);
    console.log('request',request)

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}