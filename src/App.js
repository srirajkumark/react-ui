import React, { Fragment} from 'react';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import NavBar from "./modules/layout/components/NavBar";
import Home from "./modules/layout/components/Home";
import EmployeeList from "./modules/employees/components/EmployeeList";
import About from "./modules/layout/components/About";
import UserLogin from "./modules/users/components/UserLogin";
import UserRegister from "./modules/users/components/UserRegister";
import PageNotFound from './modules/layout/components/PageNotFound';


let App = () => {
  return (
    <Fragment>
      <BrowserRouter>
          {/* <NavBar/> */}
          <Routes>
            <Route exact={true} path={'/'} Component={Home}/>
            <Route exact={true} path={'/employee/list'} Component={EmployeeList}/>
            <Route exact={true} path={'/about'} Component={About}/>
            <Route exact={true} path={'/users/login'} Component={UserLogin}/>
            <Route exact={true} path={'/users/register'} Component={UserRegister}/>
            <Route path={'*'} Component={PageNotFound}/>
          </Routes>
      </BrowserRouter>
    </Fragment>
    
  );
}

export default App;
