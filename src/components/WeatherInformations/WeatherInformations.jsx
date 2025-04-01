import './WeatherInformations.css'
function WeatherInformations({ weather }) {

    return (
        <div className='weather-container'>
            <h2>{weather.name}</h2>
            <div className='weather-info'>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Weather icon" />
                <p className='temperatura'>{Math.round(weather.main.temp)}ºC</p>
            </div>
            <p className='descricao'>{weather.weather[0].description}</p>
            <div className='detalhes'>
                <p>Sensação térmica: {Math.round(weather.main.feels_like)}</p>
                <p>Umidade: {weather.main.humidity}%</p>
                <p>Pressão: {weather.main.pressure}</p>
            </div>
        </div>
    );
}

export default WeatherInformations;