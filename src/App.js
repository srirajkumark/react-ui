import React, { Fragment} from 'react';
import './App.css';




let App = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className='navbar-brand'>React with Bootstrap Styles</a>
      </nav>
      <i className='fa fa-user-circle fa-4x'/>
      <i className='fab fa-facebook fa-4x text-primary'/>
      
    </Fragment>
    
  );
}

export default App;
