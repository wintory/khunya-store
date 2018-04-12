import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Component/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, HashRouter, Route, Link } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="*" component={() => (<h1>OOPS 404 NOT FOUND</h1>)} />
                <Route path="/order" component={() => (<h3>about</h3>)} />
                <Route path="/dashboard" component={() => (<h3>us</h3>)} />
            </Switch>
        </div>
    </BrowserRouter >
    , document.getElementById('root'));
registerServiceWorker();
