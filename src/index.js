import React from 'react';
import ReactDOM from 'react-dom';

import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

import * as serviceWorker from './serviceWorker';

import App from './app';

const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
    typography: {
        fontFamily: "Product Sans"
    }
});

ReactDOM.render(<MuiThemeProvider theme={theme}><App /></MuiThemeProvider>, document.getElementById('root'));

serviceWorker.unregister();