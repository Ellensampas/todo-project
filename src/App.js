import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
function App() {
  return (
    <div>
      <Switch>
        <Route path='/' Component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
