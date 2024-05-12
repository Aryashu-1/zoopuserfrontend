import React from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import RootLayout from "./Components/RootLayout/RootLayout"
import HomePage from "./Pages/HomePage/HomePage"
import SignupPage from "./Pages/SignupPage/SignupPage"
import SigninPage from "./Pages/SigninPage/SigninPage"
import CanteenCataloguePage from "./Pages/CanteenCataloguePage/CanteenCataloguePage"
import CartPage from "./Pages/CartPage/CartPage"
import ProfilePage from "./Pages/ProfilePage/ProfilePage"
import OrdersPage from "./Pages/OrdersPage/OrdersPage"
import Bill from "./Components/Bill/Bill"
import OrderCard from "./Components/OrderCard/OrderCard"

function App() {

  const router = createBrowserRouter([
    {
      path:'',
      element:<RootLayout/>,
      children:[
        {
          path:'',
          element:<HomePage/>
        },
        {
          path:'/signup',
          element:<SignupPage/>
        },
        {
          path:'/signin',
          element: <SigninPage/>
        },
        {
          path:'/store/:storeid',
          element:<CanteenCataloguePage/>
        },
        {
          path:'/cart',
          element:<CartPage/>,
          
        },
        {
          path:'cart/:cartid',
                element:<Bill/>
        },
        {
          path:'/profile',
          element:<ProfilePage/>
        },
        {
          path:'/orders',
          element:<OrdersPage/>
        },
        {
          path:'/orders/:orderid',
          element:<OrderCard/>
        }
      ]
    }
  ])


  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
