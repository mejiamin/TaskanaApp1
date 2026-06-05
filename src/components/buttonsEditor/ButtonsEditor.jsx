import { Button, Icon } from '@/components'
import { useTaskData, useTaskUI } from '@/context'
import { useEffect } from 'react'
import styles from './buttonsEditor.module.css'

export const ButtonsEditor = ({ onHandleClose, isDirty, onPriority }) => {
  const { deleteTask } = useTaskData()
  const { editingTask, isEditorOpen } = useTaskUI()

  useEffect(() => {
    if (!isEditorOpen) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onHandleClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isEditorOpen, onHandleClose])


  useEffect(() => {
    if (editingTask) onPriority(editingTask.priority)
  }, [editingTask, onPriority])

  return (
    <footer className={styles.buttons}>
      <Button
        type="submit"
        text={editingTask ? 'Сохранить' : 'Создать'}
        disabled={!isDirty}
        className={`${styles.createBtn} ${editingTask ? styles.saveBtn : ''} shadow-sm lg-semibold`}
        loading={styles.createLoading}
        spin={styles.createSpin}
      />
      <Button
        text="Отмена"
        disabled={!isEditorOpen}
        className={`${styles.cancelBtn} shadow-sm lg-semibold`}
        loading={styles.cancelLoading}
        spin={styles.cancelSpin}
        onClick={onHandleClose}
      />
      {editingTask && (
        <Button
          text={<Icon name="trash" />}
          className={`${styles.trashBtn} shadow-sm`}
          loading={styles.trashLoading}
          spin={styles.trashSpin}
          onClick={() => {
            deleteTask(editingTask.id)
            onHandleClose()
          }}
        />
      )}
    </footer>
  )
}
