import { LoginProps } from "@/types"
import { createSlice } from "@reduxjs/toolkit"


const initialState: LoginProps = {
    isAuthenticated: false,
    token: ''
}



const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        }
    },
})

export const { login, logout } = loginSlice.actions
export default loginSlice.reducer