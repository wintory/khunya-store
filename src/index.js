import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Component/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={App} />
                <Route path="/order" component={() => (<h3>about</h3>)} />
                <Route path="/dashboard" component={() => (<h3>us</h3>)} />
                <Route exact path="*" component={() => (<h1>OOPS 404 NOT FOUND</h1>)} />o
            </Switch>
        </div>
    </BrowserRouter >
    , document.getElementById('root'));
registerServiceWorker();
