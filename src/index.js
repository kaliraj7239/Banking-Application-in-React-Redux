import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Import everything we need to hook up Redux
import reducer from './store/reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ResponsiveAppBar from './nav';
//Here we create our store
//A store holds the whole state tree of the application
const store = createStore(reducer);

//Store and provider added below, wrapping our app, which gives global access to app
ReactDOM.render(<Provider store={store}>
    <ResponsiveAppBar/>
 
 
    </Provider>, document.getElementById('root'));

// Create actions with names
// Dispatch you actions into the reducer
