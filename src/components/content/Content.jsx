import { NavBar, SideBar, TaskEditor } from '@/components'
import styles from './content.module.css'

export const Content = ({ children }) => {
  return (
    <main className={styles.content}>
      <NavBar />
      {children}
      <SideBar />
      <TaskEditor />
    </main>
  )
}
