import React from 'react';
import moment from 'moment';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import WeatherForecast from './components/WeatherForecast';
import './App.css';

const DARKSKY_API_KEY = "4c963166b440db8963a479f7ef3ffc45";
const GOOGLE_GEOCODING_API_KEY = "AIzaSyA5ssfYX9NqCvBmNh8CGoqNiOTn3tkvLMo";

class App extends React.Component{
  state = {
    currentTemperature: undefined,
    currentIcon: undefined,
    address: undefined,
    currentDayOfWeek: undefined,
    currentDate: undefined,
    currentHumidity: undefined,
    currentWindspeed: undefined,
    error: undefined,

    secondTemperature: undefined,
    secondDate: undefined,
    secondDayOfWeek: undefined,
    secondTemperatureHigh: undefined,
    secondTemperatureLow: undefined,
    secondIcon: undefined,

    thirdTemperature: undefined,
    thirdDate: undefined,
    thirdDayOfWeek: undefined,
    thirdTemperatureHigh: undefined,
    thirdTemperatureLow: undefined,
    thirdIcon: undefined,

    forthTemperature: undefined,
    forthDate: undefined,
    forthDayOfWeek: undefined,
    forthTemperatureHigh: undefined,
    forthTemperatureLow: undefined,
    forthIcon: undefined
  }

  weatherIcon = {
    Sleet: "wi-sleet",
    Rain: "wi-showers",
    Snow: "wi-snow",
    Windy: "wi-windy",
    Fog: "wi-fog",
    ClearDay: "wi-day-sunny",
    ClearNight: "wi-night-clear",
    Cloudy: "wi-cloudy",
    PartlyCloudyNight: "wi-night-alt-partly-cloudy",
    PartlyCloudyDay: "wi-day-cloudy"
  }

  dayOfWeek_zh = {
    Sun: "星期日",
    Mon: "星期一",
    Tue: "星期二",
    Wed: "星期三",
    Thu: "星期四",
    Fri: "星期五",
    Sat: "星期六",
  }

  calCelsius(temp){
    let cell = Math.floor( (temp - 32) / 1.8 );
    if(cell === 0){
      return '0';
    }else{
     return cell;
    }
  }

  getCurrentWeatherIcon(icons, data_icon){
    switch(true){
      case data_icon === 'clear-day':
        this.setState({currentIcon: this.weatherIcon.ClearDay});
        break;
      case data_icon === 'clear-night':
        this.setState({currentIcon: this.weatherIcon.ClearNight});
        break;
      case data_icon === 'rain':
        this.setState({currentIcon: this.weatherIcon.Rain});
        break;
      case data_icon === 'snow':
        this.setState({currentIcon: this.weatherIcon.Snow});
        break;
      case data_icon === 'sleet':
        this.setState({currentIcon: this.weatherIcon.Sleet});
        break;
      case data_icon === 'wind':
        this.setState({currentIcon: this.weatherIcon.Windy});
        break;
      case data_icon === 'fog':
        this.setState({currentIcon: this.weatherIcon.Fog});
        break;
      case data_icon === 'cloudy':
        this.setState({currentIcon: this.weatherIcon.Cloudy});
        break;
      case data_icon === 'partly-cloudy-day':
        this.setState({currentIcon: this.weatherIcon.PartlyCloudyDay});
        break;
      case data_icon === 'partly-cloudy-night':
        this.setState({currentIcon: this.weatherIcon.PartlyCloudyNight});
        break;
      default:
        this.setState({currentIcon: this.weatherIcon.PartlyCloudyDay});
    }
  }

  getSecondWeatherIcon(icons, data_icon){
    switch(true){
      case data_icon === 'clear-day':
        this.setState({secondIcon: this.weatherIcon.ClearDay});
        break;
      case data_icon === 'clear-night':
        this.setState({secondIcon: this.weatherIcon.ClearNight});
        break;
      case data_icon === 'rain':
        this.setState({secondIcon: this.weatherIcon.Rain});
        break;
      case data_icon === 'snow':
        this.setState({secondIcon: this.weatherIcon.Snow});
        break;
      case data_icon === 'sleet':
        this.setState({secondIcon: this.weatherIcon.Sleet});
        break;
      case data_icon === 'wind':
        this.setState({secondIcon: this.weatherIcon.Windy});
        break;
      case data_icon === 'fog':
        this.setState({secondIcon: this.weatherIcon.Fog});
        break;
      case data_icon === 'cloudy':
        this.setState({secondIcon: this.weatherIcon.Cloudy});
        break;
      case data_icon === 'partly-cloudy-day':
        this.setState({secondIcon: this.weatherIcon.PartlyCloudyDay});
        break;
      case data_icon === 'partly-cloudy-night':
        this.setState({secondIcon: this.weatherIcon.PartlyCloudyNight});
        break;
      default:
        this.setState({secondIcon: this.weatherIcon.PartlyCloudyDay});
    }
  }

  getThirdWeatherIcon(icons, data_icon){
    switch(true){
      case data_icon === 'clear-day':
        this.setState({thirdIcon: this.weatherIcon.ClearDay});
        break;
      case data_icon === 'clear-night':
        this.setState({thirdIcon: this.weatherIcon.ClearNight});
        break;
      case data_icon === 'rain':
        this.setState({thirdIcon: this.weatherIcon.Rain});
        break;
      case data_icon === 'snow':
        this.setState({thirdIcon: this.weatherIcon.Snow});
        break;
      case data_icon === 'sleet':
        this.setState({thirdIcon: this.weatherIcon.Sleet});
        break;
      case data_icon === 'wind':
        this.setState({thirdIcon: this.weatherIcon.Windy});
        break;
      case data_icon === 'fog':
        this.setState({thirdIcon: this.weatherIcon.Fog});
        break;
      case data_icon === 'cloudy':
        this.setState({thirdIcon: this.weatherIcon.Cloudy});
        break;
      case data_icon === 'partly-cloudy-day':
        this.setState({thirdIcon: this.weatherIcon.PartlyCloudyDay});
        break;
      case data_icon === 'partly-cloudy-night':
        this.setState({thirdIcon: this.weatherIcon.PartlyCloudyNight});
        break;
      default:
        this.setState({thirdIcon: this.weatherIcon.PartlyCloudyDay});
    }
  }

  getForthWeatherIcon(icons, data_icon){
    switch(true){
      case data_icon === 'clear-day':
        this.setState({forthIcon: this.weatherIcon.ClearDay});
        break;
      case data_icon === 'clear-night':
        this.setState({forthIcon: this.weatherIcon.ClearNight});
        break;
      case data_icon === 'rain':
        this.setState({forthIcon: this.weatherIcon.Rain});
        break;
      case data_icon === 'snow':
        this.setState({forthIcon: this.weatherIcon.Snow});
        break;
      case data_icon === 'sleet':
        this.setState({forthIcon: this.weatherIcon.Sleet});
        break;
      case data_icon === 'wind':
        this.setState({forthIcon: this.weatherIcon.Windy});
        break;
      case data_icon === 'fog':
        this.setState({forthIcon: this.weatherIcon.Fog});
        break;
      case data_icon === 'cloudy':
        this.setState({forthIcon: this.weatherIcon.Cloudy});
        break;
      case data_icon === 'partly-cloudy-day':
        this.setState({forthIcon: this.weatherIcon.PartlyCloudyDay});
        break;
      case data_icon === 'partly-cloudy-night':
        this.setState({forthIcon: this.weatherIcon.PartlyCloudyNight});
        break;
      default:
        this.setState({forthIcon: this.weatherIcon.PartlyCloudyDay});
    }
  }
  
  getCurrentDayOfWeek(dayOfWeek, data_dayOfWeek){
    switch(true){
      case data_dayOfWeek === 'Sun':
        this.setState({currentDayOfWeek: this.dayOfWeek_zh.Sun});
        break;
      case data_dayOfWeek === 'Mon':
        this.setState({currentDayOfWeek: this.dayOfWeek_zh.Mon});
        break;
      case data_dayOfWeek === 'Tue':
        this.setState({currentDayOfWeek: this.dayOfWeek_zh.Tue});
        break;
      case data_dayOfWeek === 'Wed':
        this.setState({currentDayOfWeek: this.dayOfWeek_zh.Wed});
        break;
      case data_dayOfWeek === 'Thu':
        this.setState({currentDayOfWeek: this.dayOfWeek_zh.Thu});
        break;
      case data_dayOfWeek === 'Fri':
        this.setState({currentDayOfWeek: this.dayOfWeek_zh.Fri});
        break;
      case data_dayOfWeek === 'Sat':
        this.setState({currentDayOfWeek: this.dayOfWeek_zh.Sat});
        break;
    }
  }
  
  getSecondDayOfWeek(dayOfWeek, data_dayOfWeek){
    switch(true){
      case data_dayOfWeek === 'Sun':
        this.setState({secondDayOfWeek: this.dayOfWeek_zh.Sun});
        break;
      case data_dayOfWeek === 'Mon':
        this.setState({secondDayOfWeek: this.dayOfWeek_zh.Mon});
        break;
      case data_dayOfWeek === 'Tue':
        this.setState({secondDayOfWeek: this.dayOfWeek_zh.Tue});
        break;
      case data_dayOfWeek === 'Wed':
        this.setState({secondDayOfWeek: this.dayOfWeek_zh.Wed});
        break;
      case data_dayOfWeek === 'Thu':
        this.setState({secondDayOfWeek: this.dayOfWeek_zh.Thu});
        break;
      case data_dayOfWeek === 'Fri':
        this.setState({secondDayOfWeek: this.dayOfWeek_zh.Fri});
        break;
      case data_dayOfWeek === 'Sat':
        this.setState({secondDayOfWeek: this.dayOfWeek_zh.Sat});
        break;
    }
  }

  getThirdDayOfWeek(dayOfWeek, data_dayOfWeek){
    switch(true){
      case data_dayOfWeek === 'Sun':
        this.setState({thirdDayOfWeek: this.dayOfWeek_zh.Sun});
        break;
      case data_dayOfWeek === 'Mon':
        this.setState({thirdDayOfWeek: this.dayOfWeek_zh.Mon});
        break;
      case data_dayOfWeek === 'Tue':
        this.setState({thirdDayOfWeek: this.dayOfWeek_zh.Tue});
        break;
      case data_dayOfWeek === 'Wed':
        this.setState({thirdDayOfWeek: this.dayOfWeek_zh.Wed});
        break;
      case data_dayOfWeek === 'Thu':
        this.setState({thirdDayOfWeek: this.dayOfWeek_zh.Thu});
        break;
      case data_dayOfWeek === 'Fri':
        this.setState({thirdDayOfWeek: this.dayOfWeek_zh.Fri});
        break;
      case data_dayOfWeek === 'Sat':
        this.setState({thirdDayOfWeek: this.dayOfWeek_zh.Sat});
        break;
    }
  }

  getForthDayOfWeek(dayOfWeek, data_dayOfWeek){
    switch(true){
      case data_dayOfWeek === 'Sun':
        this.setState({forthDayOfWeek: this.dayOfWeek_zh.Sun});
        break;
      case data_dayOfWeek === 'Mon':
        this.setState({forthDayOfWeek: this.dayOfWeek_zh.Mon});
        break;
      case data_dayOfWeek === 'Tue':
        this.setState({forthDayOfWeek: this.dayOfWeek_zh.Tue});
        break;
      case data_dayOfWeek === 'Wed':
        this.setState({forthDayOfWeek: this.dayOfWeek_zh.Wed});
        break;
      case data_dayOfWeek === 'Thu':
        this.setState({forthDayOfWeek: this.dayOfWeek_zh.Thu});
        break;
      case data_dayOfWeek === 'Fri':
        this.setState({forthDayOfWeek: this.dayOfWeek_zh.Fri});
        break;
      case data_dayOfWeek === 'Sat':
        this.setState({forthDayOfWeek: this.dayOfWeek_zh.Sat});
        break;
    }
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    if(city && country){
      const geocoding_api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?address=${city},${country}&key=${GOOGLE_GEOCODING_API_KEY}`);
      const geo_data = await geocoding_api_call.json();
      const lat = geo_data.results[0].geometry.location.lat;
      const lng = geo_data.results[0].geometry.location.lng;

      const darksky_api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${lat},${lng}`);
      const data = await darksky_api_call.json();
      const currentDateInfo = moment(data.currently.time*1000);
      const secondDateInfo = moment(data.daily.data[1].time*1000);
      const thirdDateInfo = moment(data.daily.data[2].time*1000);
      const forthDateInfo = moment(data.daily.data[3].time*1000);
      console.log(data);


      const currentDayOfWeek = currentDateInfo.format('ddd');
      const currentMonth = currentDateInfo.format('MMM');
      const currentDay = currentDateInfo.format('DD');

      const secondDayOfWeek = secondDateInfo.format('ddd');
      const secondMonth = secondDateInfo.format('MMM');
      const secondDay = secondDateInfo.format('DD');

      const thirdDayOfWeek = thirdDateInfo.format('ddd');
      const thirdMonth = thirdDateInfo.format('MMM');
      const thirdDay = thirdDateInfo.format('DD');

      const forthDayOfWeek = forthDateInfo.format('ddd');
      const forthMonth = forthDateInfo.format('MMM');
      const forthDay = forthDateInfo.format('DD');
      
      
      
    
      this.setState({
        currentTemperature: this.calCelsius(data.currently.temperature),
        address: geo_data.results[0].formatted_address,
        currentHumidity: data.currently.humidity,
        currentWindspeed: data.currently.windSpeed,
        currentDate: `${currentMonth} ${currentDay}`,
        error: ""  ,

        secondTemperatureHigh: this.calCelsius(data.daily.data[1].temperatureHigh),
        secondTemperatureLow: this.calCelsius(data.daily.data[1].temperatureLow),
        secondDate: `${secondMonth} ${secondDay}`,

        thirdTemperatureHigh: this.calCelsius(data.daily.data[2].temperatureHigh),
        thirdTemperatureLow: this.calCelsius(data.daily.data[2].temperatureLow),
        thirdDate: `${thirdMonth} ${thirdDay}`,

        forthTemperatureHigh: this.calCelsius(data.daily.data[3].temperatureHigh),
        forthTemperatureLow: this.calCelsius(data.daily.data[3].temperatureLow),
        forthDate: `${forthMonth} ${forthDay}`
      });
      this.getCurrentWeatherIcon(this.currentIcon, data.currently.icon);
      this.getSecondWeatherIcon(this.secondIcon, data.daily.data[1].icon);
      this.getThirdWeatherIcon(this.thirdIcon, data.daily.data[2].icon);
      this.getForthWeatherIcon(this.forthIcon, data.daily.data[3].icon);

      this.getCurrentDayOfWeek(this.currentDayOfWeek, currentDayOfWeek);
      this.getSecondDayOfWeek(this.secondDayOfWeek, secondDayOfWeek, secondDayOfWeek);
      this.getThirdDayOfWeek(this.thirdDayOfWeek, thirdDayOfWeek, thirdDayOfWeek);
      this.getForthDayOfWeek(this.forthDayOfWeek, forthDayOfWeek, forthDayOfWeek);
    } else {
      this.setState({
        currentTemperature: undefined,
        address: undefined,
        currentDate: undefined,
        currentIcon: undefined,
        currentDayOfWeek: undefined,
        currenrHumidity: undefined,
        currentWindspeed: undefined,
        error: "请输入城市/国家。" ,
        
        secondTemperature: undefined,
        secondDate: undefined,
        secondDayOfWeek: undefined,
        secondTemperatureHigh: undefined,
        secondTemperatureLow: undefined,
        secondIcon: undefined,

        thirdTemperature: undefined,
        thirdDate: undefined,
        thirdDayOfWeek: undefined,
        thirdTemperatureHigh: undefined,
        thirdTemperatureLow: undefined,
        thirdIcon: undefined,

        forthTemperature: undefined,
        forthDate: undefined,
        forthDayOfWeek: undefined,
        forthTemperatureHigh: undefined,
        forthTemperatureLow: undefined,
        forthIcon: undefined
      });
    }
  }

  

  render(){
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row title-container">
                <Titles />
              </div>
              <div className="row form-container">
                <Form getWeather={this.getWeather} />
                <Weather 
                  temperature={this.state.currentTemperature} 
                  address={this.state.address}
                  dayOfWeek={this.state.currentDayOfWeek}
                  date={this.state.currentDate} 
                  humidity={this.state.currentHumidity} 
                  windspeed={this.state.currentWindspeed} 
                  weatherIcon={this.state.currentIcon} 
                  error={this.state.error} 
                />
              </div>
              <div className="row">
                <div className="col-md-4 forecast-container d-flex justify-content-center">
                <WeatherForecast 
                  temperatureHigh={this.state.secondTemperatureHigh} 
                  temperatureLow={this.state.secondTemperatureLow} 
                  dayOfWeek={this.state.secondDayOfWeek}
                  date={this.state.secondDate} 
                  weatherIcon={this.state.secondIcon} 
                /> 
                </div>
                <div className="col-md-4 forecast-container d-flex justify-content-center">
                <WeatherForecast 
                  temperatureHigh={this.state.thirdTemperatureHigh} 
                  temperatureLow={this.state.thirdTemperatureLow} 
                  dayOfWeek={this.state.thirdDayOfWeek}
                  date={this.state.thirdDate} 
                  weatherIcon={this.state.thirdIcon} 
                />
                </div>
                <div className="col-md-4 forecast-container d-flex justify-content-center">
                <WeatherForecast 
                  temperatureHigh={this.state.forthTemperatureHigh} 
                  temperatureLow={this.state.forthTemperatureLow} 
                  dayOfWeek={this.state.forthDayOfWeek}
                  date={this.state.forthDate} 
                  weatherIcon={this.state.forthIcon} 
                />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
      </div>
    );
  }

}

export default App;
