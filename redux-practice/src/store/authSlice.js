import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
    userAuth: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {
        logIn(state){
            state.userAuth = true
        },
        logOut(state){
            state.userAuth = false
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;