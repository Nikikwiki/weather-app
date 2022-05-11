import { CentralInfoComponent } from 'components/central-info';
import { Forecast } from 'components/forecast';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import { httpService } from 'http-service';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Sidebar } from 'components/sidebar';
import styles from './styles.scss';

export const MainComponent = () => {
    const [ weather, setWeather ] = useState<any>(null);
    const [ forecast, setForecast ] = useState<any>(null);
    const [ openSidebar, setOpenSidebar ] = useState<boolean>(false);
    const theme = useTheme();

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
        <div>
            { weather && forecast && (
                <div className={styles.main} style={{ backgroundColor: theme.palette.primary.main }}>
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
                    <div className={styles.sidebar}>
                        <IconButton onClick={() => setOpenSidebar(true)}>
                            <MenuIcon />
                        </IconButton>
                    </div>
                    <div className={styles.forecast}>
                        <Forecast forecast={forecast} />
                    </div>
                </div>
            )}
            <Sidebar weather={weather} openSidebar={openSidebar} />
        </div>
    );
};
