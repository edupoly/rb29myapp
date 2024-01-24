import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Todolist from './Todolist';
import Countries from './Countries';
import CountryDetails from './CountryDetails';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
            path:"/todolist",
            element:<Todolist></Todolist>
        },
        {
            path:"/countries",
            element:<Countries></Countries>,
            children:[
                {
                    path:"/countries/countryDetails/:cname",
                    element:<CountryDetails></CountryDetails>
                }
            ]
        }
      ]
    }
    
  ]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

