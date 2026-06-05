import { Icon } from '@/components'
import styles from './themeSwitcher.module.css'

export const ThemeSwitcher = ({ theme = "light", onToggle }) => {

  const handleOnKeyDown = e => {
    if (e.key === ' ') {
      e.preventDefault()
    }
    if (e.key === 'Enter') {
      e.preventDefault()
      onToggle()
    }
  }

  return (
    <div className={styles.themeSwitcher}>
      <input
        type="checkbox"
        id="theme-switcher"
        className={styles.input}
        checked={theme === "dark"}
        onChange={onToggle}
        aria-label="Переключить тему"
        onKeyDown={handleOnKeyDown}
      />
      <label htmlFor="theme-switcher" className={styles.label}>
        <Icon name="sun" className={styles.sun} />
        <span className={styles.thumb} />
        <Icon name="moon" className={styles.moon} />
      </label>
    </div>
  )
}
