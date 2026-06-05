import styles from './footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className='md-regular'>
        Проект выполнен в рамках стажировки&nbsp;
        <a
          href="https://preax.ru/"
          target='_blank'
          rel="noopener noreferrer"
        >
          PREAX
        </a>
      </p>
    </footer>
  )
}
