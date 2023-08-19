import React from 'react';
import Header from './components/Header';
import CatalogMenu from './components/CatalogMenu';
import Widget from './components/Widget';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <CatalogMenu />
      <Widget />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

import './Header.css'; 

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// ...

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          {/* Add more routes */}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}


import React from 'react';
import Banner from './Banner';
import Consultation from './Consultation';
import './Content.css'; // Apply styles if needed

function Content() {
  return (
    <div className="content">
      <Banner />
      <Consultation />
    </div>
  );
}


