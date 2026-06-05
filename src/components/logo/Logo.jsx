import { Illustration } from '@/components'
import styles from './logo.module.css'

export const Logo = () => {
  return (
    <a href='#' aria-label='На главную страницу' className={styles.logo}>
      <Illustration name="logo" />
    </a>
  )
}
