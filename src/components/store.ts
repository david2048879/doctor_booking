import { configureStore } from "@reduxjs/toolkit";
import { type } from "@testing-library/user-event/dist/type";
import { stat } from "fs";
import doctors from './doctor.slice'

const store = configureStore({
    reducer:{
        doctors
    }
})

export type RootState = ReturnType<typeof store.getState>
export default store;