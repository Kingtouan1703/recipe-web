import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    drinkId: 0,
    mealId: 0,
}
const roomSlice =createSlice({
    name :'room' , 
    initialState , 
    reducers : {
        setDrinkId : (state,action)=>{
            state.drinkId = action.payload
        },
        setMealId: (state,action)=>{
            state.drinkId = action.payload
        }
    }
})

export const {setDrinkId , setMealId } = roomSlice.actions 
export default roomSlice.reducer
