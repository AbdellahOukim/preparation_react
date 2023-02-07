import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reducer from './reducer/reducer';

import { Provider } from 'react-redux';

import { legacy_createStore } from "redux" ;



const dataStore = legacy_createStore( reducer ) ;


const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
    <Provider store={dataStore} >
     <App /> 
    </Provider>
);