import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import About from './About';
import Data from './Data';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Menu />
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/about" component={About} />
        <Route path="/data" component={Data} />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
