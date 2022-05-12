import React, { useEffect, useState } from 'react';
import {
    CentralInfoComponent, Forecast, HourForecast, RegionInfo, Sidebar
} from 'components';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import { httpService } from 'http-service';
import ReactPageScroller from 'react-page-scroller';
import clsx from 'clsx';
import styles from './styles.scss';

export const MainComponent = () => {
    const [ weather, setWeather ] = useState<any>(null);
    const [ forecast, setForecast ] = useState<any>(null);
    const [ openSidebar, setOpenSidebar ] = useState<boolean>(true);
    const [ currentPage, setCurrentPage ] = useState<number>(null);
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

    const handlePageChange = (number: number) => {
        setCurrentPage(number);
    };

    const handleBeforePageChange = (number: number) => {
        console.log(number);
    };

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
                        <ReactPageScroller
                            pageOnChange={handlePageChange}
                            onBeforePageScroll={handleBeforePageChange}
                            customPageNumber={currentPage}
                        >
                            <div>
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
                            <HourForecast forecast={forecast} />
                        </ReactPageScroller>
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
