import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainRoute from './Components/MainRoute/MainRoute.jsx';
import Shop from './Components/Shop/Shop.jsx';
import NotFound from './Components/NotFound/NotFound.jsx';
import Register from './Components/Register/Register.jsx';
import LogIn from './Components/LogIn/LogIn.jsx';
import WishList from './Components/WishList/WishList.jsx';
import Cart from './Components/Cart/Cart.jsx';
import CheckOut from './Components/CheckOut/CheckOut.jsx';
import Profile from './Components/Profile/Profile.jsx';
import Details from './Components/Details/Details.jsx';
import CategoryProduct from './Components/CategoryProduct/CategoryProduct.jsx';
import { store } from './Redux/store.js'
import { Provider } from 'react-redux'
import SearchedProduct from './Components/SeachedProduct/SearchedProduct.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainRoute,
    children: [
      { index: true, Component: App },
      { path:'Shop' , Component: Shop },
      { path:'*' , Component: NotFound },
      { path:'Register' , Component: Register },
      { path:'LogIn' , Component: LogIn },
      { path:'WishList' , Component: WishList },
      { path:'Cart' , Component:Cart },
      { path:'CheckOut' , Component:CheckOut },
      { path:'Profile' , Component:Profile },
      { path:'Details/:id' , Component:Details },
      { path:'products/categories/:slug' , Component:CategoryProduct  },
      { path:'searched/products/:keyword', Component:SearchedProduct },
      
      
    ],
  },
]);

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
          <RouterProvider router={router} />,
    </Provider>
 
)
