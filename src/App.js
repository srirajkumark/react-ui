import React, { Fragment} from 'react';
import './App.css';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import NavBar from "./modules/layout/components/NavBar";
import Home from "./modules/layout/components/Home";

let App = () => {
  return (
    <Fragment>
      <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route exact={true} path={'/'} Component={Home}/>
            <Route exact={true} path={'/employee/list'} Component={EmployeeList}/>
            <Route exact={true} path={'/about'} Component={About}/>
            <Route exact={true} path={'/users/login'} Component={UserLogin}/>
            <Route exact={true} path={'/users/register'} Component={UserRegister}/>
          </Switch>
      </BrowserRouter>
    </Fragment>
    
  );
}

export default App;
