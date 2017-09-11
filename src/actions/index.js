import axios from 'axios';

const API_KEY = '91e2de6d110b3d5f606b18ded4fbd83f';
const ROOT_ULR = `http://api.openweathermap.org/data/2.5/forecast`

export const FETCH_WEATHER = 'FETCH_WEATHER';



export function fetchWeather(city){

    const url = `${ROOT_ULR}?q=${city}&appid=${API_KEY}&units=metric&lang=ua`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}