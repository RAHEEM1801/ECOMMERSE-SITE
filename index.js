import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Ecommerse from './Ecommerse';
// import Printall from './Printall';
import Newarr from './Newarr';
import Tabclass from './Tabclass';
import Show from './Show';
import Cart from './Cart';
import Weatherapp from './Weatherapp';
import Weather2 from './Weather2';
import Searchsame from './Searchsame';
import Continueprint from './Continueprint';
import Oddnum from './Oddnum';
import Searchpushprint from './Searchpushprint';
// import BasicCardSkeleton from './Useingmui';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Ecommerse/> */}
    {/* <Cart/> */}
    {/* <Printall></Printall> */}
    {/* <Newarr/> */}
    {/* <Tabclass/> */}
    {/* <Show/> */}
    {/* <Weatherapp/> */}
    <Weather2/>
    {/* <BasicCardSkeleton/> */}
    {/* <Searchsame/> */}
    {/* <Continueprint/> */}
    {/* <Oddnum/> */}
    {/* <Searchpushprint/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
