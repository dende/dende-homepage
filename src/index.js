import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Homepage from './pages/Homepage';
//import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import App from "./App";
import Asidebar from "./components/Asidebar";
import 'react-pro-sidebar/dist/css/styles.css';

/* GLOBAL VARIABLES */

window.$primaryLanguage = 'en';
window.$secondaryLanguage = 'pl';
window.$primaryLanguageIconId = 'primary-lang-icon';
window.$secondaryLanguageIconId = 'secondary-lang-icon';

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <Asidebar />
            <App />
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
);
