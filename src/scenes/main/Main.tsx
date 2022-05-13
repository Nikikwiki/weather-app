import React, { useState } from 'react';
import {
    CentralInfoComponent, Forecast, RegionInfo, Sidebar
} from 'components';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import clsx from 'clsx';
import styles from './styles.scss';

export const MainComponent = ({ weather, forecast }: any) => {
    const [ openSidebar, setOpenSidebar ] = useState<boolean>(true);
    const theme = useTheme();

    const mainStyles = clsx(styles.main, {
        [styles.mainPushed]: openSidebar
    });

    return (
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
    );
};
