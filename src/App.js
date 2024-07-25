import React, { Fragment} from 'react';
import './App.css';
import AuthUser from './components/AuthUser';



let App = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className='navbar-brand'>React with Conditional & List Rendering</a>
      </nav>
      <AuthUser/>
    </Fragment>
    
  );
}

export default App;
