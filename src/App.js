import React, { Fragment} from 'react';
import './App.css';
import Employee from './components/Employee';
import Student from './components/Student';


let App = () => {
  return (
    <Fragment>
      <nav className="navbar">
        <span>Welcome to App Component</span>
      </nav>
      {/* <Employee name ="Raj" age={25}/>
      <Employee name ="Kumar" age={30}/> */}
      <Student name = "John" course ="B.Tech"/>
      <Student name = "Laura" course ="MBBS"/>
    </Fragment>
    
  );
}

export default App;
