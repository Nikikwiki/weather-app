import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
    blue, blueGrey, grey, indigo, teal
} from '@mui/material/colors';
import { Main } from './main';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: blue,
        divider: blue[700],
        background: {
            default: blue[900],
            paper: blue[900]
        },
        text: {
            primary: '#fff',
            secondary: grey[500]
        }
    }
});

export const RootScene: React.FC<any> = (): JSX.Element => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Main />
            </ThemeProvider>

        </>
    );
};
