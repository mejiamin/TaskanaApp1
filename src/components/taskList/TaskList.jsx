import { TaskItem, EmptyState } from '@/components'
import { useTaskData } from '@/context'
import styles from './taskList.module.css'

export const TaskList = () => {
  const { tasks } = useTaskData()

  return (
    <div className={styles.taskList}>
      {tasks.length > 0 ? (
        <TaskItem />
      ) : (
        <EmptyState />
      )}
    </div>
  )
}
