import React from 'react';
import moment from 'moment';
import { useTheme } from '@mui/material/styles';
import styles from './styles.scss';
import SunIcon from '../../static/img/sun.svg';

export const Forecast = ({ forecast }: any) => {
    const weekDays = [ 'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота' ];

    const theme = useTheme();

    const selectDays = () => {
        let forecastList: any = [];
        forecast.list.forEach((day: any) => {
            const date = new Date(day.dt * 1000);
            if (date.getDay() !== new Date().getDay()) {
                if (date.getHours() === 12) {
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
                                <div className={styles.forecastWeek}>
                                    {moment(new Date(day.dt * 1000)).format('DD MMM ')}
                                    {', '}
                                    {weekDays[weekDay]}
                                </div>
                                <div className={styles.forecastTemp}>
                                    <div>
                                        {Math.round(day.main.temp)}
                                        °с
                                    </div>
                                    <div style={{ color: theme.palette.text.secondary }}>
                                        {Math.round(day.main.temp)}
                                        °с
                                    </div>
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
