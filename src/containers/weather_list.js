import React, { Component } from 'react';
import {connect} from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
class WeatherList extends Component {

    renderWeather(cityData,index){

        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const preessures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        const {lon,lat} = cityData.city.coord;

        return(
            <tr key={index}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td>
                    <Chart data={temps} color="orange" units="°C"/>
                </td>
                <td>
                    <Chart data={preessures} color="blue" units="hPa" />
                </td>
                <td>
                    <Chart data={humidities} color="purple" units="%" />
                </td>
            </tr>
        )
    }

    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Город</th>
                        <th>Температура (°C)</th>
                        <th>Давление (hPa)</th>
                        <th>Влажность (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}){
    return {weather};
}

export default connect(mapStateToProps,null)(WeatherList);