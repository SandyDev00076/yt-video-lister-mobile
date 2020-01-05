import React from 'react';
import ReactDOM from 'react-dom';
import './styles/common.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const startApp = () => {
    ReactDOM.render(<App />, document.getElementById('root'));
    serviceWorker.register();
}

// Checking whether the app is being run on device or web.
if (window.cordova) {
    document.addEventListener('deviceready', startApp, false);
} else {
    startApp();
}
