import React, { Fragment} from 'react';
import './App.css';
import CountryCard from './components/CountryCard';




let App = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className='navbar-brand'>React with Bootstrap Styles</a>
      </nav>
      <CountryCard/>
      
    </Fragment>
    
  );
}

export default App;
