import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import ReactCalculator from './pages/ReactCalculator';
import ReactStarRating from './pages/ReactStarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
let allroutes=createBrowserRouter([
  {
    path:'projects',
    element: <Home/>
  },
  {
    path:'react-calculator',
    element: <ReactCalculator/>
  },
  {
    path:'react-star-rating',
    element: <ReactStarRating/>
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={allroutes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();