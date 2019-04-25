import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom";
import home from './containers/Home';
import Dashboard from './containers/Dashboard';
import Payment from "./containers/payment";


class App extends Component {
  
  render() {
    return (
      <div>
        <switch>
          <Route path="/" exact component={home} />
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/payment" component={Payment} />
        </switch>
      </div>
  );
}
}

export default App;
