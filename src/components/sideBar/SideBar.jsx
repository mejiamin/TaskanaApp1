import { Statistic } from "@/components"
import { useTaskUI } from "@/context"
import styles from "./sideBar.module.css"

export const SideBar = () => {
  const { isEditorOpen } = useTaskUI()
  return (
    <aside className={`${styles.sideBar} ${isEditorOpen ? styles.hidden : ''}`}>
      <div className={styles.wrapper}>
        <Statistic />
      </div>
    </aside >
  )
}
