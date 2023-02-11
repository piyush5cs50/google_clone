import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
// import * as serviceWorker from './sericeWorker'
import { StateProvider } from './StateProvider';
import reducer, {initialState} from './reducer';


// key - AIzaSyDvoQMTWl_K_DdXz5Gln469cK3l2Xs4odw
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
    </BrowserRouter>
    
  </React.StrictMode>
);

// serviceWorker.unregister()