import { Drawer } from '@mui/material';
import React from 'react';
import styles from './styles.scss';

export const Sidebar = ({ weather, openSidebar }: any) => {
    return (
        <div>
            <Drawer
                anchor='left'
                open={openSidebar}
                variant="persistent"
                className={styles.drawer}
            >
                <div>12341234123412341234</div>
            </Drawer>
        </div>
    );
};
