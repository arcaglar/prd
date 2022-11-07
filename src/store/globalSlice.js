import { createSlice } from '@reduxjs/toolkit'

export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    isSidepanelVisibility: false
  },
  reducers: {
    setSidepanelVisibility: (state, action) => {
      state.isSidepanelVisibility = action.payload
    },
  },
})

export const { setSidepanelVisibility } = globalSlice.actions

export default globalSlice.reducer