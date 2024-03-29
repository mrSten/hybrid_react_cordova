import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function startApp(){
    ReactDOM.render(<App />, document.getElementById('root'));
}
if(!window.cordova){
    startApp();
} else {
    document.addEventListener('deviceready', startApp, false);
}
