import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Footer from './components/Footer';
import Create from './pages/Create';


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/contact'>
            <Contact/>
          </Route>
          <Route path='/about'>
            <About/>
          </Route>
          <Route path='/create'>
            <Create/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
