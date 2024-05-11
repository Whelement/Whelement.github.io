import { render } from 'preact';
import { Router } from 'preact-router';
import { Website } from './pages/Index.jsx';
import { CRSH1tty } from './pages/CRSH1tty.jsx';
import { Tr3nchGuide } from './pages/Tr3nch.jsx';

const Main = () => (
    <Router>
      <Website path="/" />
      <CRSH1tty path="/crsh1tty" />
      <Tr3nchGuide path="/tr3nch" />
    </Router>
  );

render(<Main />, document.getElementById('website'))
