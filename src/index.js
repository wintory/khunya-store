import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Component/App';
import Home from './Component/Home'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={App} />
                <Route exact path="*" component={() => (<h1>OOPS 404 NOT FOUND</h1>)} />o
            </Switch>
            <Route dafault path="/home" component={Home} />
            <Route path="/dashboard" component={() => (<h3>us</h3>)} />
        </div>
    </BrowserRouter >
    , document.getElementById('root'));
registerServiceWorker();
