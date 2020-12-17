import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './Components/App';
import reducers from './reducers/reducer';

ReactDOM.render(<App />, document.querySelector('#root'));