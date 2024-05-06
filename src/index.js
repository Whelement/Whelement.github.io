import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import index from './pages/index';
import crsh1tty from './pages/crsh1tty';
import Tr3nchGuide from './pages/tr3nch';


const website = ReactDOM.createRoot(document.getElementById('website'));
website.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={index} />
        <Route path="/crsh1tty" component={crsh1tty} />
        <Route patt="/tr3nch" component={Tr3nchGuide} />
      </Switch>
    </Router>
  </React.StrictMode>
);
