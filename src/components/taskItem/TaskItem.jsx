import { Icon, Button } from '@/components'
import { useTaskData, useTaskUI } from '@/context'
import styles from './taskItem.module.css'

export const TaskItem = () => {
  const { tasks, toggleTask } = useTaskData()
  const { startEdit, editingTask } = useTaskUI()

  const handleOnKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault()
      e.currentTarget.click()
    }
    if (e.key === ' ') {
      e.preventDefault()
    }
  }

  const priorityMap = {
    1: 'низкий',
    2: 'средний',
    3: 'высокий',
  }

  return (
    <ul className={styles.taskItems}>
      {tasks.map((task) => {
        const isEditing = editingTask?.id === task.id
        return (
          <li
            key={task.id}
            className={`${styles.taskItem} ${isEditing ? styles.editing : ''}`}
          >
            <label
              htmlFor={task.id}
              className={`${styles.label} shadow-sm-focus`}
              tabIndex={0}
            >
              <input
                id={task.id}
                type="checkbox"
                tabIndex={0}
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                onKeyDown={handleOnKeyDown}
                className={`${styles.checkbox} ${styles[`priority-${task.priority}`]}`}
                aria-label={`Задача "${task.title}", приоритет ${priorityMap[task.priority]}`}
              />
              <span>{task.title}</span>
              <Button
                text={<Icon name='edit' />}
                className={`${styles.editorBtn} shadow-sm`}
                loading={styles.editorLoading}
                spin={styles.editorSpin}
                onClick={() => startEdit(task)}
                ariaLabel={`Редактировать задачу "${task.title}"`}
              />
            </label>
          </li>
        )
      })}
    </ul>
  )
}
