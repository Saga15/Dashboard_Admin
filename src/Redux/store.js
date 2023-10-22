import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice"
import userDetailSlice from "./userDetailSlice";


export default configureStore({
    reducer:{
        post:userSlice,
        user:userDetailSlice
    }

})