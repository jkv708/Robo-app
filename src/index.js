import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Cardlist from './Cardlist';
import App from './App';
import 'tachyons';
import * as serviceWorker from './serviceWorker';
import { Robot } from './Robot';
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
