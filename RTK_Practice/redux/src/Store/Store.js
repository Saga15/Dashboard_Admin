
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlices"
const Store = configureStore({
reducer:{
    sagar:cartReducer
}
})

export default Store