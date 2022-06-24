import React, { useEffect, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
    blue, grey, indigo
} from '@mui/material/colors';
import { httpService } from 'http-service';
import { CircularProgress } from '@mui/material';
import { Main } from './main';
import styles from './styles.scss';

export const RootScene: React.FC<any> = (): JSX.Element => {
    const [ weather, setWeather ] = useState<any>(null);
    const [ forecast, setForecast ] = useState<any>(null);
    const [ progress, setProgress ] = useState<boolean>(false);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            setProgress(true);
            httpService.getWeather(lat, lon).then(res => {
                setWeather(res[0].data);
                setForecast(res[1].data);
                setProgress(false);
            });
        }, error => {
            console.log('Ошибка - ', error);
        });
    }, []);

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: indigo,
            divider: indigo[700],
            background: {
                default: indigo[900],
                paper: indigo[900]
            },
            text: {
                primary: '#fff',
                secondary: grey[900]
            }
        }
    });

    const lightTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: blue,
            divider: blue[700],
            background: {
                default: blue[900],
                paper: blue[900]
            },
            text: {
                primary: '#fff',
                secondary: grey[900]
            }
        }
    });

    return (
        <div className={styles.mainPageWrapper}>
            {
                progress ? <CircularProgress color='primary' size={100} thickness={5} />
                    : weather && forecast
            && (
                <div className={styles.mainThemeWrapper}>
                    <ThemeProvider
                        theme={new Date().getHours() > 7 || new Date().getHours() < 21 ? lightTheme : darkTheme}
                    >
                        <Main weather={weather} forecast={forecast} />
                    </ThemeProvider>
                </div>
            )
            }

        </div>
    );
};
