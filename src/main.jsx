import { render } from 'preact';
import { Router } from 'preact-router';
import { Website } from './pages/Index.jsx';
import { Tr3nchGuide } from './pages/Tr3nch.jsx';

const Main = () => (
    <Router>
      <Website path="/" />
      <Tr3nchGuide path="/tr3nch" />
    </Router>
  );

render(<Main />, document.getElementById('website'))
