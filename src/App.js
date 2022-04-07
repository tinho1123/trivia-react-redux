import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/pages/Login/Login';
import './App.css';
import PlayGame from './components/pages/PlayGame/PlayGame';
import Config from './components/pages/ComponentConfig/Config';
import Feedback from './components/pages/FeedBack/Feedback';
import Ranking from './components/pages/Ranking/Ranking';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/ranking" component={ Ranking } />
        <Route path="/feedback" component={ Feedback } />
        <Route path="/playGame" component={ PlayGame } />
        <Route path="/config" component={ Config } />
      </Switch>
    </div>
  );
}
