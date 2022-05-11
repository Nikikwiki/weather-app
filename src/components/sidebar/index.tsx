import { Divider, Drawer } from '@mui/material';
import React from 'react';
import styles from './styles.scss';

export const Sidebar = ({ weather, openSidebar }: any) => {
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
                <div></div>
                <Divider />
            </Drawer>
        </div>
    );
};
