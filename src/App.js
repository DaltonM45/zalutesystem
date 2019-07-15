import React, { Component } from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// componentes
import Home from './components/home/Home';
import Zltd from './components/zltd/Zltd';
import Respuestas from './components/respuestas/Respuestas'

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter> 
        <div className="App">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route  path='/zltd' component={Zltd}/>
              <Route path='/respuestas' component={Respuestas}/>
            </Switch>
        </div>
    </BrowserRouter>
    );
  }
}

export default App;
