import React from 'react';
import './App.css';
import "antd/dist/antd.css";

import { BrowserComponent, BrowserRouter } from 'react-router-dom';

import LayoutComponent from './components/views/layout/LayoutComponent';
import Login from './components/views/login/login';

// import {
//   useFirebaseApp
// } from 'reactfire';


function App() {
  // const firebase = useFirebaseApp();
  // console.log(firebase);
  return (
    <BrowserRouter>
     {/* <Login /> */}
          <LayoutComponent />
     
    </BrowserRouter>
  );
}

export default App;
