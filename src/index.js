import React from 'react';
import ReactDOM from 'react-dom';
import 'rxjs';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../semantic/dist/semantic.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
