import { createContext, useContext } from 'react'

export const TaskDataContext = createContext(null)
export const TaskUIContext = createContext(null)

export const useTaskData = () => useContext(TaskDataContext)
export const useTaskUI = () => useContext(TaskUIContext)
