import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    tasks: [
      {
         id: "1",
         name: "Being able to rename and edit users rename and edit users lorem ",
         priority: "High",
         estimation: 8
      },
      {
        id: "2",
        name: "Lorem ipsum dolor sit amet",
        priority: "Low",
        estimation: 12
      },
      {
        id: "3",
        name: "Test task",
        priority: "Medium",
        estimation: 1
      }
   ]
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload)
    },
  },
})

export const { addTask } = taskSlice.actions

export default taskSlice.reducer