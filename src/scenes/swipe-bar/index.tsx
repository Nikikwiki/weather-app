import { SwipeableDrawer } from '@mui/material';
import React from 'react';

export const SwipeBar = () => {
    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

    return (
        <SwipeableDrawer
            disableBackdropTransition={!iOS}
            disableDiscovery={iOS}
            anchor="bottom"
            open={false}
            onClose={() => {}}
            onOpen={() => {}}
        />
    );
};
