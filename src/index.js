import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import index from './pages/index';
import crsh1tty from './pages/crsh1tty';
import './index.css';


const website = ReactDOM.createRoot(document.getElementById('website'));
website.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={index} />
        <Route path="/crsh1tty" component={crsh1tty} />
      </Switch>
    </Router>
  </React.StrictMode>
);
