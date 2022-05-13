import React, { useEffect, useState } from 'react';
import {
    CentralInfoComponent, Forecast, RegionInfo, Sidebar
} from 'components';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import { httpService } from 'http-service';
import clsx from 'clsx';
import styles from './styles.scss';

export const MainComponent = () => {
    const [ weather, setWeather ] = useState<any>(null);
    const [ forecast, setForecast ] = useState<any>(null);
    const [ openSidebar, setOpenSidebar ] = useState<boolean>(true);
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

    const mainStyles = clsx(styles.main, {
        [styles.mainPushed]: openSidebar
    });

    return (
        <>
            { weather && forecast && (
                <>
                    <div
                        className={mainStyles}
                        style={{ backgroundColor: theme.palette.primary.main }}
                    >
                        <div className={styles.central}>
                            <CentralInfoComponent weather={weather} />
                        </div>
                        <RegionInfo weather={weather} />
                        <div className={styles.sidebar}>
                            <IconButton
                                onClick={() => setOpenSidebar(true)}
                                style={openSidebar ? { visibility: 'hidden' } : { visibility: 'visible' }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </div>
                        <div className={styles.forecast}>
                            <Forecast forecast={forecast} />
                        </div>
                    </div>
                    <Sidebar
                        weather={weather}
                        openSidebar={openSidebar}
                        closeSidebar={() => setOpenSidebar(false)}
                    />
                </>
            )}
        </>
    );
};
