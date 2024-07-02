import React, { Fragment} from 'react';
import './App.css';
import Employee from './Employee';


let App = () => {
  return (
    <Fragment>
      <nav className="navbar">
        <span>Welcome to App Component</span>
      </nav>
      <Employee name ="Raj" age={25}/>
      <Employee/>
    </Fragment>
    
  );
}

export default App;
