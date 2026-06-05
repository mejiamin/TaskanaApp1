import { Icon } from '@/components'
import { useTaskUI } from '@/context'
import styles from './taskTitle.module.css'
import { useEffect } from 'react'

export const TaskTitle = ({ value, onValue, inputRef }) => {
  const { isEditorOpen, editingTask } = useTaskUI()

  useEffect(() => {
    if (!isEditorOpen) return

    if (editingTask) {
      onValue(editingTask.title)
    } else {
      onValue('')
    }
  }, [editingTask, isEditorOpen, onValue])

  return (
    <div className={styles.taskTitle}>

      <label htmlFor='task-title' className='heading-h3'>
        Название&nbsp;
        <span className={styles.star} aria-hidden='true'>*</span>
      </label>

      <input
        ref={inputRef}
        autoComplete="off"
        id='task-title'
        type="text"
        autoCorrect='off'
        placeholder='Название задачи'
        className='lg-regular'
        value={value}
        onChange={e => onValue(e.target.value)}
        required
      />

      {value && (
        <button
          type="button"
          className={styles.clearButton}
          onClick={() => {
            onValue('')
            inputRef.current?.focus()
          }}
          disabled={!isEditorOpen}
          aria-label="Очистить название задачи"
        >
          <Icon name="xMark" />
        </button>
      )}

    </div>
  )
}
