import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import LineUp from './components/LineUp';
import Restauration from './components/Restauration';
import Hebergement from './components/Hebergement';
import Contact from './components/Contact';
import Info from './components/Info';
import Header from './components/layouts/Header';

function App() {
  return (
    <div className="background">
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/lineup" component={LineUp} />
        <Route exact path="/restauration" component={Restauration} />
        <Route exact path="/hebergement" component={Hebergement} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/info" component={Info} />
      </Router>
    </div>
  );
}

export default App;
