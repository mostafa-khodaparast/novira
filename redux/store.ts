import { configureStore } from "@reduxjs/toolkit"
import ecommerce from "./ecommerceSlice"
import login from "./loginSlice"
import { useSelector, TypedUseSelectorHook } from 'react-redux'


export const store = configureStore({
    reducer: {
        ecommerce,
        login
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector