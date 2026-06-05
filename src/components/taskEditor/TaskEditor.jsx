import { useCallback, useEffect, useRef, useState } from 'react'
import { Priority, ButtonsEditor, TaskTitle } from '@/components'
import { useTaskData, useTaskUI } from '@/context'
import styles from './taskEditor.module.css'
import { useClickOutside } from '../../hooks/useClickOutside'

export const TaskEditor = () => {
  const { updateTask, addTask } = useTaskData()
  const { editingTask, stopEdit, isEditorOpen, setIsEditorOpen } = useTaskUI()

  const [value, setValue] = useState('')
  const [priority, setPriority] = useState(1)

  const inputRef = useRef(null)
  const editorRef = useRef(null)
  const trimmedValue = value.trim()

  const isDirty = editingTask
    ? (trimmedValue !== (editingTask.title || '').trim() || priority !== editingTask.priority)
    && trimmedValue.length > 0
    : trimmedValue.length > 0

  const handleSubmit = e => {
    e.preventDefault()
    if (!trimmedValue) return

    if (editingTask) {
      updateTask(editingTask.id, { title: trimmedValue, priority })
      stopEdit()
    } else {
      addTask(trimmedValue, priority)
      setIsEditorOpen(false)
    }
  }

  useEffect(() => {
    if (!isEditorOpen) return
    const timer = setTimeout(() => inputRef.current?.focus(), 200)
    return () => clearTimeout(timer)
  }, [isEditorOpen])

  const handleClose = useCallback(() => {
    stopEdit()
  }, [stopEdit])

  useClickOutside(editorRef, handleClose, isEditorOpen)

  return (
    <form
      ref={editorRef}
      className={`${styles.taskEditor} ${isEditorOpen ? styles.open : ''}`}
      onSubmit={handleSubmit}
      role='dialog'
      aria-modal='true'
      aria-labelledby='task-editor-title'
    >

      <div className={styles.wrapper}>
        <h2 id='task-editor-title' className='heading-h1'>
          {editingTask ? 'Редактирование' : 'Создание задачи'}
        </h2>
        <TaskTitle
          value={value}
          onValue={setValue}
          inputRef={inputRef}
        />

        <Priority
          priority={priority}
          onPriority={setPriority}
        />
      </div>

      <ButtonsEditor
        value={value}
        onHandleClose={handleClose}
        isDirty={isDirty}
        onPriority={setPriority}
      />

    </form>
  )
}
