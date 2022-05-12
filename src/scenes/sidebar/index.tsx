import React from 'react';
import { Divider, Drawer } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import moment from 'moment';
import { Clock } from 'components';
import styles from './styles.scss';

export const Sidebar = ({ weather, openSidebar, closeSidebar }: any) => {
    const Header = () => {
        return (
            <div className={styles.sidebarHeader}>
                <div className={styles.headerName}>Сейчас</div>
                <IconButton
                    className={styles.headerButton}
                    onClick={() => closeSidebar()}
                >
                    <ChevronLeftIcon />
                </IconButton>
            </div>
        );
    };

    const Body = () => {
        return (
            <div className={styles.sidebarBody}>
                <div className={styles.group}>
                    <div className={styles.groupName}>Влажность:</div>
                    <div className={styles.groupValue}>
                        {weather.main.humidity}
                        %
                    </div>
                </div>
                <div className={styles.group}>
                    <div className={styles.groupName}>Давление:</div>
                    <div className={styles.groupValue}>
                        {weather.main.pressure}
                        мм.рт.ст.
                    </div>
                </div>
                <div className={styles.group}>
                    <div className={styles.groupName}>Ветер:</div>
                    <div className={styles.groupValue}>
                        {weather.wind.speed}
                        м/с
                    </div>
                </div>
                <div className={styles.group}>
                    <div className={styles.groupName}>Ощущается как:</div>
                    <div className={styles.groupValue}>
                        {weather.main.feels_like}
                        °с
                    </div>
                </div>
                <div className={styles.group}>
                    <div className={styles.groupName}>Рассвет:</div>
                    <div className={styles.groupValue}>
                        {moment(new Date(weather.sys.sunrise * 1000).getTime()).format('HH:MM')}
                    </div>
                </div>
                <div className={styles.group}>
                    <div className={styles.groupName}>Закат:</div>
                    <div className={styles.groupValue}>
                        {moment(new Date(weather.sys.sunset * 1000).getTime()).format('HH:MM')}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            <Drawer
                anchor='left'
                open={openSidebar}
                variant="persistent"
                sx={{
                    width: '20vw',
                    minWidth: '260px',
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: '20vw',
                        minWidth: '260px',
                        boxSizing: 'border-box'
                    }
                }}
            >
                <Header />
                <Divider />
                <div className={styles.sidebarBodyGroup}>
                    <Body />
                    <Clock />
                </div>
            </Drawer>
        </div>
    );
};
