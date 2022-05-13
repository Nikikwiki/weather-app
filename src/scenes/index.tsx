import React, { useEffect, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
    blue, grey, indigo
} from '@mui/material/colors';
import { httpService } from 'http-service';
import { Main } from './main';

export const RootScene: React.FC<any> = (): JSX.Element => {
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
        <>
            {weather && forecast
            && (
                <ThemeProvider
                    theme={new Date().getHours() > 7 || new Date().getHours() < 21 ? lightTheme : darkTheme}
                >
                    <Main weather={weather} forecast={forecast} />
                </ThemeProvider>
            )}

        </>
    );
};
