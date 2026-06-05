import { useCallback, useState } from "react"

export const useTaskEditor = () => {
  const [isEditorOpen, setIsEditorOpen] = useState(false)
  const [editingTask, setEditingTask] = useState(null)

  const startCreate = useCallback(() => {
    setEditingTask(null)
    setIsEditorOpen(true)
  }, [])

  const onOpen = useCallback(() => {
    setIsEditorOpen(true)
  }, [])

  const onClose = useCallback(() => {
    setIsEditorOpen(false)
  }, [])

  const startEdit = useCallback((task) => {
    setEditingTask(task)
    setIsEditorOpen(true)
  }, [])

  const stopEdit = useCallback(() => {
    setEditingTask(null)
    setIsEditorOpen(false)
  }, [])

  return {
    isEditorOpen,
    setIsEditorOpen,
    editingTask,
    startCreate,
    onOpen,
    onClose,
    startEdit,
    stopEdit,
  }
}
