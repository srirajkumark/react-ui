import React, { Fragment} from 'react';
import './App.css';
import MessageCard from "./components/MessageCard";

let App = () => {
  return (
    <Fragment>
      <nav className="navbar">
        <span>Welcome to App Component</span>
      </nav>
      <MessageCard/>
    </Fragment>
    
  );
}

export default App;
