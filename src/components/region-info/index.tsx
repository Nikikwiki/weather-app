import React from 'react';
import moment from 'moment';
import { useTheme } from '@mui/material/styles';
import styles from './styles.scss';

export const RegionInfo = ({ weather }: any) => {
    const theme = useTheme();

    return (
        <div
            className={styles.regionInfo}
            style={{ color: theme.palette.text.primary }}
        >
            <div
                className={styles.regionDate}
            >
                {moment(new Date().getTime()).format('DD MMM')}
            </div>
            <div
                className={styles.regionDate}
            >
                {moment(new Date().getTime()).format('dddd')}
            </div>
            <div
                className={styles.region}
            >
                {weather.sys.country}
                {' '}
                -
                {' '}
                {weather.name}
            </div>
        </div>
    );
};
