import React from 'react';

const Weather = props => (
    <div className="weather__info">
        {
            props.error && <p className="weather__error">{props.error}</p>
        }
        <div className="container">
            <div className="cards">
                <h3 className="address">{props.address}</h3>
                <h4 className="current-date">{props.date} {props.dayOfWeek}</h4>
                <h5 className="py-4">
                    <i className={`wi ${props.weatherIcon} display-1`} />
                </h5>
                <div className="row d-flex justify-content-center">
                    {props.temperature && <h1 className="py-2">{props.temperature}&deg;</h1>}
                </div>
                <div className="row">
                    {
                        props.windspeed &&
                        <div className="col-md-6">
                            <h6>风速</h6>
                            <span className="weather__value">{props.windspeed} 米/秒</span>                     
                        </div>
                    }
                    {
                        props.windspeed && props.humidity &&
                        <div className="col-md-6">
                            <h6>湿度</h6>
                            <span className="weather__value">{props.humidity}</span>                  
                        </div>
                    }
                    
                </div>
            </div>
        </div>

        
    </div>
);

export default Weather;