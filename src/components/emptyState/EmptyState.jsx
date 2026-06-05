import { Illustration } from '@/components'
import styles from './emptyState.module.css'

export const EmptyState = () => {
  return (
    <div className={styles.emptyState}>
      <h2 className='heading-h2'>
        Все твои задачи организованы как надо
      </h2>
      <p className='lg-regular'>
        Отличная работа! Ты большой молодец!
      </p>
      <Illustration name='emptyTask' />
    </div>
  )
}
