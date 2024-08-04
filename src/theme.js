// src/theme.ts

import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Custom font
import '@fontsource/roboto'; // Import a custom font (e.g., Roboto)

// Create a theme instance.
const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#c70707',
        },
        secondary: {
            main: '#707070',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#121212',
            paper: '#1d1d1d',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif', // Use the custom font
    },
});

export default theme;
