import React from 'react';
import moment from 'moment';
import { useTheme } from '@mui/material/styles';
import { WeatherIcon } from 'components/weather-icon';
import styles from './styles.scss';

export const Forecast = ({ forecast }: any) => {
    const theme = useTheme();

    const selectDays = () => {
        let forecastList: any = [];
        let countDays = 0;
        forecast.list.forEach((day: any, i: number, list: any) => {
            const date = new Date(day.dt * 1000);
            if (date.getDay() !== new Date().getDay()) {
                if (date.getHours() === 15 && countDays < 4) {
                    countDays++;
                    forecastList.push([ day, list[i + 4] ]);
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
                        return (
                            <div
                                className={styles.forecastDay}
                                style={{ color: theme.palette.text.primary }}
                                key={day[0].dt.toString()}
                            >
                                <WeatherIcon name={day[0].weather[0].icon} size="small" />
                                <div className={styles.forecastWeek}>
                                    {moment(new Date(day[0].dt * 1000)).format('DD MMM')}
                                    {', '}
                                    {moment(new Date(day[0].dt * 1000)).format('dddd')}
                                </div>
                                <div className={styles.forecastTemp}>
                                    <div>
                                        {Math.round(day[0].main.temp)}
                                        °с
                                    </div>
                                    <div style={{ color: theme.palette.text.secondary }}>
                                        {Math.round(day[1].main.temp)}
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
