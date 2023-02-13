import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from './routes/Root';
import Apod from './routes/Apod';
import Gallery from './routes/Gallery';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
            index: true,
            element: <Apod/>
        },
        {
            path: "apod",
            element: <Apod/>
        },
        {
            path: "gallery",
            element: <Gallery/>
        },
      ]
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);