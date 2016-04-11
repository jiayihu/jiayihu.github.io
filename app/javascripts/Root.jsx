import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import Case from './Case';
import Home from './Home';
import NotFound from './NotFound';

export default function Root() {
  return (
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/project/:name" component={Case} />
        <Route path="/*" component={NotFound} />
      </Route>
    </Router>
  );
}
