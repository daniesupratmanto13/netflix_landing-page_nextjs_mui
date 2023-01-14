// mui
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red, grey } from '@mui/material/colors';


const base = createTheme({
    palette: {
        primary: {
            main: red[600],
        },
        secondary: {
            main: grey[900],
        },
    },
});

const theme = responsiveFontSizes(base)

export default theme;