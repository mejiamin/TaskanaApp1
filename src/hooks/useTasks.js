import { useCallback, useMemo, useState } from "react"
import { generateId } from '@/utils'

export const useTasks = () => {
  const [tasks, setTasks] = useState([])
  const [sortType, setSortType] = useState('createdAt')

  const sortedTasks = useMemo(() => {
    return tasks
      .slice().sort((a, b) => {
        switch (sortType) {
          case 'priorityAt':
            return a.priority - b.priority
          case 'priority':
            return b.priority - a.priority
          case 'az':
            return a.title.localeCompare(b.title)
          case 'za':
            return b.title.localeCompare(a.title)
          case 'updatedAt':
            return new Date(b.updatedAt) - new Date(a.updatedAt)
          case 'updated':
            return new Date(a.updatedAt) - new Date(b.updatedAt)
          case 'created':
            return new Date(a.createdAt) - new Date(b.createdAt)
          case 'createdAt':
          default:
            return new Date(b.createdAt) - new Date(a.createdAt)
        }
      })
  }, [tasks, sortType])

  const addTask = useCallback((title, priority) => {
    const now = new Date().toISOString()
    setTasks(prev => [
      ...prev,
      {
        id: generateId(),
        title,
        priority,
        completed: false,
        createdAt: now,
        updatedAt: now
      }
    ])
  }, [])

  const updateTask = useCallback((id, updatedFields) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? { ...task, ...updatedFields, updatedAt: new Date().toISOString() }
          : task
      )
    )
  }, [])

  const toggleTask = useCallback((id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? {
            ...task,
            completed: !task.completed,
          }
          : task
      )
    )
  }, [])

  const deleteTask = useCallback((id) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }, [])

  return {
    tasks: sortedTasks,
    setSortType,
    addTask,
    updateTask,
    toggleTask,
    deleteTask,
  }
}
