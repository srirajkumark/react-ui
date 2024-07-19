import React, { Fragment} from 'react';
import './App.css';
import ShoppingCart from './components/ShoppingCart';

// import ProductItem from './components/ProductItem';
// import WishMessage from './components/WishMessage';
// import Counter from './components/Counter';





let App = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className='navbar-brand'>React with Events Handling</a>
      </nav>
      {/* <Counter/> */}
      {/* <WishMessage/> */}
      {/* <ProductItem/> */}
      <ShoppingCart/>
    </Fragment>
    
  );
}

export default App;
