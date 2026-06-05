import { Icon } from "@/components"
import styles from "./navBar.module.css"

export const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul className={`${styles.navItems} md-semibold`}>
        <li className={styles.navItem}>
          <a
            href="#"
            className={`${styles.navLink} shadow-base`}
            aria-label="Входящие"
          >
            <Icon name="inbox" />
            <p>Входящие</p>
          </a>
        </li>
      </ul>
    </nav >
  )
}
