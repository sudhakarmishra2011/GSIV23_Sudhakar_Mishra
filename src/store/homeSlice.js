import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
  name: 'home',
  initialState : {
    data : {},
  },
  reducers: {
    getApiConfiguration : (state,action) =>{
        state.data = action.payload
    }
  }
})

export const { getApiConfiguration } = homeSlice.actions

export default homeSlice.reducer