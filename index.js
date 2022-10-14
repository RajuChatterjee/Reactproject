// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import reportWebVitals from './reportWebVitals';
// //import App from './App.js';
// //import Counter from './Components/Counter';
// import App from './Components/App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from 'react';
import {ReactDOM} from 'react';
import "./Components/App.css"
import reportWebVitals from './reportWebVitals';

import{ BrowserRouter as Router,Routes,Route,Navigate } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

<Router>
  <Routes>
     <Route path="/" element={<Home/>}/>

  </Routes>
</Router>,
document.getElementById("root")
);

function Home(){
  return(
    <div>
      <h1>home page</h1>
      </div>
  );
}
reportWebVitals();
