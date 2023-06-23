import { createSlice } from "@reduxjs/toolkit";


const getCarSlice = createSlice({
    name:"getCar",
    initialState : {
        id: null
        
    },

    reducers: {
        getCarDetail (state , action) {
            state.id = action.payload
        },

        createOrder ( state, action) {
            state.id = action.payload
        }


    },
})  


export const  { getCarDetail , createOrder } = getCarSlice.actions

export default getCarSlice.reducer