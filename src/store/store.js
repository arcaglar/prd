import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './taskSlice'
import globalReducer from './globalSlice'

export default configureStore({
  reducer: {
    task: taskReducer,
    global: globalReducer
  },
})