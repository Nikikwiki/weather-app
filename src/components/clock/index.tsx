import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import moment from 'moment';
import styles from './styles.scss';

export const Clock = ({ backgroundColor }: any) => {
    const [ time, setTime ] = useState(moment(new Date()).format('LTS'));

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(moment(new Date()).format('LTS'));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const theme = useTheme();

    return (
        <div className={styles.clocks}>
            <div className={styles.time} style={{ backgroundColor: backgroundColor }}>{time}</div>
        </div>
    );
};
