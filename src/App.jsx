import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './componts/home/home'
import { Register } from './componts/registe/register'
import { Navbar } from './componts/nav/nav'
import { createBrowserRouter } from 'react-router-dom'
import {  RouterProvider } from 'react-router-dom'
import { Layout } from './componts/Layout/Layout'
import { Cart } from './componts/Cart/Cart'
import { Error } from './componts/Error/Error'
import { Brands } from './componts/Brands/Brands'
import { Login } from './componts/Login/Login'
import { AuthcontextProvider } from './context/athoucontext'
import { Authcontext } from './context/athoucontext'
import { Guard } from './componts/Guard/Guard'
import { Catigories } from './componts/Catigories/catigories'
import { AuthGuard } from './componts/AuthGuard/AuthGuard'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ProductDetils } from './componts/productDetils/productDetils'
import { CartContextProvider } from './context/Cartcontext'
import { Order } from './componts/Order/Order'
import { AllOrders } from './componts/AllOrders/AllOrders'
import { Toaster } from 'react-hot-toast'
import { ForgetPassword } from './componts/ForgetPassword/ForgetPassword'
import { Verify } from './componts/Verify/Verify'
import { Newpass } from './componts/Newpass/Newpass'
import { WishList } from './componts/WishList/WishList'

const queryClient = new QueryClient()

const routes= createBrowserRouter([
  { path: '', element: <Layout />, children: [
    { index: true, element:  <Home />},
    { path: 'home', element:  <Home /> },
    { path: 'forget', element: <AuthGuard> <ForgetPassword /></AuthGuard>  },
    { path: 'detils/:id', element:  <ProductDetils /> },
    { path: 'register', element:<AuthGuard><Register /></AuthGuard>  },
    { path: 'cart', element:  <Guard><Cart /></Guard>  },
    { path: 'wishlist', element:  <Guard><WishList /></Guard>  },

    { path: 'login', element: <AuthGuard><Login/></AuthGuard>  },
    { path: 'verify', element: <AuthGuard><Verify/></AuthGuard>  },
    { path: 'newpassword', element: <AuthGuard><Newpass/></AuthGuard>  },

    { path: 'brands', element:  <Guard><Brands /></Guard>  },
    { path: 'allorders', element:  <Guard><AllOrders /></Guard>  },
    { path: 'order', element:  <Guard><Order /></Guard>  },

    { path: 'catigories', element:  <Guard><Catigories /></Guard>  },
    { path: '*', element: <Error /> }
  ]}
])
function App() {
  const [count, setCount] = useState(0)





  return (
    <>
    <AuthcontextProvider>
      <CartContextProvider>


      <QueryClientProvider client={queryClient}>
             <RouterProvider router={routes}/>
<Toaster/>
      </QueryClientProvider>
        
      </CartContextProvider>
    </AuthcontextProvider>

    </>
  )
}

export default App
