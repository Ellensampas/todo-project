import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import DayList from './components/DayList';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login }/>
        <Route exact path="/daylist" component={ DayList} />
      </Switch>
    </div>
  );
}

export default App;
