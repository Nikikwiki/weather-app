import React from 'react';
import styles from './styles.scss';
import SunIcon from '../../static/img/sun.svg';

export const Forecast = ({ forecast }: any) => {
    const weekDays = [ 'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота' ];

    const selectDays = () => {
        let forecastList: any = [];
        forecast.list.forEach((day: any) => {
            const date = new Date(day.dt * 1000);
            if (date.getDay() !== new Date().getDay()) {
                if (date.getHours() === 15) {
                    forecastList.push(day);
                }
            }
        });
        return forecastList;
    };

    const generateForecasts = () => {
        return (
            <>
                {
                    selectDays().map((day: any) => {
                        const weekDay = new Date(day.dt * 1000).getDay();
                        return (
                            <div className={styles.forecastDay} key={day.dt.toString()}>
                                <SunIcon width={150} height={150} className={styles.sun} />
                                <div className={styles.forecastWeek}>{weekDays[weekDay]}</div>
                                <div className={styles.forecastTemp}>
                                    {Math.round(day.main.temp)}
                                    °с
                                </div>
                            </div>
                        );
                    })
                }
            </>
        );
    };

    return (
        <div className={styles.wrapper}>
            {generateForecasts()}
        </div>
    );
};
