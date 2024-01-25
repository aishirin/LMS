import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";


import Protected from './shared/Protected/Protected.tsx';
import { HomePage } from './pages/HomePage/HomePage.tsx';
import Layout from './layout/layout.tsx';
import { PhysicPage } from './pages/PhysicPage/PhysicPage.tsx';
import Teachers from './pages/Taechers/Teachers.tsx';



   const router  = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    children: [
      {
      
          element: <Protected children={<Layout />} />, 
       
         children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "homepage",
            element: <HomePage />,   
          },{
            path: "physicpage",
            element: <PhysicPage />,   
          },
          {
            path: "teachers",
            element: <Teachers />,   
          },
        ]
      },
    ]
  }

   ]);


   ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
   
      <RouterProvider router={router} />
   
  </React.StrictMode>,
)