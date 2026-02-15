import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './Slice/cartSlice.jsx'
import authReducer from './Slice/authSlice.jsx'
import wishlist, { wishlistSlice } from './Slice/wishlistSlice.jsx'
import Cart from '../Components/Cart/Cart'
export const store = configureStore({
  reducer: {
    cart:cartReducer,
    auth:authReducer,
    wishlist:wishlist
   
  },
})