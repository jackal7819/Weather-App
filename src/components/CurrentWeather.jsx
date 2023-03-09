const CurrentWeather = ({ data }) => {
    return (
        <div className='weather'>
            <div className='top'>
                <div>
                    <p className='city'>{data.city}</p>
                    <p className='weather__description'>{data.weather[0].description}</p>
                </div>
                <img src={`icons/${data.weather[0].icon}.png`} alt='weather' className='weather__icon' />
            </div>
            <div className='bottom'>
                <p className='temperature'>{Math.round(data.main.temp)}°C</p>
                <div className='details'>
                    <div className='details__row'>
                        <p className='details__label'>Details</p>
                    </div>
                    <div className='details__row'>
                        <p className='details__label'>Feels like</p>
                        <p className='details__value'>{Math.round(data.main.feels_like)} °C</p>
                    </div>
                    <div className='details__row'>
                        <p className='details__label'>Wind</p>
                        <p className='details__value'>{Math.round(data.wind.speed)} m/s</p>
                    </div>
                    <div className='details__row'>
                        <p className='details__label'>Humidity</p>
                        <p className='details__value'>{Math.round(data.main.humidity)} %</p>
                    </div>
                    <div className='details__row'>
                        <p className='details__label'>Pressure</p>
                        <p className='details__value'>{Math.round(data.main.pressure)} hPa</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;
