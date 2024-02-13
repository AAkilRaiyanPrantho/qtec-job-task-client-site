import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Layout/Main';
import ErrorPage from './Pages/Error/ErrorPage';
import Home from './Pages/Home/Home';
import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignIn/SignIn';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import PrivateRoute from './Routes/PrivateRoute';
import Dashboard from './Layout/Dashboard';
import AddTasks from './Pages/AddTasks/AddTasks';
import AllTasks from './Pages/AllTasks/AllTasks';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>
      }
    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: 'addTasks',
        element: <PrivateRoute><AddTasks></AddTasks> </PrivateRoute>
      },
      {
        path: 'allTasks',
        element: <PrivateRoute><AllTasks></AllTasks></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/allTasks')
      },
      // {
      //   path: 'update/:id',
      //   element: <PrivateRoute><UpdateTask></UpdateTask></PrivateRoute>,
      //   loader: ({params}) => fetch(`https://scic-task-8-task-management-server.vercel.app/tasks/${params.id}`)
      // }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
</React.StrictMode>,
)
