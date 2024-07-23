import React, { Fragment} from 'react';
import './App.css';
import UserName from './components/UserName';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';



let App = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className='navbar-brand'>React with Forms Handling</a>
      </nav>
      {/* <UserName/> */}
      {/* <LoginForm/> */}
      <RegisterForm/>
    </Fragment>
    
  );
}

export default App;
