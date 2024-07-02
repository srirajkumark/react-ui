import React, { Fragment} from 'react';
import './App.css';
import MessageCard from "./components/MessageCard";
import WishCard from './components/WishCard';

let App = () => {
  return (
    <Fragment>
      <nav className="navbar">
        <span>Welcome to App Component</span>
      </nav>
      <WishCard/>
      <MessageCard/>
    </Fragment>
    
  );
}

export default App;
