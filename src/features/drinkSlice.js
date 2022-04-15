import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    drinks :[] , 
    docId  : null , 
}
const drinkSlice = createSlice({
    name  : 'drink' ,
    initialState  ,
    reducers : {
        requestDrink :(state,action)=>{
            state.loading = true
        },
        getDrink : (state ,action)=>{
            state.loading =  false 
            state.drinks = action.payload
        },
        setDocId : (state , action )=>{
            state.docId = action.payload
        }
    }

})
export const  {requestDrink , getDrink ,setDocId} = drinkSlice.actions
export default  drinkSlice.reducer