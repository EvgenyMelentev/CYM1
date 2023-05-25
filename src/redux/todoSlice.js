import { createSlice } from "@reduxjs/toolkit";

const toSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            name:'',
            login: '',
            password:''
        }
    },
    reducers: {
        addData(state, action){
            state.user ={
                name: action.payload.name,
                login: action.payload.login,
                password: action.payload.password
            }
        },
        removeData(state, action){

        },

    },

})

export const {addData,removeData} = toSlice.actions;

export default toSlice.reducer;