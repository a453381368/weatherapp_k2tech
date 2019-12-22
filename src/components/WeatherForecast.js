import React from 'react';

const WeatherForecast = props => (
    <div className="weather__info">
        <div className="container">
            <div className="cards">
                <p style={{fontSize:16+'px'}}>{props.date} {props.dayOfWeek}</p>
                <h1>
                    <i className={`wi ${props.weatherIcon}`} />
                </h1>
                <div className="row d-flex justify-content-center">
                    {props.temperatureLow && <div className="col-6">{props.temperatureLow}&deg;</div>}
                    {props.temperatureHigh && <div className="col-6">{props.temperatureHigh}&deg;</div>}
                </div>
            </div>
        </div>

        
    </div>
);

function minmaxTemp(min,max){
    return (
        <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}deg;</span>
        </h3>
    );
}

export default WeatherForecast;