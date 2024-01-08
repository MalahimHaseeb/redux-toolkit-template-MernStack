import { createSlice } from "@reduxjs/toolkit";
import { clearAllUsers } from "../actions/actions";

const userSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state , action){
            state.push(action.payload)
            // console.log(action.payload)
        },
        removeUser(state,action) {
            // state.pop(action.payload) //similar method to delete data
            state.splice(action.payload , 1)
        },
        // clearAllUsers(state,action) {
        //     state.splice(action.payload)
        //     // return [] //similar method
        // }
    },
    // if action is called by multiple users then use below method
    extraReducers(builder){
        builder.addCase(clearAllUsers, () =>{
            return [];
        })
        // builder.addCase(userSlice.actions.clearAllUsers, () =>{
        //     return [];
        // })
    }
})

// console.log(userSlice.actions) //get action creators



export default userSlice.reducer ;
export const  { addUser, removeUser } = userSlice.actions;
// export const  { addUser, removeUser ,clearAllUsers} = userSlice.actions;