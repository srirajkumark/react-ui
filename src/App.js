import React, { Fragment} from 'react';
import './App.css';
import Employee from './components/Employee';



let App = () => {
  return (
    <Fragment>
      <nav className="navbar">
        <span>Welcome to App Component</span>
      </nav>
      <Employee/>
    </Fragment>
    
  );
}

export default App;
