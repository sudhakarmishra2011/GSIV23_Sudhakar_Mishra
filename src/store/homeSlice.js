import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
  name: 'home',
  initialState : {
    data : {},
    oldData : {},
  },
  reducers: {
    getApiConfiguration : (state,action) =>{
        state.data = action.payload
    },
    updateState : (state,action) =>{
      state.data = [...state.data, action.payload]
    },
  }
})

export const { getApiConfiguration, updateState } = homeSlice.actions

export default homeSlice.reducer