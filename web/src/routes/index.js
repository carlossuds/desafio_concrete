import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Result from '../pages/Result';
import NotFound from '../pages/NotFound';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/result" exact component={Result} />
      <Route path="/notfound" exact component={NotFound} />
    </Switch>
  );
}
