import { configureStore, createSlice } from "@reduxjs/toolkit";
import counterSlice from '../reducer/Reducer';
import loginSlice  from "../reducer/Userslice";
import contentSlice from "../reducer/Cardslice";

export default configureStore({
    reducer:{
        counter:counterSlice,
        user:loginSlice,
        content:contentSlice,

    },
})