
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'



const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home />
  },
  {
    path:'/login',
    element:<Login />
  },
  {
    path:'/signup',
    element:<Signup />
  },
  // {
  //   path: "/browse",
  //   element: <Browse />
  // },
])

function App() {

  return (
    <div>
    <RouterProvider router={appRouter} />
    </div>
  )
}

export default App
