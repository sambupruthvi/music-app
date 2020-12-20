import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './Components/App';
import reducers from './reducers/reducer';

ReactDOM.render(
    // We pass the App component to Provider Component. Provide component takes state as a prop which can be created by passing reducers to createStore function.
    <Provider store = { createStore(reducers) } >
        <App />
    </Provider>
    , document.querySelector('#root'));