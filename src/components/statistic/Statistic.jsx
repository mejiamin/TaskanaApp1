import { Illustration } from '@/components'
import styles from "./statistic.module.css"

export const Statistic = () => {
  return (
    <div className={styles.statistic}>
      <Illustration name="notebook" />
      <p className="md-regular">Здесь мы поможем тебе управлять твоими задачами, отслеживать статистику и самочувствие.</p>
    </div>
  )
}
