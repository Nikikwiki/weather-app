import React, { useEffect, useState } from 'react';
import {
    CentralInfoComponent, Forecast, RegionInfo, Sidebar
} from 'components';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import clsx from 'clsx';
import { useMediaQuery } from 'usehooks-ts';
import { SwipeBar } from 'scenes/swipe-bar';
import styles from './styles.scss';

export const MainComponent = ({ weather, forecast }: any) => {
    const [ openSidebar, setOpenSidebar ] = useState<boolean>(false);
    const theme = useTheme();

    const sidebarMediaMatches = useMediaQuery('(min-width: 695px)');

    const mainStyles = clsx(styles.main, {
        [styles.mainPushed]: openSidebar
    });

    useEffect(() => {
        if (window.innerWidth > 695) {
            setOpenSidebar(true);
        }
    }, []);

    return (
        <>
            <div
                className={mainStyles}
                style={{ backgroundColor: theme.palette.primary.main }}
            >
                <div className={styles.central}>
                    <CentralInfoComponent weather={weather} />
                </div>
                {
                    sidebarMediaMatches
                    && (
                        <>
                            <RegionInfo weather={weather} />
                            <div className={styles.sidebar}>
                                <IconButton
                                    onClick={() => setOpenSidebar(true)}
                                    style={openSidebar ? { visibility: 'hidden' } : { visibility: 'visible' }}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </div>
                        </>
                    )
                }
                <div className={styles.forecast}>
                    <Forecast forecast={forecast} />
                </div>
            </div>
            <Sidebar
                weather={weather}
                openSidebar={openSidebar}
                closeSidebar={() => setOpenSidebar(false)}
            />
            <SwipeBar />
        </>
    );
};
