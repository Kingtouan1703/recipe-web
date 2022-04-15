import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    img: [],
}

const slideSlice = createSlice({
    name: 'slide',
    initialState,
    reducers: {
        fetchImg: (state, action) => {
            state.loading = true
        },
        getImg: (state, action) => {
            state.loading = false
            state.img = action.payload
        }
    },
})

export const { fetchImg } = slideSlice.actions
export default slideSlice