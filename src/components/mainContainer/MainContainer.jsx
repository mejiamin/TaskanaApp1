import styles from './mainContainer.module.css'

export const MainContainer = ({ children, labelledBy }) => {
  return (
    <article className={styles.mainContainer} aria-labelledby={labelledBy}>
      {children}
    </article>
  )
}
