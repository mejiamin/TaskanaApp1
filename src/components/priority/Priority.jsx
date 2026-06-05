import { Icon } from '@/components'
import { useTaskUI } from '@/context'
import styles from './priority.module.css'
import { useEffect } from 'react'

const priorityOptions = [
  {
    id: 1,
    icon: 'minus',
    label: 'Низкий приоритет',
    className: styles.minus,
  },
  {
    id: 2,
    icon: 'chevronTop',
    label: 'Средний приоритет',
    className: styles.chevronTop,
  },
  {
    id: 3,
    icon: 'arrowTwo',
    label: 'Высокий приоритет',
    className: styles.arrowTwo,
  },
]

export const Priority = ({ priority, onPriority }) => {
  const { isEditorOpen, editingTask } = useTaskUI()

  const handleOnKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault()
      e.currentTarget.click()
    }
    if (e.key === ' ') {
      e.preventDefault()
    }
  }

  useEffect(() => {
    if (!isEditorOpen) return

    if (editingTask) {
      onPriority(editingTask.priority)
    } else {
      onPriority(1)
    }
  }, [editingTask, isEditorOpen, onPriority])

  return (
    <div className={styles.priority}>
      <h3 className='heading-h3'>Приоритет</h3>
      <div className={styles.icons}>
        {priorityOptions.map(({ id, icon, label, className }) => (
          <button
            key={id}
            type="button"
            className={`${styles.icon} ${className} ${priority === id ? styles.active : ''}`}
            onClick={() => onPriority(id)}
            onKeyDown={handleOnKeyDown}
            disabled={!isEditorOpen}
            aria-label={label}
            aria-pressed={priority === id}
          >
            <Icon name={icon} />
          </button>
        ))}
      </div>
    </div>
  )
}
