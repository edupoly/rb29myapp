import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './app/store'
import { Provider } from 'react-redux'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Posts from './features/posts/Posts';
import Countries from './features/countries/Countries';
import AddPost from './features/posts/AddPost';
import EditPost from './features/posts/EditPost';
const router = createBrowserRouter([
{
    path: "/",
    element: <App></App>,
    children:[
        {
            path:"/posts",
            element:<Posts></Posts>
        },
        {
            path:"/countries",
            element:<Countries></Countries>
        },
        {
            path:"/addPost",
            element:<AddPost/>
        },
        {
            path:"/editPost/:id",
            element:<EditPost></EditPost>
        }
    ]
},
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><RouterProvider router={router} /></Provider>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

