import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    foods: [],
    food : null ,
    docId : 0 , 
    searchFood : [] , 
}
const foodSlice = createSlice({
    name: 'food',
    initialState,
    reducers: {
        requestFood: (state, action) => {
            state.loading = true
        },
        getFood: (state, action) => {
            state.loading = false
            state.foods = action.payload
        },
        requestOneFood : (state , action) => {
            state.loading =true
        },
        getOneFood : (state ,action )=>{
            state.loading = false 
            state.food = action.payload
        },
        setFoodDocId : (state , action ) => {
            state.docId = action.payload
        },
        searchFood : (state , action ) =>{
            state.loading = true 
        } ,
        getSearchFood : (state , action) =>{
            state.loading = false;
            state.searchFood = action.payload
        }

    },
})
export const {requestFood , getFood ,requestOneFood ,getOneFood , setFoodDocId ,searchFood ,getSearchFood} = foodSlice.actions
export default foodSlice.reducer