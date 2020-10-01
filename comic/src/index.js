import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import styles from './styles/main.scss';

render (
    <div>
    <App/>
    </div>,
    document.getElementById('app')
)