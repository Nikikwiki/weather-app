import React from 'react';
import { Box, Divider, styled, useTheme } from '@mui/material';
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
import moment from 'moment';
import { Clock, RegionInfo } from 'components';
import { grey } from '@mui/material/colors';
import styles from './styles.scss';

export const SwipeBar = ({ weather }: any) => {
    const theme = useTheme();

    const Puller = styled(Box)(() => ({
        width: 30,
        height: 6,
        backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[200],
        borderRadius: 3,
        position: 'absolute',
        top: 8,
        left: 'calc(50% - 15px)'
    }));

    const Body = () => {
        return (
            <div className={styles.swipeBarBody}>
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
        <SwipeableBottomSheet overflowHeight={50}>
            <div
                className={styles.swipeTitle}
                style={{
                    backgroundColor: theme.palette.background.default,
                    color: theme.palette.text.primary
                }}
            >
                <Puller />
            </div>
            <div
                className={styles.swipeMain}
                style={{
                    color: theme.palette.text.primary,
                    backgroundColor: theme.palette.primary.dark
                }}
            >
                <div className={styles.text}>
                    Сейчас
                </div>
                <Divider />
                <div className={styles.top}>
                    <Body />
                    <RegionInfo weather={weather} />
                </div>
                <div className={styles.bottom}>
                    <Clock backgroundColor={theme.palette.background.default} />
                </div>
            </div>
        </SwipeableBottomSheet>
    );
};
