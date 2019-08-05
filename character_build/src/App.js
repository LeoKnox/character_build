import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import AboutPage from './pages/AboutPage';
import CharactersListPage from './pages/CharactersListPage';
import CharacterPage from './pages/CharacterPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/about" component={AboutPage} />
              <Route path="/characters-list" component={CharactersListPage} />
              <Route path="/character/:name" component={CharacterPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
