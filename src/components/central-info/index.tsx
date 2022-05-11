import React from 'react';
import SunIcon from '../../static/img/sun.svg';
import styles from './styles.scss';

export const CentralInfoComponent = (props: any) => {
    const { weather } = props;

    return (
        <div className={styles.content}>
            <SunIcon width={500} height={500} className={styles.sun} />
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
