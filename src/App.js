import React from 'react'
import { Route, Switch } from 'react-router-dom'
import  Homepage  from './pages/Homepage'

function App() {
  return (
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
  );
}

export default App;
