import React from 'react';
import { WeatherIcon } from 'components/weather-icon';
import styles from './styles.scss';

export const CentralInfoComponent = (props: any) => {
    const { weather } = props;

    return (
        <div className={styles.content}>
            <div className={styles.svgIcon}>
                <WeatherIcon name={weather.weather[0].icon} size="large" />
            </div>
            <div className={styles.description}>
                <div className={styles.degrees}>
                    {Math.round(weather.main.temp)}
                    °с
                </div>
                <div className={styles.status}>
                    {weather.weather[0].description}
                </div>
            </div>
        </div>
    );
};
