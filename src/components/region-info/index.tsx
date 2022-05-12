import React from 'react';
import moment from 'moment';
import styles from './styles.scss';

export const RegionInfo = ({ weather }: any) => {
    return (
        <div className={styles.regionInfo}>
            <div className={styles.regionDate}>{moment(new Date().getTime()).format('DD MMM')}</div>
            <div className={styles.regionDate}>{moment(new Date().getTime()).format('dddd')}</div>
            <div className={styles.region}>
                {weather.sys.country}
                {' '}
                -
                {' '}
                {weather.name}
            </div>
        </div>
    );
};
