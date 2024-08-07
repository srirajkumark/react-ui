import React, { Fragment} from 'react';
import './App.css';
import { BrowserRouter, Router, Switch } from 'react-router-dom';

let App = () => {
  return (
    <Fragment>
      <BrowserRouter>
          <NavBar/>
          <Switch>
            
          </Switch>
      </BrowserRouter>
    </Fragment>
    
  );
}

export default App;
