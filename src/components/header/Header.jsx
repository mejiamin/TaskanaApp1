import { Logo, Button, ThemeSwitcher } from '@/components'
import { useTheme, useTaskUI } from '@/context'
import styles from './header.module.css'

export const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const { startCreate } = useTaskUI()
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.headerRight}>
        <Button
          icon='plus'
          text='Создать'
          onClick={startCreate}
          className={`${styles.headerBtn} md-semibold`}
          loading={styles.headerLoading}
          spin={styles.headerSpin}
        />
        <ThemeSwitcher theme={theme} onToggle={toggleTheme} />
      </div>
    </header>
  )
}
