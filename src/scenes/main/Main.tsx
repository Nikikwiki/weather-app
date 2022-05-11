import { CentralInfoComponent } from 'components/central-info';
import { Forecast } from 'components/forecast';
import { httpService } from 'http-service';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import styles from './styles.scss';

export const MainComponent = () => {
    const [ weather, setWeather ] = useState<any>(null);
    const [ forecast, setForecast ] = useState<any>(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            httpService.getWeather(lat, lon).then(res => {
                setWeather(res[0].data);
                setForecast(res[1].data);
            });
        }, error => {
            console.log('Ошибка - ', error);
        });
    }, []);

    return (
        <>
            { weather && forecast && (
                <div className={styles.main}>
                    <div className={styles.central}>
                        <CentralInfoComponent weather={weather} />
                    </div>
                    <div className={styles.regionInfo}>
                        <div className={styles.regionDate}>{moment(new Date().getTime()).format('DD.MM.YYYY')}</div>
                        <div className={styles.region}>
                            {weather.sys.country}
                            {' '}
                            -
                            {' '}
                            {weather.name}
                        </div>
                    </div>
                    <div className={styles.forecast}>
                        <Forecast forecast={forecast} />
                    </div>
                </div>
            )}
        </>
    );
};
