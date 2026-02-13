import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './Slice/cartSlice.jsx'
import Cart from '../Components/Cart/Cart'
export const store = configureStore({
  reducer: {
    cart:cartReducer,
  },
})