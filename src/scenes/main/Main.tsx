import { CentralInfoComponent } from 'components/central-info';
import { httpService } from 'http-service';
import React, { useEffect, useState } from 'react';
import './styles.scss';

export const MainComponent = () => {
    const [ weather, setWeather ] = useState<any>(null);
    const [ forecast, setForecast ] = useState<any>(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            httpService.getWeather(lat, lon).then(res => {
                console.log(res);
                setWeather(res[0].data);
                setForecast(res[1].data);
            });
        }, error => {
            console.log('Ошибка - ', error);
        });
    }, []);

    return (
        <div className='main'>
            {weather && <CentralInfoComponent weather={weather} />}
        </div>
    );
};
